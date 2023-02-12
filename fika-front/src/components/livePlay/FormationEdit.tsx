import { FC } from "react";

interface Props {
  onEdit: () => void;
}

const FormationEdit: FC<Props> = ({ onEdit }) => {
  return (
    <div className="포메이션 등록 수정 영역 flex-1 text-white sticky top-4 left-20 h-[100vh]">
      <div
        onClick={onEdit}
        className=" absolute left-0 top-1/2 p-[10px] bg-black/[0.6] flex flex-col justify-center items-center z-10 cursor-pointer"
      >
        <span>◁</span>
        <p className="text-[#888C9B] text-[15px]">포메이션 보기</p>
      </div>
      <div className="h-full">
        <div>
          <select className="text-black">
            <option>4-3-2-1</option>
            <option>4-3-3</option>
            <option>4-2-2-2</option>
            <option>3-4-3</option>
          </select>
        </div>
        <div className="relative h-full text-center">
          <div className=" w-28 h-48 border rounded-md absolute top-[3.5%] left-[50%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[7.5%] left-[30%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[7.5%] left-[70%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[30%] left-[20%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[33%] left-[50%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[30%] left-[80%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[54%] left-[10%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[57%] left-[32%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[57%] left-[68%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[54%] left-[90%] -translate-x-[50%]"></div>
          <div className=" w-28 h-48 border rounded-md absolute top-[74%] left-[50%] -translate-x-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default FormationEdit;
