import { FC } from "react";

interface Props {
  onSelect: (id: number) => void;
  select: number | undefined;
  id: number;
  profileImg: string;
  name: string;
  position: string;
}

const playerItem: FC<Props> = ({
  onSelect,
  select,
  id,
  profileImg,
  name,
  position,
}) => {
  return (
    <li
      onClick={onSelect.bind(null, id)}
      className="flex items-center bg-[#282A2C] rounded-lg mb-3 cursor-pointer transition-all last:mb-0"
    >
      <span className="bg-[#1A1C1E] max-w-[130px]">
        <img
          className={`${
            select === id
              ? "w-[130px] h-[200px] object-cover transition-all"
              : "w-[70px] h-[70px] object-cover transition-all"
          }`}
          src={profileImg}
          alt="선수프로필이미지"
        />
      </span>
      <span className="px-[20px]">
        <p className="font-semibold text-[20px]">{name}</p>
        <p className="text-[#888C9B] text-[15px]">{position}</p>
        {select === id && (
          <>
            <div className="flex gap-[15px] pt-[11px]">
              <div className="flex flex-col">
                <span className=" pb-2 text-[#888C9B]">슈팅</span>
                <span className=" pb-2 text-white">{90}</span>
              </div>
              <div className="flex flex-col">
                <span className=" pb-2 text-[#888C9B]">드리블</span>
                <span className=" pb-2 text-white">{94}</span>
              </div>
              <div className="flex flex-col">
                <span className=" pb-2 text-[#888C9B]">피지컬</span>
                <span className=" pb-2 text-white">{92}</span>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="flex flex-col">
                <span className=" pb-2 text-[#888C9B]">패싱</span>
                <span className=" pb-2 text-white">{89}</span>
              </div>
              <div className="flex flex-col">
                <span className=" pb-2 text-[#888C9B]">수비</span>
                <span className=" pb-2 text-white">{80}</span>
              </div>
              <div className="flex flex-col">
                <span className=" pb-2 text-[#888C9B]">골키핑</span>
                <span className=" pb-2 text-white">{54}</span>
              </div>
            </div>
          </>
        )}
      </span>
    </li>
  );
};

export default playerItem;
