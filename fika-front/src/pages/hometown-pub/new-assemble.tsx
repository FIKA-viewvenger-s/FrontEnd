import clsx from "clsx";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import Header from "src/components/common/header";
import Widget from "src/components/common/widget";
import CarouselTeamLogo from "src/components/hometown-pub-item/CarouselTeamLogo";
import SoccerTeamSelection from "src/components/hometown-pub-item/SoccerTeamSelection";
import CountryFilter from "src/components/hometown-pub-item/SoccerTeamSelection";
import Button from "src/ui/Button";
import Input from "src/ui/form/Input";
import Chevrondown from "src/ui/icon/Chevrondown";
import Close from "src/ui/icon/Close";
import Plus from "src/ui/icon/Plus";
import Search from "src/ui/icon/Search";
const menu = ["PL", "라리가", "분데스리가", "세리에A", "리그1", "선택안함"];

const FieldValues = {
  league: "",
  team: "",
  assmLogo: "",
  assmTitle: "",
  country: "",
  assmDt: "",
  assmAddr: "",
  assmLat: "",
  assmLon: "",
  assmReserveStt: "",
  tags: [{ tagName: "" || undefined }],
};

const NewAssemble = () => {
  const [selectMenu, setSelectMenu] = useState("전체");
  const [selectTeam, setSelectTeam] = useState("");
  const { back } = useRouter();

  const { handleSubmit, control, register } = useForm({
    defaultValues: FieldValues,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const assmReserveStt = useWatch({ control, name: "assmReserveStt" });
  const tags = useWatch({ control, name: "tags" });

  const handleChangeValue = (value: string) => {
    setSelectTeam(value);
  };

  return (
    <div className="w-200 m-auto mobile:w-96 tablet:w-158">
      <form
        className="text-black pb-28.75"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          console.log(selectTeam);
        })}
      >
        <div className="mb-5 ">
          <div className="flex items-center mt-5 mb-8">
            <div
              className="rotate-90 transform flex items-center justify-center cursor-pointer"
              onClick={() => back()}
            >
              <Chevrondown />
            </div>
            <div className="text-regular ml-5">응원 모임 등록하기</div>
          </div>

          {/* <div className="justify-between "> */}
          <SoccerTeamSelection
            isTeamLogo
            handleChangeValue={handleChangeValue}
            type="new"
          />
          <div className="text-details500 text-gray-70">
            모임 개설 후 응원팀은 변경할 수 없어요.
          </div>
        </div>

        <div>
          <label htmlFor="assmTitle" className="text-body500 py-3">
            모임명
          </label>
          <Input control={control} name="assmTitle" contained fullWidth space />
        </div>

        <div>
          <label htmlFor="assmDt" className="text-body500 py-3">
            모임 날짜
          </label>
          <Input control={control} name="assmDt" contained fullWidth space />
        </div>

        <div>
          <label htmlFor="assmAddr" className="text-body500 py-3">
            모임장소
          </label>
          <div className="relative">
            <Input
              control={control}
              name="assmAddr"
              contained
              fullWidth
              space
            />
            <div
              className=" cursor-pointer absolute top-3 right-4"
              onClick={() => console.log("click")}
            >
              <Search />
            </div>
          </div>
        </div>

        <div>
          <div className="text-body500 py-3">장소 예약 여부</div>
          <div className="flex  mt-2.5 mb-5 gap-2.5">
            <div className="flex">
              <input
                {...register("assmReserveStt")}
                value="collect"
                type="radio"
                id="collect"
                className="peer absolute top-0 opacity-0"
              />
              <label
                htmlFor="collect"
                className={clsx(
                  "py-3 px-4 rounded-lg text-medium ",
                  assmReserveStt === "collect"
                    ? "bg-blue-70 border border-solid border-blue-primary text-blue-primary"
                    : "bg-gray-10  text-gray-50"
                )}
              >
                아직 인원 모집중이에요
              </label>
            </div>
            <div className="flex">
              <input
                {...register("assmReserveStt")}
                className="peer absolute top-0 opacity-0"
                value="complete"
                type="radio"
                id="complete"
              />
              <label
                htmlFor="complete"
                className={clsx(
                  "py-3 px-4 rounded-lg text-medium ",
                  assmReserveStt === "complete"
                    ? "bg-blue-70 border border-solid border-blue-primary text-blue-primary"
                    : "bg-gray-10  text-gray-50"
                )}
              >
                장소 예약이 완료됐어요
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="text-body500 py-3">태그</div>
          <div className="flex flex-wrap gap-2.5 items-center">
            <button
              className="py-3 px-4  rounded-lg bg-white border border-blue-primary text-blue-primary flex items-center justify-center"
              onClick={() => {
                append({ tagName: undefined });
              }}
            >
              <div className="mr-3.5">태그 추가하기</div>

              <div className="mr-1.5 flex items-center">
                <Plus fill="#6172EE" />
              </div>
            </button>
            {fields.map((field, index) => {
              return (
                <div className="relative">
                  <Input
                    control={control}
                    name={`tags.${index}.tagName`}
                    key={field.tagName}
                    placeholder="태그를 포함해서 소개해보세요"
                    rightIcon
                    contained
                    className="w-59"
                  />
                  <div className=" absolute top-3 left-4">#</div>
                  {tags[index]?.tagName && (
                    <div
                      className=" absolute top-3 right-4"
                      onClick={() => remove(index)}
                    >
                      <Close />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </form>

      <Button
        type="submit"
        className="py-3.5 rounded-lg fixed w-200 mobile:w-96 tablet:w-158 bottom-4 text-white text-regular bg-blue-80"
      >
        모임 등록하기
      </Button>
    </div>
  );
};

NewAssemble.getLayout = (page: ReactNode) => {
  return (
    <div className=" bg-white">
      <Header title="FIKA" isNew>
        <></>
      </Header>
      <main>{page}</main>
    </div>
  );
};

export default NewAssemble;
