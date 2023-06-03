import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import ChevronUp from "src/ui/icon/ChevronUp";
import Plus from "src/ui/icon/Plus";
import Link from "next/link";

const init = [
  "02일(화요일)",
  "03일(수요일)",
  "04일(목요일)",
  "05일(금요일)",
  "06일(토요일)",
  "07일(일요일)",
  "08일(월요일)",
  "09일(화요일)",
  "10일(수요일)",
];

const menu = ["전체", "PL", "라리가", "분데스리가", "세리에A", "리그1"];
const state = ["종료", "경기중", "경기전"];

const MainBoard = () => {
  const [showBoard, setShowBoard] = useState(true);
  const [selectMenu, setSelectMenu] = useState("전체");

  return (
    <div
      className={clsx(
        "w-full bg-white rounded-2.5 px-6 mb-5",
        showBoard ? "pb-[30px] pt-5 " : "py-5"
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center",
          showBoard ? "mb-4" : ""
        )}
      >
        <div className="font-bold text-[18px] text-black">경기 일정</div>
        <div className="font-bold text-[25px] text-black">2023.05</div>
        <button
          className="w-7 h-7 flex justify-center items-center"
          onClick={() => setShowBoard((state) => !state)}
        >
          <ChevronUp rotate={showBoard ? "rotate(0)" : "rotate(180)"} />
        </button>
      </div>

      {showBoard && (
        <>
          <div className="py-5">
            <div className="flex justify-center">
              {init.map((itme) => {
                return (
                  <div className="font-medium text-[14px] w-full px-4 py-1.5 text-gray-70 border-r border-gray-30">
                    {itme}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="py-2">
            <div className="flex">
              <div className="mr-1 rounded-full px-4 py-3 bg-gray-20 text-gray-70">
                국내 축구
              </div>
              <div className="rounded-full px-4 py-3  bg-gray-bg text-white">
                해외 축구
              </div>
            </div>
          </div>

          <div className="flex border-b border-t border-b-gray-20">
            {menu.map((item) => {
              return (
                <>
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
                </>
              );
            })}
          </div>

          {state.map((item) => {
            return (
              <div
                className={clsx("py-2 text-gray-70 font-medium text-[15px] ")}
              >
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="px-4 py-3">00:00</div>

                    <div>{item}</div>
                  </div>
                  <div className="flex items-center">
                    {item !== "종료" ? (
                      <Link
                        href={`hometown-pub/recruiting/${48293}`}
                        className={clsx(
                          "bg-gray-10 px-4 py-[7px] border rounded-[5px]",
                          item === "경기중"
                            ? "text-red-500 border-red-500"
                            : "text-black border-black"
                        )}
                      >
                        {item === "경기중"
                          ? "응원 중인 장소 2곳"
                          : "응원 예정 장소 1곳"}
                      </Link>
                    ) : (
                      <div className="w-[146px]" />
                    )}
                    <div className="flex gap-2.5 items-center mr-5">
                      <div className="px-2.5">팀 이름</div>
                      <Image
                        src="/assets/images/logo_1.jpg"
                        alt="logo1"
                        width={26}
                        height={26}
                      />
                      <div>1</div>
                    </div>
                    <div className="flex gap-2.5 items-center ml-5">
                      <div>1</div>
                      <Image
                        src="/assets/images/logo_2.jpg"
                        alt="logo2"
                        width={26}
                        height={26}
                      />
                      <div className="px-2.5">팀 이름</div>
                    </div>
                    {item !== "종료" ? (
                      <button
                        className={clsx(
                          "bg-gray-10 px-4 py-[7px] border rounded-[5px]",
                          item === "경기중"
                            ? "text-red-500 border-red-500"
                            : "text-black border-black"
                        )}
                      >
                        {item === "경기중"
                          ? "응원 중인 장소 2곳"
                          : "응원 예정 장소 1곳"}
                      </button>
                    ) : (
                      <div className="w-[146px]" />
                    )}
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
