import { FC } from "react";

interface ChevrondownProps {
  fill?: string;
  width?: string;
  height?: string;
}

const Chevrondown: FC<ChevrondownProps> = ({
  width = "16",
  height = "16",
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z"
        fill="black"
      ></path>
    </svg>
  );
};

export default Chevrondown;
