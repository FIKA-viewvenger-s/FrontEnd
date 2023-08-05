import { ReactNode, useState } from "react";
import RegistrationItem from "src/components/player-management-item/RegistrationItem";
import Header from "src/components/common/header";
import Menu from "src/components/common/menu";
import Tabs from "src/components/common/tabs";
import RegistrationDialog from "src/components/player-management-item/RegistrationDialog";
import Widget from "src/components/common/widget";

const Registration = () => {
  //TODO : state => 전역관리로 변경
  const [open, setOpen] = useState(false);

  return (
    <div>
      <RegistrationItem setOpen={setOpen} />
      {open && <RegistrationDialog setOpen={setOpen} />}
    </div>
  );
};

Registration.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header title="FIKA">
        <Tabs />
        <Widget />
      </Header>
      <Menu
        title="팀등록" //변경되는값
        desc="이거저거 뭐 어쩌구 저쩌구 태현님이 문구 정해주실꺼임 일단 간지나게 길게 적어놓으면 됨"
      />
      <main>{page}</main>
    </>
  );
};

export default Registration;
