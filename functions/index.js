const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");
var serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

//initialize express server
const app = express();

app.use(cors({ origin: true }));

const register = async (req, res) => {
  const { email, password, userName } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    await db.doc(`users/${user.uid}`).set({
      email,
      userName,
      createdAt: new Date(),
    });
    res
      .status(200)
      .send({ message: "User registration successfully", status: true });
    return;
  } catch (error) {
    res.status(200).send({ message: error.message, status: false });
    return;
  }
};

app.post("/register", register);

exports.app = functions.https.onRequest(app);
