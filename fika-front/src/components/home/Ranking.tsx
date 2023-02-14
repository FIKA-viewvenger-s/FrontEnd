const Ranking = () => {
  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="w-[430px] pt-[25px]">
      <div className="text-700 text-white text-[18px] ml-[10px] mb-[10px]">
        내주변팀 순위
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        {test.map((item) => {
          return (
            <div className="w-full h-[53px] bg-black rounded-lg flex flex-col justify-center items-center">
              랭키이이이이이이잉
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
