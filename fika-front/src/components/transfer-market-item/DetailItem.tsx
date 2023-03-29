import { useRouter } from "next/router";
import { FC } from "react";
import ArrowRight from "../../assets/icon/arrowRight.svg";

interface Props {
    id?: number | undefined,
    level?: string | undefined,
    name?: string | undefined,
    position?: string | undefined,
    region?: string | undefined,
    tier?: string | undefined,
    rank?: string | undefined,
    team?: string | undefined,
    age?: string | undefined,
    regDate?: string | undefined,
    winningRate?: string | undefined,
    manner?: string | undefined,
    responseRate?: string | undefined,
    shooting?: string | undefined,
    dribble?: string | undefined,
    physical?: string | undefined,
    passing?: string | undefined,
    defense?: string | undefined,
    keeping?: string | undefined,
  }

const DetailItem: FC<Props> = ({
    id,
    level,
    name,
    position,
    region,
    tier,
    rank,
    team,
    age,
    regDate,
    winningRate,
    manner,
    responseRate,
    shooting,
    dribble,
    physical,
    passing,
    defense,
    keeping,
}) => {
  return (
    <nav className=" flex justify-center">
      <div className="mx-auto" style={{display: 'grid', gap:'10px'}}>
        <div>
            <div style={{display: 'flex', alignItems: 'center', gap:'20px', width:'808px', height: '266px', backgroundColor:'#1C1E28', borderRadius: '8px', padding: '20px 0'}}>
                <div className="bg-gray-90" style={{display: 'flex', width: '224px', height: '266px', color: 'white', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', alignItems: 'center', justifyContent: 'center'}}>
                    슨슈 프로필
                </div>
                <div style={{display: 'grid', color: 'white'}}>
                    <div>
                        <div>{name}</div>
                        <div>{team}</div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{display: 'grid'}}>
                            <div style={{display: 'flex', width: '270px'}}>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                            </div>
                            <div style={{display: 'flex', width: '270px'}}>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: 'grid'}}>
                            <div style={{display: 'flex', width: '270px'}}>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                            </div>
                            <div style={{display: 'flex', width: '204px'}}>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                                <div style={{display: 'grid'}}>
                                    <div>포지션</div>
                                    <div>{position}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
      </div>
    </nav>
  );
};
export default DetailItem;
