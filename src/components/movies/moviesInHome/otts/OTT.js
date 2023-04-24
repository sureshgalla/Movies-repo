import React from "react";
import "./OTT.css";

const imgs = [
  {
    id: 1,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 2,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 3,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 4,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 5,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 6,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 7,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 8,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 9,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 10,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 11,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 12,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
  {
    id: 13,
    title: "hotstar",
    img: "https://images.firstpost.com/wp-content/uploads/2019/11/disney-1024-1.jpg",
  },
];

const OTT = () => {
  return (
    <div className="ott-container">
      {imgs.map((item) => (
        <div key={item.id}>
          <img src={item.img} className="ott-img" alt="" />
          <span className="ott-title">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default OTT;
