import { FC, ReactNode } from "react";
import Button from "src/ui/Button";
import Input from "src/ui/form/Input";
import { useForm } from "react-hook-form";
import Search from "src/ui/icon/Search";
import Notific from "src/ui/icon/Notific";
import Alarm from "src/ui/icon/Alarm";

export interface HeaderProps {
  title: string;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ title, children }) => {
  const { control } = useForm();
  return (
    <header className="w-full bg-white ">
      <div className="py-3.5 w-full max-w-256 flex mx-auto justify-between px-10">
        <div className="text-center ml-6.25 text-gray-100 text-[25px] font-bold">
          {title}
        </div>
        <div>
          <div className="text-black w-105">
            <Input
              name="search"
              fullWidth
              rightIcon={<Search />}
              contained
              control={control}
            />
          </div>
        </div>
        <div className="flex justify-center gap-3.75 items-center cursor-pointer">
          <Notific />
          <Alarm />
          <div className="rounded-[50%] w-8.5 h-8.5 bg-gray-20"></div>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
