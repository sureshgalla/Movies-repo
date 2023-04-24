import React, { useContext } from "react";
import Footer from "../../Footer/Footer";
import { MovieContext } from "../../movieProvider/MovieProvider";
import MoviesRow from "../../movieRows/MoviesRow";
import MoviesHeader from "../../moviesHeader/MoviesHeader";
import Navbar from "../../Navbar/NavBar";
import ViewMore from "../../view-more/ViewMore";

const OpeningThisWeek = () => {
  const { tollywoodMovies, bollywoodMovies, hollywoodMovies } =
    useContext(MovieContext);
  return (
    <div>
      <nav>
        <Navbar color={true} />
      </nav>
      <header>
        <MoviesHeader
          title="Opening this week in Hyderabad"
          filterLanguages={true}
          choose={true}
          opeanThisWeek={true}
        />
      </header>
      <section style={{ marginLeft: "200px", marginTop: "155px" }}>
        <MoviesRow data={tollywoodMovies} />
        <MoviesRow data={bollywoodMovies} />
        <MoviesRow data={hollywoodMovies} />
      </section>
      <section style={{ marginTop: "70px" }}>
        <ViewMore />
      </section>
      <footer>
        <Footer moviesFooter={true} />
      </footer>
    </div>
  );
};

export default OpeningThisWeek;
