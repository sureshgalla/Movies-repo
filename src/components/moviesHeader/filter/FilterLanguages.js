import React from "react";
import { Dropdown } from "antd";
import { FilterFilled, DownOutlined } from "@ant-design/icons";
import Items from "./Items";

const FilterLanguages = () => {
  const filterDropdown = {
    position: "absolute",
    width: "93px",
    height: "35px",
    left: "1008px",
    top: "155px",

    background: "#ffffff",
    borderRadius: "5px",
  };
  return (
    <div>
      <Dropdown.Button
        icon={<DownOutlined />}
        overlay={<Items />}
        trigger={["click"]}
        style={filterDropdown}
      >
        <FilterFilled />
      </Dropdown.Button>
    </div>
  );
};

export default FilterLanguages;
