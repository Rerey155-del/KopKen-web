import React, { useEffect, useState } from "react";

const Keranjang = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load data keranjang dari localStorage saat pertama kali komponen dimuat
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items.map(item => ({ ...item, quantity: item.quantity || 1 }))); // Pastikan setiap item memiliki quantity minimal 1
  }, []);

  // Fungsi untuk menambah atau mengurangi jumlah item berdasarkan action
  const handleQuantityChange = (index, action) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        if (action === "increase") {
          return { ...item, quantity: item.quantity + 1 }; // Tambah quantity
        } else if (action === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }; // Kurangi quantity, minimal 1
        }
      }
      return item; // Kembalikan item yang tidak diubah
    });
    updateCart(updatedItems); // Perbarui keranjang dan localStorage
  };

  // Fungsi untuk menghapus item dari keranjang
  const handleRemoveItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index); // Hapus item berdasarkan indeks
    updateCart(updatedItems); // Perbarui keranjang dan localStorage
  };

  // Fungsi pembantu untuk mengupdate cartItems dan localStorage
  const updateCart = (items) => {
    setCartItems(items); // Set state cartItems
    localStorage.setItem("cart", JSON.stringify(items)); // Simpan di localStorage
  };

  return (
    <div className="bg-[#ECD6BD] min-h-screen text-white">
      <div className="grid p-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cartItems.map((item, index) => ( // Dapatkan index saat memetakan item
          <div key={item.id} className="card bg-base-100 w-100 shadow-xl bg-merah">
            <figure>
              <img src={item.gambar} alt={item.nama} />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title">{item.nama}</h2>
              <p className="text-sm">{item.harga}</p>
              <p className="text-sm">Jumlah: {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <button
                  className="btn btn-primary"
                  onClick={() => handleQuantityChange(index, "increase")} // Ganti item.id dengan index
                >
                  Tambah
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleQuantityChange(index, "decrease")} // Ganti item.id dengan index
                  disabled={item.quantity <= 1}
                >
                  Kurang
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveItem(index)} // Hapus berdasarkan index
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keranjang;
