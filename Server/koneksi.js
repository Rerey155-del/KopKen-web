import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"; // Load environment variables
import cors from "cors";

// LOAD ENVIRONMENT VARIABLES
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parsing request body sebagai JSON

// Middleware untuk menyajikan gambar dari disk

app.use("/assets", express.static("F:/Backend/Kopken/kopken/src/assets"));
// Atur untuk menyajikan gambar dari folder D:/images

const port = process.env.PORT;
const url = process.env.MONGODB;
const namaDatabase = process.env.kopken;
const namaKoleksiUser = process.env.user; // Koleksi untuk user
const namaKoleksiProduct = process.env.product; // Koleksi untuk product

let client;
let userCollection;
let productCollection;

// Middleware untuk memastikan koneksi ke MongoDB
const mongoConnectionMiddleware = async (req, res, next) => {
  try {
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
      console.log("Koneksi ke MongoDB berhasil");

      // Ambil database dan koleksi untuk user dan product
      const db = client.db(namaDatabase);
      userCollection = db.collection(namaKoleksiUser); // Koleksi user
      productCollection = db.collection(namaKoleksiProduct); // Koleksi product
    }
    next(); // Lanjutkan ke endpoint berikutnya
  } catch (error) {
    console.log("Koneksi ke MongoDB gagal", error);
    res.status(500).json({ message: "terjadi kesalahan koneksi ke database" });
  }
};

// Gunakan middleware pada semua route
app.use(mongoConnectionMiddleware);

app.get("/user", async (req, res) => {
  try {
    const data = await userCollection.find().toArray();
    res.json(data);
  } catch {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

// Endpoint untuk mendapatkan data dari koleksi "product"
app.get("/product", async (req, res) => {
  try {
    const data = await productCollection.find().toArray(); // Gunakan koleksi "product"
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

// Endpoint POST untuk menambahkan data ke koleksi "user"
app.post("/user", async (req, res) => {
  try {
    const result = await userCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.get("/product", async (req, res) => {
  try {
    const result = await productCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
