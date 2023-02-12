import { Dispatch, FC, SetStateAction } from "react";

interface RegistrationItemProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RegistrationItem: FC<RegistrationItemProps> = ({ setOpen }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-auto mt-[167px]">
        <div className="text-4 text-white mb-8 text-center">
          등록된 팀이 없어요
        </div>
        <button
          className="rounded py-[14px] px-[73px] bg-tab-selection-color"
          type="button"
          onClick={() => {
            setOpen(true);
          }}
        >
          팀 등록하기
        </button>
      </div>
    </div>
  );
};

export default RegistrationItem;
