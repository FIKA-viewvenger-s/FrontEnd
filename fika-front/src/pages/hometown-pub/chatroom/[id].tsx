import { ReactNode } from "react";
import Header from "src/components/common/header";
import ChattingRoom from "src/components/hometown-pub-item/ChattingRoom";
import Button from "src/ui/Button";

const Chatroom = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="max-w-[1024px] flex">모임명</div>
      <ChattingRoom/>
      <div className="fixed bottom-[5px] flex flex-col justify-center items-center bg-white">
        <input className="h-[47px] w-[800px] border bg-gray-20 p-5" placeholder = "메세지를 입력하세요"/>
        <div className="h-[38px] w-[800px] border bg-gray-20 flex justify-between p-5 items-center">
          <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8346 11.834H12.5013C11.768 11.834 11.168 12.434 11.168 13.1673V23.834C11.168 24.5673 11.768 25.1673 12.5013 25.1673H20.5013C21.2346 25.1673 21.8346 24.5673 21.8346 23.834V15.834L17.8346 11.834ZM20.5013 23.834H12.5013V13.1673H17.8346V15.834H20.5013V23.834ZM16.5013 21.834C15.768 21.834 15.168 21.234 15.168 20.5007V16.834C15.168 16.6473 15.3146 16.5007 15.5013 16.5007C15.688 16.5007 15.8346 16.6473 15.8346 16.834V20.5007H17.168V16.834C17.168 15.914 16.4213 15.1673 15.5013 15.1673C14.5813 15.1673 13.8346 15.914 13.8346 16.834V20.5007C13.8346 21.974 15.028 23.1673 16.5013 23.1673C17.9746 23.1673 19.168 21.974 19.168 20.5007V17.834H17.8346V20.5007C17.8346 21.234 17.2346 21.834 16.5013 21.834Z" fill="#1C1C1C"></path>
          </svg>
          <button className="flex">
            보내기
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1002_5296)">
                <path d="M2.3412 19.75L21.582 11.5L2.3412 3.25L2.33203 9.66667L16.082 11.5L2.33203 13.3333L2.3412 19.75Z" fill="#1C1C1C"></path>
              </g>
              <defs>
                <clipPath id="clip0_1002_5296">
                  <rect width="22" height="22" fill="white" transform="translate(0.5 0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
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
