import React from "react";
import "./Languages.css";
import NavBar from "../Navbar/NavBar";
import languageLogo from "./img.png";

const Languages = () => {
  const data = [
    {
      id: 1,
      language: "Telugu",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 2,
      language: "Malayalam",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 3,
      language: "Gujarati",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 4,
      language: "Bengali",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 5,
      language: "Tamil",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 6,
      language: "English",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 7,
      language: "Hindi",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 8,
      language: "Malayalam",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
    {
      id: 9,
      language: "Malayalam",
      movies: "Movies",
      moviesLength: 560,
      shows: "Shows",
      showsLenght: 100,
      imgUrl:
        "https://styles.redditmedia.com/t5_2qmj8/styles/communityIcon_s1uds993urq31.png",
    },
  ];
  return (
    <div>
      <nav>
        <NavBar color={true} />
      </nav>
      <header>
        <h1 className="language-header">Language</h1>
      </header>
      <section>
        <div className="card-container">
          {data.map((item, i) => (
            <div className="card" key={i}>
              <img src={languageLogo} alt="" className="language-logo" />
              <div className="language">Telugu</div>
              <div className="movies-length">
                <div>560</div>
                <div>Movies</div>
              </div>
              <div className="movies-shows-border"></div>
              <div className="shows-length">
                <div>100</div>
                <div>Shows</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Languages;
