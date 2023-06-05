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

import { ReactNode } from "react";
import Header from "src/components/common/header";
import ChattingRoom from "src/components/hometown-pub-item/ChattingRoom";
const Chatroom = () => {
  return (
    <div className="h-full flex flex-col	justify-center items-center">
      <div className="max-w-[1024px] flex ">모임명</div>
      <ChattingRoom/>
    </div>
  );
};

Chatroom.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">{/* <Tabs /> */}</Header>
      <main className="bg-white max-w-none h-full">{page}</main>
    </>
  );
};

export default Chatroom;
