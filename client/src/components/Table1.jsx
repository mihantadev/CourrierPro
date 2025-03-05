import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sortie from "./Sortie"
// import axios from "axios";
import {
  faDownload,
  faEdit,
  faTrashAlt,
  faAdd,
  faShareAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";

const Table1 = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      let result = await fetch("http://localhost:5000/products");
      result = await result.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // ************************************************
  // *********************************************************
  // Modification pour affectation
  const affecterProduit = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/transfer/${id}`, {
        method: "POST",
      });

      if (response.ok) {
        alert("Produit affecté avec succès !");
        getProduct(); // Rafraîchir les données de table1
      } else {
        alert("Erreur lors du transfert du produit");
      }
    } catch (error) {
      console.error("Erreur lors de l'affectation :", error);
    }
  };

  // *********************************
  // *******************************

  console.warn(products);
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      try {
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json();
        setProducts(result);
      } catch (error) {
        console.error("Error searching products:", error);
      }
    } else {
      getProduct();
    }
  };

  const deleteProduct = async (id) => {
    try {
      let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      });

      if (result.ok) {
        getProduct();
      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the product:", error);
    }
  };

  const viewPdf = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products/${productId}/pdf`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      // Ouvrir le PDF dans un nouvel onglet
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  return (
    <div className="table1">
      <div className="transparentTable">
        <div className="containerTable">
          <div className="table1-home">
            <div className="sidebar">
              <div className="logotable">
                <div className="logo11">
                  <img src={logos} alt="Logo" />
                  <div>
                    <img src={logo2} alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="lien">
                <a href="/" className="lien1">
                  SECRETAIRE GENERAL
                </a>
                
                {/* <hr /> */}
                <Link to="/Sortie" className="lien2">
                  BOITE DE RECEPTION
                </Link>
              </div>
            </div>
            <div className="table11">
              <div className="btns">
                <div>
                  <input
                    className="shadow p-2"
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Rechercher"
                    onChange={searchHandle}
                  />
                </div>
                <div>
                  <button className="notif">
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                  <Link to={"/Ajout"}>
                    <button className="ajouter">
                      <FontAwesomeIcon icon={faAdd} />
                    </button>
                  </Link>
                  <Link to={"/Form1"}>
                    <button className="deconnexion">Déconnexion</button>
                  </Link>
                </div>
              </div>
              <div className="table-responsive m-2">
                <table className="table table-scroll">
                  <thead>
                    <tr className="rounded-top">
                      <th className="p-3">Référence</th>
                      <th>Objet</th>
                      <th>Contenu</th>
                      <th>Date de réception</th>
                      <th>Date d'ajout</th>
                      <th>Expéditeur</th>
                      <th></th>
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
                          <td>{item.dateDajout}</td>
                          <td>{item.ExpedDest}</td>
                          <td className="tdLink">
                            {/* <FontAwesomeIcon
                              className="icon"
                              icon={faTrashAlt}
                              onClick={() => deleteProduct(item._id)}
                            />
                            <Link to={`/Edite/${item._id}`}>
                              <FontAwesomeIcon className="icon" icon={faEdit} />
                            </Link> */}

                            {/* <Link to={`/share/${item._id}`}>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                              >
                                Affecter
                              </button>
                            </Link> */}
                            {/* ***************************modification 10/11/2024 */}
                            <td className="tdLink">
                              <FontAwesomeIcon
                                className="icon"
                                icon={faTrashAlt}
                                onClick={() => deleteProduct(item._id)}
                              />
                              <Link to={`/Edite/${item._id}`}>
                                <FontAwesomeIcon
                                  className="icon"
                                  icon={faEdit}
                                />
                              </Link>

                              <Link to="#">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() => affecterProduit(item._id)}
                                >
                                  Affecter
                                </button>
                              </Link>
                            </td>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8">Aucun produit trouvé</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;

// .table-container {
//   overflow-x: auto; /* Activer le défilement horizontal si nécessaire */
// }

// table {
//   width: 100%; /* Assurer que le tableau prend toute la largeur */
//   border-collapse: collapse; /* Fusionner les bordures pour un aspect propre */
// }

// td {
//   padding: 8px; /* Espacement intérieur des cellules */
//   border: 1px solid #ccc; /* Bordure pour les cellules */
//   overflow: hidden; /* Cacher le débordement */
//   text-overflow: ellipsis; /* Afficher '...' pour les textes trop longs */
//   white-space: nowrap; /* Empêcher le texte de se mettre à la ligne */
// }
