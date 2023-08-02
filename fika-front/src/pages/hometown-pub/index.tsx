import { ReactNode, useEffect, useState } from "react";
import Header from "src/components/common/header";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import AssemblePlace from "src/components/hometown-pub-item/AssemblePlace";
import PlaceList from "src/components/hometown-pub-item/PlaceList";
import Widget from "src/components/common/widget";
import MainBoard from "src/components/hometown-pub-item/MainBoard";
import { useRouter } from "next/router";
import { useForm, useWatch } from "react-hook-form";

const HometownPub = () => {
  const { push } = useRouter();

  const { control } = useForm({
    defaultValues: { search: "" },
  });
  const asd = useWatch({ name: "search", control });

  return (
    <div>
      <Widget />
      <MainBoard />
      <div className="flex justify-between gap-11 flex-wrap tablet:w-full mobile:w-full">
        <PlaceList />
        <div className="flex flex-col w-[490px] tablet:w-full mobile:w-full">
          <AssemblePlace />
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

HometownPub.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA" isSearch>
        <></>
      </Header>
      <main>{page}</main>
    </>
  );
};

export default HometownPub;
