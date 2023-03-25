import { useState, FC } from "react";
import { formationCollection } from "src/constants/formationCollection";

interface Props {
  onSelect: (id: number) => void;
  select: number | undefined;
}

const teamInfo = [
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
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F109%2F2009%2F05%2F06%2F200905060512231203_1.jpg&type=sc960_832",
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
];

const Formation: FC<Props> = ({ onSelect, select }) => {
  const [position, setPosition] = useState(formationCollection[433]);

  return (
    <>
      <div className="h-[inherit]">
        <div
          onClick={onSelect.bind(null, teamInfo[0].id)}
          className={`${
            select === teamInfo[0].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[0].y}%`, left: `${position[0].x}%` }}
        >
          <div>{teamInfo[0].name}</div>
          <div>{teamInfo[0].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[0].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[1].id)}
          className={`${
            select === teamInfo[1].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[1].y}%`, left: `${position[1].x}%` }}
        >
          <div>{teamInfo[1].name}</div>
          <div>{teamInfo[1].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[1].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[2].id)}
          className={`${
            select === teamInfo[2].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[2].y}%`, left: `${position[2].x}%` }}
        >
          <div>{teamInfo[2].name}</div>
          <div>{teamInfo[2].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[2].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[3].id)}
          className={`${
            select === teamInfo[3].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[3].y}%`, left: `${position[3].x}%` }}
        >
          <div>{teamInfo[3].name}</div>
          <div>{teamInfo[3].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[3].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[4].id)}
          className={`${
            select === teamInfo[4].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[4].y}%`, left: `${position[4].x}%` }}
        >
          <div>{teamInfo[4].name}</div>
          <div>{teamInfo[4].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[4].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[5].id)}
          className={`${
            select === teamInfo[5].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[5].y}%`, left: `${position[5].x}%` }}
        >
          <div>{teamInfo[5].name}</div>
          <div>{teamInfo[5].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[5].profileImg} />
        </div>
        <div
          onClick={onSelect.bind(null, teamInfo[6].id)}
          className={`${
            select === teamInfo[6].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[6].y}%`, left: `${position[6].x}%` }}
        >
          <div>{teamInfo[6].name}</div>
          <div>{teamInfo[6].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[6].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[7].id)}
          className={`${
            select === teamInfo[7].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[7].y}%`, left: `${position[7].x}%` }}
        >
          <div>{teamInfo[7].name}</div>
          <div>{teamInfo[7].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[7].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[8].id)}
          className={`${
            select === teamInfo[8].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[8].y}%`, left: `${position[8].x}%` }}
        >
          <div>{teamInfo[8].name}</div>
          <div>{teamInfo[8].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[8].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[9].id)}
          className={`${
            select === teamInfo[9].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[9].y}%`, left: `${position[9].x}%` }}
        >
          <div>{teamInfo[9].name}</div>
          <div>{teamInfo[9].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[9].profileImg} />
        </div>

        <div
          onClick={onSelect.bind(null, teamInfo[10].id)}
          className={`${
            select === teamInfo[10].id &&
            " border-2 border-red-500 -translate-y-8 scale-110"
          } " bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer`}
          style={{ top: `${position[10].y}%`, left: `${position[10].x}%` }}
        >
          <div>{teamInfo[10].name}</div>
          <div>{teamInfo[10].position}</div>
          <img className="w-[100px] h-[120px]" src={teamInfo[10].profileImg} />
        </div>
      </div>
    </>
  );
};

export default Formation;
