import React, { useState } from "react";
import "aos/dist/aos.css"; // Impor CSS AOS
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

import "animate.css";
import logo from "../assets/Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Untuk menyimpan pesan error
  const [loading, setLoading] = useState(false); // Untuk status loading

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validasi sederhana sebelum login
    if (username.trim() === "" || password.trim() === "") {
      setError("Username dan password tidak boleh kosong");
      return;
    }

    setLoading(true); // Mulai loading

    try {
      // Kirim GET request dengan username dan password
      const response = await axios.get("http://147.185.221.23:42266:2030/user", {
        username,
        password,
      });

      // Cek apakah ada pengguna yang cocok
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      // ========= VALIDASI AGAR BISA TERSIMPAN DI LOCAL STORAGE ==================
      if (user) {
        // Jika login berhasil, arahkan ke halaman home
        localStorage.setItem("username", username);
        navigate("/"); // Arahkan ke halaman home
      } else {
        // Jika login gagal, tampilkan pesan error
        setError("Username atau password salah");
      }
    } catch (error) {
      setError("Terjadi kesalahan pada server. Silakan coba lagi.");
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Akhiri status loading
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#ECD6BD",
          minHeight: "100vh",
          width: "100%",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          overflowX: "hidden",
          fontFamily: "Josefin Sans, sans-serif",
        }}
      >
        <div
          className="bg-merah rounded-full justify-center animate__animated animate__backInDown text-center mx-auto"
          style={{ width: "35rem", height: "35rem", marginTop: "3rem" }}
        >
          <div className="flex justify-center pt-18">
            <img
              src={logo}
              style={{ width: "150px", height: "150px" }}
              alt="Logo"
            />
          </div>

          <p className="pt-19 text-white" style={{ fontSize: "40px" }}>
            Welcome
          </p>

          <div className="mt-9 justify-center">
            <TextField
              id="outlined-basic"
              label="Nama Pengguna"
              variant="outlined"
              size="small"
              className="bg-white rounded"
              style={{ width: "20rem" }}
              InputLabelProps={{
                style: { fontFamily: "Josefin Sans, sans-serif" },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <FormControl
              sx={{ m: 1, width: "20rem" }}
              variant="outlined"
              size="small"
              className="bg-white rounded"
            >
              <InputLabel
                htmlFor="outlined-adornment-password"
                style={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
              />
            </FormControl>
          </div>

          <div className="mt-10 text-white">
            <Button
              variant="contained"
              size="medium"
              color="success"
              onClick={handleLogin}
              disabled={loading} // Disable button saat loading
            >
              {loading ? "Loading..." : "Login"}
            </Button>
            {error && (
              <p
                style={{ color: "white", fontSize: "12px", marginTop: "14px" }}
              >
                {error}
              </p>
            )}{" "}
            {/* Tampilkan pesan error */}
            <div className="mt-4 text-center">
              <a href="#" className="text-s">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
