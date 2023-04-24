import React, { useEffect } from "react";
import MoviesHeader from "../../moviesHeader/MoviesHeader";
import "./MoviesInTheaters.css";
import Row from "../../row/Row";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadTollywoodMovies } from "../../../redux/actions/tollywoodActions";
import { loadHollywoodMovies } from "../../../redux/actions/hollywoodActions";
import { loadBollywoodMovies } from "../../../redux/actions/bollywoodActios";
import Navbar from "../../Navbar/NavBar";

const MoviesInTheaters = () => {
  const dispatch = useDispatch();
  const tollywoodMovies = useSelector((state) => state.tollywoodMovies);
  const bollywoodMovies = useSelector((state) => state.bollywoodMovies);
  const hollywoodMovies = useSelector((state) => state.hollywoodMovies);
  //console.log("hollywoodMoviesInComponent", hollywoodMovies);

  useEffect(() => {
    dispatch(loadTollywoodMovies());
    dispatch(loadHollywoodMovies());
    dispatch(loadBollywoodMovies());
  }, [dispatch]);
  return (
    <div>
      <nav>
        <Navbar color={true} />
      </nav>
      <header>
        <MoviesHeader
          title="Movie in Theaters"
          filterLanguages={true}
          choose={true}
        />
      </header>
      <section>
        <div className="row-top">
          <Row data={tollywoodMovies} title="Tollywood" />
        </div>
        <div className="row-top">
          <Row data={bollywoodMovies} title="Bollywood" />
        </div>
        <div className="row-top">
          <Row data={hollywoodMovies} title="Hollywood" />
        </div>
      </section>
      <footer style={{ marginTop: "10rem" }}>
        <Footer moviesFooter={true} />
      </footer>
    </div>
  );
};

export default MoviesInTheaters;
