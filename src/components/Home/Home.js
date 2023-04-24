import React, { useEffect } from "react";
import Navbar from "../Navbar/NavBar";
import Header from "../Header/Header";
import Section from "../section/Section";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { laodMovies } from "../../redux/actions/movieActions";
import { loadNowPlaying } from "../../redux/actions/NowPlayingAction";
import { loadMostPopularMovies } from "../../redux/actions/MostPopularMoviesAction";
import { loadUpComingMovies } from "../../redux/actions/UpComingMoviesAction";
import { loadPopularWebSeries } from "../../redux/actions/PopularWebSeriesAction";
import { loadTrailerContent } from "../../redux/actions/TrailersAction";

const Home = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  const mostPopularMovies = useSelector((state) => state.mostPopularMovies);
  const upComingMovies = useSelector((state) => state.upComingMovies);
  const popularWebSeries = useSelector((state) => state.popularWebSeries);
  const trailerContent = useSelector((state) => state.trailerContent);
  //console.log("footerContent", footerContent);

  useEffect(() => {
    dispatch(laodMovies());
    dispatch(loadNowPlaying());
    dispatch(loadMostPopularMovies());
    dispatch(loadUpComingMovies());
    dispatch(loadPopularWebSeries());
    dispatch(loadTrailerContent());
  }, [dispatch]);

  return (
    <div>
      <Navbar color={false} />
      <header>
        <Header movie={movie} />
      </header>
      <section>
        <Section
          nowPlaying={nowPlaying}
          mostPopularMovies={mostPopularMovies}
          upComingMovies={upComingMovies}
          popularWebSeries={popularWebSeries}
          trailerContent={trailerContent}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
