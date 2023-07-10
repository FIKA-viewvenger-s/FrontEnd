import { FC } from "react";

interface SendMsgProps {
  date?: string;
  messages: string;
}

const SendMsg: FC<SendMsgProps> = ({ date, messages }) => {
  return (
    <div
      className="w-[calc(100%-14px)] mr-auto bg-gray-110 p-[12px] relative rounded-[5px] text-[14px]
                  before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
                  before:border-t-[10px] before:border-b-[10px] before:right-[-14px] before:top-[12px] 
                  before:border-r-transparent before:border-b-transparent before:border-l-gray-110 before:border-t-gray-110"
    >
      {date?.substring(0, 10)}
      {messages}
    </div>
  );
};

export default SendMsg;
