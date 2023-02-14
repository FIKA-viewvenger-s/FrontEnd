import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import MainBanner from "src/components/home/MainBanner";
import Ranking from "src/components/home/Ranking";
import RecruitmentGame from "src/components/home/recruit-item/RecruitmentGame";
import { NextPageWithLayout } from "src/types";

const Home: NextPageWithLayout = () => {
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
      </Header>
      <main>{page}</main>
    </>
  );
};

export default Home;
