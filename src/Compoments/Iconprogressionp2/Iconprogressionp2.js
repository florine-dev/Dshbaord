import { faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Iconprogressionp2.css";

const Iconprogressionp2 = ({ txprogressp2, iconp2 }) => {
  return (
    <div>
      <div className="Iprogressionp2 displayflex">
        <div className="iconp2">
          <FontAwesomeIcon icon={iconp2} />
        </div>
        <div className="progressionp2txt">
          <p>{txprogressp2}</p>
        </div>
      </div>
    </div>
  );
};

export default Iconprogressionp2;
