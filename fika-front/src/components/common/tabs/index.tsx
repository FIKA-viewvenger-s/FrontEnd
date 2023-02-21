import clsx from "clsx";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { tabItems } from "src/constants/default";

const getPathName = (item: string) => {
  switch (item) {
    case "홈":
      return "/";
    case "동네 축구 모임":
      return "/hometown-pub";
    case "LivePlay":
      return "/live-play";
    case "팀/선수 등록": //tab에 노출될 값
      return "/player-management"; // 해당페이지 path
    case "이적 시장":
      return "/transfer-market";
    case "게임 매치":
      return "/game-match";
    case "랭킹":
      return "/ranking";
    case "커뮤니티":
      return "/community";
    default:
      return "/";
  }
};

const Tabs: FC = () => {
  const { push, route } = useRouter();
  const [currentPage, setCurrentPage] = useState("홈");

  return (
    <nav className=" flex justify-center bg-tab-bg-color h-13 items-center">
      <div className="mx-auto">
        {tabItems.map((item) => {
          return (
            <button
              key={item}
              className={clsx(
                "w-36 h-9",
                route === getPathName(item)
                  ? "text-tab-selection-color"
                  : "text-white"
              )}
              type="button"
              onClick={() => {
                push(getPathName(item));
                setCurrentPage(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
export default Tabs;
