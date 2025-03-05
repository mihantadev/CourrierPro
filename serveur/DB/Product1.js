// const mongoose = require("mongoose");

// const product1Schema = new mongoose.Schema({
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

// module.exports = mongoose.model("products1", product1Schema);
const mongoose = require("mongoose");

const product1Schema = new mongoose.Schema({
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

module.exports = mongoose.model("products1", product1Schema);