import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Menu from "./pages/Menu.jsx"
import Keranjang from "./pages/Keranjang.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route ke halaman Home */}
        <Route path="/" element={<Home />} />
        
        {/* Route ke halaman Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Keranjang />} />
        

      </Routes>
    </Router>
  );
};

export default App;
