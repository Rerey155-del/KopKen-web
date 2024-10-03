import React from "react";
import HalalFooter from "../assets/halalFooter.png";
import linkedinFooter from "../assets/linkedinFooter.svg";
import facebookFooter from "../assets/facebookFooter.svg";
import instagramFooter from "../assets/instagramFooter.svg";
import Maps from "../assets/Maps.png";

const Footer = ({ className }) => {
  return (
    <div className={`grid grid-cols-2 p-16 mt-8 w-full ${className}`}>
      <div className="text-white ">
        <img src={HalalFooter} />
        <p
          className="mt-9"
          style={{ width: "20em", fontSize: "18px", lineHeight: "1.5" }}
        >
          Hak Cipta @Reyhan Maulana
        </p>
        <div className="flex gap-3 size-6 mt-4">
          <img src={linkedinFooter} />
          <img src={facebookFooter} />
          <img src={instagramFooter} />
        </div>
      </div>
      <div className="text-white ">
      <p className="text-2xl underline">
          Our Location
        </p>
        <p className="text-sm mt-3">Jl. Pakubuwono VI No.107, RT.11/RW.2, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120</p>
        <img className="mt-5" src={Maps}/>
      </div>
    </div>
  );
};

export default Footer;
