import React, { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EmailVerificationPage() {
  const query = useQuery();
  const token = query.get("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`/api/verify-email?token=${token}`)
        .then((response) => {
          alert("Votre email a été vérifié avec succès !");
        })
        .catch((error) => {
          console.error("Erreur lors de la vérification", error);
        });
    }
  }, [token]);

  return (
    <div>
      <h1>Vérification de l'email</h1>
      <p>Vérification en cours...</p>
    </div>
  );
}

export default EmailVerificationPage;
