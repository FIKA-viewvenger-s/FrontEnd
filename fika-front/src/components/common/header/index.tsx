import { FC, ReactNode } from "react";
import Button from "src/ui/Button";

export interface HeaderProps {
  title: string;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="w-full">
      <div className="py-5 px-10 relative">
        <div className="text-center">{title}</div>

        <div className="flex absolute right-10 top-4">
          <section>
            <Button className="w-24 h-8 text-center bg-stone-800 mr-4 text-white items-center text-sm">
              로그인
            </Button>
          </section>
          <section>
            <Button className="w-24 h-8 bg-stone-800 text-center items-center text-white text-sm">
              회원가입
            </Button>
          </section>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
