import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // State untuk mendeteksi apakah navbar sudah di-scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // State untuk menyimpan username jika pengguna sudah login
  const [pengguna, setPengguna] = useState("");

  const navigate = useNavigate();
  const pindahHalaman = () => {
    navigate("/menu");
  };

  const pergikeKeranjang = () => {
    navigate("/cart");
  };

  const Login = () => {
    navigate("/login")
  }

  // Mengambil username dari localStorage jika sudah login (saat komponen pertama kali di-mount)
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setPengguna(storedUsername); // Menyimpan username ke state
    }
  }, []); // Hanya berjalan sekali saat komponen pertama kali di-render

  // Fungsi untuk memeriksa apakah pengguna sudah melakukan scroll (OPSIONAL)
  const handleScroll = () => {
    const scrollY = window.scrollY; // Mengambil posisi scroll Y dari jendela
    setIsScrolled(scrollY > 0); // Jika scroll lebih dari 0, set `isScrolled` ke `true`
  };

  // Menambahkan event listener untuk mendeteksi scroll (OPSIONAL)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen di-unmount (OPSIONAL)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // [] artinya hanya dijalankan sekali saat komponen di-mount

  // Fungsi untuk logout dan menghapus username dari localStorage
  const handleLogout = () => {
    localStorage.removeItem("username"); // Menghapus username dari localStorage
    setPengguna(""); // Reset state username ke string kosong
  };

  return (
    <nav
      className={`p-4 fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-blur" : "bg-navbar"
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(5px)" : "none", // Jika di-scroll, tambahkan efek blur
        position: "fixed", // Navbar akan selalu tetap di atas
        width: "100%", // Lebar penuh
        top: 0, // Tetap di bagian atas layar
        zIndex: 1, // Z-index lebih tinggi untuk memastikan navbar berada di depan elemen lain
      }}
    >
      <div className="container mx-auto flex justify-between pl-14 items-center">
        {/* Menu navigasi sebelah kiri */}
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-300 font-bold text-merah">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-300 font-bold"
              style={{ color: "#2D2D2D" }}
              onClick={pindahHalaman}
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-300 font-bold"
              style={{ color: "#2D2D2D" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-300 font-bold"
              style={{ color: "#2D2D2D" }}
              onClick={pergikeKeranjang}
            >
              Keranjang
            </a>
          </li>
        </ul>

        {/* Bagian kanan navbar: jika user sudah login, tampilkan username dan tombol logout (CONDITIONAL RENDERING DENGAN TERNARY OPERATOR */}
        {pengguna ? (
          <div className="flex items-center space-x-2">
            <p
              className="text-300 font-bold text-abu2 mr-10"
              style={{ fontSize: "16px" }}
            >
              Hello, {pengguna}
            </p>
            <button
              onClick={handleLogout}
              className="text-300 font-bold text-abu2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <a
              className="text-300 font-bold"
              style={{ color: "#2D2D2D" }}
              onClick={Login}
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
