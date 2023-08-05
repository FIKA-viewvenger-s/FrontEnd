import React, { useState } from "react";
import Send from "src/ui/icon/Send";
import Clip from "src/ui/icon/Clip";
import DateBadge from "./DateBadge";
import SendMsg from "./SendMsg";
import ReceiveMsg from "./ReceiveMsg";

const MESSAGES_DUMMY_DATA = [
  {
    user: "test1",
    sender: "",
    messages: "일단 대충 데이터 하나 넣어보겠습니다",
    date: "2023-06-03",
    dateChange: "06월 03일",
    dayOfWeek: "토요일",
  },
  {
    user: "test1",
    sender: "",
    messages: "네 그러시죠",
    date: "2023-06-04",
    dateChange: "06월 04일",
    dayOfWeek: "일요일",
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
    messages:
      "날짜 변경해서 또한번 작성하는데 이번엔 기이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이일게",
    date: "2023-06-06",
    dateChange: "06월 06일",
    dayOfWeek: "화요일",
  },
  {
    user: "test1",
    sender: "",
    messages:
      "하나 더 이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이일게",
    date: "2023-06-06",
  },
  {
    user: "test2",
    sender: "test2",
    messages: "날짜 변경해서 또한번 작성하는데 이번 짜아앏게",
    date: "2023-06-06",
  },
];

const ChattingRoom = () => {
  return (
    <>
      <div className="h-full overflow-auto scrollbar-hide max-w-[554px] mobile:max-w-none mobile:px-[14px]">
        <div className="flex flex-col justify-center items-center box-border gap-[30px] ">
          {MESSAGES_DUMMY_DATA?.map((item) =>
            item.sender === item.user ? (
              item.dateChange ? (
                <div className="flex flex-col items-center justify-center w-full gap-[30px]">
                  <DateBadge
                    dateChange={item.dateChange}
                    dayOfWeek={item.dayOfWeek}
                  />
                  <SendMsg date={item.date} messages={item.messages} />
                </div>
              ) : (
                <SendMsg date={item.date} messages={item.messages} />
              )
            ) : item.dateChange ? (
              <div className="flex flex-col items-center justify-center w-full gap-[30px]">
                <DateBadge
                  dateChange={item.dateChange}
                  dayOfWeek={item.dayOfWeek}
                />
                <ReceiveMsg messages={item.messages} />
              </div>
            ) : (
              <ReceiveMsg messages={item.messages} />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white mt-10 fixed bottom-0 w-[47.5rem] mobile:w-full">
        <input
          className="h-[47px] w-full bg-gray-20 p-5"
          placeholder="메세지를 입력하세요"
        />
        <div className="h-[38px] w-full bg-gray-20 flex justify-between p-5 items-center">
          <Clip />
          <button className="flex bg-blue-80 px-2 py-1 rounded-[5px] text-white gap-[4px]">
            보내기
            <Send />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChattingRoom;
