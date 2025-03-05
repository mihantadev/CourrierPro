import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import axios from "axios";

import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";

const Ajout1 = () => {
  const [reference, setReference] = useState("");
  const [dateDeReception, setDateDeReception] = useState("");
  const [dateDajout, setDateDajout] = useState("");
  const [ExpedDest, setExpedDest] = useState("");
  const [nature, setNature] = useState("");
  const [fichier, setFichier] = useState("");
  const [objet, setObjet] = useState("");

  const navigate = useNavigate();

  const addProduct1 = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("reference", reference);
    formData.append("dateDeReception", dateDeReception);
    formData.append("dateDajout", dateDajout);
    formData.append("ExpedDest", ExpedDest);
    formData.append("nature", nature);
    formData.append("objet", objet);

    formData.append("fichier", fichier);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    formData.append("userId", userId);
    console.log(fichier);
    try {
      const response = await axios.post(
        "http://localhost:5000/add-product1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/Table2");
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
                <img src={logos} alt="" />
                <div>
                  <img src={logo2} alt="" />
                </div>
              </div>
            </div>
            <div className="textAjout">
              <h1>Ajouter l'information de vos courrier!</h1>{" "}
            </div>
            <div className="deconnexionAjout">
              <Link to={"/Form1"}>
                <button className="deconnexion">deconnexion</button>
              </Link>
            </div>
          </div>

          <div className="container mt-4">
            <form onSubmit={addProduct1}>
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
                  <label htmlFor="">Expéditeur</label>
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
              </div>
              <div className="row row2">
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
                <div
                  className="form-group col-md-6"
                  style={{ position: "relative" }}
                >
                  <label htmlFor="">Date d'ajout</label>
                  <input
                    className="form-control shadow-sm placeholder-shown"
                    id="dtaj"
                    name="dateaj"
                    type="date"
                    value={dateDajout}
                    onChange={(e) => setDateDajout(e.target.value)}
                  />
                </div>
              </div>
              <div className="row3 form-group">
                <input
                  type="file"
                  className="form-control shadow-sm"
                  id="aj"
                  name="fichier"
                  accept=".pdf, .doc, .docx"
                  required
                  placeholder="Ajouter une pièce jointe"
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
                <Link to="/Table2">
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

export default Ajout1;

