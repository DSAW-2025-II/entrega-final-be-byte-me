import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDb, getAuth } from "../../src/firebase";
import { computeCorsOrigin } from "../../src/utils/cors";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin;
  const allowedOrigin = process.env.CORS_ORIGIN || "*";
  const corsOrigin = computeCorsOrigin(origin, allowedOrigin);

  res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split("Bearer ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verificar el token del usuario autenticado
    const auth = getAuth();
    await auth.verifyIdToken(token);

    // Obtener parámetros de búsqueda
    const { firebase_uid, user_id } = req.query;

    if (!firebase_uid && !user_id) {
      return res.status(400).json({ error: "firebase_uid or user_id is required" });
    }

    const db = getDb();
    let userDoc;

    // Buscar por firebase_uid (más directo)
    if (firebase_uid && typeof firebase_uid === "string") {
      userDoc = await db.collection("users").doc(firebase_uid).get();
    } 
    // Buscar por user_id
    else if (user_id && typeof user_id === "string") {
      const usersSnapshot = await db
        .collection("users")
        .where("user_id", "==", user_id)
        .limit(1)
        .get();
      
      if (usersSnapshot.empty) {
        return res.status(404).json({ error: "User not found" });
      }
      
      userDoc = usersSnapshot.docs[0];
    } else {
      return res.status(400).json({ error: "Invalid parameters" });
    }

    if (!userDoc || !userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    const userData = userDoc.data();
    const phone = userData?.phone || null;

    if (!phone) {
      return res.status(404).json({ error: "Phone number not found for this user" });
    }

    return res.status(200).json({ phone });
  } catch (error: any) {
    console.error("Error in /api/users/phone handler:", error);
    if (error.code === "auth/id-token-expired") {
      return res.status(401).json({ error: "Token expired" });
    }
    if (error.code === "auth/argument-error") {
      return res.status(401).json({ error: "Invalid token" });
    }
    return res.status(500).json({
      error: "Internal server error",
      message: error.message || "Unknown error",
    });
  }
}

