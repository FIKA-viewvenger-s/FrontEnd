import React, { FC } from "react";
import Button from "src/ui/Button";
import AssemblePlaceItem from "./AssemblePlaceItem";
import { useState } from "react";
import clsx from "clsx";
import Chevrondown from "../../ui/icon/Chevrondown";
import Carousel from "react-elastic-carousel";
import { AssemblesType } from "src/types/homeTownPup";

interface AssemblePlaceProps {
  data: AssemblesType[];
  status: "error" | "success" | "loading" | "idle";
  error: any;
}

const AssemblePlace: FC<AssemblePlaceProps> = ({
  data = [],
  status,
  error,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const groupedPlaces: AssemblesType[][] = data.reduce(
    (acc: AssemblesType[][], place: AssemblesType, index: number) => {
      if (index % 2 === 0) {
        acc.push([place]);
      } else {
        acc[acc.length - 1].push(place);
      }

      return acc;
    },
    []
  );
  return (
    <div className="w-full bg-white rounded-[10px] px-[25px] mb-[20px] tablet:rounded-none mobile:rounded-none">
      <div className="flex justify-between  py-[21.5px]">
        <div className=" text-heading600">내가 참여 예정인 장소</div>
        <button
          onClick={toggleAccordion}
          className={clsx(
            " transition-all",
            isExpanded ? "-rotate-180" : "rotate-0"
          )}
        >
          <Chevrondown></Chevrondown>
        </button>
      </div>
      <div
        className={clsx(
          "accordion-content ",
          isExpanded && "accordion-is-expanded"
        )}
      >
        {!data && (
          <div className="text-center py-[13px] px-[20px]">
            <p className="text-[15px font-medium leading-[1.5] pb-[19px]">
              참여 예정인 장소가 없습니다.
              <br /> 새로운 응원 장소를 만들거나 응원 장소를 찾아보세요.
            </p>
            <Button className="font-bold text-[15px] leading-[18px] mr-[7px] WhiteRoundButton-width-2 ">
              응원 장소 만들기
            </Button>
            <Button className="text-white font-bold text-[15px] leading-[18px] BlackRoundButton">
              모임 찾기
            </Button>
          </div>
        )}
        <Carousel itemsToShow={1}>
          {groupedPlaces.map((group, index) => (
            <div className="slide w-full" key={`item-${index}`}>
              {group.map((item) => (
                <AssemblePlaceItem
                  {...item}
                  buttonValue="채팅방 입장"
                  key={item.assmId}
                  URL={"/hometown-pub/chatroom/312"}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AssemblePlace;
