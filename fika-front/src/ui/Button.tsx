import clsx from "clsx";
import type { ButtonHTMLAttributes, FC } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const getVariantClassName = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "contained":
      return "bg-blue-300";
    case "outlined":
      return "border border-blue-300 bg-white-100";
    default:
      return "";
  }
};

const Button: FC<ButtonProps> = (props) => {
  const { className, disabled, variant, ...rest } = props;
  const variantClassName = getVariantClassName(variant);

  return (
    <button
      className={clsx(
        "w-full rounded-md py-2.5 px-3",
        className,
        variantClassName,
        disabled && "bg-gray-100 text-gray-300"
      )}
      disabled={disabled}
      type="button"
      {...rest}
    />
  );
};

export default Button;
