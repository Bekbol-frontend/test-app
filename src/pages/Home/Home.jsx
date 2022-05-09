import React from "react";
import { Search, Products } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <section className="section-home">
      <div className="container">
        <Search />
        <Products />
      </div>
    </section>
  );
};

export default Home;
