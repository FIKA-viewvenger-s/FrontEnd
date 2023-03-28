import { ReactNode, useState } from "react";
import Header from "src/components/common/header";
import Menu from "src/components/common/menu";
import Tabs from "src/components/common/tabs";
import Team from "src/components/livePlay/Team";
import { NextPageWithLayout } from "src/types";
import PlayerItem from "../../components/livePlay/PlayerItem";
import Widget from "src/components/common/widget";
import clsx from "clsx";
import TacticalBoard from "src/components/livePlay/TacticalBoard";

const teamTab = [
  {
    label: "연천FC",
    value: "1",
  },
  {
    label: "관악FC",
    value: "2",
  },
];

export const Player = [
  {
    id: 1,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "손흥민",
    position: "MD",
  },
  {
    id: 2,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F75%2F201901031815151401.png",
    name: "김민재",
    position: "MD",
  },
  {
    id: 3,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTRfMTY5%2FMDAxNjY4NDA1OTE4MTcx.4aqGVoPKv2V_evbg9tA4zPqzxAksE-ByENAG7dt5LEcg.6qy0nHuEYZCstGOBCKa1spbJfCRyqzBgLPNZ76XN2Qog.PNG.namdongdistrict%2FKakaoTalk_20221114_145111514.png&type=a340",
    name: "이강인",
    position: "GK",
  },
  {
    id: 4,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F79%2F201806151717128271.jpg",
    name: "네이마르",
    position: "MD",
  },
  {
    id: 5,
    profileImg:
      "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20190167.png",
    name: "조규성",
    position: "MD",
  },
  {
    id: 6,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5347%2F2023%2F02%2F22%2F0000345862_001_20230222112605568.jpg&type=sc960_832",
    name: "황희찬",
    position: "MD",
  },
  {
    id: 7,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA5MDFfMjAw%2FMDAxNTM1ODEwNTQ2NTAx.305X6m5AyBnlMv4WzlUjcPXJWa-13im3nl9fZukIblQg.xGbGwTEOIzw-NJ13oGxvZDyu31Z1wlUWTNGnjInx4ykg.JPEG.januaryys%2FFB_M_016.jpg&type=a340",
    name: "이승우",
    position: "MD",
  },
  {
    id: 8,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTdfMjYw%2FMDAxNjEwODkzMjk3MzY4.MX_ylYCi4th2e4koUE2ah9UCTgBOXxsW0NMYiLcT4Rwg.3cKWD_X5PiC1whtfoDyqRVsZoQimTg-TSqJ9ha1F6Y8g.JPEG.arari0614%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25C6%25C4%25C0%25CF%25A3%25AD5.jpg&type=a340",
    name: "김영권",
    position: "MD",
  },
  {
    id: 9,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F468%2F2016%2F07%2F19%2F20160719174006_0_99_20160719175705.jpg&type=sc960_832",
    name: "김병지",
    position: "GK",
  },
  {
    id: 10,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F109%2F2009%2F05%2F06%2F200905060512231203_1.jpg&type=sc960_832",
    name: "박지성",
    position: "MD",
  },
  {
    id: 11,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F3%2F201806141425238771.jpg",
    name: "리오넬 메시",
    position: "MD",
  },
  {
    id: 12,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F11%2F202202240952317171.png",
    name: "조현우",
    position: "MD",
  },
];

const LivePlay: NextPageWithLayout = () => {
  const [selectePlayer, setSelectePlayer] = useState<number>();

  const [edit, setEdit] = useState(false);

  const selectPlayerHandler = (id: number) => {
    setSelectePlayer((prevData) => {
      if (prevData === id) {
        return (prevData = -1);
      }
      return id;
    });
  };

  return (
    <>
      <div className="bg-[#11161B] flex h-[calc(100vh-114px-224px-24px-40px-30px)]">
        <div className="bg-black pt-[15px] pr-[5px] mr-[24px] w-[400px] text-white rounded-[8px]">
          <Team />
          <ul className="max-h-[calc(100%-169.5px)] h-full overflow-y-scroll pr-[5px] scrollbar scrollbar-w-[10px] scrollbar-thumb-customscrollbar-thumbGray scrollbar-thumb-rounded-[8px]">
            {Player.map((player, i) => {
              return (
                <PlayerItem
                  onSelect={selectPlayerHandler}
                  select={selectePlayer}
                  {...player}
                  key={i}
                />
              );
            })}
          </ul>
        </div>
        <div className="flex-1 text-white relative border h-full">
          <TacticalBoard
            edit={edit}
            onSelect={selectPlayerHandler}
            select={selectePlayer}
          />
          <div>
            <div
              onClick={() => setEdit(!edit)}
              className={clsx(
                "absolute  top-1/2 p-[10px] bg-black/[0.6] flex flex-col justify-center items-center z-10 cursor-pointer",
                edit ? "left-0" : "right-0"
              )}
            >
              <span>{edit ? "◁" : "▷"}</span>
              <p className="text-[#888C9B] text-[15px]">
                {edit ? "포메이션 보기" : "전술 짜러가기"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LivePlay.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
        <Widget />
      </Header>
      <Menu
        title="연천FC VS 관악FC"
        desc="이거저거 뭐 어쩌구 저쩌구 태현님이 문구 정해주실꺼임 일단 간지나게
          길게 적어놓으면 됨"
        tabItem={teamTab}
      />
      <main>{page}</main>
    </>
  );
};

export default LivePlay;
