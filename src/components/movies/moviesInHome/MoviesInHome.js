import React, { useContext } from "react";
import MoviesHeader from "../../moviesHeader/MoviesHeader";
import MoviesRow from "../../movieRows/MoviesRow";
import { MovieContext } from "../../movieProvider/MovieProvider";
import ViewMore from "../../view-more/ViewMore";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/NavBar";
import OTT from "./otts/OTT";
import "./MoviesInHome.css";

const languages = [
  "Telugu",
  "Hindi",
  "English",
  "Tamil",
  "Malayalam",
  "Gujarati",
  "Bengali",
  "Bhojpuri",
  "Odhia",
  "Kanada",
];

const gener = [
  "Action",
  "Adventure",
  "Animation",
  "Animation",
  "Anime",
  "Biography",
  "Comedy",
  "Crime",
  "Drama",
  "Entertainment",
  "Horror",
  "Mystery and thriller",
  "Sci-fi",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const format = ["3D", "2D", "IMAX 2D"];

const MoviesInHome = ({ upcomeingMovies, filter }) => {
  const { tollywoodMovies, bollywoodMovies, hollywoodMovies } =
    useContext(MovieContext);
  return (
    <div>
      <nav>
        <Navbar color={true} />
      </nav>
      <header>
        <MoviesHeader
          title={
            upcomeingMovies ? "Upcoming Movies in Hyderabad" : "Movie in Home"
          }
          filterLanguages={true}
          choose={true}
          upcomeingMovies={true}
          filter={filter}
        />
      </header>
      {upcomeingMovies ? (
        <section>
          <h1 className="choose-language">Choose Language</h1>
          <div className="choose-language-container">
            {languages.map((language, i) => (
              <span key={i} className={`choose-language-items item-${i + 1}`}>
                {language}
              </span>
            ))}
          </div>
          <div className="choose-language-border"></div>

          <h1 className="gener">Gener</h1>
          <div className="gener-container">
            {gener.map((item) => (
              <span className="gener-items">{item}</span>
            ))}
          </div>
          <div className="gener-right-border"></div>
          <h1 className="month">Month:</h1>
          <div className="month-container">
            {months.map((month, i) => (
              <span key={i} className="month-list">
                {month}
              </span>
            ))}
          </div>
          <div className="month-right-border"></div>
          <h1 className="format">Format</h1>
          <div className="format-container">
            {format.map((list, i) => (
              <span key={i} className="format-list">
                {list}
              </span>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <OTT />
        </section>
      )}

      <section
        style={{
          marginLeft: "200px",
        }}
      >
        <MoviesRow data={tollywoodMovies} upcomeingMovies />
        <MoviesRow data={bollywoodMovies} upcomeingMovies />
        <MoviesRow data={hollywoodMovies} upcomeingMovies />
      </section>
      <div style={{ marginTop: "50px" }}>
        <ViewMore />
      </div>
      <footer>
        <Footer moviesFooter={true} />
      </footer>
    </div>
  );
};

export default MoviesInHome;
