import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import ParticipatePlace from "src/components/hometown-pub-item/ParticipatePlace";
import Widget from "src/components/common/widget";
import Plus from "src/ui/icon/Plus";
import Button from "src/ui/Button";
import MainBoard from "src/components/hometown-pub-item/MainBoard";

/** NOTE: 다른페이지는 inner 사이즈가 1400px인데 동네 축구펍 페이지만 1024px로 작업 되어있음, why? */

const HometownPub = () => {
  return (
    <div>
      <div className="py-[15px] pr-[25px] text-right">
        <Button className="WhiteRoundButton-width-2 w-max min-w-fit font-bold text-[15px] leading-[18px] text-black">
          새 응원 장소 만들기
          <Plus />
        </Button>
      </div>
      <MainBoard />
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
