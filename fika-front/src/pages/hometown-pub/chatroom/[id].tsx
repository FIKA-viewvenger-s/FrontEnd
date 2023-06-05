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
