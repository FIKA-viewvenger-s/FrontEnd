import Button from "src/ui/Button";
import PlaceItem from "./ParticipatePlaceItem";
import CarouselTeamLogo from "./CarouselTeamLogo";
import { useState } from "react";
import clsx from "clsx";

import placeImg from "../../assets/images/img.png";
import profile01 from "../../assets/images/profile01.jpg";
import profile02 from "../../assets/images/profile02.jpg";
import profile03 from "../../assets/images/profile03.jpg";
import profile04 from "../../assets/images/profile04.jpg";

const placeItem = [
  {
    id: 1,
    placeImg: placeImg,
    title: "모임 제목",
    schedule: "2월 27일 오후 10시(토)",
    // place: "가게이름",
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
    // place: "가게이름",
    location: "위치",
    profileImg: [profile01, profile02, profile03, profile04],
    tag: ["태그1", "태그2", "태그3"],
    Participants: "12",
    maxParticipants: "30",
  },
];
const menu = ["PL", "라리가", "분데스리가", "세리에A", "리그1", "선택안함"];

const PlaceList = () => {
  const [selectMenu, setSelectMenu] = useState("전체");

  return (
    <div className="w-full max-w-[490px] bg-white rounded-[10px] pb-[20px]">
      <div className="justify-between px-[25px] py-[21.5px]">
        <div className="text-regular font-semibold leading-[21px] text-black">
          응원 장소 찾기
        </div>
      </div>
      <div className="justify-between px-[25px] py-[22px]">
        <div className="text-regular font-semibold leading-[21px] text-black">
          <button className="mr-1 rounded-full px-4 py-3 bg-gray-20 text-gray-70">
            국내 축구
          </button>
          <button className="rounded-full px-4 py-3  bg-gray-bg text-white">
            해외 축구
          </button>
        </div>
      </div>
      <div className="flex px-[20px]">
        {menu.map((item, idx) => {
          return (
            <div key={idx}>
              <button
                onClick={() => setSelectMenu(item)}
                className={clsx(
                  "px-4 pt-3 bg-none text-gray-70 font-medium text-[15px]",
                  selectMenu === item ? "text-gray-bg " : "pb-3"
                )}
              >
                <div
                  className={clsx(
                    selectMenu === item &&
                      "border-b-[3px] border-gray-bg pb-[9px]"
                  )}
                >
                  {item}
                </div>
              </button>
            </div>
          );
        })}
      </div>
      {/* TODO: 캐러셀 적용하기 */}
      {/* <div className="w-full p-3 flex overflow-x-auto max-w-[490px] gap-2">
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체0</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체1</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체2</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체3</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체4</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체5</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체6</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체7</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체8</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체9</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체10</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체11</div>
        <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체12</div>
      </div> */}
      <CarouselTeamLogo />
      <div>
        {!placeItem && (
          <div className="text-center py-[13px] px-[20px]">
            <p className="text-[15px font-medium leading-[1.5] pb-[19px] text-black">
              참여 예정인 장소가 없습니다.
              <br /> 새로운 응원 장소를 만들거나 응원 장소를 찾아보세요.
            </p>
            <Button className="font-bold text-[15px] leading-[18px] mr-[7px] WhiteRoundButton-width-2 text-black">
              응원 장소 만들기
            </Button>
            <Button className="text-white font-bold text-[15px] leading-[18px] BlackRoundButton text-black">
              모임 찾기
            </Button>
          </div>
        )}
        {placeItem &&
          placeItem.map((item) => (
            <PlaceItem {...item} buttonValue="참여하기" key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default PlaceList;
