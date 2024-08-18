import React from "react";
import "./Header.css";

const Header = () => {
const Logourl =  "https://media.istockphoto.com/id/864768664/vector/house-icon.jpg?s=612x612&w=0&k=20&c=rjn0h1GC_dBfeMT6I8RO8jPZ7KR3BaKhS2HQeAeq1Kk=";


  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth h-container">
        <div className="imgcon">
        <img src="./logo.png" alt="" className="logo"/>
        </div>
        

        <div className="flexCenter h-menu">
          <a href="">Residence</a>
          <a href="">Our values</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
