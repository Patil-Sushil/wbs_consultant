import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import {
  updateConsultationStatus as updateConsultationStatusFirebase,
  deleteConsultation as deleteConsultationFirebase,
} from "../services/firebaseService";

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set session persistence (clears on browser close)
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        console.log(
          "Session persistence set - login will clear when browser closes",
        );
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });

    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setConsultations([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Real-time listener for consultations
    if (isAuthenticated) {
      const q = query(
        collection(db, "consultations"),
        orderBy("createdAt", "desc"),
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const consultationsData = [];
          snapshot.forEach((doc) => {
            consultationsData.push({ id: doc.id, ...doc.data() });
          });
          setConsultations(consultationsData);
        },
        (error) => {
          console.error("Error listening to consultations:", error);
        },
      );

      return () => unsubscribe();
    }
  }, [isAuthenticated]);

  const login = async (email, password) => {
    try {
      // Set session persistence before login
      await setPersistence(auth, browserSessionPersistence);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(userCredential.user);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error("Login error:", error);

      // Better error messages
      let errorMessage = "Login failed. Please try again.";
      if (error.code === "auth/invalid-credential") {
        errorMessage =
          "Invalid email or password. Please check your credentials.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email address.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address format.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed attempts. Please try again later.";
      }

      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
      setConsultations([]);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const updateConsultationStatus = async (id, status) => {
    const result = await updateConsultationStatusFirebase(id, status);
    return result;
  };

  const deleteConsultation = async (id) => {
    const result = await deleteConsultationFirebase(id);
    return result;
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        user,
        consultations,
        loading,
        login,
        logout,
        updateConsultationStatus,
        deleteConsultation,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
