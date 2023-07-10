import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  maxLength?: number;
  message?: string;
  onChange: (...event: any[]) => void;
  placeholder?: string;
  readOnly?: boolean;
  rightIcon?: ReactNode;
  contained?: boolean;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const {
    className,
    fullWidth,
    onChange,
    placeholder,
    rightIcon,
    contained,
    readOnly,
    type = "text",
    ...rest
  } = props;

  return (
    <span className="relative">
      <input
        ref={ref}
        className={clsx(
          "rounded-lg  py-3 text-black focus-visible:border-blue-primary ",
          fullWidth && "w-full",
          rightIcon ? "pl-8 pr-4" : "px-4",
          contained
            ? " border-none bg-gray-10"
            : "border-gray-30 border border-solid bg-white",
          className
        )}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...rest}
      />
      <div className="absolute left-4 top-0">{rightIcon}</div>
    </span>
  );
});

export default InputBase;
