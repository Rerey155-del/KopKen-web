import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [username, setUsername] = useState("");

  // Mengambil username dari localStorage jika sudah login
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
  }
 
  return (
    <nav
      className={`p-4 fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? 'bg-blur' : 'bg-navbar'
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(5px)" : "none",
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1,
      }}
    >
      <div className="container mx-auto flex justify-between pl-14 items-center">
        {/* Menu sebelah kiri */}
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-300 hover:text-red font-bold text-merah">Home</a>
          </li>
          <li>
            <a href="#" className="text-300 hover:text-red font-bold" style={{ color: "#2D2D2D" }}>Product</a>
          </li>
          <li>
            <a href="#" className="text-300 hover:text-red font-bold" style={{ color: "#2D2D2D" }}>About</a>
          </li>
          <li>
            <a href="#" className="text-300 hover:text-red font-bold" style={{ color: "#2D2D2D" }}>Mobile Apps</a>
          </li>
        </ul>

        {/* ===============  Tampilkan nama pengguna sebelah kanan jika berhasil login ================ (CONDITIONAL RENDERING DENGAN TERNARY OPERATOR)*/}
        {username ? (
          <div className="flex items-center space-x-2">
            <p className="text-300 font-bold text-abu2 mr-10" style={{fontSize : "16px"}}>
              Hello, {username}
            </p>
            
            <button onClick={handleLogout} className="text-300 font-bold text-abu2">Logout</button>
          </div>
        ) : (
          <div>
            <a href="/login" className="text-300 hover:text-red font-bold" style={{ color: "#2D2D2D" }}>
              Login
            </a>
          </div>
        )}
      {/* end login */}
      </div>
    </nav>
  );
};

export default Navbar;
