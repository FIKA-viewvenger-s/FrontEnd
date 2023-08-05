import { FC } from "react";

interface CalendarProps {
  fill?: string;
  width?: string;
  height?: string;
}

const Calendar: FC<CalendarProps> = ({
  fill = "#000",
  width = "15",
  height = "17",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="inline-block mr-[4px]"
    >
      <path
        d="M 0 5.177 L 15 5.177 L 15 14.87 C 15 15.859 14.221 16.662 13.262 16.662 L 1.43 16.662 C 0.64 16.662 0 16.001 0 15.188 Z"
        fill="rgb(224,224,224)"
      ></path>
      <path
        d="M 1.168 1.547 L 13.724 1.547 C 14.428 1.547 15 2.136 15 2.863 L 15 5.184 L 0 5.184 L 0 2.751 C 0 2.086 0.523 1.547 1.168 1.547 Z"
        fill="#5D72F6"
      ></path>
      <path
        d="M 3.8 1.047 C 3.8 0.469 3.346 0 2.785 0 C 2.224 0 1.77 0.469 1.77 1.047 L 1.77 2.04 C 1.77 2.618 2.224 3.087 2.785 3.087 C 3.346 3.087 3.8 2.618 3.8 2.04 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 13.292 1.047 C 13.292 0.469 12.838 0 12.277 0 C 11.716 0 11.262 0.469 11.262 1.047 L 11.262 2.04 C 11.262 2.618 11.716 3.087 12.277 3.087 C 12.838 3.087 13.292 2.618 13.292 2.04 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 4.426 7.623 L 2.791 7.623 L 2.791 9.309 L 4.426 9.309 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 8.671 7.623 L 7.036 7.623 L 7.036 9.309 L 8.671 9.309 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 12.896 7.623 L 11.262 7.623 L 11.262 9.309 L 12.896 9.309 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 4.426 11.555 L 2.791 11.555 L 2.791 13.24 L 4.426 13.24 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 8.671 11.555 L 7.036 11.555 L 7.036 13.24 L 8.671 13.24 Z"
        fill="rgb(184,184,184)"
      ></path>
      <path
        d="M 12.896 11.555 L 11.262 11.555 L 11.262 13.24 L 12.896 13.24 Z"
        fill="rgb(184,184,184)"
      ></path>
    </svg>
  );
};

export default Calendar;
