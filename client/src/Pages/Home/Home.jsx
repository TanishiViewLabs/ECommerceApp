import React from "react";
import "./Home.css";
import Gender from "../../Components/Filters/Gender/Gender";
import Category from "../../Components/Filters/Category/Category";
import Pricerange from "../../Components/Filters/Pricerange/Pricerange";
// import Productpage from "../Products/Productpage";
import ProductsPage from "../Products/ProductsPage";
// import ProductsPage from "../Product/ProductsPage";

function Home() {
  return (
    <div className="home-main">
      <div className="filters">
        <h6 className="text-center mt-3">FILTERS</h6>
        <hr />
        <Gender />
        <Category />
        <Pricerange />
      </div>
      <div className="container">
        <div className="row">
          <ProductsPage />
        </div>
      </div>
    </div>
  );
}

export default Home;
