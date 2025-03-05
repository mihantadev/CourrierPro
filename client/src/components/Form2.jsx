// import { Link, useNavigate } from "react-router-dom";
// import img22 from "../images/remove2.png";
// import logos from "../images/logo1.png";
// import logo2 from "../images/logo2.png";
// import React, { useEffect, useState } from "react";

// const Form2 = () => {
//   const [nom, SetNom] = useState("");
//   const [prenom, SetPrenom] = useState("");
//   const [email, SetEmail] = useState("");
//   const [password, SetPassword] = useState("");
//   const [fonction, SetFonction] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem("user");
//     if (auth) {
//       navigate("/Form2");
//     }
//   }, [navigate]);

//   const collectData = async () => {
//     let result = await fetch("http://localhost:5000/register", {
//       method: "post",
//       body: JSON.stringify({ nom, prenom, email, password, fonction }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//     // No need to store user data in localStorage immediately
//     // localStorage.setItem("user", JSON.stringify(result));
//     navigate("/check-email");
//   };

//   return (
//     <div className="bodyForm2">
//       <div className="logo11">
//         <img src={logos} alt="" />
//         <img src={logo2} alt="" />
//       </div>
//       <div className="login-form2">
//         <div className="container-form22">
//           <h1>Heureux de vous revoir !</h1>
//           <img src={img22} alt="" />
//           <Link to={"/Form1"}>
//             <button className="shadow">Se connecter</button>
//           </Link>
//         </div>
//         <div className="container-form12">
//           <div className="registerForm">
//             <h1>Créer un compte</h1>
//             <div>
//               <input
//                 id="nom"
//                 name="nom"
//                 type="text"
//                 placeholder=" Nom"
//                 value={nom}
//                 onChange={(e) => SetNom(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 id="fulname"
//                 name="fulname"
//                 type="text"
//                 placeholder=" Prénom"
//                 value={prenom}
//                 onChange={(e) => SetPrenom(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 id="mail"
//                 name="mail"
//                 type="text"
//                 placeholder=" email"
//                 value={email}
//                 onChange={(e) => SetEmail(e.target.value)}
//               />
//               {/* <input
//                 id="identifiant"
//                 name="identifiant"
//                 type="text"
//                 placeholder=" email"
//                 value={email}
//                 onChange={(e) => SetEmail(e.target.value)}
//               /> */}
//             </div>
//             <div>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder=" Mots de passe"
//                 value={password}
//                 onChange={(e) => SetPassword(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 id="fonction"
//                 name="fonction"
//                 type="text"
//                 placeholder=" Fonction"
//                 value={fonction}
//                 onChange={(e) => SetFonction(e.target.value)}
//               />
//             </div>
//             <button className="shadow mt-4" onClick={collectData} type="button">
//               Enregistrer
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Form2;

// ************************Modification le 04/11/024*******************

import { Link, useNavigate } from "react-router-dom";
import img22 from "../images/remove2.png";
import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import React, { useEffect, useState } from "react";

const Form2 = () => {
  const [nom, SetNom] = useState("");
  const [prenom, SetPrenom] = useState("");
  const [identifiant, SetIdentifiant] = useState(""); // Changer de email à identifiant
  const [password, SetPassword] = useState("");
  const [fonction, SetFonction] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/Form2");
    }
  }, [navigate]);

  const collectData = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ nom, prenom, identifiant, password, fonction }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    if (result && result.result === "no User found") {
      alert(
        "Création de compte échouée. Veuillez vérifier les informations fournies."
      );
    } else {
      alert("Compte créé avec succès !");
      navigate("/Form1"); // Vous pouvez changer cela si vous n'avez plus besoin de cette navigation
    }
  };

  return (
    <div className="bodyForm2">
      <div className="logo11">
        <img src={logos} alt="" />
        <img src={logo2} alt="" />
      </div>
      <div className="login-form2">
        <div className="container-form22">
          <h1>Heureux de vous revoir !</h1>
          <img src={img22} alt="" />
          <Link to={"/Form1"}>
            <button className="shadow">Se connecter</button>
          </Link>
        </div>
        <div className="container-form12">
          <div className="registerForm">
            <h1>Créer un compte</h1>
            <div>
              <input
                id="nom"
                name="nom"
                type="text"
                placeholder=" Nom"
                value={nom}
                onChange={(e) => SetNom(e.target.value)}
              />
            </div>
            <div>
              <input
                id="fulname"
                name="fulname"
                type="text"
                placeholder=" Prénom"
                value={prenom}
                onChange={(e) => SetPrenom(e.target.value)}
              />
            </div>
            <div>
              <input
                id="identifiant" // Changer de mail à identifiant
                name="identifiant"
                type="text"
                placeholder=" Identifiant" // Changer le placeholder
                value={identifiant}
                onChange={(e) => SetIdentifiant(e.target.value)} // Changer de SetEmail à SetIdentifiant
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder=" Mots de passe"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                id="fonction"
                name="fonction"
                type="text"
                placeholder=" Fonction"
                value={fonction}
                onChange={(e) => SetFonction(e.target.value)}
              />
            </div>
            <button className="shadow mt-4" onClick={collectData} type="button">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
