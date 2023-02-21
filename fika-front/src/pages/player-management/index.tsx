import { ReactNode } from "react";
import Header from "src/components/common/header";
import Menu from "src/components/common/menu";
import Tabs from "src/components/common/tabs";
import ManagementItem from "src/components/player-management-item/ManagementItem";
import { NextPageWithLayout } from "src/types";

const PlayerManagement: NextPageWithLayout = () => {
  return (
    <div>
      
      <ManagementItem />
    </div>
  );
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
      <Menu
        title="팀/선수 등록"
        desc="이거저거 뭐 어쩌구 저쩌구 태현님이 문구 정해주실꺼임 일단 간지나게 길게 적어놓으면 됨"
      />
      <main>{page}</main>
    </>
  );
};

export default PlayerManagement;
