// services/contactOutService.js
const axios = require("axios");

const validateEmail = async (email) => {
  const apiKey = "PO7XzMykFxR5gg8PuSkmbBkE"; // Remplacez par votre clé API ContactOut
  const url = `https://api.contactout.com/v1/email-verification?key=${apiKey}&email=${encodeURIComponent(
    email
  )}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la vérification de l'email :", error);
    throw error;
  }
};

module.exports = validateEmail;
