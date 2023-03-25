import clsx from "clsx";
import { FC, useState, Dispatch, SetStateAction } from "react";

interface SelectProps {
  widthProp?: string;
  option: {
    label: string;
    value: number;
  }[];
  setter: Dispatch<SetStateAction<string>>;
}
/**
 * @param {string} widthProp string 타입의 selectbox width크기 (기본값 = 100%)
 * @param {SelectProps.option} option option 타입의 selectbox에서 사용할 option 내용
 * @param {Dispatch<SetStateAction<string>>} setter Dispatch<SetStateAction<string>> 타입의 selectbox에서 옵션을 선택
 * @returns selectbox의 크기와 옵션 내용을 props로 받아서 selectbox를 구성하고, setter를 통해 선택한 option을 반환
 */
const Select: FC<SelectProps> = ({ widthProp = "100%", option, setter }) => {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("선택");

  const selectHandler = (option: string) => {
    setOpen(false);
    setSelectValue(option);
    setter(option);
  };

  return (
    <div
      className={`relative cursor-pointer z-10`}
      style={{ width: `${widthProp}` }}
    >
      <div
        className=" border border-[#CED4DA] rounded-[3px] py-[10px] px-[8px] text-[14px] text-[#868E96] leading-[20px] font-normal"
        onClick={() => setOpen(!open)}
      >
        {selectValue}
      </div>
      <ul
        className={clsx(
          "absolute top-[51px] w-[inherit] bg-white text-[#1A1A1A] text-[14px] leading-[20px] font-normal rounded-[3px] shadow-[0px_2px_8px_rgba(9,30,66,0.08)] ",
          !open && "hidden"
        )}
      >
        {option.map((option) => (
          <li
            className="py-[6px] px-[16px] cursor-pointer"
            onClick={() => selectHandler(option.label)}
            key={option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
