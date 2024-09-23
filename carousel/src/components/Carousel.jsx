import React, { useState } from "react";
import "../App.css";

function Carousel({ carouselData }) {
  const [index, setIndex] = useState(1);
  const handleLeftClick = () => {
    const newIndex = index === 1 ? carouselData.length : index - 1;
    setIndex(newIndex);
  };
  const handleRightClick = () => {
    const newIndex = index === carouselData.length ? 1 : index + 1;
    setIndex(newIndex);
  };
  return (
    <div className="wrapper">
      {carouselData.map((item) => (
        <div
          className="carousel_wrapper"
          style={{ display: index === item.id ? "flex" : "none" }}
        >
          <div className="arrow" onClick={() => handleLeftClick(item.id)}>
            <b>&#706;</b>
          </div>
          {index == item.id && (
            <div className="carousel_contents">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
          )}

          <div className="arrow" onClick={handleRightClick}>
            <b>&#707;</b>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
