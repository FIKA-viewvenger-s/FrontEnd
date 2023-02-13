import { Dispatch, FC, SetStateAction } from "react";

interface RegistrationDialogProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RegistrationDialog: FC<RegistrationDialogProps> = ({ setOpen }) => {
  return (
    <div className="w-[821px] bg-gray-800 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <div className="text-white py-[25px] px-[40px] ">팀 등록하기</div>
      <div className="bg-light-gray-text-color h-[588px] p-4">
        여기에 내용이 들어갑니다리리리
        <div className="w-full flex justify-center mt-[460px]">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
            }}
            className="px-40 h-12 border border-white border-solid rounded mr-4"
          >
            취소
          </button>
          <button
            type="button"
            className="px-40 h-12 bg-[#ADE64C] rounded"
            onClick={() => {}}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDialog;
