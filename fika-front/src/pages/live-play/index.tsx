import { ReactNode, useState } from "react";
import Header from "src/components/common/header";
import Menu from "src/components/common/menu";
import Tabs from "src/components/common/tabs";
import FormationEdit from "src/components/livePlay/FormationEdit";
import FormationView from "src/components/livePlay/FormationView";
import Team from "src/components/livePlay/Team";
import { NextPageWithLayout } from "src/types";
import PlayerItem from "../../components/livePlay/PlayerItem";
import Widget from "src/components/common/widget";

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
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "김민재",
    position: "MD",
  },
  {
    id: 3,
    profileImg:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRZtIhTZFVOCm4H9G0eruNg6Q4Mz_REKPohhDolumqBjjJymInQxz_TgvdZdP3oVn_6",
    name: "이운재",
    position: "GK",
  },
  {
    id: 4,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "박지성",
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
      "https://cphoto.asiae.co.kr/listimglink/6/2022120316482339166_1670053703.jpg",
    name: "황희찬",
    position: "MD",
  },
  {
    id: 7,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "손흥민",
    position: "MD",
  },
  {
    id: 8,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "김민재",
    position: "MD",
  },
  {
    id: 9,
    profileImg:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRZtIhTZFVOCm4H9G0eruNg6Q4Mz_REKPohhDolumqBjjJymInQxz_TgvdZdP3oVn_6",
    name: "이운재",
    position: "GK",
  },
  {
    id: 10,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "박지성",
    position: "MD",
  },
  {
    id: 11,
    profileImg:
      "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20190167.png",
    name: "조규성",
    position: "MD",
  },
  {
    id: 12,
    profileImg:
      "https://cphoto.asiae.co.kr/listimglink/6/2022120316482339166_1670053703.jpg",
    name: "황희찬",
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

  const dragEndHandler = (e: React.DragEvent) => {
    console.log(e);
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="bg-[#11161B] flex h-[calc(100vh-114px-224px-24px)]">
        <div className="왼쪽영역 bg-black pt-[15px] pr-[5px] mr-[24px] w-[400px] text-white rounded-[8px]">
          <Team />
          <ul className="max-h-[calc(100%-169.5px)] h-full overflow-y-scroll pr-[5px] scrollbar scrollbar-w-[10px] scrollbar-thumb-customscrollbar-thumbGray scrollbar-thumb-rounded-[8px]">
            {Player.map((player) => {
              return (
                <PlayerItem
                  onSelect={selectPlayerHandler}
                  select={selectePlayer}
                  {...player}
                />
              );
            })}
          </ul>
        </div>
        {edit ? (
          <FormationEdit onEdit={editHandler} />
        ) : (
          <FormationView
            onSelect={selectPlayerHandler}
            select={selectePlayer}
            onEdit={editHandler}
          />
        )}
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
