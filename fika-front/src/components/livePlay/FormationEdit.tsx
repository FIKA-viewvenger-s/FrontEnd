import clsx from "clsx";
import { FC, useState, useReducer, useEffect } from "react";
import { formationCollection } from "src/constants/formationCollection";
import Select from "src/ui/form/Select";
import Formation from "./Formation";

const teamInfo = [
  {
    id: 1,
    profileImg:
      "https://blog.kakaocdn.net/dn/WJ908/btqB5hqMc9u/gexmVhbL0GdptqAvecZBs0/img.jpg",
    name: "손흥민",
    position: "MD",
  },
  {
    id: 3,
    profileImg:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRZtIhTZFVOCm4H9G0eruNg6Q4Mz_REKPohhDolumqBjjJymInQxz_TgvdZdP3oVn_6",
    name: "이운재",
    position: "GK",
  },
  {
    id: 6,
    profileImg:
      "https://cphoto.asiae.co.kr/listimglink/6/2022120316482339166_1670053703.jpg",
    name: "황희찬",
    position: "MD",
  },
];

const selectBoxOption = [
  {
    label: "4-3-3",
    value: 1,
  },
  {
    label: "4-2-2",
    value: 2,
  },
  {
    label: "4-2-3-1",
    value: 3,
  },
  {
    label: "4-3-2-1",
    value: 4,
  },
  {
    label: "4-2-2-2",
    value: 5,
  },
];

interface Action {
  type: string;
}
interface reducerType {
  x: number;
  y: number;
}

const formationReducer = (
  state: reducerType[],
  action: Action
): reducerType[] => {
  switch (action.type) {
    case "4-3-3":
      return formationCollection[433];
    case "4-2-2":
      return formationCollection[433];
    case "4-2-3-1":
      return formationCollection[4222];
    case "4-3-2-1":
      return formationCollection[4222];
    case "4-2-2-2":
      return formationCollection[4222];
    default:
      return state;
  }
};

const FormationEdit = () => {
  const [selectOption, setSelectOption] = useState("4-3-3");
  const [formation, dispatch] = useReducer(
    formationReducer,
    formationCollection[433]
  );

  useEffect(() => {
    dispatch({ type: selectOption });
  }, [selectOption]);

  return (
    <div className="h-full bg-[url(https://assets.fut.gg/files/assets/field.4bc3691b65be1cd2.webp)] bg-cover bg-center">
      <div className="h-[inherit] relative">
        <div>
          <Select option={selectBoxOption} setter={setSelectOption} />
        </div>
        <div className=" text-center h-[inherit]">
          <div
            className={` w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[0].y}%`, left: `${formation[0].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>
          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[1].y}%`, left: `${formation[1].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[2].y}%`, left: `${formation[2].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[3].y}%`, left: `${formation[3].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[4].y}%`, left: `${formation[4].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[5].y}%`, left: `${formation[5].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[6].y}%`, left: `${formation[6].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[7].y}%`, left: `${formation[7].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[8].y}%`, left: `${formation[8].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[9].y}%`, left: `${formation[9].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>

          <div
            className={`w-20 border rounded-md absolute -translate-x-[50%] transition-all`}
            style={{ top: `${formation[10].y}%`, left: `${formation[10].x}%` }}
          >
            <div>{teamInfo[0].name}</div>
            <div>{teamInfo[0].position}</div>
            <img src={teamInfo[0].profileImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationEdit;
