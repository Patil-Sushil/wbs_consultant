import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Initialize on module load
initEmailJS();

/**
 * Send confirmation email to customer
 * @param {Object} data - Customer data
 * @param {string} data.name - Customer name
 * @param {string} data.email - Customer email
 * @param {string} data.phone - Customer phone
 * @param {string} data.preferredDate - Preferred date
 * @param {string} data.message - Customer message
 * @returns {Promise<Object>} Result object with success status
 */
export const sendConsultationEmail = async (data) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    console.log("EmailJS Config:", { serviceId, templateId }); // Debug log

    if (!serviceId || !templateId) {
      console.warn("EmailJS not configured. Skipping email send.");
      return { success: false, error: "EmailJS not configured" };
    }

    const templateParams = {
      to_email: data.email, // Send to customer's email
      customer_name: data.name,
      customer_email: data.email,
      customer_phone: data.phone,
      preferred_date: data.preferredDate,
      message: data.message || "No additional message provided",
      booking_type: "Consultation",
    };

    console.log("Sending email with params:", templateParams); // Debug log

    const response = await emailjs.send(serviceId, templateId, templateParams);

    console.log("EmailJS Response:", response); // Debug log

    if (response.status === 200) {
      console.log("Email sent successfully!");
      return { success: true };
    } else {
      console.error("Email send failed:", response);
      return { success: false, error: "Failed to send email" };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Send scheduled call confirmation email to customer
 * @param {Object} data - Customer data
 * @param {string} data.name - Customer name
 * @param {string} data.email - Customer email
 * @param {string} data.phone - Customer phone
 * @param {string} data.callDate - Call date
 * @param {string} data.callTime - Call time
 * @param {string} data.topic - Call topic
 * @param {string} data.notes - Additional notes
 * @returns {Promise<Object>} Result object with success status
 */
export const sendScheduledCallEmail = async (data) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.warn("EmailJS not configured. Skipping email send.");
      return { success: false, error: "EmailJS not configured" };
    }

    const templateParams = {
      to_name: data.name,
      to_email: data.email,
      customer_name: data.name,
      customer_email: data.email,
      customer_phone: data.phone,
      preferred_date: `${data.callDate} at ${data.callTime}`,
      message: `Topic: ${data.topic}\n${data.notes || "No additional notes"}`,
      booking_type: "Scheduled Call",
    };

    const response = await emailjs.send(serviceId, templateId, templateParams);

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to send email" };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
