import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import ParticipatePlace from "src/components/hometown-pub-item/ParticipatePlace";
import PlusIcon from "../../assets/icon/plus.svg";
import Widget from "src/components/common/widget";

/** NOTE: 다른페이지는 inner 사이즈가 1400px인데 동네 축구펍 페이지만 1024px로 작업 되어있음, why? */

const HometownPub = () => {
  return (
    <div>
      <div className="py-[15px] pr-[25px] text-right">
        <button className="WhiteRoundButton-width-2 font-bold text-[15px] leading-[18px]">
          새 응원 장소 만들기
          <PlusIcon width="10" height="10" className="inline-block ml-[17px]" />
        </button>
      </div>
      <ParticipatePlace />
      <KakaoMap />
    </div>
  );
};

HometownPub.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
        <Widget />
      </Header>
      <main>{page}</main>
    </>
  );
};

export default HometownPub;
