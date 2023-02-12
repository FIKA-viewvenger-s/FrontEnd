import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";

const GameMatch = () => {
  return (
    <div>
      <div className="mt-10 text-white text-[100px]">GameMatch</div>
    </div>
  );
};

GameMatch.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
      </Header>
      <main>{page}</main>
    </>
  );
};

export default GameMatch;
