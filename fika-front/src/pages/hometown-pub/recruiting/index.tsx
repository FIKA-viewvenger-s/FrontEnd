import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import ParticipatePlace from "src/components/hometown-pub-item/ParticipatePlace";
import PlaceList from "src/components/hometown-pub-item/PlaceList";
import Widget from "src/components/common/widget";
import Plus from "src/ui/icon/Plus";
import Button from "src/ui/Button";
import MainBoard from "src/components/hometown-pub-item/MainBoard";
import Cross from "src/ui/icon/Cross";

const Recruiting = () => {
  return (
    <div>
      <div className="flex justify-between py-5">
        <div>뒤로</div>
        <div>2020.00.00 경기명</div>
        <div></div>
      </div>
      <div className="flex justify-between gap-11">
        <PlaceList />
        <div className="h-full">
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

Recruiting.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">{/* <Tabs /> */}</Header>
      <main>{page}</main>
    </>
  );
};

export default Recruiting;
