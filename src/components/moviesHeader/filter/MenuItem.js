import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./DropDown";
import "./MenuItem.css";

const MenuItem = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const clickParent = () => {
    dropdown === false ? setDropdown(true) : setDropdown(false);
  };

  return (
    <li className={`menu-items ${items.title}`} ref={ref} onClick={clickParent}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className={`parent-items ${items.title}`}
          >
            {items.title}{" "}
            {depthLevel > 0 ? (
              <span> & raquo; </span>
            ) : (
              <span className="arrow" />
            )}{" "}
          </button>{" "}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            classname={items.title}
          />{" "}
        </>
      ) : (
        <span className={items.title}> {items.title} </span>
      )}{" "}
    </li>
  );
};

export default MenuItem;
