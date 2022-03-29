import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Subscribe.css";
const Subscribe = () => {
  const mail = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <div style={{ background: "#F2184F" }}>
      <div className="container">
        <div className="row py-5 subscribe">
          <div className="col-md-6">
            <h2>{mail} SUBSCRIBE TO OUR NEWSLETTER</h2>
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Your Email" />
            {/* <input type="button" value="Subscribe" /> */}
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
