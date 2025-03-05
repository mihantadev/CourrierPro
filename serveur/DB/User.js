
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   nom: String,
//   prenom: String,
//   email: String,
//   password: String,
//   fonction: String,
//   verificationToken: String,
//   isVerified: Boolean,
// });

// module.exports = mongoose.model("users", userSchema);


// ************************Modification le 04/11/024*******************
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  identifiant: { type: String, unique: true },
  password: String,
  fonction: String,
  verificationToken: String,
  isVerified: Boolean,
});

module.exports = mongoose.model("users", userSchema);
