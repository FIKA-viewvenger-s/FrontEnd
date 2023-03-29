import { useRouter } from "next/router";
import { FC, useState } from "react";
import ArrowRight from "../../assets/icon/arrowRight.svg";
import ArrowLeft from "../../assets/icon/arrowLeft.svg";
import DetailItem from "./DetailItem";

interface playerInfo {
  id: number | undefined,
  level: string | undefined,
  name: string | undefined,
  position: string | undefined,
  region: string | undefined,
  tier: string | undefined,
  rank: string | undefined,
  team: string | undefined,
  age: string | undefined,
  regDate: string | undefined,
  winningRate: string | undefined,
  manner: string | undefined,
  responseRate: string | undefined,
  shooting: string | undefined,
  dribble: string | undefined,
  physical: string | undefined,
  passing: string | undefined,
  defense: string | undefined,
  keeping: string | undefined,
}

const playerInfo = [
  {
    id: 1,
    level: '28',
    name: '조병윤',
    position: 'CDM',
    region: '대방동',
    tier: '브론즈',
    rank: 'C',
    team: 'Chelsea FC',
    age: '29',
    regDate: '2023-02-01',
    winningRate: '87%',
    manner: '4.1',
    responseRate: '13%',
    shooting: '76',
    dribble: '85',
    physical: '94',
    passing: '86',
    defense: '91',
    keeping: '34',
  },
  {
    id: 2,
    level: '96',
    name: '김원희',
    position: 'RF',
    region: '신림동',
    tier: '실버',
    rank: 'C',
    team: 'Tottenham FC',
    age: '29',
    regDate: '2023-02-03',
    winningRate: '88%',
    manner: '4.3',
    responseRate: '33%',
    shooting: '96',
    dribble: '90',
    physical: '84',
    passing: '85',
    defense: '71',
    keeping: '30',
  },
  {
    id: 3,
    level: '93',
    name: '김현진',
    position: 'CF',
    region: '화양동',
    tier: '골드',
    rank: 'C',
    team: 'Manchester United',
    age: '29',
    regDate: '2023-02-10',
    winningRate: '90%',
    manner: '4.8',
    responseRate: '56%',
    shooting: '90',
    dribble: '90',
    physical: '80',
    passing: '81',
    defense: '61',
    keeping: '28',
  },
  {
    id: 4,
    level: '93',
    name: '김태현',
    position: 'CM',
    region: '대림동',
    tier: '플레티넘',
    rank: 'C',
    team: 'Liverpool FC',
    age: '29',
    regDate: '2023-02-10',
    winningRate: '83%',
    manner: '4.4',
    responseRate: '33%',
    shooting: '82',
    dribble: '85',
    physical: '91',
    passing: '96',
    defense: '85',
    keeping: '34',
  },
  {
    id: 5,
    level: '93',
    name: '이현재',
    position: 'LF',
    region: '부천',
    tier: '다이아',
    rank: 'C',
    team: 'FC Barcelona',
    age: '29',
    regDate: '2023-02-10',
    winningRate: '87%',
    manner: '5.0',
    responseRate: '55%',
    shooting: '92',
    dribble: '86',
    physical: '96',
    passing: '78',
    defense: '81',
    keeping: '44',
  },
  {
    id: 6,
    level: '93',
    name: '문예진',
    position: 'LWB',
    region: '대한민국',
    tier: '마스터',
    rank: 'C',
    team: 'FC Bayern München',
    age: '29',
    regDate: '2023-02-10',
    winningRate: '82%',
    manner: '4.3',
    responseRate: '43%',
    shooting: '66',
    dribble: '90',
    physical: '94',
    passing: '90',
    defense: '95',
    keeping: '32',
  },
  {
    id: 7,
    level: '99',
    name: '흥민쏜',
    position: 'RM',
    region: '대한민국',
    tier: '레전더리',
    rank: 'SS',
    team: 'FC TottenHam Hotspur',
    age: '31',
    regDate: '2023-01-10',
    winningRate: '99%',
    manner: '5.0',
    responseRate: '77%',
    shooting: '130',
    dribble: '130',
    physical: '130',
    passing: '130',
    defense: '130',
    keeping: '130',
  },
];

const PlayerItem: FC = () => {
  const [selectedItem, setSelectedItem] = useState<playerInfo>();
  return (
    <nav className=" flex justify-center">
      <div className="mx-auto" style={{display: 'grid', gap:'10px'}}>
        {playerInfo.map((item, idx) => {
          return (
            <div key={idx} style={{display: 'flex'}}>
              <div style={{display: 'flex', alignItems: 'center', gap:'20px', width: selectedItem ?'520px' : '1328px', height: '109px', backgroundColor:'#1C1E28', borderRadius: '8px', padding: '20px 0 20px 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color:'#888C9B', fontSize:'10px', height: '69px', width:'60px', minWidth: '60px', backgroundColor: '#262937', borderRadius: '8px'}}>팀 프로필 </div>
                <div className="text-xl text-white" style={{ width: '54px', minWidth: '54px', textAlign: 'center', fontWeight: '500'}}>{item.level}</div>
                  <div style={{ width: '435px'}}>
                    <div className="text-xl text-white" style={{ fontWeight: '500'}}>{item.name}</div>
                    <div className="text-light-gray-text-color" style={{ fontSize:'15px'}}>{item.team}</div>
                  </div>
                <div style={{display: selectedItem ? 'none' : 'flex', gap:'13px'}}>
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
                  <div style={{ display: 'grid', gap:'13px', minWidth: '72px'}}>
                    <span className="text-light-gray-text-color" style={{ color:'#888C9B', fontSize:'13px'}}>등록일</span>
                    <span className="text-white" style={{fontSize:'13px', fontWeight: '500'}}>{item.regDate}</span>
                  </div>
                </div>
                <div 
                  className="bg-light-gray-text-color" style={{ height: '109px', width: '40px', minWidth: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: '8px', borderTopRightRadius: '8px'}}
                  onClick={() => {
                    setSelectedItem(selectedItem === undefined || selectedItem.id !== item.id ? item : undefined);
                  }}
                >
                  <div style={{ display: selectedItem === undefined ? 'none' : ''}}>
                    <ArrowRight/>
                  </div>
                  <div style={{ display: selectedItem ? 'none' : ''}}>
                    <ArrowLeft/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{display: selectedItem === undefined ? 'none' : ''}}>
        <DetailItem {...selectedItem} />
      </div>
    </nav>
  );
};
export default PlayerItem;
