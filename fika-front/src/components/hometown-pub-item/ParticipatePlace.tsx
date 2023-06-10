import Button from "src/ui/Button";
import ParticipatePlaceItem from "./ParticipatePlaceItem";
import { useState } from "react";
import clsx from "clsx";
import Chevrondown from "../../ui/icon/Chevrondown";

import placeImg from "../../assets/images/img.png";
import profile01 from "../../assets/images/profile01.jpg";
import profile02 from "../../assets/images/profile02.jpg";
import profile03 from "../../assets/images/profile03.jpg";
import profile04 from "../../assets/images/profile04.jpg";
import Link from "next/link";

const placeItem = [
  {
    id: 1,
    placeImg: placeImg,
    title: "모임 제목",
    schedule: "2월 27일 오후 10시(토)",
    place: "가게이름",
    location: "위치",
    profileImg: [profile01, profile02, profile03, profile04],
    tag: ["태그1", "태그2", "태그3"],
    Participants: "12",
    maxParticipants: "30",
  },
  {
    id: 2,
    placeImg: placeImg,
    title: "모임 제목",
    schedule: "2월 27일 오후 10시(토)",
    place: "가게이름",
    location: "위치",
    profileImg: [profile01, profile02, profile03, profile04],
    tag: ["태그1", "태그2", "태그3"],
    Participants: "12",
    maxParticipants: "30",
  },
];

const ParticipatePlace = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-[490px] bg-white rounded-[10px] px-[25px] mb-[20px]">
      <div className="flex justify-between  py-[21.5px]">
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
          "accordion-content ",
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
          placeItem.map((item) => (
            <Link href={`hometown-pub/chatroom/${111}`}>
              <ParticipatePlaceItem
                {...item}
                buttonValue="채팅방 입장"
                key={item.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ParticipatePlace;
