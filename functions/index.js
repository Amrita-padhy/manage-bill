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
  const { email, password, firstName, lastName } = req.body;
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }
    const user = await admin.auth().createUser({ email, password });
    await db.doc(`users/${user.uid}`).set({
      email,
      firstName,
      lastName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).send({ message: "User registration successfully" });
    return;
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

const getUserInfo = async (req, res) => {
  const { uid } = req.body;

  try {
    const user = await db.doc(`users/${uid}`).get();

    if (!user.exists) {
      res.status(500).send({ message: "User Does not exist" });
      return;
    }

    const response = { ...user.data(), uid };

    res.status(200).send({
      response,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

const updateUser = async (req, res) => {
  const { uid, ...userInfo } = req.body;
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }
    await db.doc(`users/${uid}`).set(
      {
        updatedAt: new Date(),
        ...userInfo,
      },
      { merge: true }
    );
    const user = await db.doc(`users/${uid}`).get();
    const response = { ...user.data(), uid };
    res.status(200).send({
      message: "Successfully",
      status: true,
      response,
    });
  } catch (error) {}
};

app.post("/register", register);
app.post("/getUserInfo", getUserInfo);
app.post("/updateUser", updateUser);

exports.app = functions.https.onRequest(app);
