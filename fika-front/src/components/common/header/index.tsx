import { FC, ReactNode } from "react";
import Button from "src/ui/Button";
import Input from "src/ui/form/Input";
import { useForm, useWatch } from "react-hook-form";
import Search from "src/ui/icon/Search";
import Notific from "src/ui/icon/Notific";
import Alarm from "src/ui/icon/Alarm";
import clsx from "clsx";
import Plus from "src/ui/icon/Plus";
import { useRouter } from "next/router";

export interface HeaderProps {
  title: string;
  children: ReactNode;
  isNew?: boolean;
  isSearch?: boolean;
}

const Header: FC<HeaderProps> = ({ title, children, isNew, isSearch }) => {
  const { control } = useForm({
    defaultValues: { search: "" },
  });
  const asd = useWatch({ name: "search", control });

  const { push } = useRouter();

  return (
    <header
      className={clsx(
        "w-full bg-white fixed z-[999]",
        isNew && " border-b border-[rgb(239, 239, 239)] border-solid"
      )}
    >
      <div className=" w-full shadow-md">
        <div className="w-256 flex mx-auto justify-between py-[14px] px-[25px] items-center">
          <div className="text-center text-gray-100 text-[18px] font-bold">
            {title}
          </div>
          <div className="flex justify-center gap-3.75 items-center cursor-pointer">
            {/* <Search /> */}
            <Alarm />
            <div className="rounded-[50%] w-6 h-6 bg-gray-20"></div>
          </div>
        </div>
      </div>
      {isSearch && (
        <div className="flex w-256  m-auto ">
          <div className="text-black w-full max-w-192.5 py-2.5 pl-6 pr-16.25">
            <Input
              name="search"
              fullWidth
              rightIcon={<Search />}
              contained
              control={control}
            />
          </div>
          <button
            className="text-blue-primary w-35 text-medium flex items-center justify-center cursor-pointer"
            onClick={() => push("/hometown-pub/new-assemble")}
          >
            <Plus fill="#6172EE" />
            <div className="ml-2">새 모임 만들기</div>
          </button>
        </div>
      )}

      {/* {children} */}
    </header>
  );
};

export default Header;
