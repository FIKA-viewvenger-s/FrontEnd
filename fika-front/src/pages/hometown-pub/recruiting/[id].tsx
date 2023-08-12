import { ReactNode } from "react";
import Header from "src/components/common/header";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import { useRouter } from "next/router";
import ChevronUp from "src/ui/icon/ChevronUp";
import Chevrondown from "src/ui/icon/Chevrondown";
import Select from "src/ui/form/Select";
import { useForm } from "react-hook-form";
import { useGetAssembles } from "src/hooks/queries";
import clsx from "clsx";
import Button from "src/ui/Button";
import { AssemblesType } from "src/types/homeTownPup";
import AssemblePlaceItem from "src/components/hometown-pub-item/AssemblePlaceItem";
import Link from "next/link";

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

  const { data, status, error } = useGetAssembles();

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
      <div className="flex tablet:flex-col min-h-[500px] justify-between gap-11 tablet:gap-0">
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
          <div
            className={clsx(
              "max-h-[calc(172px*3.2)] overflow-y-auto flex justify-center items-center h-[calc(100%-29px-64px)]",
              data && data.length === 0 && "px-9 py-20"
            )}
          >
            {!data && (
              <div className="text-center py-[13px] px-[20px]">
                <p className="text-[15px font-medium leading-[1.5] pb-[19px] text-black">
                  참여 예정인 장소가 없습니다.
                  <br /> 새로운 응원 장소를 만들거나 응원 장소를 찾아보세요.
                </p>
                <Link
                  href={"/hometown-pub/new-assemble"}
                  className="font-bold text-[15px] leading-[18px] mr-[7px] WhiteRoundButton-width-2 text-black mb-2"
                >
                  응원 장소 만들기
                </Link>
                <Link
                  href={"/hometown-pub"}
                  className=" font-bold text-[15px] leading-[18px] BlackRoundButton text-white"
                >
                  모임 찾기
                </Link>
              </div>
            )}
            {data &&
              data.map((item: AssemblesType) => (
                <AssemblePlaceItem
                  {...item}
                  buttonValue="참여하기"
                  key={item.assmId}
                />
              ))}
          </div>
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
