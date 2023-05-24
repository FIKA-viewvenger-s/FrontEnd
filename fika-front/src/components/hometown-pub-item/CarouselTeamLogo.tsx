import Button from "src/ui/Button";
import clsx from "clsx";

const CarouselTeamLogo = () => {

  const moveLeft = () => {
    document.getElementById("content").scrollLeft -= 100;
  }

  const moveRight = () => {
    document.getElementById("content").scrollLeft += 100;
  }

  return (
  <div>
    <button onClick={moveLeft} className="text-black">1</button>
    <button onClick={moveRight} className="text-black">2</button>
    <div id="content" className="carousel w-full p-3 flex overflow-x-auto gap-2"> 
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체0</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체1</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체2</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체3</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체4</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체5</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체6</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체7</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체8</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체9</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체10</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체11</div>
      <div className="w-[86px] h-[79px] min-w-[86px] justify-center items-center border-gray-bg border-2 text-black">전체12</div>
    </div>
  </div>
    
  );
};

export default CarouselTeamLogo;
