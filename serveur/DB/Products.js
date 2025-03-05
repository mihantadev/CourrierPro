
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
  
  
//   reference: String,
//   dateDeReception: String,
//   dateDajout: String,
//   ExpedDest: String,
//   nature: String,
//   userId:String,
//   fichier: String,
//   objet: String
// });

// module.exports = mongoose.model("products", productSchema);


// -----------------------chat
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   reference: String,
//   dateDeReception: String,
//   dateDajout: String,
//   ExpedDest: String,
//   nature: String,
//   userId: String,
//   fichier: {
//     data: Buffer, // Champ pour stocker les données binaires du fichier
//     contentType: String, // Type MIME du fichier (par exemple, "application/pdf")
//   },
//   objet: String,
// });

// module.exports = mongoose.model("products", productSchema);
// ---------------------------------
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   reference: String,
//   dateDeReception: String,
//   dateDajout: String,
//   ExpedDest: String,
//   nature: String,
//   userId: String,
//   fichier: {
//     filename: String, // Nom du fichier
//     contentType: String, // Type MIME du fichier (par exemple, "application/pdf")
//   },
//   objet: String,
// });

// module.exports = mongoose.model("products", productSchema);
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   reference: { type: String, required: true, unique: true },
//   dateDeReception: { type: Date, required: true },
//   dateDajout: { type: Date, required: true },
//   ExpedDest: { type: String, required: true },
//   nature: { type: String, required: true },
//   userId: { type: String, required: true },
//   fichier: {
//     filename: { type: String, required: true }, // Nom du fichier
//     contentType: { type: String, required: true }, // Type MIME du fichier
//   },
//   objet: { type: String, required: true },
// });

// module.exports = mongoose.model("products", productSchema);

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   reference: String,
//   dateDeReception: Date,
//   dateDajout: Date,
//   ExpedDest: String,
//   nature: String,
//   userId: String,
//   fichier: {
//     contentType: String,
//     data: Buffer,
//   },
//   objet: String,
// });
// module.exports = mongoose.model("products", productSchema);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  reference: String,
  dateDeReception: String,
  dateDajout: String,
  ExpedDest: String,
  nature: String,
  userId: String,
  fichier: {
    filename: String, // Nom du fichier
    contentType: String, // Type MIME du fichier (par exemple, "application/pdf")
  },
  objet: String,
});

module.exports = mongoose.model("products", productSchema);


/*
(const addProduct = async (e) => {
    e.preventDefault();
    console.warn(
      reference,
      dateDeReception,
      dateDajout,
      ExpedDest,
      nature,
      fichier,
      objet
    );
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.warn(userId);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
        reference,
        dateDeReception,
        dateDajout,
        ExpedDest,
        nature,
        fichier,
        objet,
        userId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
     navigate("/Table1");
   };)
*/ 