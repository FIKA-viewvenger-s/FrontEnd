import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import Widget from "src/components/common/widget";

const Community = () => {
  return (
    <div>
      <div className="mt-10 text-white text-[100px]">Community</div>
    </div>
  );
};

Community.getLayout = (page: ReactNode) => {
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

export default Community;
