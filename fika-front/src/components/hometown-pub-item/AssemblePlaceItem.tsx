import { FC } from "react";
import Calendar from "src/ui/icon/Calendar";
import Location from "src/ui/icon/Location";
import clsx from "clsx";
import { useRouter } from "next/router";

type memberImges = {
  memberNickNm: string;
  memberImg: string;
};

interface propsItem {
  assmId: number;
  assmTitle: string;
  assmDt: string;
  assmAddr: string;
  assmLat: number;
  assmLon: number;
  assmParticipant: number;
  assmParticipantCnt: number;
  placeImg: string;
  memberImges: memberImges[];
  buttonValue: string;
  tag: string[];
  URL?: string;
}

const AssemblePlaceItem: FC<propsItem> = ({
  assmId,
  assmTitle,
  assmDt,
  assmAddr,
  assmLat,
  assmLon,
  assmParticipant,
  assmParticipantCnt,
  memberImges,
  buttonValue,
  placeImg,
  tag,
  URL,
}) => {
  const router = useRouter();

  // TODO: 단일 책임 원칙에 어긋남, 다른 방법 생각해서 변경하기
  const clickHandler = (URL: string | undefined) => {
    if (URL) {
      router.push(URL);
    } else {
      console.log("참여하기");
      return false;
    }
  };

  return (
    <div
      className={clsx(
        "flex justify-between  pt-[12px] px-[10px] rounded-[8px] mb-[13px] ",
        buttonValue === "참여하기" ? " shadow-item" : "border"
      )}
    >
      <div className="flex flex-col gap-[8px] grow">
        <div className="flex gap-[15px]">
          <div className="max-w-[88px] aspect-square">
            <img
              src={placeImg}
              alt="placeImg"
              className="h-full rounded-[5px] w-full"
            />
          </div>
          <div className="flex flex-col gap-[5px] leading-none">
            <h3 className="text-body600">{assmTitle}</h3>
            <p className="text-details600">
              <Calendar />
              {assmDt}
            </p>
            {/* <p className="text-[14px] font-semibold">{place}</p> */}
            <p className="text-details600">
              <Location />
              {assmAddr}
            </p>
            <p className="flex gap-[5px]">
              {!!tag &&
                tag.map((item, idx) => (
                  <span
                    className="bg-[#F3F5F8] rounded-[5px] color-[#828282] text-details500 py-[3px] px-[8px]"
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
              {!!memberImges &&
                memberImges.map((img, idx) => (
                  <img
                    src={img.memberImg}
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
            <div className=" text-details500">
              {assmParticipant}/{assmParticipantCnt}명 참여
            </div>
          </div>
          <button
            className={clsx(
              "text-body600 leading-[18px] py-2 px-4 rounded-[100px] ",
              buttonValue === "참여하기"
                ? " text-blue-primary border border-blue-primary "
                : "text-white bg-blue-primary"
            )}
            onClick={() => clickHandler(URL)}
          >
            {buttonValue}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssemblePlaceItem;
