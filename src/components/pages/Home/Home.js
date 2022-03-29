import React from "react";

import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";

import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Choose></Choose>
      <Services></Services>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
