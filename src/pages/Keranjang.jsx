import React, { useEffect, useState } from "react";
import Add from "../assets/plus.png";
import Remove from "../assets/remove.png";
import Delete from "../assets/delete.png";

const Keranjang = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const fixedPrice = 50000; // Harga tetap untuk setiap item

  // Load data keranjang dari localStorage saat pertama kali komponen dimuat
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(
      items.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
        harga: fixedPrice, // Set harga tetap
      }))
    );
  }, []);

  // Hitung subtotal dan total setiap kali cartItems berubah
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.harga * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal); // Misalkan total sama dengan subtotal tanpa biaya tambahan
  }, [cartItems]);

  // Fungsi untuk menambah atau mengurangi jumlah item berdasarkan action
  const handleQuantityChange = (index, action) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        if (action === "increase") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    updateCart(updatedItems);
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleRemoveItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    updateCart(updatedItems);
  };

  // Fungsi pembantu untuk mengupdate cartItems dan localStorage
  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  return (
    <div className="bg-[#ECD6BD] min-h-screen text-white">
      <div className="flex justify-between items-center px-10 pt-6">
        <h1
          className="text-xl font-extrabold text-black"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          Keranjang
        </h1>
      </div>
      <div className="grid p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="card bg-base-100 w-45 shadow-xl bg-merah"
          >
            <figure>
              <img src={item.gambar} alt={item.nama} />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title">{item.nama}</h2>
              <p className="text-sm">Rp {item.harga.toLocaleString()}</p>
              <p className="text-sm">Jumlah : {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <button
                  className="btn rounded-full"
                  onClick={() => handleQuantityChange(index, "increase")}
                >
                  <img src={Add} className="size-5" alt="Tambah" />
                </button>
                <button
                  className="btn rounded-full"
                  onClick={() => handleQuantityChange(index, "decrease")}
                  disabled={item.quantity <= 1}
                >
                  <img src={Remove} className="size-5" alt="Kurangi" />
                </button>
                <button
                  className="btn rounded-full"
                  onClick={() => handleRemoveItem(index)}
                >
                  <img src={Delete} className="size-5" alt="Hapus" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-10 pb-14">
        <div className="card bg-base-100 w-full shadow-xl h-35">
          <div className="card-body">
            <h2 className="card-title">Subtotal: Rp {subtotal.toLocaleString()}</h2>
            <h2 className="card-title">Total: Rp {total.toLocaleString()}</h2>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
