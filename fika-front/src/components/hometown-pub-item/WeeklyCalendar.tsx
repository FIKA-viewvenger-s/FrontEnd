import { FC, useEffect, useState } from "react";
import { startOfWeek, addDays, format, subDays, startOfMonth } from "date-fns";
import { ko } from "date-fns/locale";
import ChevronUp from "src/ui/icon/ChevronUp";
import Chevrondown from "src/ui/icon/Chevrondown";

interface WeeklyCalendarProps {
  currentMonths: Date;
  setCurrentMonths: (x: Date) => void;
}

const weekStarts = [
  { dayOfTheWeek: "Sun", value: 0 },
  { dayOfTheWeek: "Mon", value: 1 },
  { dayOfTheWeek: "Tue", value: 2 },
  { dayOfTheWeek: "Wed", value: 3 },
  { dayOfTheWeek: "Thu", value: 4 },
  { dayOfTheWeek: "Fri", value: 5 },
  { dayOfTheWeek: "Sat", value: 6 },
];

// TODO : 1. 월 이동시 li 첫번째요소에 1일이 찍히도록
//        2. 월 이동 후 일자 이동시 이상하게 동작함으로 수정필요
//        3. 월 이동 후 날짜 가장 끝 일자로 이동 후 다시 월이동 할경우 일자랑 월이랑 따로 놈
//        4. 페이지 첫 진입시 오늘일자 또는 기준이되는 일자를 어디에 둘것인지 논의 필요.

const WeeklyCalendar: FC<WeeklyCalendarProps> = ({
  currentMonths,
  setCurrentMonths,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined>(1);

  useEffect(() => {
    if (format(currentMonths, "LL") !== format(new Date(), "LL")) {
      setCurrentDate(currentMonths);
    }
  }, [currentMonths]);

  //현재 주의 시작일 계산
  const weekStart = startOfWeek(currentDate, { weekStartsOn: days });

  //주간 날짜 배열 생성
  const weekDays = Array.from({ length: 7 }, (_, index) =>
    addDays(weekStart, index)
  );

  const handlePrevDay = () => {
    const yesterDayOfWeek = format(subDays(currentDate, 1), "eeee").substring(
      0,
      3
    );
    const yesterDayValue = weekStarts.find(
      (item) => item.dayOfTheWeek === yesterDayOfWeek
    );
    setDays(yesterDayValue?.value as 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined);
    setCurrentDate((prevDate) => subDays(prevDate, 1));

    if (format(subDays(currentDate, 1), "LL") !== format(currentMonths, "LL")) {
      setCurrentMonths(subDays(currentDate, 1));
    }
  };

  const handleNextDay = () => {
    const tomorrowDayOfWeek = format(addDays(currentDate, 1), "eeee").substring(
      0,
      3
    );
    const tomorrowDayValue = weekStarts.find(
      (item) => item.dayOfTheWeek === tomorrowDayOfWeek
    );
    setDays(tomorrowDayValue?.value as 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined);
    setCurrentDate((prevDate) => addDays(prevDate, 1));

    if (format(addDays(currentDate, 1), "LL") !== format(currentMonths, "LL")) {
      setCurrentMonths(addDays(currentDate, 1));
    }
  };

  return (
    <div className="flex">
      <button onClick={handlePrevDay}>
        <div className=" rotate-90 ">
          <Chevrondown />
        </div>
      </button>
      <ul className="flex">
        {weekDays.map((day, index) => (
          <li
            key={String(day).substring(0, 3)}
            className="p-2 w-28 text-center"
            onClick={() => console.log(day)}
          >
            {format(day, "d")}일({format(day, "EEEE", { locale: ko })})
          </li>
        ))}
      </ul>

      <button onClick={handleNextDay}>
        <div className=" rotate-90 ">
          <ChevronUp />
        </div>
      </button>
    </div>
  );
};

export default WeeklyCalendar;
