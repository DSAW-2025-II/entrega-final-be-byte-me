import admin from "firebase-admin";

let app: admin.app.App | null = null;
let db: admin.firestore.Firestore | null = null;

function initializeFirebase() {
  if (app) {
    return admin.firestore(app);
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !rawPrivateKey) {
    throw new Error("Missing Firebase env vars: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY");
  }

  // Normalizar la clave privada: manejar tanto \n literales como saltos de línea reales
  let privateKey = rawPrivateKey;
  // Si tiene \n literales (como string), convertirlos a saltos de línea reales
  if (privateKey.includes("\\n")) {
    privateKey = privateKey.replace(/\\n/g, "\n");
  }
  // Si ya tiene saltos de línea pero están mal formateados, asegurar formato correcto
  privateKey = privateKey.trim();

  const serviceAccount = {
    projectId,
    clientEmail,
    privateKey,
  } as admin.ServiceAccount;

  if (!admin.apps.length) {
    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    app = admin.app();
  }

  db = admin.firestore(app);
  return db;
}

export function getDb() {
  if (!db) {
    db = initializeFirebase();
  }
  return db;
}

export function getAuth() {
  if (!app) {
    initializeFirebase();
  }
  return admin.auth(app!);
}
