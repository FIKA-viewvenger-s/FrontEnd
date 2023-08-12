import clsx from "clsx";
import React, { FC, useState } from "react";
import Carousel from "react-elastic-carousel";

const mainBreakPoints = [
  { width: 1, itemsToShow: 5 },
  { width: 500, itemsToShow: 6 },
  { width: 630, itemsToShow: 7 },
  { width: 768, itemsToShow: 8 },
];
const breakPoints = [
  { width: 1, itemsToShow: 4 },
  { width: 550, itemsToShow: 7 },
  { width: 768, itemsToShow: 8 },
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
  type?: string;
}

const CarouselTeamLogo: FC<CarouselTeamLogoProps> = ({
  handleChangeValue,
  type,
}) => {
  const [teams, setTeams] = useState("");

  return (
    <div>
      <div>
        <Carousel
          breakPoints={type === "main" ? mainBreakPoints : breakPoints}
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
