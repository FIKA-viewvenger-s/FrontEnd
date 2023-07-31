import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import ChevronUp from "src/ui/icon/ChevronUp";
import Plus from "src/ui/icon/Plus";
import Link from "next/link";
import WeeklyCalendar from "./WeeklyCalendar";
import { subMonths, format, addMonths } from "date-fns";
import CountryFilter from "./SoccerTeamSelection";
import SoccerTeamSelection from "./SoccerTeamSelection";

const menu = ["전체", "PL", "라리가", "분데스리가", "세리에A", "리그1"];
const state = ["종료", "경기중", "경기전"];

const MainBoard = () => {
  const [showBoard, setShowBoard] = useState(true);
  const [selectMenu, setSelectMenu] = useState("전체");
  // const [currentMonths, setCurrentMonths] = useState(new Date());

  // const handlePrevMonths = () => {
  //   setCurrentMonths((prevMonths) => subMonths(prevMonths, 1));
  // };

  // const handleNextMonths = () => {
  //   setCurrentMonths((prevMonths) => addMonths(prevMonths, 1));
  // };

  const [selectDate, setSelectDate] = useState(new Date());

  return (
    <div
      className={clsx(
        "w-full bg-white rounded-2.5 px-6 mb-5 tablet:rounded-none mobile:rounded-none",
        showBoard ? "pb-7.5 pt-5 " : "py-5"
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center",
          showBoard ? "mb-4" : ""
        )}
      >
        <div className="text-heading600">경기 일정</div>
        <div className="font-bold text-body500 text-black">
          {format(selectDate, "yyyy.LL")}
        </div>

        <button
          className="w-7 h-7 flex justify-center items-center"
          onClick={() => setShowBoard((state) => !state)}
        >
          <ChevronUp rotate={showBoard ? "rotate(0)" : "rotate(180)"} />
        </button>
      </div>

      {showBoard && (
        <>
          <WeeklyCalendar
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          />

          <SoccerTeamSelection />

          {state.map((item) => {
            return (
              <div
                key={item}
                className={clsx("py-2 text-gray-70 font-medium text-[15px] ")}
              >
                <div className="flex justify-between mobile:justify-start mobile:block flex-wrap">
                  <div className="flex items-center">
                    <div className="px-4 py-3">00:00</div>

                    <div>{item}</div>
                  </div>
                  <div className="flex items-center flex-wrap mobile:block mobile:border-b mobile:border-b-gray200 mobile:pb-4.25">
                    {item !== "종료" && (
                      <Link
                        href={`hometown-pub/recruiting/${48293}`}
                        className={clsx(
                          "bg-gray-10 px-4 py-[7px] border rounded-[5px] mobile:hidden",
                          item === "경기중"
                            ? "text-red-500 border-red-500"
                            : "text-black border-black"
                        )}
                      >
                        {item === "경기중"
                          ? "응원 중인 장소 2곳"
                          : "응원 예정 장소 1곳"}
                      </Link>
                    )}
                    <div className="flex items-center mobile:justify-between mr-5 mobile:mr-0 flex-wrap mobile:mb-2">
                      <div className="flex gap-2.5 items-center">
                        <div className="px-2.5 mobile:hidden">팀 이름</div>
                        <Image
                          src="/assets/images/logo_1.jpg"
                          alt="logo1"
                          width={26}
                          height={26}
                        />
                        <div className="px-2.5 hidden mobile:block">
                          팀 이름
                        </div>
                        <div>1</div>
                      </div>
                      {item !== "종료" && (
                        <Link
                          href={`hometown-pub/recruiting/${48293}`}
                          className={clsx(
                            "hidden bg-gray-10 px-4 py-[7px] border rounded-[5px] mobile:block ",
                            item === "경기중"
                              ? "text-red-500 border-red-500"
                              : "text-black border-black"
                          )}
                        >
                          {item === "경기중"
                            ? "모임 중인 장소 2곳"
                            : "모임 예정 장소 1곳"}
                        </Link>
                      )}
                    </div>
                    <div className="flex items-center mobile:justify-between ml-5 mobile:ml-0">
                      <div className="flex gap-2.5 items-center">
                        <div className="mobile:hidden">1</div>
                        <Image
                          src="/assets/images/logo_2.jpg"
                          alt="logo2"
                          width={26}
                          height={26}
                        />
                        <div className="px-2.5">팀 이름</div>
                        <div className="hidden mobile:block">1</div>
                      </div>
                      {item !== "종료" ? (
                        <button
                          className={clsx(
                            "bg-gray-10 px-4 py-[7px] border rounded-[5px] mobile:",
                            item === "경기중"
                              ? "text-red-500 border-red-500"
                              : "text-black border-black"
                          )}
                        >
                          {item === "경기중"
                            ? "모임 중인 장소 2곳"
                            : "모임 예정 장소 1곳"}
                        </button>
                      ) : (
                        <div className="w-[146px]" />
                      )}
                    </div>
                  </div>
                  {/* {item === "경기전" ? (
                    <div className="px-4 rounded-full border-black border flex justify-center items-center">
                      <div className="text-black font-semibold text-[12px]">
                        새 응원 장소 만들기
                      </div>
                      <Plus />
                    </div>
                  ) : (
                    <div className="w-[150px]" />
                  )} */}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MainBoard;
