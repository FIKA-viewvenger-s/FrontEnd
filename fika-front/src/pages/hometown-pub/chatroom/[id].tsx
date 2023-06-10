import { ReactNode } from "react";
import Header from "src/components/common/header";
import ChattingRoom from "src/components/hometown-pub-item/ChattingRoom";
import Button from "src/ui/Button";

const Chatroom = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex mb-35px">모임명</div>
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
