import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Collections
const CONSULTATIONS_COLLECTION = "consultations";

// Consultation Services
export const addConsultation = async (consultationData) => {
  try {
    const docRef = await addDoc(collection(db, CONSULTATIONS_COLLECTION), {
      ...consultationData,
      createdAt: serverTimestamp(),
      status: "pending",
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding consultation:", error);
    return { success: false, error: error.message };
  }
};

export const getConsultations = async () => {
  try {
    const q = query(
      collection(db, CONSULTATIONS_COLLECTION),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);
    const consultations = [];
    querySnapshot.forEach((doc) => {
      consultations.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: consultations };
  } catch (error) {
    console.error("Error getting consultations:", error);
    return { success: false, error: error.message };
  }
};

export const updateConsultationStatus = async (id, status) => {
  try {
    const docRef = doc(db, CONSULTATIONS_COLLECTION, id);
    await updateDoc(docRef, { status, updatedAt: serverTimestamp() });
    return { success: true };
  } catch (error) {
    console.error("Error updating consultation:", error);
    return { success: false, error: error.message };
  }
};

export const deleteConsultation = async (id) => {
  try {
    await deleteDoc(doc(db, CONSULTATIONS_COLLECTION, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting consultation:", error);
    return { success: false, error: error.message };
  }
};
