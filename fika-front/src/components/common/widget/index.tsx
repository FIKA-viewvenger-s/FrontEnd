import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Close from "src/ui/icon/Close";
import MapMarker from "src/ui/icon/MapMarker";

const widgetListTest = [
  "내 근처의 동네 축구팀과 랭킹을 알아볼 수 있어요.",
  "나와 가장 잘맞는 축구팀은?",
];

const Banner = () => {
  // const [showWidget, setShowWidget] = useState(true);
  // const [current, setCurrent] = useState<number>(0);

  // const interval = useRef<NodeJS.Timeout>();

  // const handleInterval = (): (() => void) => {
  //   interval.current = setInterval(() => {
  //     setCurrent((prevState) => {
  //       const nextIndex = (prevState + 1) % widgetListTest.length;
  //       return nextIndex;
  //     });
  //   }, 5000);
  //   return () => clearInterval(interval.current);
  // };

  // useEffect(() => {
  //   const clear = handleInterval();
  //   return clear;
  // }, []);

  return (
    <>
      {/* {showWidget && ( */}
      <div className=" relative bg-blue-primary w-256 mt-19.5 mb-2.5 py-5 rounded-2.5 tablet:w-full mobile:w-full tablet:rounded-none mobile:rounded-none">
        <ul className="flex items-center justify-between ml-2.5 w-256">
          <div className="flex items-center h-20">
            {/* <MapMarker /> */}

            {/* <div className="flex flex-col overflow-hidden h-20 items-center"> */}
            {/* {widgetListTest.map((item, index) => {
                  return ( */}
            <li
              className={clsx(
                "ml-3.75 text-heading600 text-white"
                // current === index ? "" : "hidden"
              )}
            >
              우리 동네에서 열리는 축구 응원 모임이 있어요! 내 근처의 축구
              팬들을 만나보세요.
            </li>
            {/* );
                })} */}
            {/* </div> */}
          </div>
          {/* <div
              className="cursor-pointer"
              onClick={() => setShowWidget(false)}
            >
              <Close fill="#fff" />
            </div> */}
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default Banner;
