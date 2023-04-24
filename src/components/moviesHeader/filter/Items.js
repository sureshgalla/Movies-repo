import React from "react";
import { menuItems } from "./menuItems";
import MenuItems from "./MenuItem";
import "./Items.css";

const Items = () => {
  return (
    <div>
      <ul className="menus">
        {" "}
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}{" "}
      </ul>
    </div>
  );
};

export default Items;
