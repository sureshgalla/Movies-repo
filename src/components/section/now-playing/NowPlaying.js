import React from "react";
import "./NowPlaying.css";
import { Grid } from "antd";
import MovieArtical from "../Movie-Artical/MovieArtical";

const { useBreakpoint } = Grid;

const NowPlaying = ({ data }) => {
  //console.log('nowPlaying',data);
  const screens = useBreakpoint();
  return (
    <div>
      <div className="grid">
        <h1 className="now-playing">Now Playing</h1>
        <h1 className="view-all">View All</h1>
        <div className="image-container">
          {data.map((list, i) => (
            <div key={i} className={screens.xs ? "col-6" : "col-md-4"}>
              <div className="box">
                <img
                  src={list.img}
                  alt={list.title}
                  className="picture-style"
                />
                <h1 className="grid-title">{list.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MovieArtical />
    </div>
  );
};

export default NowPlaying;
