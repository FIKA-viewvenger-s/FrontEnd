import { FC } from "react";

interface ReceiveMsgProps {
  messages: string;
}

const ReceiveMsg: FC<ReceiveMsgProps> = ({ messages }) => {
  return (
    <div
      className="w-[calc(100%-14px)] ml-auto bg-gray-20 p-[12px] relative rounded-[5px] text-[14px]
                  before:content-[''] before:w-[0px] before:h-[0px] before:absolute before:border-l-[10px] before:border-r-[10px] 
                  before:border-t-[10px] before:border-b-[10px] before:left-[-14px] before:top-[12px] 
                  before:border-l-transparent before:border-b-transparent before:border-r-gray-20 before:border-t-gray-20"
    >
      {messages}
    </div>
  );
};

export default ReceiveMsg;
