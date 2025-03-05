// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCab } from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect } from "react";
// // import Form2 from "./components/Form2";

// import {
//   faEnvelope,
//   faUnlockAlt,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

// import logos from "../images/logo1.png";
// import logo2 from "../images/logo2.png";

// const Form1 = () => {
  
//   const [email, SetEmail] = React.useState("");
//   const [password, SetPassword] = React.useState("");
//   const [fonction, SetFonction] = React.useState("")
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const auth = localStorage.getItem("user");
//   //   if (auth) {
//   //     navigate("/Table1");
//   //   }
//   // });
//   const handleLogin = async () => {
//     let result = await fetch("http://localhost:5000/login", {
//       method: "post",
//       body: JSON.stringify({ email, password,fonction }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.warn(result)
//     if (result.fonction == "sg") {
//       localStorage.setItem("user", JSON.stringify(result));
//       navigate("/Table1");
//     } 
//     else if(result.fonction == "rh"){
//       localStorage.setItem("user", JSON.stringify(result));
//       navigate("/Table2");
//     }else{
//       alert("please enter details");
//     }
//   };

//   return (
//     <div className="bodyForm1">
//       <div className="logo11">
//         <img src={logos} alt="" />
//         <div>
//           <img src={logo2} alt="" />
//         </div>
//       </div>
//       <div className="login-form">
//         <div className="container-form21">
//           <div className="transparent">
//             <div className="white">
//               <div className="container-form11">
//                 <div className="logo12"></div>

//                 <h1>Connectez vous</h1>
//                 <div className="formLog">
//                   <form>
//                     <div>
//                       <input
//                         className=""
//                         id="mail"
//                         name="mail"
//                         type="text"
//                         placeholder=" Email"
//                         value={email}
//                         onChange={(e) => SetEmail(e.target.value)}
//                       />
//                       {/* <FontAwesomeIcon
//                         className="icon"
//                         icon={faEnvelope}
//                       ></FontAwesomeIcon> */}
//                     </div>
//                     <div>
//                       <input
//                         name="password"
//                         id="password"
//                         type="password"
//                         placeholder=" Mots de passe"
//                         value={password}
//                         onChange={(e) => SetPassword(e.target.value)}
//                       />
//                       {/* <FontAwesomeIcon
//                         className="icon"
//                         icon={faUnlockAlt}
//                       ></FontAwesomeIcon> */}
//                     </div>
//                     <div className="fonction">
//                       <input type="text" id="foncion" name="fonction" placeholder="Fonction" 
//                       value={fonction}
//                       onChange={(e) => SetFonction(e.target.value)}
//                       />
//                       {/* <select value={fonction} id="foncion" name="fonction" onChange={(e) => SetFonction(e.target.value)}>
//                         <option name="" id="">
//                           sg
//                         </option>
//                         <option name="" id="">
//                           rh
//                         </option>
//                       </select> */}
//                     </div>
//                     <div>
//                       <a href="">Mots de passe oublier</a>
//                     </div>

//                     <button
//                       onClick={handleLogin}
//                       type="button"
//                       className="shadow"
//                     >
//                       Se connecter
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             <div className="wave"></div>
//             <div className="txt">
//               <h1>Bienvenue !</h1>
//               <p>Créer un compte et gérer vos courrier</p>
//               <Link to={"/Form2"}>
//                 <button className="shadow">Créer un compte</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Form1;

// *******************modification le 04/11/2024******************
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCab } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";

const Form1 = () => {
  const [identifiant, SetIdentifiant] = React.useState(""); // Changer de email à identifiant
  const [password, SetPassword] = React.useState("");
  const [fonction, SetFonction] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ identifiant, password, fonction }), // Changer email en identifiant
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.fonction === "sg") {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/Table1");
    } else if (result.fonction === "rh") {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/Table2");
    } else {
      alert("Veuillez entrer les détails corrects.");
    }
  };

  return (
    <div className="bodyForm1">
      <div className="logo11">
        <img src={logos} alt="" />
        <div>
          <img src={logo2} alt="" />
        </div>
      </div>
      <div className="login-form">
        <div className="container-form21">
          <div className="transparent">
            <div className="white">
              <div className="container-form11">
                <div className="logo12"></div>

                <h1>Connectez-vous</h1>
                <div className="formLog">
                  <form>
                    <div>
                      <input
                        className=""
                        id="identifiant" // Changer de mail à identifiant
                        name="identifiant" // Changer de mail à identifiant
                        type="text"
                        placeholder=" Identifiant"
                        value={identifiant}
                        onChange={(e) => SetIdentifiant(e.target.value)} // Changer de SetEmail à SetIdentifiant
                      />
                    </div>
                    <div>
                      <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder=" Mots de passe"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                      />
                    </div>
                    <div className="fonction">
                      <input
                        type="text"
                        id="fonction"
                        name="fonction"
                        placeholder="Fonction"
                        value={fonction}
                        onChange={(e) => SetFonction(e.target.value)}
                      />
                    </div>
                    <div>
                      <a href="">Mots de passe oublié</a>
                    </div>

                    <button
                      onClick={handleLogin}
                      type="button"
                      className="shadow"
                    >
                      Se connecter
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="wave"></div>
            <div className="txt">
              <h1>Bienvenue !</h1>
              <p>Créer un compte et gérer vos courriers</p>
              <Link to={"/Form2"}>
                <button className="shadow">Créer un compte</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
