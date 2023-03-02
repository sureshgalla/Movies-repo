import React from "react";
import "./NavBar.css";
//import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="movie-rating">Movie Rating</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search Movies...."
      />
      <button className="search-button">
        {/* <SearchIcon className="search-icon" /> */}
      </button>
      <div className="links">
        <h1 className="link-style">Home</h1>
        <h1 className="link-style">Movies</h1>
        <h1 className="link-style">Languge</h1>
        <h1 className="link-style">Shows</h1>
        <h1 className="link-style">Login/Signup</h1>
      </div>
    </nav>
  );
};

export default Navbar;
