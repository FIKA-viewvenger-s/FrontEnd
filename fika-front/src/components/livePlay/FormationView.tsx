import { FC } from "react";

const teamInfo = [
  {
    formation: "4-3-2-1",
    player: [
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
    ],
  },
];

interface Props {
  onSelect: (id: number) => void;
  select: number | undefined;
  onEdit: () => void;
}

const FormationView: FC<Props> = ({ onSelect, select, onEdit }) => {
  return (
    <div className="포메이션 보기 영역 flex-1 text-white sticky top-4 h-[100vh] transition-all">
      <div
        onClick={onEdit}
        className=" absolute right-0 top-1/2 p-[10px] bg-black/[0.6] flex flex-col justify-center items-center z-10 cursor-pointer"
      >
        <span>▷</span>
        <p className="text-[#888C9B] text-[15px]">전술 짜러가기</p>
      </div>
      <div className="h-full">
        {teamInfo.map((itme) => {
          return (
            <div className={`${itme.formation} h-[inherit] top-3`}>
              {itme.player.map((player) => {
                return (
                  <div
                    onClick={onSelect.bind(null, player.id)}
                    className={`${
                      select === player.id &&
                      " border-2 border-red-500 -translate-y-8 scale-110"
                    } " bg-[#282A2C] inline-block mr-10 transition-all cursor-pointer`}
                  >
                    <div>{player.name}</div>
                    <div>{player.position}</div>
                    <img
                      className="w-[120px] h-[160px]"
                      src={player.profileImg}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormationView;
