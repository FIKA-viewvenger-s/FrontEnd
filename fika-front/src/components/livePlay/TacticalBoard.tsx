import { FC } from "react";
import FormationEdit from "./FormationEdit";
import FormationView from "./FormationView";

interface Props {
  edit: boolean;
  onSelect: (id: number) => void;
  select: number | undefined;
}

const TacticalBoard: FC<Props> = ({ edit, onSelect, select }) => {
  return (
    <>
      {edit ? (
        <FormationEdit />
      ) : (
        <FormationView onSelect={onSelect} select={select} />
      )}
    </>
  );
};

export default TacticalBoard;
