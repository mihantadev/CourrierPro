import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";
import React,{useState} from "react";

import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";

const Update = () => {
  const [reference, setReference] = React.useState("");
  const [dateDeReception, setDateDeReception] = React.useState("");
  const [dateDajout, setDateDajout] = React.useState("");
  const [ExpedDest, setExpedDest] = React.useState("");
  const [nature, setNature] = React.useState("");
  const [fichier, setFichier] = React.useState("");
  const [objet, setObjet] = React.useState("");

  const navigate = useNavigate();

  const updateProduct = async (e) => {
    e.preventDefault();
    // console.warn(
    //   reference,
    //   dateDeReception,
    //   dateDajout,
    //   ExpedDest,
    //   nature,
    //   fichier,
    //   objet
    // );
    // const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.warn(userId);
    // let result = await fetch("http://localhost:5000/add-product", {
    //   method: "post",
    //   body: JSON.stringify({
    //     reference,
    //     dateDeReception,
    //     dateDajout,
    //     ExpedDest,
    //     nature,
    //     fichier,
    //     objet,
    //     userId,
    //   }),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });
    // result = await result.json();
    // console.warn(result);
    // navigate("/Table1");

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

            <div className="retour">
              <Link to={"/Table1"}>
                <p>retour</p>
              </Link>
            </div>
            <div className="textAjout">
              <h1>Editer l'information de vos courriers</h1>{" "}
            </div>
            <div className="deconnexionAjout">
              <Link to={"/Form1"}>
                <button className="deconnexion">deconnexion</button>
              </Link>
            </div>
          </div>

          <div className="containtAjout">
            <form action="">
              <div className="form-ref">
                <div>
                  <label htmlFor="">Référence</label>
                  <input
                    type="text"
                    placeholder=""
                    name="ref"
                    value={reference}
                    onChange={(e) => {
                      setReference(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Date de réception</label>
                  <input
                    type="date"
                    placeholder=""
                    name="daterec"
                    value={dateDeReception}
                    onChange={(e) => {
                      setDateDeReception(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Date d'ajout</label>
                  <input
                    type="date"
                    placeholder=""
                    name="dateaj"
                    value={dateDajout}
                    onChange={(e) => {
                      setDateDajout(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-ref">
                <div>
                  <label htmlFor="">Expéditeur / Destinataire</label>
                  <input
                    type="text"
                    placeholder=""
                    name="exp"
                    value={ExpedDest}
                    onChange={(e) => {
                      setExpedDest(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Nature</label>
                  <input
                    type="text"
                    placeholder=""
                    name="Nature"
                    value={nature}
                    onChange={(e) => {
                      setNature(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">Ajouter un pièce jointe</label>
                  <input
                    type="file"
                    name="file"
                    accept=".pdf, .doc, .docx"
                    placeholder=""
                    onChange={(e) => {
                      setFichier(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
              <div className="objet">
                <div>
                  <label htmlFor="">Objet</label>
                  <input
                    type="text"
                    placeholder=""
                    name="objet"
                    value={objet}
                    onChange={(e) => {
                      setObjet(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="btn-form">
                <div>
                  <button>
                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> Annuler
                  </button>
                </div>
                <div>
                  <button onClick={updateProduct} type="button">
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>{" "}
                    Enregister
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Update;
