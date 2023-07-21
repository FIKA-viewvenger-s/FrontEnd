import clsx from "clsx";
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { useController } from "react-hook-form";

import type { InputBaseProps } from "./InputBase";
import InputBase from "./InputBase";
import { ReactNode } from "react";

export interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<
      InputBaseProps,
      "defaultValue" | "name" | "ref" | "value" | "onBlur" | "onChange"
    >,
    UseControllerProps<TFieldValues, TName> {
  contained?: boolean;
  space?: boolean;
  placeholder?: string;
  rightIcon?: ReactNode;
}

const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: InputProps<TFieldValues, TName>
) => {
  const {
    control,
    defaultValue,
    placeholder,
    name,
    rightIcon,
    rules,
    contained,
    shouldUnregister,
    className,
    space,
    ...rest
  } = props;

  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <div className={clsx(error && "mb-4", space && "mt-3 mb-8")}>
      <InputBase
        {...rest}
        {...field}
        placeholder={placeholder}
        rightIcon={rightIcon}
        contained={contained}
        onChange={onChange}
        className={className}
      />
      {error && (
        <div className="absolute text-regular text-red">{error.message}</div>
      )}
    </div>
  );
};

export default Input;
