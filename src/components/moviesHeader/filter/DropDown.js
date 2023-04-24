import React from "react";
import MenuItems from "./MenuItem";
import "./DropDown.css";

const DropDown = ({ submenus, dropdown, depthLevel, classname }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`dropdown ${classname} ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};

export default DropDown;
