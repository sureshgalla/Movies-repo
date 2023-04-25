import "./App.css";
import { Provider } from "react-redux";
import MovieProvider from "./components/movieProvider/MovieProvider";
import store from "./redux/store";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesInTheaters from "./components/movies/moviesInTheaters/MoviesInTheaters";
import MoviesInHome from "./components/movies/moviesInHome/MoviesInHome";
import Shows from "./components/shows/Shows";
import OpeningThisWeek from "./components/movies/opening-this-week/OpeningThisWeek";
import UpComeingMovies from "./components/movies/up-coming-movies/UpComeingMovies";
import Languages from "./components/languages/Languages";
import RedHome from "./components/redHome/Home";

function App() {
  return (
    <Provider store={store}>
      <MovieProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/movies-in-theaters"
                element={<MoviesInTheaters />}
              />
              <Route path="/movies-in-home" element={<MoviesInHome />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/opening-this-week" element={<OpeningThisWeek />} />
              <Route path="/up-comeing-movies" element={<UpComeingMovies />} />
              <Route path="/languages" element={<Languages />} />
              <Route path="/home" element={<RedHome />} />
            </Routes>
          </Router>
        </div>
      </MovieProvider>
    </Provider>
  );
}

export default App;
