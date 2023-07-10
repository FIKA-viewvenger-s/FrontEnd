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
import { useRouter } from "next/router";

/** NOTE: 다른페이지는 inner 사이즈가 1400px인데 동네 축구펍 페이지만 1024px로 작업 되어있음, why? */

const HometownPub = () => {
  const { push } = useRouter();
  return (
    <div>
      <div className="py-[10px] px-[25px] flex justify-between">
        <div className="flex gap-[30px] items-center text-[14px]">
          <div>우리 동네 설정</div>
          <div className="flex gap-2">
            <div className="flex bg-blue-primary rounded-[5px] pl-4 pr-2.5 py-2 gap-3 items-center text-white">
              <div>서초구</div>
              <Cross fill="#fff" />
            </div>
            <div className=" bg-white rounded-[5px] px-4 py-2 text-black">
              내 동네 설정하기
            </div>
          </div>
        </div>
        <button
          className="bg-blue-primary py-3 px-5 rounded-full font-bold text-[14px] leading-[18px] text-white"
          onClick={() => push("/hometown-pub/new-assemble")}
        >
          새 응원 모임 만들기
          <Plus fill="#fff" />
        </button>
      </div>
      <MainBoard />
      <div className="flex justify-between gap-11">
        <PlaceList />
        <div className="flex flex-col">
          <ParticipatePlace />
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

HometownPub.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        {/* <Tabs /> */}
        <Widget />
      </Header>
      <main>{page}</main>
    </>
  );
};

export default HometownPub;
