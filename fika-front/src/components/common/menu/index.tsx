import clsx from "clsx";
import { FC, ReactNode, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { isActionTap } from '../../../atom/index';

export interface Props {
  title: string;
  desc: string;
  tabItem?: Array<{label: string, value: string}>;
}

const Menu: FC<Props> = ({ title, desc, tabItem }) => {
  const [actionTap, setActionTap] = useRecoilState(isActionTap);
  const [selectedTap, setSelectedTap] = useState('선수');
  const handlerAction = (item: any) => {
    setActionTap(item.value);
    setSelectedTap(item.label);
  }
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
                // className="w-28 h-9 justify-center text-center text-lg text-white border-b-4 border-orange-300"
                className={clsx(
                  "w-28 h-9 justify-center text-center text-lg text-white",
                  selectedTap === el.label ? "border-b-4 border-orange-300" : ""
                )}
                key={idx}
                onClick={() => {
                  handlerAction(el);
                }}
              >
                {el.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
