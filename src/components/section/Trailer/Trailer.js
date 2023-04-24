import React from "react";
import "./Trailer.css";
import { Grid } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const Trailer = ({ data }) => {
  //console.log("Footer", data);
  const screens = useBreakpoint();
  return (
    <div>
      <div
        className="
      trailer-container"
      >
        <div className="container">
          {data.map((list, i) => (
            <div key={i} className={screens.xs ? "col-6" : "col-md-4"}>
              <div className="video-box-container">
                <img
                  src={list.hero_img}
                  alt=""
                  className="
                trailer-imge"
                />

                <img
                  src={list.movie_video}
                  alt=""
                  className="
                trailer-video"
                />
                <a href={list.video_link}>
                  <PlayCircleFilled className="play-icon" />
                </a>
                <div
                  className="
                trailer-content-container"
                >
                  <p className="hero-name">{list.heroName}</p>
                  <h1 className="rate-movie">Rate Movie</h1>
                  <p className="movie-title">{list.title}</p>
                  <p className="movie-plot">{list.plot}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trailer;
