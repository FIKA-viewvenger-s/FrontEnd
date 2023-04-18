import Button from "src/ui/Button";
import PlaceItem from "./ParticipatePlaceItem";
import { useState } from "react";
import clsx from "clsx";
import Chevrondown from "../../ui/icon/Chevrondown";

const placeItem = [
  {
    id: 1,
    title: "모임 제목",
    schedule: "5일 전(2/11 토)",
    place: "가게이름",
    location: "위치",
  },
  {
    id: 2,
    title: "모임 제목",
    schedule: "5일 전(2/11 토)",
    place: "가게이름",
    location: "위치",
  },
];

const ParticipatePlace = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-[490px] bg-white rounded-[10px] mb-[20px]">
      <div className="flex justify-between px-[25px] py-[21.5px]">
        <div className="text-regular font-semibold leading-[21px]">
          내가 참여 예정인 장소
        </div>
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
      {/* TODO: 캐러셀 적용하기 */}
      <div
        className={clsx(
          " px-[20px] accordion-content",
          isExpanded && "accordion-is-expanded"
        )}
      >
        {!placeItem && (
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
        {placeItem &&
          placeItem.map((item) => <PlaceItem {...item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ParticipatePlace;
