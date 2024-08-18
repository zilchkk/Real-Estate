import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        <div className="c-left flexcolStart">
          <span className="orangeText ">Our Contacts</span>
          <span className="primaryText">Easy To contact us</span>
          <span className="secondaryText">
            Our customer service is Available for 24/7 <br />
            We will help you with anything
          </span>
          <div className="modal">
            <div className="mode">
              <div className=" icon">
                <MdCall size={25} />
              </div>
              <div className="detail">
                <span>Call</span>
                <span>021 303 030 852</span>
              </div>
              <span className="buttons">Call now</span>
            </div>
            <div className="modes">
              <div className=" icon">
                <BsFillChatDotsFill size={25} />
              </div>
              <div className="detail">
                <span>Chat with us</span>
              </div>
              <span className="buttons">Chat with us</span>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
