import React, { useEffect, useState } from "react";
import axios from "axios";
import keranjang from "../assets/shopping_cart.svg";
import keranjangg from "../assets/kerrranjang.png";
import AOS from "aos";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  // ============ STATE MANAGEMENT ===================
  const [products, setProducts] = useState([]); // State untuk menyimpan produk
  const [setLoading] = useState(true); // State untuk loading
  const navigate = useNavigate();

  // ============== EFFECT HOOK animasi AOS==================
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // ================== DATA FETCHING =====================
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://147.185.221.23:42266:2030/product");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cartItems.findIndex(
      (item) => item.nama === product.nama
    );

    if (existingProductIndex !== -1) {
      cartItems[existingProductIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const pergikeKeranjang = () => {
    navigate("/cart");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#ECD6BD] min-h-screen flex flex-col text-black">
      <div className="flex-grow">
        <div className="flex justify-between items-center px-10 pt-6">
          <h1
            className="text-lg font-extrabold"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            Menu terenak kami, silahkan dilihat
          </h1>
          <button onClick={pergikeKeranjang} className="ml-auto">
            <img src={keranjangg} className="size-10" />
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-4 p-8 gap-8 text-white"
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 w-64 shadow-xl bg-merah"
            >
              <figure>
                <img src={product.gambar} alt={product.nama} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.nama}</h2>
                <p className="text-sm">{product.harga}</p>
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
      <Footer className="bg-abu2" />
    </div>
  );
};

export default Menu;
