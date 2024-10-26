import React, { useEffect, useState } from "react";
import axios from "axios";
import keranjang from "../assets/shopping_cart.svg";
import AOS from "aos";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  // ============ STATE MANAGEMENT ===================
  const [products, setProducts] = useState([]); // State untuk menyimpan produk
  const [loading, setLoading] = useState(true); // State untuk loading
  const navigate = useNavigate();

  // ============== EFFECT HOOK animasi AOS==================
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // ================== DATA FETCHING =====================
  // Fetch data produk dari API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2030/product"); // Ganti dengan URL API kamu
      setProducts(response.data);
      setLoading(false); // Set loading ke false setelah data diterima
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false); // Set loading ke false jika terjadi kesalahan
    }
  };
  const handleAddToCart = (product) => {
    // Ambil item dari localStorage atau buat array baru jika kosong
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Cari produk dalam cartItems yang memiliki nama yang sama dengan produk yang akan ditambahkan
    const existingProductIndex = cartItems.findIndex((item) => item.nama === product.nama);
  
    if (existingProductIndex !== -1) {
      // Jika produk sudah ada, tambahkan jumlahnya
      cartItems[existingProductIndex].quantity += 1;
    } else {
      // Jika produk belum ada, tambahkan produk baru dengan quantity awal 1
      cartItems.push({ ...product, quantity: 1 });
    }
  
    // Simpan kembali data keranjang ke localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
    
    // Navigasi ke halaman keranjang
    navigate("/cart");
  };
  
  // ============== EFFECT HOOK API==================
  // Panggil fetchProducts saat komponen pertama kali dimuat
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-[#ECD6BD] min-h-screen text-black">
      <div>
        <h1
          className="flex justify-center items-center pt-6 text-lg font-extrabold "
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          Menu terenak kami, silahkan dilihat
        </h1>
        <div
          data-aos="fade-up"
          className="grid grid-cols-4 p-8 gap-8 text-white "
        >
          {/* pengambilan data adengan melakukan mapping */}
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 w-64 shadow-xl bg-merah"
            >
              <figure>
                <img src={product.gambar} alt={product.nama} />{" "}
                {/* Ganti dengan URL gambar dari produk */}
              </figure>
              <div className="card-body ">
                <h2 className="card-title ">{product.nama}</h2>{" "}
                {/* Ganti dengan nama produk dari API */}
                <p className="text-sm">{product.harga}</p>{" "}
                {/* Ganti dengan deskripsi produk dari API */}
                <div className="flex gap-4 justify-end mt-2">
                  <button className="btn btn-abu2 text-white">Beli</button>
                  <button
                    className="btn btn-abu2"
                    onClick={() => handleAddToCart(product)}
                  >
                    <img src={keranjang} alt="Keranjang" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up">
        <Footer className="bg-abu2" />;
      </div>
    </div>
  );
};

export default Menu;
