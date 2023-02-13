import clsx from "clsx";
import { useRouter } from "next/router";

const NAME = ["팀등록", "선수 등록"];

const ManagementItem = () => {
  const { push } = useRouter();

  return (
    <div className="flex justify-center">
      {NAME.map((item) => {
        return (
          <button
            className={clsx(
              "h-130.75 w-158 rounded-3.75 bg-gray-300 justify-start hover:opacity-60 cursor-pointer",
              item === "팀등록" ? "mr-8" : "mr-0"
            )}
            type="button"
            onClick={() => {
              push("/player-management/registration");
            }}
          >
            <div className="text-17.5 text-white flex h-full w-auto justify-center opacity-0 hover:opacity-100 items-center">
              <div className="h-auto">{item}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ManagementItem;
