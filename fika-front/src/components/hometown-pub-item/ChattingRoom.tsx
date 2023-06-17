import React, { useState } from "react";
import ReactDOM from "react-dom";
import SpeechBubble from "../common/speechBubble";

const userInfo = [
  {
    user: "test1",
    sender: "",
    messages: "일단 대충 데이터 하나 넣어보겠습니다",
    date: "2023-06-03",
    dateChange: "06월 03일",
    dayOfWeek: "토요일"
  },
  {
    user: "test1",
    sender: "",
    messages: "네 그러시죠",
    date: "2023-06-04",
    dateChange: "06월 04일",
    dayOfWeek: "일요일"
  },
  {
    user: "test2",
    sender: "test2",
    messages: "날짜 변경되면?",
    date: "2023-06-04",
  },
  {
    user: "test1",
    sender: "",
    messages: "날짜 변경해서 또한번 작성하는데 이번엔 기이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이일게",
    date: "2023-06-06",
    dateChange: "06월 06일",
    dayOfWeek: "화요일"
  },
  {
    user: "test1",
    sender: "",
    messages: "하나 더 이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이일게",
    date: "2023-06-06"
  },
  {
    user: "test2",
    sender: "test2",
    messages: "날짜 변경해서 또한번 작성하는데 이번 짜아앏게",
    date: "2023-06-06"
  },
];

const ChattingRoom = () => {
  return (
    <div>
      <div className="h-full overflow-auto scrollbar-hide pb-[100px]">
        <div className="flex flex-col justify-center items-center box-border ">
          {userInfo?.map((item) => 
            item.sender === item.user 
            ? item.dateChange ? 
            <div className="flex flex-col items-center justify-center">
              <div className="border rounded-[30px] w-36 max-w-md flex flex-col items-center text-center justify-center]">{item.dateChange} {item.dayOfWeek}</div>
              <div className="w-[700px] m-[30px] bg-gray-110 p-[20px] text-center relative 
                  before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
                  before:border-t-[10px] before:border-b-[10px] before:right-[-20px] before:top-[6px] 
                  before:border-r-transparent before:border-b-transparent before:border-l-gray-110 before:border-t-gray-110"
                >
                  {item.date?.substring(0, 10)}
                  {item.messages}
                </div>
            </div>
              : <div className="w-[700px] m-[30px] bg-gray-110 p-[20px] text-center relative 
                before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
                before:border-t-[10px] before:border-b-[10px] before:right-[-20px] before:top-[6px] 
                before:border-r-transparent before:border-b-transparent before:border-l-gray-110 before:border-t-gray-110"
              >
                {item.date?.substring(0, 10)}
                {item.messages}
              </div>
            : item.dateChange ? 
            <div className="flex flex-col items-center justify-center">
              <div className="border rounded-[30px] w-36 max-w-md flex flex-col items-center text-center justify-center]">{item.dateChange} {item.dayOfWeek}</div>
               <div className="w-[700px] m-[30px] bg-gray-20 p-[20px] text-center relative 
                  before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
                  before:border-t-[10px] before:border-b-[10px] before:left-[-20px] before:top-[6px] 
                  before:border-l-transparent before:border-b-transparent before:border-r-gray-20 before:border-t-gray-20"
                >
                  {item.messages}
                </div>
              </div>
            : <div className="w-[700px] m-[30px] bg-gray-20 p-[20px] text-center relative 
                before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
                before:border-t-[10px] before:border-b-[10px] before:left-[-20px] before:top-[6px] 
                before:border-l-transparent before:border-b-transparent before:border-r-gray-20 before:border-t-gray-20"
              >
                {item.messages}
              </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white mt-10 fixed bottom-0 w-[47.5rem]">
        <input className="h-[47px] w-full bg-gray-20 p-5" placeholder = "메세지를 입력하세요"/>
        <div className="h-[38px] w-full bg-gray-20 flex justify-between p-5 items-center">
          <svg width="32" height="37" viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8346 11.834H12.5013C11.768 11.834 11.168 12.434 11.168 13.1673V23.834C11.168 24.5673 11.768 25.1673 12.5013 25.1673H20.5013C21.2346 25.1673 21.8346 24.5673 21.8346 23.834V15.834L17.8346 11.834ZM20.5013 23.834H12.5013V13.1673H17.8346V15.834H20.5013V23.834ZM16.5013 21.834C15.768 21.834 15.168 21.234 15.168 20.5007V16.834C15.168 16.6473 15.3146 16.5007 15.5013 16.5007C15.688 16.5007 15.8346 16.6473 15.8346 16.834V20.5007H17.168V16.834C17.168 15.914 16.4213 15.1673 15.5013 15.1673C14.5813 15.1673 13.8346 15.914 13.8346 16.834V20.5007C13.8346 21.974 15.028 23.1673 16.5013 23.1673C17.9746 23.1673 19.168 21.974 19.168 20.5007V17.834H17.8346V20.5007C17.8346 21.234 17.2346 21.834 16.5013 21.834Z" fill="#1C1C1C"></path>
          </svg>
          <button className="flex bg-blue-80 px-2 py-1 rounded-[5px] text-white gap-[4px]">
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

export default ChattingRoom;
