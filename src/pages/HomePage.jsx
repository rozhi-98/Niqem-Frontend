import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../../src/pages/Hero.jsx";
import Categories from "../components/Categories/Categories.jsx";
import BestDeals from "../components/BestDeals/BestDeals.jsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
