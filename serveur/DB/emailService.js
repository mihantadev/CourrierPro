const nodemailer = require("nodemailer");

// Configurer le transporteur pour Gmail
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre-email@gmail.com", // Remplacez par votre adresse email
    pass: "votre-mot-de-passe-d-application", // Remplacez par le mot de passe d'application généré
  },
});

// Fonction pour envoyer un email de vérification
function sendVerificationEmail(userEmail, verificationToken) {
  const mailOptions = {
    from: "votre-email@gmail.com", // Remplacez par votre adresse email
    to: userEmail,
    subject: "Vérification de votre adresse email",
    text: `Cliquez sur ce lien pour vérifier votre adresse email : http://localhost:5000/verify-email?token=${verificationToken}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Erreur d'envoi d'email :", error);
    } else {
      console.log("Email envoyé : " + info.response);
    }
  });
}

module.exports = { sendVerificationEmail };
