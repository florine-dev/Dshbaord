import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  fa2,
  faAngleUp,
  faCalculator,
  faCalendar,
  faFile,
  faFileContract,
  faLightbulb,
  faMoneyCheck,
  faMoon,
  faQuestion,
  faRepeat,
  faRightToBracket,
  faScaleBalanced,
  faScrewdriverWrench,
  faSun,
  faWarehouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import user from "../../images/img3.png";
import Txticon from "../Txticon/Txticon";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="contenuSirdebar ">
        <div className="profilUser displayflex">
          <div className="profil displayflex">
            <img src={user} alt="" />
            <div className="textprofil">
              <span>User 12345</span>
              <p>User12345@florinekitio237.com</p>
            </div>
          </div>

          <FontAwesomeIcon icon={faXmark} className="xmart" color="white  " />
        </div>
        <div className="contenutexticon">
          <Txticon
            icon={faCalendar}
            text={"date du dernier IP:30/04/2023"}
            color={"white"}
            icon2={faAngleUp}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />

          <Txticon
            icon={faFileContract}
            text={"Fichier"}
            color={"white"}
            icon2={faAngleUp}
            icon1={fa2}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />

          <Txticon
            icon={faPenToSquare}
            text={"Edition"}
            color={"white"}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />
          <Txticon
            icon={faRepeat}
            text={"mouvement"}
            color={"white"}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />

          <Txticon
            icon={faScaleBalanced}
            text={"Comptabilite"}
            color={"white"}
            icon2={faAngleUp}
            icon1={fa2}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />

          <Txticon
            icon={faCalculator}
            text={"Comptabilite  matiere"}
            color={"white"}
            icon2={faAngleUp}
            icon1={fa2}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />

          <Txticon
            icon={faMoneyCheck}
            text={"service d'achat"}
            color={"white"}
            icon2={faAngleUp}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />
          <Txticon
            icon={faFile}
            text={"Rapport"}
            color={"white"}
            icon2={faAngleUp}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />
          <Txticon
            icon={faScrewdriverWrench}
            text={"Outil"}
            color={"white"}
            icon2={faAngleUp}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />
          <Txticon
            icon={faRightToBracket}
            text={"deconnextionde"}
            color={"white"}
            icon2={faAngleUp}
            p1={"Dashbord"}
            p2={"Societe"}
            p3={"Exercice"}
          />
        </div>
        <br />

        <hr className="lignesidebar" />
        <div className="interogatinsideboar displayflex">
          <FontAwesomeIcon icon={faQuestion} className="question" />
          <p>colour scheme</p>
        </div>
        <div className="lightDarksidebar displayflex">
          <div className="light displayflex">
            <FontAwesomeIcon icon={faSun} />
            <p>Light</p>
          </div>
          <div className="darks displayflex">
            <FontAwesomeIcon icon={faMoon} />
            <p>Dark</p>
          </div>
        </div>
        <span className="footersidebar">Copyright @ AssetView</span>
      </div>
    </>
  );
};

export default Sidebar;
