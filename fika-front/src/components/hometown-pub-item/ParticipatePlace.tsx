import PlaceItem from "./ParticipatePlaceItem";

const placeItem = [
  {
    title: "모임 제목",
    schedule: "5일 전(2/11 토)",
    place: "가게이름",
    location: "위치",
  },
  {
    title: "모임 제목",
    schedule: "5일 전(2/11 토)",
    place: "가게이름",
    location: "위치",
  },
];

const ParticipatePlace = () => {
  return (
    <div className="w-[490px] bg-white rounded-[10px] mb-[20px]">
      <div className="py-[21.5px] px-[25px] text-regular font-semibold leading-[21px]">
        내가 참여 예정인 장소
      </div>
      {/* TODO: 캐러셀 적용하기 */}
      <div className="pt-[13px] pb-[19px] px-[20px]">
        {!placeItem && (
          <div className="text-center py-[13px] px-[20px]">
            <p className="text-[15px font-medium leading-[1.5] pb-[19px]">
              참여 예정인 장소가 없습니다.
              <br /> 새로운 응원 장소를 만들거나 응원 장소를 찾아보세요.
            </p>
            <button className="font-bold text-[15px] leading-[18px] mr-[7px] WhiteRoundButton-width-2 ">
              응원 장소 만들기
            </button>
            <button className="text-white font-bold text-[15px] leading-[18px] BlackRoundButton">
              모임 찾기
            </button>
          </div>
        )}
        {placeItem && placeItem.map((item) => <PlaceItem {...item} />)}
      </div>
    </div>
  );
};

export default ParticipatePlace;
