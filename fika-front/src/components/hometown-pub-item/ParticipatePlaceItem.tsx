import { FC } from "react";
import Calendar from "src/ui/icon/Calendar";
import Location from "src/ui/icon/Location";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface propsItem {
  placeImg: StaticImageData;
  title: string;
  schedule: string;
  place?: string;
  location: string;
  profileImg: StaticImageData[];
  tag: string[];
  Participants: string;
  maxParticipants: string;
  buttonValue: string;
}

const ParticipatePlaceItem: FC<propsItem> = ({
  placeImg,
  title,
  schedule,
  place,
  location,
  profileImg,
  tag,
  Participants,
  maxParticipants,
  buttonValue,
}) => {
  return (
    <div className="flex justify-between  pt-[12px] px-[10px] border rounded-[8px] mb-[13px] ">
      <div className="flex flex-col gap-[8px] grow">
        <div className="flex gap-[15px]">
          <div className="max-w-[88px]">
            <Image
              src={placeImg}
              alt="placeImg"
              className="h-full rounded-[5px]"
            />
          </div>
          <div className="flex flex-col gap-[5px] leading-none">
            <h3 className="text-[14px] font-semibold">{title}</h3>
            <p className="text-[12px] font-semibold">
              <Calendar />
              {schedule}
            </p>
            {/* <p className="text-[14px] font-semibold">{place}</p> */}
            <p className="text-[12px] font-semibold">
              <Location />
              {location}
            </p>
            <p className="flex gap-[5px]">
              {!!tag &&
                tag.map((item, idx) => (
                  <span
                    className="bg-[#F3F5F8] rounded-[5px] color-[#828282] text-xs py-[3px] px-[8px]"
                    key={idx}
                  >
                    {item}
                  </span>
                ))}
            </p>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] py-[9px] border-[#efefef] items-center ">
          <div className="flex items-center">
            <div className="flex">
              {!!profileImg &&
                profileImg.map((img, idx) => (
                  <Image
                    src={img}
                    alt={`userprofile${idx}`}
                    className={clsx(
                      `rounded-[50px] object-cover w-[28px] h-[28px] border-2 border-white`
                    )}
                    style={{
                      transform: `translateX(${-8 * idx}px)`,
                    }}
                  />
                ))}
            </div>
            <div className="text-xs font-semibold">
              {Participants}/{maxParticipants}명 참여
            </div>
          </div>
          <button className="font-semibold text-[14px] leading-[18px] text-white bg-blue-primary py-3 px-4 rounded-[100px]">
            {buttonValue}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipatePlaceItem;
