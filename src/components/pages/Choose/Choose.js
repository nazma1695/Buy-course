import React from "react";
import bg from "../../../images/1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLightbulb,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "./Choose.css";
const Choose = () => {
  const phone = <FontAwesomeIcon icon={faMobile} />;
  const pen = <FontAwesomeIcon icon={faPen} />;
  const light = <FontAwesomeIcon icon={faLightbulb} />;
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <img src={bg} alt="" srcset="" />
          </div>
          <div className="col-md-6">
            <h2 className="text-start">
              Why <span style={{ color: "#F2184F" }}>Choose Us</span>?
            </h2>
            <p>
              The Cweren Law Firm is a recognized leader in landlord tenant
              representation throughout Texas.The largests professional property
              management companies the region.The largest professional property
              management companies is a recognized leader in landlord tenant
              representation throughout Texas
            </p>
            <div className="row pt-3">
              <div className="col-md-4 icon">
                <h2>{phone}</h2>
                <p>RESPONSIVE</p>
              </div>
              <div className="col-md-4 icon">
                <h2 style={{ background: "#F2184F" }}>{pen}</h2>
                <p>VALIDATION</p>
              </div>
              <div className="col-md-4 icon">
                <h2>{light}</h2>
                <p>CERTIFICATION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
