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
import DemoPage from './components/authentication/Demopage'

function App() {

  return (
    <Provider store={store}>
      <MovieProvider>
        <div className="App">
          <Router>
            <Routes>
            <Route exact path="/" element={<Home />} /> 
              <Route
                exact path="/movies-in-theaters"
                element={<MoviesInTheaters />}
              />
              <Route exact path="/movies-in-home" element={<MoviesInHome />} />
              <Route exact path="/shows" element={<Shows />} />
              <Route exact path="/opening-this-week" element={<OpeningThisWeek />} />
              <Route exact path="/up-comeing-movies" element={<UpComeingMovies />} />
              <Route exact path="/languages" element={<Languages />} />
              <Route exact path="/home" element={<RedHome />} />
              <Route exact path="/demopage" element={<DemoPage />} />
            </Routes>
          </Router>
        </div>
      </MovieProvider>
    </Provider>
  );
}

export default App;
