import { ReactNode } from "react";
import Header from "src/components/common/header";
import Tabs from "src/components/common/tabs";
import KakaoMap from "src/components/hometown-pub-item/KakaoMap";
import AssemblePlace from "src/components/hometown-pub-item/AssemblePlace";
import PlaceList from "src/components/hometown-pub-item/PlaceList";
import Widget from "src/components/common/widget";
import Plus from "src/ui/icon/Plus";
import Button from "src/ui/Button";
import MainBoard from "src/components/hometown-pub-item/MainBoard";
import Cross from "src/ui/icon/Close";
import { useRouter } from "next/router";
import Input from "src/ui/form/Input";
import Search from "src/ui/icon/Search";
import { useForm, useWatch } from "react-hook-form";

/** NOTE: 다른페이지는 inner 사이즈가 1400px인데 동네 축구펍 페이지만 1024px로 작업 되어있음, why? */

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
      <div className="flex justify-between gap-11">
        <PlaceList />
        <div className="flex flex-col">
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
