import { FC } from "react";

interface LocationProps {
  fill?: string;
  width?: string;
  height?: string;
}

const Location: FC<LocationProps> = ({
  fill = "#DD583D",
  width = "12",
  height = "18",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-[4px]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7764 15.4931C19.167 13.8592 20 11.7782 20 9.51221C20 4.25876 15.5228 0 10 0C4.47715 0 0 4.25876 0 9.51221C0 11.8651 0.898057 14.0184 2.3859 15.679C4.00047 17.8929 6.91307 22.0248 7.75502 23.753C8.87928 26.0607 9.53017 28.7061 9.53017 29.1564C9.53017 29.6066 9.70769 30.0006 10.0627 30.0006C10.4177 30.0006 10.5953 29.8881 10.6544 29.1001C10.7136 28.3121 11.3645 24.4847 14.7964 19.7004C16.3569 17.5251 17.2445 16.269 17.7764 15.4931Z"
        fill={fill}
      ></path>
      <ellipse
        cx="10.0642"
        cy="9.45453"
        rx="4.97042"
        ry="4.72796"
        fill="white"
      ></ellipse>
    </svg>
  );
};

export default Location;
