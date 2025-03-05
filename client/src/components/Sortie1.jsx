import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faEdit, faAdd,
    faTrashAlt,
    faShareAlt,
    faBell, } from "@fortawesome/free-solid-svg-icons"


import logos from "../images/logo1.png";
import logo2 from "../images/logo2.png";



const Sortie1 = () => {
      const [products, setProducts] = useState([]);
    
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
      }
    return (
        <div className='Table1'>
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
                           <a href="/Table1" className="lien1">
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
                             {/* <input
                               className="shadow p-2"
                               id="search"
                               name="search"
                               type="search"
                               placeholder="Rechercher"
                               onChange={searchHandle}
                             /> */}
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
                         
                               
                                     
                         
                       </div>
                     </div>
                   </div>
                 </div>
            
        </div>
    )
}
export default Sortie1