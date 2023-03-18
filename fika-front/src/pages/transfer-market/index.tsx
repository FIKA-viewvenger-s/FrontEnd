import { ReactNode, useState } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import Menu from "src/components/common/menu";
import PlayerItem from "src/components/transfer-market-item/player-item";
import TeamItem from "src/components/transfer-market-item/team-item";
import { NextPageWithLayout } from "src/types";
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { isActionTap } from "../../atom/index";
import Widget from "src/components/common/widget";

const tabItem = [
  { label: "선수", value: "1" },
  { label: "팀", value: "2" },
];

const TransferMarket: NextPageWithLayout = () => {
  const test = useRecoilValue(isActionTap);
  console.log("test", test);
  return <div>{test === "1" ? <PlayerItem /> : <TeamItem />}</div>;
};

//공통적용될 레이아웃
// nextjs 에서 제공하는 getLayout 사용
// global css는 root에 tailwind.css에서 적용시켜주면됨.
TransferMarket.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
        <Widget />
      </Header>
      <Menu
        title="이적시장"
        desc="이거저거 뭐 어쩌구 저쩌구 태현님이 문구 정해주실꺼임 일단 간지나게 길게 적어놓으면 됨"
        tabItem={tabItem}
      />
      <main>{page}</main>
    </>
  );
};

export default TransferMarket;
