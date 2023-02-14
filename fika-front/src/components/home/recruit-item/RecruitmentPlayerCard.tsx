const RecruitmentPlayerCard = () => {
  return (
    <div className="w-full h-[155px] bg-black rounded-lg flex flex-col justify-center items-center">
      <div className="text-700 text-white text-[16px] mb-[10px]">
        구장 이름 or 경기 이름?
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="text-500 text-white text-[16px] mr-[10px]">
            팀이름
          </div>
          <div className="w-9 h-9 bg-white rounded-full"></div>
        </div>

        <div className="text-700 text-white text-[33px] mx-[10px] mb-[14px]">
          2 : 1
        </div>

        <div className="flex justify-center items-center">
          <div className="w-9 h-9 bg-white rounded-full"></div>
          <div className="text-500 text-white text-[16px] ml-[10px]">
            팀이름
          </div>
        </div>
      </div>
      <div className="text-500 text-white text-[16px]">날짜 및 기타 정보</div>
    </div>
  );
};

export default RecruitmentPlayerCard;
