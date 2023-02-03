const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");
var serviceAccount = require("./service_account.json");
const { user } = require("firebase-functions/v1/auth");

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

    if (!uid) {
      return res.status(400).send({ message: "uid is missing" });
    }

    const docRef = await db.doc(`users/${uid}`);

    if (!(await docRef.get()).exists) {
      return res.status(500).send({ message: "Something went wrong !" });
    }
    await docRef.set(
      {
        updatedAt: new Date(),
        ...userInfo,
      },
      { merge: true }
    );

    const userRef = await docRef.get();
    const { createdAt, updatedAt, ...user } = userRef.data();
    const response = { ...user, uid };
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

app.post("/register", register);
app.post("/getUserInfo", getUserInfo);
app.post("/updateUser", updateUser);

exports.app = functions.https.onRequest(app);
