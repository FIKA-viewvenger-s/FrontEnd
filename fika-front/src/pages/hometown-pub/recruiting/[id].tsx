import { ReactNode } from "react";
import Header from "src/components/common/header";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import PlaceList from "src/components/hometown-pub-item/PlaceList";
import { useRouter } from "next/router";
import ChevronUp from "src/ui/icon/ChevronUp";
import AssemblePlaceItem from "src/components/hometown-pub-item/AssemblePlaceItem";

import placeImg from "../../../assets/images/img.png";
import profile01 from "../../../assets/images/profile01.jpg";
import profile02 from "../../../assets/images/profile02.jpg";
import profile03 from "../../../assets/images/profile03.jpg";
import profile04 from "../../../assets/images/profile04.jpg";
import Chevrondown from "src/ui/icon/Chevrondown";
import Select from "src/ui/form/Select";
import { useForm } from "react-hook-form";

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

const Recruiting = () => {
  const { control } = useForm({ defaultValues: { select: "최신 등록순" } });
  const router = useRouter();
  return (
    <div>
      <div className=" w-[100vw] relative left-1/2 -translate-x-1/2 flex justify-between p-5 tablet:bg-white tablet:shadow-navBar tablet:relative">
        <div
          className="cursor-pointer -rotate-90 self-center"
          onClick={() => router.back()}
        >
          <ChevronUp />
        </div>
        <div>2020.00.00 경기명</div>
        <div></div>
      </div>
      <div className="flex tablet:flex-col  justify-between gap-11 tablet:gap-0">
        <div className="w-full max-w-[490px] tablet:max-w-none tablet:order-2  bg-white rounded-[10px] pb-[20px] px-[25px]">
          <div className="justify-between py-[21.5px]">
            <div className="text-regular font-semibold leading-[21px] text-black">
              서초구에 등록된 모임
            </div>
          </div>
          <div className="flex justify-between text-caption text-[#828282] pb-2">
            <span>등록된 모임</span>
            <div className="flex items-center">
              <Select
                control={control}
                name="select"
                option={selectBoxOption}
              />
              <Chevrondown width="12" height="12" />
            </div>
          </div>
          {/* {Array.from({ length: 4 }, (_, index) => (
            <AssemblePlaceItem
              // placeImg={placeImg}
              title={"모임 제목"}
              schedule={"2월 27일 오후 10시(토)"}
              place={"가게이름"}
              location={"위치"}
              profileImg={[profile01, profile02, profile03, profile04]}
              tag={["태그1", "태그2", "태그3"]}
              Participants={"12"}
              maxParticipants={"30"}
              URL={"hometown-pub/chatroom/111"}
              key={index}
              buttonValue="참여하기"
            />
          ))} */}
        </div>
        <div className=" flex-1 tablet:order-1">
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

Recruiting.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">{/* <Tabs /> */}</Header>
      <main>{page}</main>
    </>
  );
};

export default Recruiting;
