const admin = require('firebase-admin');

const isLoggedIn = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = req.headers.authorization.split(' ')[1];

    // Logguer le token pour le débogage
    console.log("Received Token:", token);

    // Utiliser verifyIdToken pour vérifier le jeton d'authentification
    admin.auth().verifyIdToken(token)
        .then((decoded) => {
            req.user = decoded;
            next();
        })
        .catch((err) => {
            console.error("Error verifying token", err);
            res.status(401).json({ error: "Unauthorized" });
        });
};

module.exports = isLoggedIn;
