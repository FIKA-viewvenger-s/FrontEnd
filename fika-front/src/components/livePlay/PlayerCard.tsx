import clsx from "clsx";
import { FC } from "react";

interface Props {
  id: number;
  profileImg: string;
  name: string;
  position: string;
  onSelect?: (id: number) => void;
  select?: number | undefined;
  formation: {
    x: number;
    y: number;
  };
}

const PlayerCard: FC<Props> = ({
  id,
  profileImg,
  name,
  position,
  onSelect,
  select,
  formation,
}) => {
  return (
    <div
      onClick={onSelect?.bind(null, id)}
      className={clsx(
        "bg-[#282A2C] inline-block absolute -translate-x-[50%] transition-all cursor-pointer",
        select === id && " border-2 border-red-500 -translate-y-8 scale-110"
      )}
      style={{ top: `${formation.y}%`, left: `${formation.x}%` }}
    >
      <div className="px-2">{name}</div>
      <div className="px-2">{position}</div>
      <img className="w-[100px] h-[120px]" src={profileImg} />
    </div>
  );
};

export default PlayerCard;
