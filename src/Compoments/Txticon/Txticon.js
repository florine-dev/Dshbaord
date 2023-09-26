import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Txticon.css";

const Txticon = ({ icon, text, color, icon1, icon2, p1, p2, p3 }) => {
  // const [afficheP, setafficheP] = useState(false);

  // const handonclick = () => {
  //   setafficheP(true);
  // };
  // const paragrapheStyle = () => {
  //   display: showParagraph ? 'block' : 'none'
  //};

  return (
    <>
      <div className="texticoniconp">
        <div className="texticonicon displayflex ">
          <div className="texticon displayflex ">
            <FontAwesomeIcon
              icon={icon}
              color={color}
              className="iconsidebar"
            />
            <p>{text}</p>
          </div>
          <div className="iconsuplementside">
            <FontAwesomeIcon icon={icon2} className="iconsup2" />
            <FontAwesomeIcon icon={icon1} className="iconsup1" />
          </div>
        </div>
        <div className="elementcache">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>
      </div>
    </>
  );
};

export default Txticon;
