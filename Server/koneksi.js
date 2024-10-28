import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"; 
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware untuk menyajikan gambar dari disk
app.use("/assets", express.static("F:/Backend/Kopken/kopken/src/assets"));

const url = process.env.MONGODB;
const namaDatabase = process.env.kopken;
const namaKoleksiUser = process.env.user;
const namaKoleksiProduct = process.env.product;

let client;
let userCollection;
let productCollection;

const mongoConnectionMiddleware = async (req, res, next) => {
  try {
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
      console.log("Koneksi ke MongoDB berhasil");

      const db = client.db(namaDatabase);
      userCollection = db.collection(namaKoleksiUser);
      productCollection = db.collection(namaKoleksiProduct);
    }
    next();
  } catch (error) {
    console.log("Koneksi ke MongoDB gagal", error);
    res.status(500).json({ message: "terjadi kesalahan koneksi ke database" });
  }
};

app.use(mongoConnectionMiddleware);

app.get("/user", async (req, res) => {
  try {
    const data = await userCollection.find().toArray();
    res.json(data);
  } catch {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.get("/product", async (req, res) => {
  try {
    const data = await productCollection.find().toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.post("/user", async (req, res) => {
  try {
    const result = await userCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

// Endpoint POST yang benar untuk menambahkan data ke koleksi "product"
app.post("/product", async (req, res) => {
  try {
    const result = await productCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

export default app;
