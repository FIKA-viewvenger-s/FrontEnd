import { FC, useState } from "react";
import { formationCollection } from "src/constants/formationCollection";
import Formation from "./Formation";

interface Props {
  onSelect: (id: number) => void;
  select: number | undefined;
}

const startingLineUp = [
  {
    id: 1,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "손흥민",
    position: "MD",
    positionIdx: 0,
  },
  {
    id: 2,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F75%2F201901031815151401.png",
    name: "김민재",
    position: "MD",
    positionIdx: 1,
  },
  {
    id: 3,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTRfMTY5%2FMDAxNjY4NDA1OTE4MTcx.4aqGVoPKv2V_evbg9tA4zPqzxAksE-ByENAG7dt5LEcg.6qy0nHuEYZCstGOBCKa1spbJfCRyqzBgLPNZ76XN2Qog.PNG.namdongdistrict%2FKakaoTalk_20221114_145111514.png&type=a340",
    name: "이강인",
    position: "GK",
    positionIdx: 2,
  },
  {
    id: 4,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F79%2F201806151717128271.jpg",
    name: "네이마르",
    position: "MD",
    positionIdx: 3,
  },
  {
    id: 5,
    profileImg:
      "https://kleague-admin-test.s3.ap-northeast-2.amazonaws.com/v1/player/player_20190167.png",
    name: "조규성",
    position: "MD",
    positionIdx: 4,
  },
  {
    id: 6,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5347%2F2023%2F02%2F22%2F0000345862_001_20230222112605568.jpg&type=sc960_832",
    name: "황희찬",
    position: "MD",
    positionIdx: 5,
  },
  {
    id: 7,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA5MDFfMjAw%2FMDAxNTM1ODEwNTQ2NTAx.305X6m5AyBnlMv4WzlUjcPXJWa-13im3nl9fZukIblQg.xGbGwTEOIzw-NJ13oGxvZDyu31Z1wlUWTNGnjInx4ykg.JPEG.januaryys%2FFB_M_016.jpg&type=a340",
    name: "이승우",
    position: "MD",
    positionIdx: 6,
  },
  {
    id: 8,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMTdfMjYw%2FMDAxNjEwODkzMjk3MzY4.MX_ylYCi4th2e4koUE2ah9UCTgBOXxsW0NMYiLcT4Rwg.3cKWD_X5PiC1whtfoDyqRVsZoQimTg-TSqJ9ha1F6Y8g.JPEG.arari0614%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25C6%25C4%25C0%25CF%25A3%25AD5.jpg&type=a340",
    name: "김영권",
    position: "MD",
    positionIdx: 7,
  },
  {
    id: 9,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F468%2F2016%2F07%2F19%2F20160719174006_0_99_20160719175705.jpg&type=sc960_832",
    name: "김병지",
    position: "GK",
    positionIdx: 8,
  },
  {
    id: 10,
    profileImg:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F109%2F2009%2F05%2F06%2F200905060512231203_1.jpg&type=sc960_832",
    name: "박지성",
    position: "MD",
    positionIdx: 9,
  },
  {
    id: 11,
    profileImg:
      "https://search.pstatic.net/common?type=b&size=216&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F3%2F201806141425238771.jpg",
    name: "리오넬 메시",
    position: "MD",
    positionIdx: 10,
  },
];

const FormationView: FC<Props> = ({ onSelect, select }) => {
  const [formation, setFormation] = useState(formationCollection[433]);

  return (
    <div className="h-full bg-[url(https://assets.fut.gg/files/assets/field.4bc3691b65be1cd2.webp)] bg-cover bg-center">
      <Formation
        player={startingLineUp}
        onSelect={onSelect}
        select={select}
        formation={formation}
      />
    </div>
  );
};

export default FormationView;
