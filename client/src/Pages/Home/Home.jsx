import React from "react";
import "./Home.css";
import Gender from "../../Components/Filters/Gender/Gender";
import Category from "../../Components/Filters/Category/Category";
import Pricerange from "../../Components/Filters/Pricerange/Pricerange";

function Home() {
  return (
    <div className="home-main">
      <div className="filters col-md-2">
        <h6 className="text-center mt-3">FILTERS</h6>
        <hr />
        <Gender />
        <Category />
        <Pricerange />
      </div>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Home page</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
