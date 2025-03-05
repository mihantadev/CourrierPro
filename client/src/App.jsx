import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
// import PdfViewer from "./components/PdfViewer";
import PdfLink from "./components/PdfLink";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Ajout from "./components/Ajout";
import Ajout1 from "./components/Ajout1";
import Edite from "./components/Edite";
import Edite1 from "./components/Edite1";
import Sortie from "./components/Sortie";
import Sortie1 from "./components/Sortie1";
import Boite from "./components/Boite";

import DownloadIcon from "./components/DownloadIcon";
import PrivateComponent from "./components/PrivateComponent";
import PdfViewer from "./components/PdfViewer";
// import CheckEmail from './components/CheckEmail';
// import ValidateEmail from './components/ValidateEmail'; // create this component to handle email validation
// import Update from "./components/Update";

import "./Main.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf-viewer/:id" element={<PdfViewer />} />

        <Route path="/ajout" element={<Ajout />} />
        <Route path="/ajout1" element={<Ajout1 />} />
        <Route path="/edite/:id" element={<Edite />} />
        <Route path="/edite1/:id" element={<Edite1 />} />
        <Route path="/sortie" element={<Sortie />} />
        <Route path="/sortie1" element={<Sortie1 />} />
        <Route path="/download-icon" element={<DownloadIcon />} />
        <Route path="/table1" element={<Table1 />} />
        <Route path="/table2" element={<Table2 />} />
        <Route path="/Boite" element={<Boite />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        {/* <Route path="/update" element={<Update />} /> */}
        {/* <Route path="/check-email" element={<CheckEmail />} /> */}
        {/* <Route path="/validate-email" element={<ValidateEmail />} /> */}
        <Route path="/private" element={<PrivateComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from './components/Home'
// import './Main.css'

// import React from "react";
// import PdfViewer from "./PdfViewer";
// import PdfLink from "./components/PdfLink";

// import './components/Lien1'
// import Table1 from "./components/Table1"
// import Table2 from "./components/Table2";
// import Form1 from "./components/Form1"
// import Form2 from "./components/Form2"
// import Ajout from "./components/Ajout"
// import Ajout1 from "./components/Ajout1";
// import Edite from "./components/Edite";
// import Edite1 from "./components/Edite1";
// import Sortie from "./components/Sortie"
// import DownloadIcon from "./components/DownloadIcon"
// import PrivateComponent from "./components/PrivateComponent"

// // import CheckEmail from './components/CheckEmail';
// // import ValidateEmail from './components/ValidateEmail'; // create this component to handle email validation

// // import Update from "./components/Update"
// // import Update from "./components/Update"

// // import { useEffect,useState } from "react"

// const App = () => {

// // const [auth, setAuth] = useState("");

//        return (
//          <BrowserRouter>
//            <Routes>
//              <Route element={<PrivateComponent />} />
//              <Route path="/" element={<Home />} />

//              <Route
//                path="/pdf-viewer"
//                element={<PdfViewer pdfUrl="path/to/your.pdf" />}
//              />
//               <Route
//                path="/PdfLink"
//                element={<PdfLink pdfUrl="/path/to/your.pdf" />}
//              />

//              <Route path="Ajout" element={<Ajout />} />
//              <Route path="Ajout1" element={<Ajout1 />} />
//              <Route path="Edite/:id" element={<Edite />} />
//              <Route path="Edite1/:id" element={<Edite1 />} />

//              <Route path="Sortie" element={<Sortie />} />

//              <Route path="DownloadIcon" element={<DownloadIcon />} />
//              <Route path="Table1" element={<Table1 />} />
//              <Route path="Table2" element={<Table2 />} />

//              <Route path="Form1" element={<Form1 />} />
//              <Route path="Form2" element={<Form2 />} />
//              {/* <Route path="Update" element={<Update/>} /> */}
//              {/* <Route path="/check-email" element={<CheckEmail />} /> */}
//              {/* <Route path="/validate-email" element={<ValidateEmail />} /> */}
//            </Routes>
//          </BrowserRouter>
//        );
// }
// export default App
