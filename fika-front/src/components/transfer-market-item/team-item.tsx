import { useRouter } from "next/router";
import { FC } from "react";

const teamInfo = [
  {
    name: '대방FC',
    region: '대방동',
    tier: '브론즈',
    memberNum: '19',
    team: '대방동 랭킹 1위',
    agvAge: '29',
    regDate: '2023-02-01',
  },
  {
    name: '신림유나이티드',
    region: '신림동',
    tier: '실버',
    memberNum: '20',
    team: '신림동 맨체스터 유나이티드',
    agvAge: '29',
    regDate: '2023-02-03',
  },
  {
    name: 'FC건대',
    region: '화양동',
    tier: '골드',
    memberNum: '33',
    team: '건대 중앙동아리',
    agvAge: '23',
    regDate: '2023-02-10',
  },
  {
    name: '양꼬치앤칭따오',
    region: '대림동',
    tier: '플레티넘',
    memberNum: '150',
    team: '경기 끝나고 회식은 무조건 양꼬치',
    agvAge: '31',
    regDate: '2023-02-10',
  },
  {
    name: '부천마드리드',
    region: '부천',
    tier: '다이아',
    memberNum: '23',
    team: '부천마드리드 호날두 모집중',
    agvAge: '30',
    regDate: '2023-02-10',
  },
  {
    name: 'KFA',
    region: '대한민국',
    tier: '마스터',
    memberNum: '26',
    team: '대한민국 국가대표팀',
    agvAge: '26',
    regDate: '2023-02-10',
  },
];

const TeamItem: FC = () => {
  return (
    <nav className=" flex justify-center">
      <div className="mx-auto" style={{display: 'grid', gap:'10px'}}>
        {teamInfo.map((item, idx) => {
          return (
            <div key={idx}>
              <div style={{display: 'flex', alignItems: 'center', gap:'20px', width:'1328px', height: '109px', backgroundColor:'#1C1E28', borderRadius: '8px', padding: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color:'#888C9B', fontSize:'10px', height: '69px', width:'60px', backgroundColor: '#262937', borderRadius: '8px'}}>팀 프로필</div>
                <div className="text-xl text-white" style={{ fontWeight: '500'}}>{item.level}</div>
                <div style={{ width: '190px'}}>
                  <div className="text-xl text-white" style={{ fontWeight: '500'}}>{item.name}</div>
                  <div className="text-light-gray-text-color" style={{ fontSize:'15px'}}>{item.team}</div>
                </div>
                <div style={{ display: 'grid', gap:'13px', width: '130px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>지역</span>
                  <span className="text-xl text-white" style={{ fontWeight: '500'}}>{item.region}</span>
                </div>
                <div style={{ display: 'grid', gap:'13px', width: '130px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>평균연령</span>
                  <span className="text-xl text-white" style={{ fontWeight: '500'}}>{item.agvAge}</span>
                </div>
                <div style={{ display: 'grid', gap:'13px', width: '130px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>팀티어</span>
                  <span className="text-xl text-white" style={{ fontWeight: '500'}}>{item.tier}</span>
                </div >
                <div style={{ display: 'grid', gap:'13px', width: '130px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>모집인원</span>
                  <span className="text-xl text-white" style={{fontWeight: '500'}}>{item.memberNum}</span>
                </div>
                <div style={{ width: '239px', height:'69px', backgroundColor: '#262937', borderRadius: '8px'}}></div>
                <div style={{ display: 'grid', gap:'13px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>등록일</span>
                  <span className="text-white" style={{fontSize:'13px', fontWeight: '500'}}>{item.regDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
export default TeamItem;
