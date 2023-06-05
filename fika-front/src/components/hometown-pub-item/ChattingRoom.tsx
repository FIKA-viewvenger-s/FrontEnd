import React, { useState } from "react";
import ReactDOM from "react-dom";
import SpeechBubble from "../common/speechBubble";

const userInfo = [
  {
    user: "test1",
    sender: "test1",
    messages: "일단 대충 데이터 하나 넣어보겠습니다",
    date: "2023:06:04:17:00"
  },
  {
    user: "test3",
    sender: "test2",
    messages: "네 그러시죠",
    date: "2023:06:04:17:01"
  },
  {
    user: "test3",
    sender: "test3",
    messages: "날짜 변경되면?",
    date: "2023:06:05:17:01"
  },
  {
    user: "test4",
    sender: "",
    messages: "날짜 변경해서 또한번 작성하는데 이번엔 기이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이일게",
    date: "2023:06:06:17:01"
  },
];

const ChattingRoom = () => {
  return (
    <div className="flex flex-col	justify-center items-center">
      {userInfo?.map((item) => 
        item.sender === item.user 
        ? <div className="w-[900px] m-[10px] bg-[#00bfb6] p-[20px] text-center font-black text-[#fff] relative 
            before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
            before:border-t-[10px] before:border-b-[10px] before:right-[-20px] before:top-[6px] 
            before:border-r-transparent before:border-b-transparent before:border-l-[#00bfb6] before:border-t-[#00bfb6]"
          >
            {item.messages}
          </div>
        : <div className="w-[900px] m-[10px] bg-[#00bfb6] p-[20px] text-center font-black text-[#fff] relative 
            before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
            before:border-t-[10px] before:border-b-[10px] before:left-[-20px] before:top-[6px] 
            before:border-l-transparent before:border-b-transparent before:border-r-[#00bfb6] before:border-t-[#00bfb6]"
          >
            {item.messages}
          </div>
      )}

    </div>
  );
};

export default ChattingRoom;
