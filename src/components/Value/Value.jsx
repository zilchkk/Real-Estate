import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "./Acc";
import { useState } from "react";

const Value = () => {
const [className, setClassName] = useState("")

  return (
    <>
      <section className="v-wrapper">
        <div className="innerWidth v-conatiner padding flexCenter">
          <div className="v-left flexCenter">
            <div className="image-container">
              <img src="./value.jpg" alt="" />
            </div>
          </div>
          <div className="v-right flexColStart">
            <span className="orangeText"> Our Value</span>
            <span className="primaryText">Value We give to You</span>
            <span className="secondaryText">
              We always ready to help by providing the best for you.. <br />
              We belive a Good place to live can make your life better
            </span>

            <Accordion
              className="accordion innerWidth"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i}>
                    <AccordionItemHeading  className="accordionItemHeading">
                      <AccordionItemButton  className="accButton">
                        <AccordionItemState>
                            {({expanded}) => expanded ? setClassName("expand") : setClassName("collapse") }
                        </AccordionItemState>
                        <div className="accIcon">{item.icon}</div>
                        <span className="primaryText heading">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accPanel">
                        <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
