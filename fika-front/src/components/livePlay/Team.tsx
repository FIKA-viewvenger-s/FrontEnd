const Team = () => {
  return (
    <div className="팀 정보 박스 bg-black p-3.5 mb-[10px] text-center">
      <div className="flex items-center pb-[30px]">
        <span className="mr-[14px]">
          <img
            className="w-[60px] h-[60px] rounded-lg"
            src="http://www.urbanbrush.net/web/wp-content/uploads/edd/2017/09/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2017-09-24-%EC%98%A4%ED%9B%84-7.22.36.png"
            alt="teamImg"
          />
        </span>
        <span className="font-semibold text-[20px] mr-[19px]">관악 FC</span>
        <span className="mr-[14px]">
          <img
            className="w-[50px] h-[50px]"
            src="https://blog.kakaocdn.net/dn/daNR6z/btqYbJNFasE/rbH16SlWukVsCcjgefsWC1/img.png"
            alt="rankImg"
          />
        </span>
        <span>
          <p className="text-[13px]">월클</p>
          <p className="font-semibold text-[13px]">643 점</p>
        </span>
      </div>
      <div className="flex justify-around">
        <div>
          <p className="text-[13px]">시즌 전적</p>
          <p className="font-semibold text-[20px]">nn</p>
        </div>
        <div>
          <p className="text-[13px]">상대 전적</p>
          <p className="text-[20px]">nn</p>
        </div>
        <div>
          <p className="text-[13px]">승률</p>
          <p className="font-semibold text-[20px]">64.3%</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
