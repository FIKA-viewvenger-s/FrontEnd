import { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  ZoomControl,
  MapTypeControl,
} from "react-kakao-maps-sdk";

interface KakaoMapType {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: null | string;
  isLoading: boolean;
}

const kakaoMap = () => {
  const [locationState, setLocationState] = useState<KakaoMapType>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setLocationState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  return (
    <div className="w-[490px] bg-white rounded-[10px]">
      <div className="py-[21.5px] px-[25px] text-regular font-semibold leading-[21px]">
        지도에서 응원 장소 찾기
      </div>
      <Map
        center={locationState.center}
        className="w-full h-[295px] rounded-b-[10px]"
        level={3} // 지도의 확대 레벨
      >
        {!locationState.isLoading && (
          <MapMarker // 마커를 생성합니다
            position={locationState.center}
            draggable={true}
          >
            <div className="p-[5px] text-black">
              {locationState.errMsg
                ? locationState.errMsg
                : "여기에 계신가요?!"}
            </div>
          </MapMarker>
        )}
        <ZoomControl position={7} />
        <MapTypeControl position={2} />
      </Map>
    </div>
  );
};

export default kakaoMap;
