import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../../src/pages/Hero.jsx";
import Categories from "../components/Categories/Categories.jsx";
import BestDeals from "../components/BestDeals/BestDeals.jsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.jsx";
import Events from "../components/Events/Events.jsx";
import Sponsored from "../components/Sponsored/Sponsored.jsx";
import Footer from "../components/Layout/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
