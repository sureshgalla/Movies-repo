import React from "react";
import "./MoviesHeader.css";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import FilterLanguages from "./filter/FilterLanguages";
import ChooseDropdownItems from "./choose/ChooseDropdownItems";
import CityDropDown from "../movies/up-coming-movies/CityDropDown";

const MoviesHeader = ({
  title,
  filterLanguages,
  choose,
  openingThisWeek,
  upcomeingMovies,
  filter,
}) => {
  return (
    <div>
      <span className="title">{title}</span>

      {filterLanguages && !filter && <FilterLanguages />}
      {choose && (
        <Dropdown.Button
          icon={<DownOutlined />}
          overlay={<ChooseDropdownItems filter={filter} />}
          trigger={["click"]}
          className="choose-dropdown choose-dropdown-button"
        >
          <span className="choose">Choose</span>
        </Dropdown.Button>
      )}
      {openingThisWeek && (
        <div style={{ marginBottom: "215px" }}>
          <div className="upcomeingMovies-filterd-language">Telugu</div>
          <div className="upcomeingMovies-filterd-month">Feb</div>
          <div className="upcomeingMovies-filterd-format">2D</div>
        </div>
      )}

      {upcomeingMovies && (
        <Dropdown.Button
          icon={<DownOutlined />}
          overlay={<CityDropDown />}
          trigger={["click"]}
          className=""
        >
          <span className="upcomeingMovies-city-dropdown">
            City : selected city
          </span>
        </Dropdown.Button>
      )}
    </div>
  );
};

export default MoviesHeader;
