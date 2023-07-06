import clsx from "clsx";
import { tr } from "date-fns/locale";
import { FC, useState, Dispatch, SetStateAction } from "react";
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

/**
 * @param {string} widthProp string 타입의 selectbox width크기 (기본값 = 100%)
 * @param {SelectProps.option} option option 타입의 selectbox에서 사용할 option 내용
 * @param {Dispatch<SetStateAction<string>>} setter Dispatch<SetStateAction<string>> 타입의 selectbox에서 옵션을 선택
 * @returns selectbox의 크기와 옵션 내용을 props로 받아서 selectbox를 구성하고, setter를 통해 선택한 option을 반환
 */

export interface SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  widthProp?: string;
  option: {
    label: string;
    value: number;
  }[];
}

const Select = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SelectProps<TFieldValues, TName>
) => {
  const {
    widthProp = "100%",
    option,
    control,
    defaultValue,
    name,
    ...rest
  } = props;

  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
  });

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative cursor-pointer z-10`}
      style={{ width: `${widthProp}` }}
      {...rest}
      {...field}
    >
      <div className=" text-[14px] font-normal" onClick={() => setOpen(!open)}>
        {value}
      </div>
      <ul
        className={clsx(
          "absolute top-[23px] -right-[8px] bg-white border rounded-lg w-[170%] text-center",
          !open && "hidden"
        )}
      >
        {option.map((option) => (
          <li
            className={clsx(
              " p-[10px] text-body500 cursor-pointer border-b ",
              true ? " text-blue-select" : ""
            )}
            onClick={() => {
              setOpen(false);
              onChange(option.label);
            }}
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
