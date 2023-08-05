import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import Widget from "src/components/common/widget";
import MainBanner from "src/components/home/MainBanner";
import Ranking from "src/components/home/Ranking";
import RecruitmentGame from "src/components/home/recruit-item/RecruitmentGame";
import { NextPageWithLayout } from "src/types";

const Home: NextPageWithLayout = () => {
  //사용안함.
  return (
    <div className="flex justify-center gap-8 mt-[30px]">
      <MainBanner />
      <RecruitmentGame />
      <Ranking />
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
        <Widget />
      </Header>
      <main>{page}</main>
    </>
  );
};

export default Home;
