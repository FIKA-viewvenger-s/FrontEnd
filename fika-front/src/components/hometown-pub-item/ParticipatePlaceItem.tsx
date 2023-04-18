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
    <div className="flex justify-between py-[12px] px-[20px] border rounded-[8px] mb-[13px] ">
      <div className="flex flex-col gap-[8px] grow">
        <div>
          <h3 className="text-[14px] font-semibold ">{title}</h3>
          <p className="text-[12px] font-semibold">
            <Calendar />
            {schedule}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[14px] font-semibold">{place}</p>
            <p className="text-[12px] font-semibold">
              <Location />
              {location}
            </p>
          </div>

          <button className="font-semibold text-[14px] leading-[18px] text-blue-primary">
            채팅방 입장
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
