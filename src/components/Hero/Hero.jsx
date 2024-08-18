import React from "react";
import "./Hero.css";

import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" innerwidth flexCenter hero-container ">
        <div className="flexcolStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Affordable <br /> Property
            </h1>
          </div>
          <div className=" flexcolStart hero-description">
            <span>Find The affordable place</span>
          </div>
          <div className="flexCenter searchbar">
            <HiLocationMarker color="blue" size={25} />
            <input type="text" />
            <button className="button">Search </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexcolStart stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexcolStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexcolStart stat">
              <span>
                <CountUp end={28}/>
                <span>+</span>
              </span>
              <span  className="secondaryText">Awards Wining</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-main.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
