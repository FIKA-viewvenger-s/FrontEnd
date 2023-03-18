import { FC } from "react";

interface AlarmProps {
  fill?: string;
  size?: string;
}

const Alarm: FC<AlarmProps> = ({ fill = "#263038", size = "24" }) => {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 9C16.5 7.80653 16.0259 6.66193 15.182 5.81802C14.3381 4.97411 13.1935 4.5 12 4.5C10.8065 4.5 9.66193 4.97411 8.81802 5.81802C7.97411 6.66193 7.5 7.80653 7.5 9C7.5 14.25 5.25 15.75 5.25 15.75H18.75C18.75 15.75 16.5 14.25 16.5 9Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2975 18.75C13.1657 18.9773 12.9764 19.166 12.7487 19.2971C12.521 19.4283 12.2628 19.4973 12 19.4973C11.7372 19.4973 11.4791 19.4283 11.2513 19.2971C11.0236 19.166 10.8344 18.9773 10.7025 18.75"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Alarm;
