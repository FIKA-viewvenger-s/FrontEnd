import clsx from "clsx";
import { FC, ReactNode } from "react";

export interface Props {
  title: string;
  desc: string;
  tabItem?: Array<string>;
}

const Menu: FC<Props> = ({ title, desc, tabItem }) => {
  return (
    <>
      <div
        className={clsx(
          "bg-page-menu-bg-color p-8 mb-8",
          tabItem ? "pb-0" : "pb-9"
        )}
      >
        <div className="text-4xl text-white pb-6">{title}</div>
        <div className="text-lg text-light-gray-text-color mb-8">{desc}</div>
        <div className="flex justify-center">
          {tabItem?.map((el, idx) => {
            return (
              <div
                className="w-28 h-9 justify-center text-center text-lg text-white border-b-4 border-orange-300"
                key={idx}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
