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
import Link from "next/link";
import CountryFilter from "./SoccerTeamSelection";
import SoccerTeamSelection from "./SoccerTeamSelection";
import Select from "src/ui/form/Select";
import Chevrondown from "src/ui/icon/Chevrondown";
import { useForm } from "react-hook-form";

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

const selectBoxOption = [
  {
    label: "최신 등록순",
    value: 1,
  },
  {
    label: "가까운 순",
    value: 2,
  },
  {
    label: "참여 많은순",
    value: 3,
  },
];

const PlaceList = () => {
  const { control } = useForm({ defaultValues: { select: "최신 등록순" } });
  return (
    <div className="w-full max-w-[490px]  bg-white rounded-[10px] pb-[20px]">
      <div className="justify-between px-[25px] py-[21.5px]">
        <div className="text-regular font-semibold leading-[21px] text-black">
          응원 장소 찾기
        </div>
      </div>
      <SoccerTeamSelection isTeamLogo />
      <div className="flex justify-between text-caption text-[#828282] pb-2 px-[10px]">
        <span>모집 장소</span>
        <div className="flex items-center">
          <Select control={control} name="select" option={selectBoxOption} />
          <Chevrondown width="12" height="12" />
        </div>
      </div>
      <div className="h-[calc(172px*3.4)] max-h-[calc(172px*3.2)] overflow-y-auto">
        {!placeItem && (
          <div className="text-center py-[13px] px-[20px]">
            <p className="text-[15px font-medium leading-[1.5] pb-[19px] text-black">
              참여 예정인 장소가 없습니다.
              <br /> 새로운 응원 장소를 만들거나 응원 장소를 찾아보세요.
            </p>
            <Button className="font-bold text-[15px] leading-[18px] mr-[7px] WhiteRoundButton-width-2 text-black">
              응원 장소 만들기
            </Button>
            <Button className=" font-bold text-[15px] leading-[18px] BlackRoundButton text-black">
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
