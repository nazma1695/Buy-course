import React from "react";
// import bg from "../../../images/bg3.jpg";
import "./Banner.css";

const bannerBg = {
  // background: `url(${bg})`,
  // height: 500,
};

const Banner = () => {
  return (
    <div className="bannerImg">
      <div className="bannerText text-start py-5">
        <h2>Education For Everyone</h2>
        <p>We provides always our best services for our clients and always</p>
        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

export default Banner;
