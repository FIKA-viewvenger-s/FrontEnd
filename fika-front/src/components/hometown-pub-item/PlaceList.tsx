import Button from "src/ui/Button";
import AssemblePlaceItem from "./AssemblePlaceItem";
import SoccerTeamSelection from "./SoccerTeamSelection";
import Select from "src/ui/form/Select";
import Chevrondown from "src/ui/icon/Chevrondown";
import { useForm } from "react-hook-form";
import { useGetAssembles } from "src/hooks/queries";
import { AssemblesType } from "src/types/homeTownPup";
import clsx from "clsx";

const selectBoxOption = [
  {
    label: "최신 등록순",
    value: 1,
  },
  {
    label: "가까운 순",
    value: 2,
  },
  {
    label: "참여 많은순",
    value: 3,
  },
];

const PlaceList = () => {
  const { control } = useForm({ defaultValues: { select: "최신 등록순" } });

  const { data, status, error } = useGetAssembles();

  console.log(data);

  return (
    <div className="w-full max-w-[490px] tablet:max-w-full mobile:max-w-full bg-white rounded-[10px] pb-[20px] tablet:rounded-none mobile:rounded-none">
      <div className="justify-between px-[25px] py-[21.5px]">
        <div className="text-regular font-semibold leading-[21px] text-black">
          응원 장소 찾기
        </div>
      </div>
      <SoccerTeamSelection isTeamLogo type="main" />
      <div className="flex justify-between text-caption text-[#828282] pb-2 px-[10px]">
        <span>모집 장소</span>
        <div className="flex items-center">
          <Select control={control} name="select" option={selectBoxOption} />
          <Chevrondown width="12" height="12" />
        </div>
      </div>
      <div
        className={clsx(
          "max-h-[calc(172px*3.2)] overflow-y-auto",
          data && data.length === 0 && "px-9 py-20"
        )}
      >
        {!data && (
          <div className="text-center py-[13px] px-[20px]">
            <p className="text-[15px font-medium leading-[1.5] pb-[19px] text-black">
              참여 예정인 장소가 없습니다.
              <br /> 새로운 응원 장소를 만들거나 응원 장소를 찾아보세요.
            </p>
            <Button className="font-bold text-[15px] leading-[18px] mr-[7px] WhiteRoundButton-width-2 text-black mb-2">
              응원 장소 만들기
            </Button>
            <Button className=" font-bold text-[15px] leading-[18px] BlackRoundButton text-white">
              모임 찾기
            </Button>
          </div>
        )}
        {data &&
          data.map((item: AssemblesType) => (
            <AssemblePlaceItem
              {...item}
              buttonValue="참여하기"
              key={item.assmId}
            />
          ))}
      </div>
    </div>
  );
};

export default PlaceList;
