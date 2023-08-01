import clsx from "clsx";

const Banner = () => {
  return (
    <>
      <div className=" relative bg-blue-primary w-256 mt-19.5 mb-2.5 py-5 rounded-2.5 tablet:w-full mobile:w-full tablet:rounded-none mobile:rounded-none">
        {/* <ul className=" ml-2.5 w-256 mobile:w-full"> */}
        <div className="flex items-center h-20">
          <div className={clsx("mx-3.75 text-heading600 text-white")}>
            우리 동네에서 열리는 축구 응원 모임이 있어요! 내 근처의 축구 팬들을
            만나보세요.
          </div>
        </div>
        {/* </ul> */}
      </div>
    </>
  );
};

export default Banner;
