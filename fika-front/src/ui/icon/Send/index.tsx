import { FC } from "react";

interface SendProps {
  fill?: string;
  width?: string;
  height?: string;
}

const Send: FC<SendProps> = ({
  fill = "#1C1C1C",
  width = "23",
  height = "23",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1002_5296)">
        <path
          d="M2.3412 19.75L21.582 11.5L2.3412 3.25L2.33203 9.66667L16.082 11.5L2.33203 13.3333L2.3412 19.75Z"
          fill={fill}
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1002_5296">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(0.5 0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Send;
