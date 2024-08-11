import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter padding innerWidth h-container">
        <img src="src/components/Header/zilch-high-resolution-logo-black.png" alt="" />

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
