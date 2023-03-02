import React, { useEffect } from "react";
//import ".antd/dist/antd.css";
import { Carousel } from "antd";
import "./Header.css";
import MovieImg from "./IMG/Movie_Poster.png";
import { useDispatch } from "react-redux";
import { laodMovies } from "../../redux/actions/actions";

const Header = () => {
  const dispatch = useDispatch();
  //const { movies } = useSelector((state) => state);
  //console.log("HeaderComponent99", movies.image);

  useEffect(() => {
    dispatch(laodMovies());
  });
  return (
    <div className="col-md-12">
      <div className="col-md-6">
        <Carousel>
          <div>
            <img src={MovieImg} alt="1" />
          </div>
          <div>
            <img src={MovieImg} alt="2" />
          </div>
          <div>
            <img src={MovieImg} alt="3" />
          </div>
          <div>
            <img src={MovieImg} alt="4" />
          </div>
        </Carousel>
      </div>
      <div className="header col-md-6">
        <div className="header-content">
          <h1 className="movie-name">Varasudu</h1>
          <p className="movie-content">
            Thalapathy Vijay, who enjoys a good following in Telugu states, has
            now come up with a family entertainer Vaarasudu. Directed by Vamshi
            Paidipally, the movie has Rashmika Mandanna as the female lead. The
            film hit the screens today, and let’s see how it is.
          </p>
          <h1 className="rating">Rate Movie</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
