import Button from "src/ui/Button";
import clsx from "clsx";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 5 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselTeamLogo = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          className="h-[100px]"
        >
          {items.map((item) => (
            <div className="w-[50px] h-[50px] border">{item}</div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselTeamLogo;
