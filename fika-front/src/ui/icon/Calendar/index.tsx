import { FC } from "react";

interface CalendarProps {
  fill?: string;
  width?: string;
  height?: string;
}

const Calendar: FC<CalendarProps> = ({
  fill = "#000",
  width = "12",
  height = "13",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-[4px]"
    >
      <path
        d="M4.50016 3.8187C4.82868 3.8187 5.09499 3.55239 5.09499 3.22388C5.09499 2.89536 4.82868 2.62905 4.50016 2.62905V3.8187ZM9.50016 2.62905C9.17165 2.62905 8.90534 2.89536 8.90534 3.22388C8.90534 3.55239 9.17165 3.8187 9.50016 3.8187V2.62905ZM4.50049 2.62921C4.17197 2.62921 3.90566 2.89553 3.90566 3.22404C3.90566 3.55255 4.17197 3.81887 4.50049 3.81887V2.62921ZM9.50049 3.81887C9.829 3.81887 10.0953 3.55255 10.0953 3.22404C10.0953 2.89553 9.829 2.62921 9.50049 2.62921V3.81887ZM5.09466 3.22388C5.09466 2.89536 4.82835 2.62905 4.49984 2.62905C4.17132 2.62905 3.90501 2.89536 3.90501 3.22388H5.09466ZM3.90501 4.05721C3.90501 4.38572 4.17132 4.65204 4.49984 4.65204C4.82835 4.65204 5.09466 4.38572 5.09466 4.05721H3.90501ZM3.90501 3.22404C3.90501 3.55255 4.17132 3.81887 4.49984 3.81887C4.82835 3.81887 5.09466 3.55255 5.09466 3.22404H3.90501ZM5.09466 1.55737C5.09466 1.22886 4.82835 0.962545 4.49984 0.962545C4.17132 0.962545 3.90501 1.22886 3.90501 1.55737H5.09466ZM10.0947 3.22388C10.0947 2.89536 9.82835 2.62905 9.49984 2.62905C9.17132 2.62905 8.90501 2.89536 8.90501 3.22388H10.0947ZM8.90501 4.05721C8.90501 4.38572 9.17132 4.65204 9.49984 4.65204C9.82835 4.65204 10.0947 4.38572 10.0947 4.05721H8.90501ZM8.90501 3.22404C8.90501 3.55255 9.17132 3.81887 9.49984 3.81887C9.82835 3.81887 10.0947 3.55255 10.0947 3.22404H8.90501ZM10.0947 1.55737C10.0947 1.22886 9.82835 0.962545 9.49984 0.962545C9.17132 0.962545 8.90501 1.22886 8.90501 1.55737H10.0947ZM4.50016 2.62905C2.3307 2.62905 0.572002 4.38775 0.572002 6.55721H1.76166C1.76166 5.04478 2.98773 3.8187 4.50016 3.8187V2.62905ZM0.572002 6.55721V11.5572H1.76166V6.55721H0.572002ZM0.572002 11.5572C0.572002 13.7267 2.3307 15.4854 4.50016 15.4854V14.2957C2.98773 14.2957 1.76166 13.0696 1.76166 11.5572H0.572002ZM4.50016 15.4854H9.50016V14.2957H4.50016V15.4854ZM9.50016 15.4854C11.6696 15.4854 13.4283 13.7267 13.4283 11.5572H12.2387C12.2387 13.0696 11.0126 14.2957 9.50016 14.2957V15.4854ZM13.4283 11.5572V6.55721H12.2387V11.5572H13.4283ZM13.4283 6.55721C13.4283 4.38775 11.6696 2.62905 9.50016 2.62905V3.8187C11.0126 3.8187 12.2387 5.04478 12.2387 6.55721H13.4283ZM4.50049 3.81887L9.50049 3.81887V2.62921L4.50049 2.62921V3.81887ZM3.90501 3.22388V4.05721H5.09466V3.22388H3.90501ZM5.09466 3.22404V1.55737H3.90501V3.22404H5.09466ZM8.90501 3.22388V4.05721H10.0947V3.22388H8.90501ZM10.0947 3.22404V1.55737H8.90501V3.22404H10.0947Z"
        fill={fill}
      />
      <path
        d="M3.6665 9.05754L5.33317 11.5575L10.3332 7.39087"
        stroke="black"
        strokeWidth="1.18966"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Calendar;
