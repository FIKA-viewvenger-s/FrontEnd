import { FC } from "react";

interface DateBadgeProps {
  dateChange: string;
  dayOfWeek: string;
}

const DateBadge: FC<DateBadgeProps> = ({ dateChange, dayOfWeek }) => {
  return (
    <div className="border rounded-[30px] text-[#bbb] -tracking-[0.77px] flex flex-col items-center leading-none py-[6px] px-[14px] text-center justify-center text-[14px] font-">
      {dateChange} {dayOfWeek}
    </div>
  );
};

export default DateBadge;
