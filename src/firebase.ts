import admin from "firebase-admin";

let app: admin.app.App;

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId || !clientEmail || !rawPrivateKey) {
  throw new Error("Missing Firebase env vars: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY");
}

const serviceAccount = {
  projectId,
  clientEmail,
  privateKey: rawPrivateKey.replace(/\\n/g, "\n"),
} as admin.ServiceAccount;

if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  app = admin.app();
}

export const db = admin.firestore(app);
