import { useRouter } from "next/router";
import { FC } from "react";
import { tabItems } from "src/constants/default";

const getPathName = (item: string) => {
  switch (item) {
    case "홈":
      return "/";
    case "LivePlay":
      return "/live-play";
    case "팀/선수 등록": //tab에 노출될 값
      return "/player-management"; // 해당페이지 path
    case "이적 시장":
      return "/transfer-market";
    case "게임 매치":
      return "/game_match";
    case "커뮤니티":
      return "/community";
    default:
      return "/";
  }
};

const Tabs: FC = () => {
  const { push } = useRouter();

  return (
    <nav className=" flex justify-center">
      <div className="mx-auto">
        {tabItems.map((item) => {
          return (
            <button
              key={item}
              className="w-24 h-9"
              type="button"
              onClick={() => {
                push(getPathName(item));
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
