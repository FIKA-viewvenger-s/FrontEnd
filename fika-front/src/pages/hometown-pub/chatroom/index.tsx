import { ReactNode } from "react";
import Header from "src/components/common/header";

import ChattingRoom from "src/components/hometown-pub-item/ChattingRoom";
import { useRouter } from "next/router";
const Chatroom = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <ChattingRoom />
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
