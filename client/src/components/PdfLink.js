// src/components/PdfLink.js
import React from "react";

const PdfLink = ({ pdfUrl }) => {
  return (
    <div>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        Ouvrir le PDF dans un nouvel onglet
      </a>
    </div>
  );
};

export default PdfLink;
