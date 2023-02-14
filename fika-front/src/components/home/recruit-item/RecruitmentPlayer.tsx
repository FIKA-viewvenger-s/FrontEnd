import RecruitmentPlayerCard from "./RecruitmentPlayerCard";

const RecruitmentPlayer = () => {
  return (
    <div className="w-[334px] pt-[25px]">
      <div className="text-700 text-white text-[18px] ml-[10px] mb-[10px]">
        우리팀의 다음경기
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <RecruitmentPlayerCard />
        <RecruitmentPlayerCard />
        <RecruitmentPlayerCard />
        <RecruitmentPlayerCard />
        <RecruitmentPlayerCard />
      </div>
    </div>
  );
};

export default RecruitmentPlayer;
