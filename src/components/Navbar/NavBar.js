import React, { useState } from "react";
import "./NavBar.css";
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import MoviesDropDown from "../movies/MoviesDropDown";
import SocialMediaIcons from "../socilaMediaIcons/SocialMediaIcons";
import { NavLink } from "react-router-dom";
import LoginModel from "../login/LoginModel";

const Navbar = ({ color }) => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };

  const handleCancel = () => {
    setLogin(false);
  };
  return (
    <nav className={color ? "red-navbar" : "navbar"}>
      <h1 className={color ? "movie-nav-movieirating" : "movie-rating"}>
        Movie Rating
      </h1>
      <input
        type="text"
        className={color ? "movie-search-bar" : "search-bar"}
        placeholder="Search Movies...."
      />
      <button className={color ? "movie-search-button" : "search-button"}>
        <SearchOutlined className="search-icon" />
      </button>
      <div className={color ? "movie-links" : "links"}>
        <NavLink to="/" activeclassname="active" className="link-style">
          Home
        </NavLink>
        <Dropdown overlay={<MoviesDropDown />} trigger={["click"]}>
          <h1 className="link-style">Movies</h1>
        </Dropdown>
        <NavLink
          to="/languages"
          activeclassname="active"
          className="link-style"
        >
          Languge
        </NavLink>
        <NavLink to="/shows" activeclassname="active" className="link-style">
          Shows
        </NavLink>
        <h1 className="link-style" onClick={handleLogin}>
          Login/Signup
        </h1>
        {color && <SocialMediaIcons />}
      </div>
      <LoginModel openModel={login} handleCancel={handleCancel} />
    </nav>
  );
};

Navbar.defaultPropeTypes = {
  className: "navbar",
};

export default Navbar;
