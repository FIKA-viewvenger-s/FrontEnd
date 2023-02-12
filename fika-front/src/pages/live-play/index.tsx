import { ReactNode, useState } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import FormationEdit from "src/components/livePlay/FormationEdit";
import FormationView from "src/components/livePlay/FormationView";
import Team from "src/components/livePlay/Team";
import { NextPageWithLayout } from "src/types";
import PlayerItem from "../../components/livePlay/PlayerItem";

const teamTab = [
  {
    teamName: "연천FC",
  },
  {
    teamName: "관악FC",
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
      <div className=" p-[30px] pb-0 bg-[#282A2C] text-white">
        <h2 className="font-semibold text-4xl pb-[14px]">연천FC VS 관악FC</h2>
        <p className="text-[#888C9B] pb-[32px]">
          이거저거 뭐 어쩌구 저쩌구 태현님이 문구 정해주실꺼임 일단 간지나게
          길게 적어놓으면 됨
        </p>
        <ul className="flex justify-center">
          {teamTab.map((team) => {
            return <li className="px-[34.5px] pb-[14px]">{team.teamName}</li>;
          })}
        </ul>
      </div>
      <div className="bg-[#11161B] flex">
        <div className="왼쪽영역 py-[16px] px-[23px] w-[400px] text-white">
          <Team />
          <ul>
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
      </Header>
      <main>{page}</main>
    </>
  );
};

export default LivePlay;
