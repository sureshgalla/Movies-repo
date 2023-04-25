import React from "react";
import Navbar from "../Navbar/NavBar";
import HomeHeader from "./HomeHeader/HomeHeader";

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar color={true} />
      </nav>
      <header>
        <HomeHeader />
      </header>
    </div>
  );
};

export default Home;
