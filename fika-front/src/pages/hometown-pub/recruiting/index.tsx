import { ReactNode } from "react";
import Header from "src/components/common/header";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import PlaceList from "src/components/hometown-pub-item/PlaceList";

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
        <div>
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
