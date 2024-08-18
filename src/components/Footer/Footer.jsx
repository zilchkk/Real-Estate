import React from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="f-center">
        <div className="f-left">
          <div className="oranges-circle"></div>
          <span className="primaryText h1">HouseTour</span>
          <span className="secondaryText">
            Our Vision To make all people <br />
          </span>
          <span className="secondaryText">the best place to live wit them</span>
        </div>
        <div className="n-center">
          <h1 className="MainsText">For True 1's</h1>
          <span className="secondText">
            This newsletter for the one who wants true mate
          </span>
          <div className="Email-input">
            <MdEmail color="blue" size={25} />
            <input type="Email" placeholder="Email for regular Update" />
            <button className="button">Sent</button>
          </div>
        </div>
        <div className="f-right">
          <span className="primaryText">Information</span>
          <span className="secondarytext">143 New York, FL5467, USA</span>
          <div className="f-menu">
            <a href="">Residence</a>
            <a href="">Our values</a>
            <a href="">Contact us</a>
            <a href="">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};
