import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import { NextPageWithLayout } from "src/types";

const PlayerManagement: NextPageWithLayout = () => {
  return <div className="mt-10">여기는 선수등록.</div>;
};

//공통적용될 레이아웃
// nextjs 에서 제공하는 getLayout 사용
// global css는 root에 tailwind.css에서 적용시켜주면됨.
PlayerManagement.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
      </Header>
      <main>{page}</main>
    </>
  );
};

export default PlayerManagement;
