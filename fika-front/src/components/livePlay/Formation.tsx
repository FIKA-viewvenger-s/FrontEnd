import { FC } from "react";
import PlayerCard from "./PlayerCard";

interface player {
  id: number;
  profileImg: string;
  name: string;
  position: string;
}
[];

interface Props {
  player?: player[];
  onSelect?: (id: number) => void;
  select?: number | undefined;
  formation: {
    x: number;
    y: number;
  }[];
}

const Formation: FC<Props> = ({ player, onSelect, select, formation }) => {
  return (
    <>
      <div className="h-[inherit]">
        {player?.map((items, i) => {
          return (
            <PlayerCard
              {...items}
              onSelect={onSelect}
              select={select}
              formation={formation[i]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Formation;
