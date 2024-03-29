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
      isOnboard: false,
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

    const { createdAt, updatedAt, ...response } = user.data();
    response.isOnboard = true;
    if (
      !response?.companyInformation ||
      !response?.subscription ||
      !response.mobileNumber
    ) {
      response.isOnboard = false;
    }
    res.status(200).send({
      ...response,
      uid,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

const updateUser = async (req, res) => {
  const { uid, email, ...userInfo } = req.body;
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

const addProperty = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }
    if (!req.body.uid) {
      return res.status(400).send({ message: "uid is missing" });
    }

    const docRef = await db.collection("properties").add({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
      active: true,
    });
    console.log(docRef.id);
    res.status(200).send({ message: "Property created successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Please refresh an error came while adding a property",
    });
    return;
  }
};

const getPropertyList = async (req, res) => {
  const { uid } = req.query;

  try {
    if (req.method !== "GET") {
      return res.status(405).send("Method not allowed");
    }
    if (!uid) {
      return res.status(400).send({ message: "uid is missing" });
    }

    const listRef = await db
      .collection("properties")
      .where("uid", "==", uid)
      .get();

    const properties = listRef.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    res.status(200).send(properties);
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while retrieving properties." });
    return;
  }
};

const getPropertyDetailById = async (req, res) => {
  const { propertyId } = req.params;
  try {
    if (req.method !== "GET") return res.status(405).send("Method not allowed");
    if (!propertyId)
      return res.status(400).send({ message: "propertyId is missing" });
    const docRef = db.collection("properties").doc(propertyId);

    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(500).send({ message: "Property not found" });
    }

    const utilityRef = db.collection("utilities").doc(propertyId);
    const utilityDoc = await utilityRef.get();
    let utilities = [];
    let residentFees = [];
    if (utilityDoc.exists) {
      utilities = JSON.parse(utilityDoc.data()?.utilities);
      residentFees = JSON.parse(utilityDoc.data()?.residentFees);
    }

    const unitsRef = db.collection("units").doc(propertyId);
    const unitDoc = await unitsRef.get();
    let unitData = [];
    if (unitDoc.exists) {
      unitData = JSON.parse(unitDoc.data()?.unitData);
    }

    return res.status(200).send({
      ...doc.data(),
      id: propertyId,
      utilities,
      residentFees,
      unitData,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while retrieving properties." });
    return;
  }
};

const addUtility = async (req, res) => {
  const { propertyId } = req.body;
  try {
    if (req.method !== "POST")
      return res.status(405).send("Method not allowed");

    if (!propertyId)
      return res.status(400).send({ message: "propertyId is missing" });

    const utilitiesRef = db.collection("utilities");
    const utilDoc = utilitiesRef.doc(propertyId);

    // Create a new utility document with the given propertyId
    await utilDoc.set({
      utilities: JSON.stringify(req.body?.utility ? req.body.utility : []),
      residentFees: JSON.stringify(
        req.body?.residentFees ? req.body.residentFees : []
      ),
    });

    res.status(200).send({ message: "Utilities created successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Please refresh an error came while adding utility",
    });
  }
};

const getUtility = async (req, res) => {
  const propertyId = req.params.propertyId;

  try {
    const utilityRef = db.collection("utilities").doc(propertyId);
    const utilityDoc = await utilityRef.get();

    // Check if the property exists
    if (!utilityDoc.exists) {
      res.status(404).send("Property not found.");
      return;
    }

    const accountRef = await utilityRef.get();
    const utilities = JSON.parse(accountRef.data()?.utilities);
    const residentFees = JSON.parse(accountRef.data()?.residentFees);

    res.status(200).send({ utilities, residentFees });
  } catch (error) {
    res.status(500).send("Error getting property data.");
  }
};

const addUnit = async (req, res) => {
  const { propertyId, unitData } = req.body;
  try {
    if (req.method !== "POST")
      return res.status(405).send("Method not allowed");

    if (!propertyId)
      return res.status(400).send({ message: "propertyId is missing" });

    const unitsRef = db.collection("units");
    const unitDoc = unitsRef.doc(propertyId);

    await unitDoc.set({
      unitData: JSON.stringify(unitData),
    });
    res.status(200).send({ message: "Unit created successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Please refresh an error came while adding units",
    });
  }
};

app.post("/register", register);
app.post("/getUserInfo", getUserInfo);
app.post("/updateUser", updateUser);

// property
app.post("/addProperty", addProperty);
app.get("/getPropertyList", getPropertyList);
app.get("/getPropertyDetailById/:propertyId", getPropertyDetailById); // add utility details

// UTILITY
app.post("/addUtility", addUtility);
app.get("/getUtility/:propertyId", getUtility);

//units
app.post("/addUnit/:propertyId", addUnit);

exports.app = functions.https.onRequest(app);
