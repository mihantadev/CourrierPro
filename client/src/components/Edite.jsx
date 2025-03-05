import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";

const Edite = () => {
  const [reference, setReference] = useState("");
  const [dateDeReception, setDateDeReception] = useState("");
  const [dateDajout, setDateDajout] = useState("");
  const [ExpedDest, setExpedDest] = useState("");
  const [nature, setNature] = useState("");
  const [fichier, setFichier] = useState(null); // Initialisé à null
  const [objet, setObjet] = useState("");
  const [fichierUrl, setFichierUrl] = useState(""); // État pour l'URL du fichier PDF existant

  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      let result = await fetch(`http://localhost:5000/product/${params.id}`);
      result = await result.json();

      // Vérification si result.fichier est défini avant d'accéder à filename
      if (result.fichier && result.fichier.filename) {
        setFichierUrl(`http://localhost:5000/files/${result.fichier.filename}`);
      } else {
        console.error(
          "Le champ fichier.filename est indéfini dans la réponse."
        );
        // Gérer l'erreur ou affecter une valeur par défaut à setFichierUrl
      }

      // Mettre à jour les autres états
      setReference(result.reference);
      setDateDeReception(result.dateDeReception);
      setDateDajout(result.dateDajout);
      setExpedDest(result.ExpedDest);
      // setNature(result.nature);
      setObjet(result.objet);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du produit:",
        error
      );
      // Gérer l'erreur
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("reference", reference);
    formData.append("dateDeReception", dateDeReception);
    formData.append("dateDajout", dateDajout);
    formData.append("ExpedDest", ExpedDest);
    formData.append("objet", objet);

    if (fichier) {
      formData.append("fichier", fichier);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/product/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/Table1");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bodyajout">
      <div className="formajout">
        <div className="form">
          <div className="headerAjout">
            <div className="logotable">
              <div className="logo11">
                <img src={logos} alt="Logo 1" />
                <div>
                  <img src={logo2} alt="Logo 2" />
                </div>
              </div>
            </div>
            <div className="textAjout">
              <h1>Editer l'information de vos courrier!</h1>{" "}
            </div>
            <div className="deconnexionAjout">
              <Link to={"/Form1"}>
                <button className="deconnexion">deconnexion</button>
              </Link>
            </div>
          </div>

          <div className="container mt-4">
            <form onSubmit={updateProduct}>
              <div className="row row1">
                <div className="form-group col-md-6">
                  <label htmlFor="">Référence</label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="refer"
                    name="ref"
                    placeholder=""
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="">Expéditeur / Destinataire</label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="ex"
                    name="exp"
                    placeholder=""
                    value={ExpedDest}
                    onChange={(e) => setExpedDest(e.target.value)}
                  />
                </div>
                {/* <div className="form-group col-md-4"></div> */}
              </div>
              <div className="row row2 edite">
                <div className="col form-group col-md-6">
                  <label htmlFor="">Date de réception</label>
                  <input
                    className="form-control shadow-sm"
                    id="dtrec"
                    name="daterec"
                    type="date"
                    value={dateDeReception}
                    onChange={(e) => setDateDeReception(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="">Date d'ajout</label>
                  <input
                    className="form-control shadow-sm input"
                    id="dtaj"
                    name="dateaj"
                    type="date"
                    value={dateDajout}
                    onChange={(e) => setDateDajout(e.target.value)}
                  />
                </div>
              </div>
              <div className="row3 form-group">
                {/* <label>Pièce jointe actuelle : </label> */}
                {fichierUrl && (
                  <div>
                    <a
                      href={fichierUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le fichier actuel
                    </a>
                  </div>
                )}
                <input
                  type="file"
                  className="form-control shadow-sm"
                  id="aj"
                  name="fichier"
                  accept=".pdf, .doc, .docx"
                  placeholder="Remplacer le fichier actuel"
                  onChange={(e) => setFichier(e.target.files[0])}
                />
              </div>
              <div className=" row4 form-group">
                <label htmlFor="">Objet</label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  id="ob"
                  name="objet"
                  placeholder=""
                  value={objet}
                  onChange={(e) => setObjet(e.target.value)}
                />
              </div>
              <div className="form-group d-flex justify-content-between m-2">
                <Link to="/Table1">
                  <button type="button" className="btn btn-lg  btn-secondary">
                    <FontAwesomeIcon icon={faRemove} /> Annuler
                  </button>
                </Link>
                <button type="submit" className="btn btn-lg btn-primary">
                  <FontAwesomeIcon icon={faCheck} /> Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edite;
// ------------------------------------

