import clsx from "clsx";
import { FC, useState } from "react";
import CarouselTeamLogo from "./CarouselTeamLogo";

interface SoccerTeamSelectionProps {
  isTeamLogo?: boolean;
  handleChangeValue?: (x: string) => void;
}

const overseasLeague = [
  "PL",
  "라리가",
  "분데스리가",
  "세리에A",
  "리그1",
  "선택안함",
];
const domesticLeague = ["K리그1", "K리그2", "선택안함"];

const SoccerTeamSelection: FC<SoccerTeamSelectionProps> = ({
  isTeamLogo,
  handleChangeValue,
}) => {
  const [selectCountry, setSelectCountry] = useState("domestic");
  const [selectTime, setSelectTime] = useState("전체");

  return (
    <>
      <div className="justify-between">
        <div className="text-regular font-semibold leading-[21px] text-black  px-5 py-3">
          <button
            className={clsx(
              "mr-1 rounded-full px-3.75 py-2.25 text-medium ",
              selectCountry === "domestic"
                ? " bg-gray-bg text-white"
                : "text-gray-70  bg-gray-20"
            )}
            onClick={() => setSelectCountry("domestic")}
          >
            국내 축구
          </button>
          <button
            className={clsx(
              "rounded-full px-3.75 py-2.25  text-medium",
              selectCountry === "overseas"
                ? " bg-gray-bg text-white"
                : "text-gray-70  bg-gray-20"
            )}
            onClick={() => setSelectCountry("overseas")}
          >
            해외 축구
          </button>
        </div>
      </div>
      <hr />
      {selectCountry === "overseas" && (
        <div className="flex">
          {overseasLeague.map((item, idx) => {
            return (
              <div key={idx}>
                <button
                  onClick={() => setSelectTime(item)}
                  className={clsx(
                    "px-4 pt-3 bg-none text-gray-70 font-medium text-[15px]",
                    selectTime === item ? "text-gray-bg " : "pb-3"
                  )}
                >
                  <div
                    className={clsx(
                      selectTime === item &&
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
      )}
      {selectCountry === "domestic" && (
        <div className="flex ">
          {domesticLeague.map((item, idx) => {
            return (
              <div key={idx}>
                <button
                  onClick={() => setSelectTime(item)}
                  className={clsx(
                    "px-4 pt-3 bg-none text-gray-70 font-medium text-[15px]",
                    selectTime === item ? "text-gray-bg " : "pb-3"
                  )}
                >
                  <div
                    className={clsx(
                      selectTime === item &&
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
      )}

      {isTeamLogo && <CarouselTeamLogo handleChangeValue={handleChangeValue} />}
    </>
  );
};

export default SoccerTeamSelection;
