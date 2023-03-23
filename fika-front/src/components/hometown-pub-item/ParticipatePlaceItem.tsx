import { FC } from "react";
import Calendar from "src/ui/icon/Calendar";
import Location from "src/ui/icon/Location";

interface propsItem {
  title: string;
  schedule: string;
  place: string;
  location: string;
}

const PlaceItem: FC<propsItem> = (props) => {
  const { title, schedule, place, location } = props;
  return (
    <div className="flex justify-between items-end py-[12px] px-[20px] shadow-[0_0_3.9px_rgba(0,0,0,0.15)] rounded-[8px] mb-[13px]">
      <div>
        <h3 className="text-[15px] font-medium pb-[4px]">{title}</h3>
        <p className="text-[11px] font-medium pb-[4px]">
          <Calendar />
          {schedule}
        </p>
        <p className="text-[15px] font-medium pb-[4px]">{place}</p>
        <p className="text-[11px] font-medium pb-[4px]">
          <Location />
          {location}
        </p>
      </div>
      <button className="font-semibold text-[15px] leading-[18px] WhiteRoundButton-width-1">
        채팅방 입장
      </button>
    </div>
  );
};

export default PlaceItem;
