import React from "react";
import OTT from "../movies/moviesInHome/otts/OTT";
import MoviesHeader from "../moviesHeader/MoviesHeader";
import Navbar from "../Navbar/NavBar";
import { useContext } from "react";
import { MovieContext } from "../movieProvider/MovieProvider";
import Row from "../row/Row";
import Footer from "../Footer/Footer";

const Shows = () => {
  const { tollywoodMovies, bollywoodMovies, hollywoodMovies } =
    useContext(MovieContext);
  return (
    <div>
      <nav>
        <Navbar color={true} />
      </nav>
      <header>
        <MoviesHeader title="Most Popular Tv Shows" filterLanguages={true} />
      </header>
      <section>
        <OTT />
      </section>
      <section style={{ marginTop: "-154px" }}>
        <div className="row-top">
          <Row data={tollywoodMovies} />
        </div>
        <div className="row-top">
          <Row data={bollywoodMovies} />
        </div>
        <div className="row-top">
          <Row data={hollywoodMovies} />
        </div>
      </section>
      <footer style={{ marginTop: "193px" }}>
        <Footer moviesFooter={true} />
      </footer>
    </div>
  );
};

export default Shows;
