import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Elementparti2dashbord.css";

const Elementparti2dashbord = ({
  nbre,
  txelement1,
  txelement2,
  txelement3,
  txelement4,
  txelement5,
  txelement6,
  imgeelement,
}) => {
  return (
    <div>
      <div className="contenuElement  ">
        <div className="nbreelement displayflex ">
          <span> {nbre} </span>
          <p>{txelement1} </p>
        </div>
        <p className="pElement"> {txelement2} </p>
        <p className="pElement"> {txelement3} </p>
        <p className="pElement"> {txelement4} </p>
        <FontAwesomeIcon icon={imgeelement} className="imgelement " />
        <p className="bureauElement">{txelement5} </p>
        <p>{txelement6} </p>
      </div>
    </div>
  );
};

export default Elementparti2dashbord;
