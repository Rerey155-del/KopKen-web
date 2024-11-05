import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../styles/home.css";
import GroupImage from "../assets/Group 4.svg";
import Button from "@mui/material/Button";
import "flowbite";
import matchaExpresso from "../assets/matchaexpresso.svg";
import matchaLatte from "../assets/matchalatte.svg";
import outside from "../assets/outside.svg";
import panahKiri from "../assets/panahkiri.png";
import panahKanan from "../assets/panahkanan.png";
import founder from "../assets/founder.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import halal from "../assets/HALAL.png";
import mui from "../assets/MUI.png";
import ESPRESSO from "../assets/ESPRESSO.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import ArrowForward from "../assets/arrow_forward.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const navigate = useNavigate();
  const pindahHalaman = () => {
    navigate("/menu");
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
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
        display: "flex",
        flexDirection: "column",
      }}
      className="overflow-y-auto text-black"
    >
      <Navbar />
      <main className="flex-grow">
        <div className="px-20 mt-28">
        <div style={{ fontFamily: "Josefin Sans, sans-serif" }}>
          <div className="flex gap-6">
            <div data-aos="zoom-fade-up">
              <p className="text-merah  font-bold ">KOPI</p>
              <p className=" font-bold ">KENANGAN</p>
            </div>
            <div data-aos="zoom-fade-up" style={{ marginLeft: "35rem" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2D2D2D",
                  "&:hover": {
                    backgroundColor: "#2D2D2D",
                  },
                  borderRadius: "50px",
                  width: "200px",
                  height: "40px", // Tinggi tombol
                }}
                className="pl-7 h-10 rounded-full"
                onClick={handleClick}
              >
                About Kopi Kenangan
              </Button>

              {showText && (
                <p
                  style={{
                    marginTop: 10,
                    fontSize: "15px",
                    lineHeight: "1.5",
                    zIndex: 10,
                    position: "absolute",
                    wordWrap: "break-word",
                    width: "20em",
                  }}
                >
                  Kopi Kenangan is one of the fastest growing grab-and-go coffee
                  chain in Indonesia. The idea of Kopi Kenangan started because
                  the founders have the mission to spread their passion for
                  Indonesian coffee as a local brand from Indonesia to the rest
                  of the world.
                </p>
              )}
            </div>
          </div>

          <div>
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              src={GroupImage}
              className="mx-auto"
              style={{ marginTop: "-210px", width: "37rem" }} // Gunakan gaya inline untuk margin negatif
              alt="Group 4"
            />
          </div>

          <div
            data-aos="zoom-fade-up"
            className="flex gap-6 p"
            style={{ marginTop: "-23rem" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2D2D2D",
                "&:hover": {
                  backgroundColor: "#2D2D2D",
                },
                borderRadius: "50px",
                width: "130px",
                height: "50px",
              }}
              style={{ lineHeight: "1.5" }}
            >
              Get it on <br /> Playstore
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2D2D2D",
                "&:hover": {
                  backgroundColor: "#2D2D2D",
                },
                borderRadius: "50px",
                width: "130px",
                height: "50px", // Tinggi tombol
              }}
              color="success"
              style={{ lineHeight: "1.5" }}
            >
              Get it on <br /> App store
            </Button>
          </div>
        </div>
         {/* bar progress */}
         <div data-aos="zoom-fade-up" className="flex justify-end mt-10">
          <div className="gap-6  mr-9">
            <div>
              <span className="text-base font-medium ">Caffeine</span>
              <div
                className="bg-gray-200 rounded-full dark:bg-gray-700 mb-6"
                style={{ width: "15rem" }}
              >
                <div
                  className="bg-merah text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "80%" }}
                >
                  330 g
                </div>
              </div>
            </div>

            <div>
              <span className="text-base font-medium ">Sugar</span>

              <div
                className="bg-gray-200 rounded-full dark:bg-gray-700 mb-6"
                style={{ width: "15rem" }}
              >
                <div
                  className="bg-merah text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "20%" }}
                >
                  20 g
                </div>
              </div>
            </div>

            <div>
              <span className="text-base font-medium ">Calories</span>

              <div
                className="bg-gray-200 rounded-full dark:bg-gray-700"
                style={{ width: "15rem" }}
              >
                <div
                  className="bg-merah text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "60%" }}
                >
                  160 cal
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
       {/* ========== CAROUSEL ============= */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="px-20 "
        style={{ marginTop: "20rem" }}
      >
        <button
          className="p-2 px-8 bg-merah text-white  rounded-full mb-6 flex items-center space-x-2"
          onClick={pindahHalaman}
        >
          shop
          <img src={ArrowForward} />
        </button>
        <div
          id="controls-carousel"
          className="relative w-full bg-merah rounded-3xl"
          data-carousel="static"
          style={{ maxHeight: "400px" }}
        >
          <div className="relative h-96 overflow-hidden rounded-lg">
            {/* Item 1 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              <div className="mb-3">
                <h2
                  className="text-white font-bold text-5xl"
                  style={{ marginLeft: "10rem", marginTop: "4rem" }}
                >
                  MATCHA
                </h2>
                <h2
                  className="text-white font-bold text-5xl"
                  style={{ marginLeft: "10rem" }}
                >
                  LATTE
                </h2>
              </div>
              <img
                src={panahKiri}
                className="absolute "
                style={{ marginLeft: "23rem", marginTop: "-7rem" }}
              ></img>
              <img
                src={panahKanan}
                className="absolute"
                style={{ marginLeft: "43rem", marginTop: "-3rem" }}
              ></img>
              <p
                className="text-white text-sm "
                style={{
                  wordWrap: "break-word",
                  width: "20em",
                  marginLeft: "10rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Eu pellentesque nec
                tortor diam lorem. Enim erat eu mattis mollis ornare.
              </p>
              <button className="p-2 bg-abu2 text-white ml-[10rem] rounded-lg mt-[2rem]">
                masukkan ke keranjang
              </button>
              <p
                className="text-white text-sm"
                style={{
                  wordWrap: "break-word",
                  width: "20em",
                  marginLeft: "46rem",
                  marginTop: "-5rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Quis vitae elementum
                nunc maecenas. Elit ac turpis cras quis faucibus imperdiet.
                Hendrerit quam in vel nullam mi. Amet montes tellus amet elit
                placerat ut est mi. Diam fermentum nullam id risus.
              </p>
              <img
                src={matchaLatte}
                className="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                style={{ height: "22rem" }}
                alt="Image 1"
              />
            </div>
            {/* Item 2 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              <div className="mb-3">
                <h2
                  className="text-white font-bold text-5xl"
                  style={{ marginLeft: "10rem", marginTop: "4rem" }}
                >
                  MATCHA
                </h2>
                <h2
                  className="text-white font-bold text-5xl"
                  style={{ marginLeft: "10rem" }}
                >
                  ESPRESSO
                </h2>
              </div>
              <img
                src={panahKiri}
                className="absolute "
                style={{ marginLeft: "23rem", marginTop: "-7rem" }}
              ></img>
              <img
                src={panahKanan}
                className="absolute"
                style={{ marginLeft: "43rem", marginTop: "-3rem" }}
              ></img>
              <p
                className="text-white text-sm "
                style={{
                  wordWrap: "break-word",
                  width: "20em",
                  marginLeft: "10rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Eu pellentesque nec
                tortor diam lorem. Enim erat eu mattis mollis ornare.
              </p>
              <button className="p-2 bg-abu2 text-white ml-[10rem] rounded-lg mt-6">
                masukkan ke keranjang
              </button>
              <p
                className="text-white text-sm"
                style={{
                  wordWrap: "break-word",
                  width: "20em",
                  marginLeft: "46rem",
                  marginTop: "-4rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Quis vitae elementum
                nunc maecenas. Elit ac turpis cras quis faucibus imperdiet.
                Hendrerit quam in vel nullam mi. Amet montes tellus amet elit
                placerat ut est mi. Diam fermentum nullam id risus.
              </p>
              <img
                src={matchaExpresso}
                className="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                style={{ height: "22rem" }}
                alt="Image 1"
              />
            </div>
            {/* Item 3 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              <div className="mb-3">
                <h2
                  className="text-white font-bold text-5xl"
                  style={{ marginLeft: "10rem", marginTop: "4rem" }}
                >
                  OUTSIDE KOPI
                </h2>
                <h2
                  className="text-white font-bold text-5xl"
                  style={{ marginLeft: "10rem" }}
                >
                  KENANGAN
                </h2>
              </div>

              <img
                src={panahKanan}
                className="absolute"
                style={{ marginLeft: "45rem", marginTop: "-3rem" }}
              ></img>
              <p
                className="text-white text-sm "
                style={{
                  wordWrap: "break-word",
                  width: "20em",
                  marginLeft: "10rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Eu pellentesque nec
                tortor diam lorem. Enim erat eu mattis mollis ornare.
              </p>
              <br />
              <button className="p-2 bg-abu2 text-white ml-[10rem] rounded-lg">
                masukkan ke keranjang
              </button>
              <p
                className="text-white text-sm"
                style={{
                  wordWrap: "break-word",
                  width: "20em",
                  marginLeft: "46rem",
                  marginTop: "-4rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Quis vitae elementum
                nunc maecenas. Elit ac turpis cras quis faucibus imperdiet.
                Hendrerit quam in vel nullam mi. Amet montes tellus amet elit
                placerat ut est mi. Diam fermentum nullam id risus.
              </p>

              <img
                src={outside}
                className="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                style={{ height: "22rem" }}
                alt="Image 1"
              />
            </div>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

        {/* Main section - removed h-screen */}
        <div
          data-aos="fade-up"
          className="flex justify-around px-10"
          style={{ marginTop: "5rem" }}
        >
          <p data-aos="fade-up" className="mt-40 " style={{ fontSize: "30px" }}>
          {" "}
          <span className="text-merah">Kopi Kenangan</span> stands for Coffee
          Memories.
          <br />
          <p
            className="mt-4"
            style={{
              wordBreak: "break-word",
              width: "20em",
              fontSize: "18px",
              lineHeight: "1.5",
            }}
          >
            “At Kopi Kenangan, our dream is to serve high quality coffee, made
            with the freshest local ingredients to customers across Indonesia –
            and the rest of the world.”
          </p>
          <p className="mt-4" style={{ fontSize: "18px" }}>
            — Edward Tirtanata, CEO and Founder
          </p>
          <div className="flex gap-3 mt-3 w-full h-8">
            <img src={facebook}></img>
            <img src={linkedIn}></img>
            <img src={instagram}></img>
          </div>
        </p>

          <img
            data-aos="zoom-in"
            src={founder}
            className="mt-24 justify-end"
            style={{ height: "30rem" }}
          />

        </div>

        {/* Certification section - adjusted margins */}
        <div className="mt-20 mb-10">
          <div data-aos="fade-up" className="flex justify-center">
            <img src={halal} alt="halal" />
            <img src={mui} alt="mui" />
            <img src={ESPRESSO} alt="espresso" />
          </div>
          <div data-aos="fade-up" className="flex justify-around w-full px-10">
            <p className="text-3xl">HALAL CERTIFICATION</p>
            <p className="text-3xl text-center mr-16">
              WORLD BEST BRAND
              <br />
              WINNER 2020
            </p>
            <p className="text-3xl">COFFEE JOURNEY</p>
          </div>
          <div data-aos="fade-up" className="grid grid-cols-3 gap-16 px-16 mt-5">
            <p className="text-sm text-center">
              Grab-and-go coffee chain Kopi Kenangan strengthens its commitment to
              serve the best quality product and become the first Kopi Susu
              Kekinian to obtain Halal Certification from Majelis Ulama Indonesia.
            </p>
            <p className="text-sm text-center">
              Kopi Kenangan has been appointed as the only Brand of The Year
              winner in the Café Chain category from Indonesia by The World
              Branding Awards.
            </p>
            <p className="text-sm text-center">
              At Kopi Kenangan, we make sure you have the best coffee experience.
              We work relentlessly to guarantee we deliver on our promise. From
              harvest, tasting, roasting, and working together with the producers
              in Indonesia to produce the best crop for our customers.
            </p>
          </div>
        </div>
      </main>
      
      <Footer className="mt-auto bg-abu2" />
    </div>
  );
};

export default Home;