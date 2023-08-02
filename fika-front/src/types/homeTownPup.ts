export type AssemblesType = {
  assmId: number;
  assmTitle: string;
  assmDt: string;
  assmAddr: string;
  assmLat: number;
  assmLon: number;
  assmParticipant: number;
  assmParticipantCnt: number;
  tag: string[];
  placeImg: string;
  memberImges: [
    {
      memberNickNm: string;
      memberImg: string;
    },
    {
      memberNickNm: string;
      memberImg: string;
    }
  ];
};
