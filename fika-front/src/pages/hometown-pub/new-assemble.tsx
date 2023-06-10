import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import CarouselTeamLogo from "src/components/hometown-pub-item/CarouselTeamLogo";
import Button from "src/ui/Button";
import Input from "src/ui/form/Input";
import Chevrondown from "src/ui/icon/Chevrondown";
import Plus from "src/ui/icon/Plus";
import Search from "src/ui/icon/Search";
const menu = ["PL", "라리가", "분데스리가", "세리에A", "리그1", "선택안함"];

const FieldValues = {
  league: "",
  team: "",
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
  const { back } = useRouter();

  const { handleSubmit, control, register } = useForm({
    defaultValues: FieldValues,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  return (
    <form
      className="text-black"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div>
        <div className="flex items-center">
          <div
            className="rotate-90 transform w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => back()}
          >
            <Chevrondown />
          </div>
          <div>응원 모임 등록하기</div>
        </div>

        <div className="justify-between px-[25px] py-[22px]">
          {/* <div className="text-regular font-semibold leading-[21px] text-black">
            <button className="mr-1 rounded-full px-4 py-3 bg-gray-20 text-gray-70">
              국내 축구
            </button>
            <button className="rounded-full px-4 py-3  bg-gray-bg text-white">
              해외 축구
            </button>
          </div> */}

          <div className="flex">
            <div className="flex">
              <input
                {...register("country")}
                value="domestic"
                type="radio"
                id="domestic"
              />
              <label htmlFor="domestic">국내 축구</label>
            </div>
            <div className="flex">
              <input
                {...register("country")}
                value="overseas"
                type="radio"
                id="overseas"
              />
              <label htmlFor="overseas">해외 축구</label>
            </div>
          </div>
        </div>
        <div className="flex px-[20px]">
          {menu.map((item, idx) => {
            return (
              <div key={idx}>
                <button
                  onClick={() => setSelectMenu(item)}
                  className={clsx(
                    "px-4 pt-3 bg-none text-gray-70 font-medium text-[15px]",
                    selectMenu === item ? "text-gray-bg " : "pb-3"
                  )}
                >
                  <div
                    className={clsx(
                      selectMenu === item &&
                        "border-b-[3px] border-gray-bg pb-[9px]"
                    )}
                  >
                    {item}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
        <CarouselTeamLogo />
        <div>모임 개설 후 응원팀은 변경할 수 없어요.</div>
      </div>

      <div>
        <label htmlFor="assmTitle">모임명</label>
        <Input control={control} name="assmTitle" />
      </div>

      <div>
        <label htmlFor="assmDt">모임 날짜</label>
        <Input control={control} name="assmDt" />
      </div>

      <div>
        <label htmlFor="assmAddr">모임장소</label>
        <Input control={control} name="assmAddr" />
      </div>

      <div>
        <div>장소 예약 여부</div>
        <div className="flex">
          <div className="flex">
            <input
              {...register("assmReserveStt")}
              value="collect"
              type="radio"
              id="collect"
            />
            <label htmlFor="collect">아직 인원 모집중이에요</label>
          </div>
          <div className="flex">
            <input
              {...register("assmReserveStt")}
              value="complete"
              type="radio"
              id="complete"
            />
            <label htmlFor="complete">장소 예약이 완료됐어요</label>
          </div>
        </div>

        <div className=" cursor-pointer" onClick={() => console.log("click")}>
          <Search />
        </div>
      </div>
      <div>
        <div>태그</div>
        <div className="flex">
          {fields.map((field, index) => {
            return (
              <Input
                control={control}
                name={`tags.${index}.tagName`}
                key={field.tagName}
              />
            );
          })}

          <Button
            onClick={() => {
              append({ tagName: undefined });
            }}
          >
            태그 추가하기 <Plus />
          </Button>
        </div>
      </div>
      <Button type="submit">모임 등록하기</Button>
    </form>
  );
};

export default NewAssemble;
