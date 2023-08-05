import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "src/components/common/header";
import ChattingRoom from "src/components/hometown-pub-item/ChattingRoom";
import Button from "src/ui/Button";
import ChevronUp from "src/ui/icon/ChevronUp";

const Chatroom = () => {
  const router = useRouter();
  return (
    <>
      <div className=" max-w-[800px] mx-auto flex gap-5 p-5 font-semibold text-[18px]">
        <div
          className="cursor-pointer -rotate-90 self-center"
          onClick={() => router.back()}
        >
          <ChevronUp />
        </div>
        <div>모임명</div>
      </div>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-55px-67px)] pb-[120px]">
        <ChattingRoom />
      </div>
    </>
  );
};

Chatroom.getLayout = (page: ReactNode) => {
  const router = useRouter();
  return (
    <>
      <Header title="FIKA">{/* <Tabs /> */}</Header>
      <main className="bg-white max-w-none h-full">{page}</main>
    </>
  );
};

export default Chatroom;
