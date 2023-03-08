import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";

const HometownPub = () => {
  return (
    <div>
      <div className="mt-10 text-white text-[100px]">HometownPub</div>
      <div className="w-[490px] bg-white rounded-[10px]">
        <div className="py-[21.5px] px-[25px] text-regular">
          지도에서 응원 장소 찾기
        </div>
        <KakaoMap />
      </div>
    </div>
  );
};

HometownPub.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
      </Header>
      <main>{page}</main>
    </>
  );
};

export default HometownPub;
