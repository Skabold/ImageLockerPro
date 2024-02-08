const express = require("express");
const serverless = require("serverless-http");
const lockImageRoute = require("./lockImageRoute");

const app = express();
app.use(express.json());
const firebase = require('firebase/compat/app');
require('firebase/compat/auth');
const isLoggedIn = require('./middleware/userMiddleware');
const firebaseConfig = require('./config/firebaseConfig');

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

const admin = require("firebase-admin");
const serviceAccount = require("./config/firebaseServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.use(express.json());

// The lock image route / logic from lockImageRoute.js
app.use(lockImageRoute);

app.get("/private", isLoggedIn, (req, res) => {
  const { uid, email } = req.user;
  res.status(200).json({ message: "Private route", uid, email });
});

// Définition de asyncHandler pour la gestion des erreurs asynchrones
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Route de login
app.post("/login", asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);

    // Récupérer le token d'authentification
    const idToken = await userCredential.user.getIdToken();

    // Envoyer le token d'authentification au client
    res.cookie('token', idToken);
    res.json({
      status: 'success',
      msg: "User logged in correctly",
      idToken,
    });
  } catch (error) {
    console.error("Error logging in ", error);
    res.status(401).json({ error: "Invalid login credentials" });
  }
}));

app.post("/register", asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    res.status(200).json({
      status: 'success',
      msg: "User registered and logged in",
      uid: userRecord.uid,
    });
  } catch (error) {
    console.error("Error registering user ", error);

    // Gérer les erreurs spécifiques si nécessaire
    if (error.code === 'auth/email-already-exists') {
      return res.status(400).json({ error: 'email-already-exists', details: 'Email address is already in use.' });
    }

    // Autres erreurs possibles
    res.status(400).json({ error: "User registration failed", details: error.message });
  }
}));


// Middleware "Not Found" doit être placé à la fin
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// Exportez votre fonction AWS Lambda
module.exports.handler = serverless(app);
