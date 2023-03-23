import LocationIcon from "../../assets/icon/location.svg";
import Calendar from "../../assets/icon/calendar.svg";
import { FC } from "react";

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
          <Calendar width="12" height="13"  className="inline-block mr-[4px]" />
          {schedule}
        </p>
        <p className="text-[15px] font-medium pb-[4px]">{place}</p>
        <p className="text-[11px] font-medium pb-[4px]">
          <LocationIcon
            width="10"
            height="14"
            className="inline-block mr-[4px]"
          />
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
