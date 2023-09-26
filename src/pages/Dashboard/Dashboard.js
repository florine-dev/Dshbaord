import { faBell, faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Sidebar from "../../Compoments/Sidebar/Sidebar";
import "./Dashboard.css";
import user from "../../images/img3.png";
import {
  faAdd,
  faChevronLeft,
  faChevronRight,
  faFireFlameSimple,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "@ramonak/react-progress-bar";
import Elementparti2dashbord from "../../Compoments/Elementparti2dashbord/Elementparti2dashbord";
import logo from "../../images/logo.png";
import Iconprogressionp2 from "../../Compoments/Iconprogressionp2/Iconprogressionp2";
import img2 from "../../images/img2.png";

const Dashboard = () => {
  return (
    <>
      <div className="contenuDashbord displayflex ">
        <div className="sidebar ">
          <Sidebar />
        </div>
        <div className="plateforme">
          <div className="userPlateform displayflex ">
            <FontAwesomeIcon icon={faMessage} />
            <FontAwesomeIcon icon={faBell} />
            <img src={user} alt="" className="userplateformimg" />
            <p> user 12345 </p>
          </div>

          <p className="entetePlateforme">
            {" "}
            Bienvenue sur la plateforme de gestion des inventaires physique et
            immobilisation
          </p>
          <div className="parti1parti2 displayflex">
            <div className="parti1dashboard">
              <p>Statistic</p>
              <div className="assetviewExercice displayflex">
                <div className="assetviewcurrent displayflex">
                  <div className="assetProgret">
                    <div className="assetview displayflex">
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="iconasset"
                      />
                      <div className="conetenuassetview displayflex ">
                        <div className="asset">
                          <span>AssetView</span>
                          <p>user 12345</p>
                        </div>
                        <p>Exercice 2023</p>
                      </div>

                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="iconasset"
                      />
                    </div>
                    <div className="progressionasset">
                      <ProgressBar
                        completed={"40%"}
                        bgColor="grey"
                        isLabelVisible={false}
                        className="progressasset"
                      />
                    </div>
                    <div className="valeurasset displayflex">
                      <p>valeur d'immos sorties</p>
                      <p>$350.60/$4000</p>
                    </div>
                  </div>
                  <div className="currentExercice">
                    <span> 2023</span>
                    <p>current Exercice</p>
                    <span>1</span>
                    <h5>$ 350.60</h5>
                    <p>immobilisation value</p>
                  </div>
                  <div className="progreassetAll">
                    <div className="progreasset"></div>
                  </div>
                </div>
              </div>
              <div className="valeurimmobilisation">
                <p>valeur d'immobilisation par bu</p>
                <div className="icontextparti1 displayflex ">
                  <div className="nameimmo ">
                    <h6>Name</h6>
                    <div className="nameElement displayflex">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="nameelementicon"
                      />
                      <p>trasport</p>
                    </div>
                    <div className="nameElement displayflex">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="nameelementicon"
                      />
                      <p>trasport</p>
                    </div>
                    <div className="nameElement displayflex">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="nameelementicon"
                      />
                      <p>trasport</p>
                    </div>
                    <div className="nameElement displayflex">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="nameelementicon"
                      />
                      <p>trasport</p>
                    </div>
                    <div className="nameElement displayflex">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="nameelementicon"
                      />
                      <p>trasport</p>
                    </div>
                  </div>
                  <div className="typeimmo">
                    <h6>type</h6>
                    <p>Shopping</p>
                    <p>Shopping</p>
                    <p>Shopping</p>
                    <p>Shopping</p>
                    <p>Shopping</p>
                  </div>
                  <div className="dateimmo">
                    <h6>Date</h6>
                    <p>13 Det 2020 </p>
                    <p>13 Det 2020 </p>
                    <p>13 Det 2020 </p>
                    <p>13 Det 2020 </p>
                    <p>13 Det 2020 </p>
                  </div>
                  <div className="amountimmos">
                    <h6>Amount</h6>
                    <p>$75.67</p>
                    <p>$75.67</p>
                    <p>$75.67</p>
                    <p>$75.67</p>
                    <p>$75.67</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="parti2dashboard">
              <div className="liendashbordparti2 displayflex">
                <p>Lien vers</p>

                <FontAwesomeIcon icon={faAdd} />
              </div>
              <div className="blogelement displayflex">
                <Elementparti2dashbord
                  nbre={550}
                  txelement1={"Elements"}
                  txelement2={"Last"}
                  txelement3={"update"}
                  txelement4={"12 / 20 / 20"}
                  imgeelement={faGamepad}
                  txelement5={"Liste des sites "}
                  txelement6={"et bureau"}
                />
                <Elementparti2dashbord
                  nbre={550}
                  txelement1={"Elements"}
                  txelement2={"Last"}
                  txelement3={"update"}
                  txelement4={"12 / 20 / 20"}
                  imgeelement={faGamepad}
                  txelement5={"Liste des sites "}
                  txelement6={"et bureau"}
                />
                <Elementparti2dashbord
                  nbre={550}
                  txelement1={"Elements"}
                  txelement2={"Last"}
                  txelement3={"update"}
                  txelement4={"12 / 20 / 20"}
                  imgeelement={faGamepad}
                  txelement5={"Liste des sites "}
                  txelement6={"et bureau"}
                />
              </div>
              <h5>Outcome Statistics</h5>
              <div className="progiconep2">
                <Iconprogressionp2
                  iconp2={faFireFlameSimple}
                  txprogressp2={"Nombre d'immobilisations sorties"}
                />
              </div>
              <div className="immoprogremer displayflex">
                <div className="newinterbtn ">
                  <div className="newImmoEnter displayflex">
                    <div className="immotitre">
                      <img src={img2} alt="" />
                      <h6> immo 1</h6>
                    </div>
                    <div className="immotitre">
                      <img src={img2} alt="" />
                      <h6> immo 2</h6>
                    </div>
                    <div className="immotitre">
                      <img src={img2} alt="" />
                      <h6> immo 3</h6>
                    </div>
                    <div className="immotitre">
                      <img src={img2} alt="" />
                      <h6> immo 4</h6>
                    </div>
                    <div className="immotitre">
                      <img src={img2} alt="" />
                      <h6> immo 5</h6>
                    </div>
                    <div className="addnewp2">
                      <FontAwesomeIcon icon={faAdd} />
                      <h6>Add new</h6>
                    </div>
                  </div>
                  <div className="inputbtnp2 displayflex">
                    <input type="text" placeholder="0$" />
                    <button className="displayflex btnProg">
                      {" "}
                      <p>Enter value</p>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>

                <div className="programmer displayflex">
                  <p>
                    Programmer <br />
                    un inventaire <br />
                    maintenant
                  </p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="fontProgramer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
