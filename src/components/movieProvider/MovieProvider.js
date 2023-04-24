import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTollywoodMovies } from "../../redux/actions/tollywoodActions";
import { loadHollywoodMovies } from "../../redux/actions/hollywoodActions";
import { loadBollywoodMovies } from "../../redux/actions/bollywoodActios";

export const MovieContext = createContext();

const MovieProvider = (props) => {
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
    <MovieContext.Provider
      value={{ tollywoodMovies, bollywoodMovies, hollywoodMovies }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
