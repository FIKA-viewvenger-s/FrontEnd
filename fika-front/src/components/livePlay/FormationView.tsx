import { FC } from "react";
import Formation from "./Formation";

interface Props {
  onSelect: (id: number) => void;
  select: number | undefined;
}

const FormationView: FC<Props> = ({ onSelect, select }) => {
  return (
    <div className="h-full bg-[url(https://assets.fut.gg/files/assets/field.4bc3691b65be1cd2.webp)] bg-cover bg-center">
      <Formation onSelect={onSelect} select={select} />
    </div>
  );
};

export default FormationView;
