import { useRouter } from "next/router";
import { FC } from "react";

const playerInfo = [
  {
    level: '28',
    name: '조병윤',
    position: 'CDM',
    region: '대방동',
    tier: '브론즈',
    rank: 'C',
    team: 'Chelsea FC',
    age: '29',
    regDate: '2023-02-01',
  },
  {
    level: '96',
    name: '김원희',
    position: 'RF',
    region: '신림동',
    tier: '실버',
    rank: 'C',
    team: 'Tottenham FC',
    age: '29',
    regDate: '2023-02-03',
  },
  {
    level: '93',
    name: '김현진',
    position: 'CF',
    region: '화양동',
    tier: '골드',
    rank: 'C',
    team: 'Manchester United',
    age: '29',
    regDate: '2023-02-10',
  },
  {
    level: '93',
    name: '김태현',
    position: 'CM',
    region: '대림동',
    tier: '플레티넘',
    rank: 'C',
    team: 'Liverpool FC',
    age: '29',
    regDate: '2023-02-10',
  },
  {
    level: '93',
    name: '이현재',
    position: 'LWF',
    region: '부천',
    tier: '다이아',
    rank: 'C',
    team: 'FC Barcelona',
    age: '29',
    regDate: '2023-02-10',
  },
  {
    level: '93',
    name: '문예진',
    position: 'LWB',
    region: '대한민국',
    tier: '마스터',
    rank: 'C',
    team: 'FC Bayern München',
    age: '29',
    regDate: '2023-02-10',
  },
];

const TransferMarketItem: FC = () => {
  return (
    <nav className=" flex justify-center">
      <div className="mx-auto" style={{display: 'grid', gap:'10px'}}>
        {playerInfo.map((item, idx) => {
          return (
            <div key={idx}>
              <div style={{display: 'flex', alignItems: 'center', gap:'20px', width:'1328px', height: '109px', backgroundColor:'#1C1E28', borderRadius: '8px', padding: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color:'#888C9B', fontSize:'10px', height: '69px', width:'60px', backgroundColor: '#262937', borderRadius: '8px'}}>팀 프로필</div>
                <div className="text-xl text-white" style={{ fontWeight: '500'}}>{item.level}</div>
                <div style={{ width: '435px'}}>
                  <div className="text-xl text-white" style={{ fontWeight: '500'}}>{item.name}</div>
                  <div className="text-light-gray-text-color" style={{ fontSize:'15px'}}>{item.team}</div>
                </div>
                <div style={{ display: 'grid', gap:'13px', width: '50px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>포지션</span>
                  <span className="text-xl text-white" style={{fontWeight: '500'}}>{item.position}</span>
                </div>
                <div style={{ display: 'grid', gap:'13px', width: '80px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>지역</span>
                  <span className="text-xl text-white" style={{ fontWeight: '500'}}>{item.region}</span>
                </div>
                <div style={{ display: 'grid', gap:'13px', width: '80px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>티어</span>
                  <span className="text-xl text-white" style={{ fontWeight: '500'}}>{item.tier}</span>
                </div >
                <div style={{ display: 'grid', gap:'13px', width: '50px'}}>
                  <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>나이</span>
                  <span className="text-xl text-white" style={{ fontWeight: '500'}}>{item.age}</span>
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
export default TransferMarketItem;
