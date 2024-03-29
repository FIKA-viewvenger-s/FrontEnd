import { FC } from "react";

interface NotificProps {
  fill?: string;
  size?: string;
}

const Notific: FC<NotificProps> = ({ fill = "#263038", size = "24" }) => {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.75 17H13.25V15.5H11.75V17ZM12.5 5C8.36 5 5 8.36 5 12.5C5 16.64 8.36 20 12.5 20C16.64 20 20 16.64 20 12.5C20 8.36 16.64 5 12.5 5ZM12.5 18.5C9.1925 18.5 6.5 15.8075 6.5 12.5C6.5 9.1925 9.1925 6.5 12.5 6.5C15.8075 6.5 18.5 9.1925 18.5 12.5C18.5 15.8075 15.8075 18.5 12.5 18.5ZM12.5 8C10.8425 8 9.5 9.3425 9.5 11H11C11 10.175 11.675 9.5 12.5 9.5C13.325 9.5 14 10.175 14 11C14 12.5 11.75 12.3125 11.75 14.75H13.25C13.25 13.0625 15.5 12.875 15.5 11C15.5 9.3425 14.1575 8 12.5 8Z"
        fill={fill}
      />
    </svg>
  );
};

export default Notific;
