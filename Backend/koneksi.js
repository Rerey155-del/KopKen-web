import express from "express"
import { MongoClient } from "mongodb";
import dotenv from "dotenv" // Load environment variables
import cors from "cors";

// LOAD ENVIRONTMENT VARIABLE
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()) //parsing request body sebagai JSON

const port = process.env.PORT;
const url = process.env.MONGODB;
const namaDatabase = process.env.DB_NAMA;
const namaKoleksi = process.env.NAMA_KOLEKSI;

let collection;

// middleware untuk memastikan koneksi ko mongodb
const mongoConnectionMiddleware = async (req, res, next) => {
  try {
    if (!collection) {
      const client = new MongoClient(url);
      await client.connect();
      collection = client.db(namaDatabase).collection(namaKoleksi);
      console.log("Koneksi ke MongoDB berhasil");
    }
    next(); // Lanjutkan ke endpoint berikutnya
  } catch {
    console.log("Koneksi ke MongoDB gagal");
    res.status(500).json({ message: "terjadi kesalahan koneksi ke database" });
  }
};

// Gunakan middleware pada semua route
app.use(mongoConnectionMiddleware);

app.get("/user", async (req, res) => {
  try {
    const data = await collection.find().toArray();
    res.json(data);
  } catch {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.post("/user", async(req, res)=> {
  try{
    const data = await collection.insertOne(req.body);
  } catch {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
})

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:3000/user`);
});
