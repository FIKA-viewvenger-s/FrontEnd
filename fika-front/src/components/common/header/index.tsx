import { FC, ReactNode } from "react";
import Button from "src/ui/Button";
import Input from "src/ui/form/Input";
import { useForm, useWatch } from "react-hook-form";
import Search from "src/ui/icon/Search";
import Notific from "src/ui/icon/Notific";
import Alarm from "src/ui/icon/Alarm";
import clsx from "clsx";

export interface HeaderProps {
  title: string;
  children: ReactNode;
  isNew?: boolean;
}

const Header: FC<HeaderProps> = ({ title, children, isNew }) => {
  const { control } = useForm({
    defaultValues: { search: "" },
  });
  const asd = useWatch({ name: "search", control });

  return (
    <header
      className={clsx(
        "w-full bg-white",
        isNew && " border-b border-[rgb(239, 239, 239)] border-solid"
      )}
    >
      <div className=" w-full max-w-256 flex mx-auto justify-between py-[14px] px-[25px] items-center">
        <div className="text-center text-gray-100 text-[18px] font-bold">
          {title}
        </div>
        {/* <div>
          <div className="text-black w-105">
            <Input
              name="search"
              fullWidth
              rightIcon={<Search />}
              contained
              control={control}
            />
          </div>
        </div> */}
        <div className="flex justify-center gap-3.75 items-center cursor-pointer">
          <Search />
          <Alarm />
          <div className="rounded-[50%] w-6 h-6 bg-gray-20"></div>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
