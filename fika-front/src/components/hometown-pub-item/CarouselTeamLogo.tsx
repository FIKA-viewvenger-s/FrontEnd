import Button from "src/ui/Button";
import clsx from "clsx";
import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 5 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 8 },
  { width: 1204, itemsToShow: 11 },
];

const items = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "3",
  "4",
  "11",
  "3",
  "4",
];

interface CarouselTeamLogoProps {
  handleChangeValue?: (x: string) => void;
}

const CarouselTeamLogo: FC<CarouselTeamLogoProps> = ({ handleChangeValue }) => {
  const [teams, setTeams] = useState("");

  return (
    <div>
      <div>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          itemPadding={[10, 5]}
        >
          {items.map((item) => (
            <div
              className={clsx(
                "w-21.5 h-19.75 border-2 border-solid  items-center flex justify-center rounded-lg",
                teams === item ? "border-gray-bg" : "border-[#f0f0f0]"
              )}
              onClick={() => {
                setTeams(item);
                if (handleChangeValue) {
                  handleChangeValue(item);
                }
              }}
            >
              {item}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselTeamLogo;
