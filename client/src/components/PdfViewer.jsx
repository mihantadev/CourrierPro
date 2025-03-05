// src/components/PdfViewer.jsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Importer les styles des annotations

// Spécifiez l'URL du worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={prevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
      </div>
    </div>
  );
};

export default PdfViewer;
