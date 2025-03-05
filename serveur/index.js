// // ------------------------------------------------------------------------------------------------------------------

// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// require("./DB/config");
// const User = require("./DB/User");
// const Product = require("./DB/Products");
// const Product1 = require("./DB/Product1");
// // const Product = require("./models/Product");
// // -------------------------------------------------------------------------------
// const crypto = require("crypto");
// const { sendVerificationEmail } = require("./DB/emailService"); 
// const validateEmail = require("./DB/contactOutService");
// // ----------------------------------------------------------------------------------
// // const uploadDir = path.join(__dirname, "../pdfs");
// const uploadDir = path.join(__dirname, "files");


// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const app = express();
// // app.use(express.static("public"));
// app.use(cors());  // Utilisation du middleware cors
// app.use(express.json());

// // Regex pour la validation d'email
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// app.post("/register", async (req, resp) => {
//   const { nom, prenom, email, password, fonction } = req.body;

//   // Validation de l'email avec ContactOut
//   try {
//     const validationResult = await validateEmail(email);
//     if (!validationResult.valid) {
//       return resp.status(400).send("Adresse email invalide.");
//     }
//   } catch (error) {
//     return resp.status(500).send("Erreur lors de la validation de l'email.");
//   }

//   // Vérification si l'email est déjà utilisé
//   try {
//     let existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return resp.status(400).send("Cet email est déjà utilisé.");
//     }

//     const verificationToken = crypto.randomBytes(32).toString("hex");

//     let user = new User({
//       nom,
//       prenom,
//       email,
//       password,
//       fonction,
//       verificationToken,
//       isVerified: false,
//     });

//     let result = await user.save();

//     // Envoyer l'email de vérification
//     await sendVerificationEmail(email, verificationToken);

//     result = result.toObject();
//     delete result.password; // Supprimer le mot de passe avant d'envoyer la réponse

//     resp.send(result);
//   } catch (error) {
//     console.error("Erreur lors de l'inscription :", error);
//     resp.status(500).send("Erreur lors de l'inscription.");
//   }
// });

// app.get("/verify-email", async (req, resp) => {
//   const token = req.query.token;

//   try {
//     const user = await User.findOne({ verificationToken: token });

//     if (!user) {
//       return resp.status(400).send("Token invalide ou expiré.");
//     }

//     user.isVerified = true;
//     user.verificationToken = undefined;

//     await user.save();
//     resp.send(
//       "Email vérifié avec succès. Vous pouvez maintenant vous connecter."
//     );
//   } catch (error) {
//     resp.status(500).send("Erreur lors de la vérification.");
//   }
// });


// app.post("/login", async (req, resp) => {
//   if (req.body.password && req.body.email && req.body.fonction) {
//     let user = await User.findOne(req.body).select("-password");
//     if (user) {
//       resp.send(user);
//     } else {
//       resp.send({ result: "no User found" });
//     }
//   } else {
//     resp.send({ result: "no User found" });
//   }
// });
// *******************************modification le 04/11/2024
// ------------------------------------------------------------------------------------------------------------------

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

require("./DB/config");
const User = require("./DB/User");
const Product = require("./DB/Products");
const Product1 = require("./DB/Product1");

// const Product = require("./models/Product");
// -------------------------------------------------------------------------------
const crypto = require("crypto");
const { sendVerificationEmail } = require("./DB/emailService"); 
// ----------------------------------------------------------------------------------
// const uploadDir = path.join(__dirname, "../pdfs");
const uploadDir = path.join(__dirname, "files");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
// app.use(express.static("public"));
app.use(cors());  // Utilisation du middleware cors
app.use(express.json());

// Regex pour la validation d'identifiant (acceptant chiffres, caractères spéciaux et lettres)
const identifierRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

app.post("/register", async (req, resp) => {
  const { nom, prenom, identifiant, password, fonction } = req.body; // Changer email en identifiant

  // Vérification si l'identifiant est déjà utilisé
  try {
    let existingUser = await User.findOne({ identifiant }); // Changer email en identifiant
    if (existingUser) {
      return resp.status(400).send("Cet identifiant est déjà utilisé.");
    }

    let user = new User({
      nom,
      prenom,
      identifiant, // Changer email en identifiant
      password,
      fonction,
      verificationToken: null, // Pas nécessaire si vous ne l'utilisez pas
      isVerified: true, // Pas besoin de vérification par email, donc mettre à true
    });

    let result = await user.save();

    // Pas d'envoi d'email
    result = result.toObject();
    delete result.password; // Supprimer le mot de passe avant d'envoyer la réponse

    resp.send(result);
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    resp.status(500).send("Erreur lors de l'inscription.");
  }
});


app.get("/verify-email", async (req, resp) => {
  const token = req.query.token;

  try {
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return resp.status(400).send("Token invalide ou expiré.");
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();
    resp.send(
      "Email vérifié avec succès. Vous pouvez maintenant vous connecter."
    );
  } catch (error) {
    resp.status(500).send("Erreur lors de la vérification.");
  }
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.identifiant && req.body.fonction) {
    let user = await User.findOne({
      identifiant: req.body.identifiant,
      password: req.body.password,
      fonction: req.body.fonction
    }).select("-password");

    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no User found" });
    }
  } else {
    resp.send({ result: "no User found" });
  }
});


// *************************product********************************************
app.post("/add-product", upload.single("fichier"), async (req, resp) => {
  const {
    reference,
    dateDeReception,
    dateDajout,
    ExpedDest,
    nature,
    objet,
    userId,
  } = req.body;

  try {
    if (!req.file) {
      throw new Error("Aucun fichier téléchargé.");
    }

    const fichier = {
      filename: req.file.filename,
      contentType: req.file.mimetype,
    };

    const product = new Product({
      reference,
      dateDeReception,
      dateDajout,
      ExpedDest,
      nature,
      objet,
      fichier,
      userId,
    });

    const result = await product.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});
// Route pour ajouter un autre type de produit avec fichier
app.post("/add-product1", upload.single("fichier"), async (req, resp) => {
  const {
    reference,
    dateDeReception,
    dateDajout,
    ExpedDest,
    nature,
    objet,
    userId,
  } = req.body;

  try {
    if (!req.file) {
      throw new Error("Aucun fichier téléchargé.");
    }

    const fichier = {
      filename: req.file.filename,
      contentType: req.file.mimetype,
    };

    const product1 = new Product1({
      reference,
      dateDeReception,
      dateDajout,
      ExpedDest,
      nature,
      objet,
      fichier,
      userId,
    });

    const result = await product1.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.get("/products/:id/pdf", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product || !product.fichier) {
      return res.status(404).send("PDF not found");
    }

    const filePath = path.join(uploadDir, product.fichier.filename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found");
    }

    res.set("Content-Type", "application/pdf");
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error retrieving PDF:", error);
    res.status(500).send("Error retrieving PDF");
  }
});

// ************************************************
// *********************************************************
// Modification pour affectation
// Route pour transférer un produit de Table1 vers Table2
// Route pour transférer un produit de Table1 vers Table2
app.post('/transfer/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Récupérer le produit de table1
    const product = await Product.findById(id);  // Utiliser Product au lieu de Table1

    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    // Créer un nouveau produit dans table2 avec les mêmes données
    const newProduct = new Product1({
      reference: product.reference,
      objet: product.objet,
      fichier: product.fichier,
      dateDeReception: product.dateDeReception,
      dateDajout: product.dateDajout,
      ExpedDest: product.ExpedDest,
    });

    // Sauvegarder le produit dans table2
    await newProduct.save();

    // Supprimer le produit de table1
    await Product.findByIdAndDelete(id);  // Utiliser Product au lieu de Table1

    res.status(200).json({ message: "Produit transféré avec succès !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors du transfert" });
  }
});

// **************************boite.jsx
// Récupérer les produits de Table2
app.get("/products2", async (req, res) => {
  try {
    const products = await Product1.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits" });
  }
});
// notification sur la cloche
// Route pour récupérer le nombre de nouveaux produits
app.get("/newProducts", async (req, res) => {
  try {
    const newProductsCount = await Product2.countDocuments({
      // Par exemple, vérifiez si la date de réception est plus récente que la dernière vérification
      // Vous pouvez ajouter un champ `isNew` dans votre modèle pour marquer les nouveaux produits
    });
    res.json({ newProductsCount });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des nouveaux produits" });
  }
});


// ******************************************


// Route pour obtenir un fichier PDF pour un autre type de produit
app.get("/products1/:productId/pdf", async (req, resp) => {
  try {
    const product1 = await Product1.findById(req.params.productId);
    if (!product1) {
      return resp.status(404).send("Product not found");
    }

    const filePath = path.join(uploadDir, product1.fichier.filename);
    if (product1.fichier.contentType !== "application/pdf") {
      return resp.status(400).send("File is not a PDF");
    }

    if (!fs.existsSync(filePath)) {
      return resp.status(404).send("File not found");
    }

    resp.setHeader("Content-Type", "application/pdf");
    resp.sendFile(filePath);
  } catch (error) {
    console.error("Error fetching product:", error);
    resp.status(500).send("Internal server error");
  }
});


app.get("/products", async (req, resp) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.status(404).send({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    resp.status(500).send({ message: "Internal server error" });
  }
});

// Route pour obtenir tous les autres types de produits
app.get("/products1", async (req, resp) => {
  try {
    const products1 = await Product1.find();
    if (products1.length > 0) {
      resp.send(products1);
    } else {
      resp.status(404).send({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    resp.status(500).send({ message: "Internal server error" });
  }
});

// Route pour supprimer un produit
app.delete("/product/:id", async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// Route pour supprimer un autre type de produit
app.delete("/product1/:id", async (req, resp) => {
  try {
    const result = await Product1.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// Route pour obtenir les détails d'un produit pour modification
app.get("/product/:id", async (req, resp) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No record found" });
    }
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// Route pour mettre à jour un produit
app.put("/product/:id", upload.single("fichier"), async (req, resp) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return resp.status(404).send("Product not found");
    }

    if (req.file) {
      product.fichier = {
        filename: req.file.filename,
        contentType: req.file.mimetype,
      };
    }

    product.reference = req.body.reference;
    product.dateDeReception = req.body.dateDeReception;
    product.dateDajout = req.body.dateDajout;
    product.ExpedDest = req.body.ExpedDest;
    product.nature = req.body.nature;
    product.objet = req.body.objet;

    const result = await product.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// Route pour obtenir les détails d'un autre produit pour modification
app.get("/product1/:id", async (req, resp) => {
  try {
    const result = await Product1.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No record found" });
    }
  } catch (error) {
    resp.status(500).send(error.message);
  }
});
// Route pour mettre à jour un autre produit
app.put("/product1/:id", upload.single("fichier"), async (req, resp) => {
  try {
    const product1 = await Product1.findById(req.params.id);
    if (!product1) {
      return resp.status(404).send("Product not found");
    }

    if (req.file) {
      product1.fichier = {
        filename: req.file.filename,
        contentType: req.file.mimetype,
      };
    }

    product1.reference = req.body.reference;
    product1.dateDeReception = req.body.dateDeReception;
    product1.dateDajout = req.body.dateDajout;
    product1.ExpedDest = req.body.ExpedDest;
    product1.nature = req.body.nature;
    product1.objet = req.body.objet;

    const result = await product1.save();
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.get("/search/:key", async (req, resp) => {
  try {
    const result = await Product.find({
      $or: [
        {
          reference: { $regex: req.params.key },
        },
        {
          dateDeReception: { $regex: req.params.key },
        },
        {
          dateDajout: { $regex: req.params.key },
        },
        {
          ExpedDest: { $regex: req.params.key },
        },
        {
          objet: { $regex: req.params.key },
        },
        // {
        //   fichier: { $regex: req.params.key },
        // },
      ],
    });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

// Route pour rechercher d'autres types de produits
app.get("/search1/:key", async (req, resp) => {
  try {
    const result = await Product1.find({
      $or: [
        {
          reference: { $regex: req.params.key },
        },
        {
          dateDeReception: { $regex: req.params.key },
        },
        {
          dateDajout: { $regex: req.params.key },
        },
        {
          ExpedDest: { $regex: req.params.key },
        },
        {
          objet: { $regex: req.params.key },
        },
      ],
    });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});



