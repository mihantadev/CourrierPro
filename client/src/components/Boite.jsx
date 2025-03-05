import React, { useEffect, useState } from "react";

function Boite() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await fetch("http://localhost:5000/products2");
      const data = await result.json();
      setProducts(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
    }
  };

  return (
    <div>
      <h1>Boîte de Réception</h1>
      <table>
        <thead>
          <tr>
            <th>Référence</th>
            <th>Objet</th>
            <th>Contenu</th>
            <th>Date de réception</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item) => (
              <tr key={item._id}>
                <td>{item.reference}</td>
                <td>{item.objet}</td>
                <td>
                  {item.fichier &&
                  item.fichier.contentType === "application/pdf" ? (
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => viewPdf(item._id)}
                    >
                      Télécharger
                    </button>
                  ) : (
                    "Non disponible"
                  )}
                </td>
                <td>{item.dateDeReception}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucun produit trouvé</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Boite;
