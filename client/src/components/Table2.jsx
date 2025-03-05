
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDownload,
//   faEdit,
//   faTrashAlt,
//   faAdd,
//   faRemove,
//   faBell,
// } from "@fortawesome/free-solid-svg-icons";

// // Ajoutez ces lignes pour importer Worker et Viewer
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";


// import logos from "../images/logo1.png";
// import logo2 from "../images/logo2.png";

// const Table2 = () => {
//   const [products1, setProducts1] = useState([]);
//   const [selectedPdf, setSelectedPdf] = useState(null);


//   const viewPdf = async (product1Id) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/products1/${product1Id}/pdf`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch PDF");
//       }
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(
//         new Blob([blob], { type: "application/pdf" })
//       );
//       const pdfWindow = window.open();
//       pdfWindow.location.href = url;
//     } catch (error) {
//       console.error("Error fetching PDF:", error);
//     }
//   };

//   useEffect(() => {
//     getProduct1();
//   }, []);

//   const getProduct1 = async () => {
//     let result = await fetch("http://localhost:5000/products1");
//     result = await result.json();
//     setProducts1(result);
//   };

//   console.warn(products1);
// // ----------------delete
// const deleteProduct1 = async (id) => {
//   try {
//     let result = await fetch(`http://localhost:5000/product1/${id}`, {
//       method: "Delete",
//     });

//     if (result.ok) {
//       getProduct1();
//     } else {
//       console.error("Failed to delete product.");
//     }
//   } catch (error) {
//     console.error("An error occurred while deleting the product:", error);
//   }
// };
//   // search
//   const searchHandle = async (event) => {
//     let key = event.target.value;
//     if (key) {
//       let result = await fetch(`http://localhost:5000/search1/${key}`);
//       result = await result.json();
//       if (result) {
//         setProducts1(result);
//       }
//     } else {
//       getProduct1();
//     }
//   };
// // *******************
// // affectation
// const getProduct2 = async () => {
//   try {
//     let response = await fetch("http://localhost:5000/table2");
//     let data = await response.json();
//     setProducts1(data);
//   } catch (error) {
//     console.error(
//       "Erreur lors de la récupération des produits de Table2:",
//       error
//     );
//   }
// };

// // Appel lors du chargement du composant
// useEffect(() => {
//   getProduct2();
// }, []);

// // ********************

//   return (
//     <div className="table1">
//       <div className="transparentTable">
//         <div className="containerTable">
//           <div className="table1-home">
//             <div className="sidebar">
//               <div className="logotable">
//                 <div className="logo11">
//                   <img src={logos} alt="Logo" />
//                   <div>
//                     <img src={logo2} alt="Logo" />
//                   </div>
//                 </div>
//               </div>
//               <div className="lien">
//                 <a href="/" className="lien1">
//                   RESSOURCES HUMAINES
//                 </a>
//                 <Link to={"/Boite"} className="lien2">
//                   BOITE DE RECEPTION
//                 </Link>
//               </div>
//             </div>
//             <div className="table11">
//               <div className="btns">
//                 <div>
//                   <input
//                     className="shadow p-2 "
//                     id="search"
//                     name="search"
//                     type="search"
//                     placeholder="Rechercher"
//                     onChange={searchHandle}
//                   />
//                 </div>
//                 <div>
//                   <button className="notif">
//                     <FontAwesomeIcon icon={faBell} />
//                   </button>
//                   <Link to={"/Ajout1"}>
//                     <button className="ajouter">
//                       <FontAwesomeIcon icon={faAdd} />
//                     </button>
//                   </Link>
//                   <Link to={"/Form1"}>
//                     <button className="deconnexion">Déconnexion</button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="table-responsive m-2">
//                 <table className="table table-scroll">
//                   <thead>
//                     <tr className="rounded-top">
//                       <th className="p-3">Référence</th>
//                       <th>Objet</th>
//                       <th>Contenu</th>
//                       <th>Date de réception</th>
//                       <th>Date d'ajout</th>
//                       <th>Expéditeur</th>
//                       {/* <th>Nature</th> */}
//                       <th>Modification</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {products1.length > 0 ? (
//                       products1.map((item) => (
//                         <tr key={item._id}>
//                           <td>{item.reference}</td>
//                           <td>{item.objet}</td>
//                           <td>
//                             {item.fichier &&
//                             item.fichier.contentType === "application/pdf" ? (
//                               <button
//                                 className="btn btn-sm btn-outline-primary"
//                                 onClick={() => viewPdf(item._id)}
//                               >
//                                 Télécharger
//                               </button>
//                             ) : (
//                               "Non disponible"
//                             )}
//                           </td>
//                           <td>{item.dateDeReception}</td>
//                           <td>{item.dateDajout}</td>
//                           <td>{item.ExpedDest}</td>
//                           <td className="tdLink">
//                             <FontAwesomeIcon
//                               className="icon"
//                               icon={faTrashAlt}
//                               onClick={() => deleteProduct1(item._id)}
//                             />
//                             <Link to={`/Edite1/${item._id}`}>
//                               <FontAwesomeIcon className="icon" icon={faEdit} />
//                             </Link>

//                             <Link to={`/share/${item._id}`}>
//                               <button
//                                 type="button"
//                                 className="btn btn-sm btn-outline-primary"
//                               >
//                                 Affecter
//                               </button>
//                             </Link>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="8">Aucun produit trouvé</td>
//                       </tr>
//                     )}
//                   </tbody>
//                   {/* *******************************************modif 10/11/2024 */}
//                   {/* <tbody>
//                     {products1.length > 0 ? (
//                       products1.map((item) => (
//                         <tr key={item._id}>
//                           <td>{item.reference}</td>
//                           <td>{item.objet}</td>
//                           <td>
//                             {item.fichier &&
//                             item.fichier.contentType === "application/pdf" ? (
//                               <button
//                                 className="btn btn-sm btn-outline-primary"
//                                 onClick={() => viewPdf(item._id)}
//                               >
//                                 Télécharger
//                               </button>
//                             ) : (
//                               "Non disponible"
//                             )}
//                           </td>
//                           <td>{item.dateDeReception}</td>
//                           <td>{item.dateDajout}</td>
//                           <td>{item.ExpedDest}</td>
//                           <td className="tdLink">
//                             <FontAwesomeIcon
//                               className="icon"
//                               icon={faTrashAlt}
//                               onClick={() => deleteProduct1(item._id)}
//                             />
//                             <Link to={`/Edite1/${item._id}`}>
//                               <FontAwesomeIcon className="icon" icon={faEdit} />
//                             </Link>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="8">Aucun produit trouvé</td>
//                       </tr>
//                     )}
//                   </tbody> */}
//                 </table>
//               </div>

//               {selectedPdf && (
//                 <div style={{ height: "500px" }}>
//                   <Worker workerUrl="pdf.worker.min.js">
//                     <Viewer fileUrl={selectedPdf} />
//                   </Worker>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Table2;


// modification 11/11/2024

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEdit,
  faTrashAlt,
  faAdd,
  faRemove,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

// Ajoutez ces lignes pour importer Worker et Viewer
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";

const Table2 = () => {
  const [products1, setProducts1] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [notificationCount, setNotificationCount] = useState(3); // Nombre de notifications non lues

  // Définir l'URL du worker pour éviter l'erreur pdfjsVersion
  Worker.workerUrl =
    "https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js";

  // Demander la permission pour afficher des notifications
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        console.log(permission);
      });
    }
  }, []);

  const viewPdf = async (product1Id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products1/${product1Id}/pdf`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(
        new Blob([blob], { type: "application/pdf" })
      );
      const pdfWindow = window.open();
      pdfWindow.location.href = url;

      // Afficher une notification lorsque le PDF est téléchargé
      if (Notification.permission === "granted") {
        new Notification("PDF téléchargé avec succès!");
      }
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  useEffect(() => {
    getProduct1();
  }, []);

  const getProduct1 = async () => {
    let result = await fetch("http://localhost:5000/products1");
    result = await result.json();
    setProducts1(result);
  };

  const deleteProduct1 = async (id) => {
    try {
      let result = await fetch(`http://localhost:5000/product1/${id}`, {
        method: "Delete",
      });

      if (result.ok) {
        getProduct1();
      } else {
        console.error("Failed to delete product.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the product:", error);
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search1/${key}`);
      result = await result.json();
      if (result) {
        setProducts1(result);
      }
    } else {
      getProduct1();
    }
  };

  // Affectation
  const getProduct2 = async () => {
    try {
      let response = await fetch("http://localhost:5000/table2");
      let data = await response.json();
      setProducts1(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des produits de Table2:",
        error
      );
    }
  };

  useEffect(() => {
    getProduct2();
  }, []);

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
                  RESSOURCES HUMAINES
                </a>
                <Link to={"/Boite"} className="lien2">
                  BOITE DE RECEPTION
                </Link>
              </div>
            </div>
            <div className="table11">
              <div className="btns">
                <div>
                  <input
                    className="shadow p-2 "
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
                    {notificationCount > 0 && (
                      <span className="notification-badge">
                        {notificationCount}
                      </span>
                    )}
                  </button>
                  <Link to={"/Ajout1"}>
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
                      <th>Modification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products1.length > 0 ? (
                      products1.map((item) => (
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
                            <FontAwesomeIcon
                              className="icon"
                              icon={faTrashAlt}
                              onClick={() => deleteProduct1(item._id)}
                            />
                            <Link to={`/Edite1/${item._id}`}>
                              <FontAwesomeIcon className="icon" icon={faEdit} />
                            </Link>

                            <Link to={`/share/${item._id}`}>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                              >
                                Affecter
                              </button>
                            </Link>
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

              {selectedPdf && (
                <div style={{ height: "500px" }}>
                  <Worker workerUrl="pdf.worker.min.js">
                    <Viewer fileUrl={selectedPdf} />
                  </Worker>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table2;

