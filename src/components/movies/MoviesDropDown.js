import React from "react";
import "./MoviesDropDown.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const MoviesDropDown = () => {
  return (
    <div className="custom-container">
      <Row>
        <Col span={8}>
          <Link to="/movies-in-theaters" className="movies-in-theaters">
            Movie in Theaters
          </Link>
          <h1 className="opening-week">Opening this Week</h1>
          <h1 className="coming-soon">Coming Soon to theaters</h1>
          <div className="line"></div>
        </Col>
        <Col span={8}>
          <Link to="/movies-in-home" className="movies-at-home">
            Movie at home
          </Link>
          <h1 className="neflix">Netflix streaming</h1>
          <h1 className="amazon">Amazon Prime streaming</h1>
          <h1 className="aha">Aha streaming</h1>
          <h1 className="disney">Disney+ Hot star streaming</h1>
          <h1 className="zee">Zee5 streaming</h1>
          <h1 className="popular-streaming">Most popular steaming</h1>
          <div className="line"></div>
        </Col>
        <Col span={8}>
          <a className="more" href="htt">
            More
          </a>
          <h1 className="top-movies">Top movies</h1>
          <h1 className="trailers">Trailers</h1>
        </Col>
      </Row>
    </div>
  );
};

export default MoviesDropDown;
