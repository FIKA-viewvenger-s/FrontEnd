import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Carousel from "react-elastic-carousel";
import clsx from "clsx";

const breakPoints = [
  { width: 420, itemsToShow: 3 },
  { width: 600, itemsToShow: 5 },
  { width: 800, itemsToShow: 7 },
];

interface WeeklyCalendarProps {
  selectDate: Date;
  setSelectDate: (x: Date) => void;
}

// - 이전일정은 삭제
// - 오늘기준으로 한달  경기일정 노출
// - 오늘날짜 가 젤 앞에 나오도록
// - 경기없는 일자는 비활성화
// - 전체 빼고, 종료된 경기 안보여줌?

const WeeklyCalendar: FC<WeeklyCalendarProps> = ({
  selectDate,
  setSelectDate,
}) => {
  const [dateList, setDateList] = useState<Date[]>([]);

  useEffect(() => {
    const getDatesAfterToday = (numDays: number) => {
      const datesArray: Date[] = [];
      const today = new Date();

      for (let i = 0; i < numDays; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        datesArray.push(date);
      }

      setDateList(datesArray);
    };

    getDatesAfterToday(31);
  }, []);

  return (
    <div className="bg-red20">
      <Carousel breakPoints={breakPoints} pagination={false}>
        {dateList.map((day) => {
          return (
            <div
              key={String(format(day, "d")).substring(0, 3)}
              className={clsx(
                "w-full text-center py-3.25 cursor-pointer",
                format(selectDate, "yyyy-mm-dd") ===
                  format(day, "yyyy-mm-dd") && "text-blue-select"
              )}
              onClick={() => setSelectDate(day)}
            >
              {format(day, "d")}일({format(day, "EEEE", { locale: ko })})
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default WeeklyCalendar;
