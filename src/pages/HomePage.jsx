import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../../src/pages/Hero.jsx";
import Categories from "../components/Categories/Categories.jsx";
import BestDeals from "../components/BestDeals/BestDeals.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;
