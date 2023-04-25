import React, { useState } from "react";
import "./HomeHeader.css";
import Icon from "./arrowIcon.png";

const HomeHeader = () => {
  const imgs = [
    "https://images.hindustantimes.com/img/2022/04/01/1600x900/RRR-Movie-Review_1648825470847_1648825479894.jpg",
    "https://www.indiaherald.com/Assets/ArticleUpload/202231112042151_FMvb8h0aMAIZlk2.jpg",
    "https://m.media-amazon.com/images/M/MV5BOGJmMmRmN2UtYjI2MS00OGEyLTk0MzAtNjc4Yzc2ZjdmODI4XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/228045/Major_USA_Release_HD_Poster_Art.jpg",
    "https://cdn.123telugu.com/content/wp-content/uploads/2022/11/Yashoda-m.jpg",
  ];

  const [count, setCount] = useState(0);

  const handleClick = () => {
    count === imgs.length - 1 ? setCount(0) : setCount(count + 1);
  };
  return (
    <div>
      <img src={imgs[count]} alt="" className="home-header-img-container" />
      <button onClick={handleClick} className="arrow-icon">
        <img src={Icon} alt="" />
      </button>
    </div>
  );
};

export default HomeHeader;
