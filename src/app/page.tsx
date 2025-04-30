import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-w-[1344px] mx-[48px] h-[934px] my-[52px] bg-[#BA0000] flex flex-col items-center justify-center rounded-[8px]">
        <h1 className="text-[96px] font-extrabold text-[#FFFFFF] ">
          안녕하세요, 유튜버님!
        </h1>
        <h3 className="text-[36px] font-medium flex text-[#FFFFFF]">
          로그인하면<div className="text-[#FFDB00] ml-[10px]">원밀리언</div>의
          코칭 시스템을 볼 수 있어요.
        </h3>
        <h4>
          <button className="text-blue-600">Youtube</button>의 본인 채널이
          만들어져 있어야 로그인이 가능해요!
        </h4>
        <div>
          <button>Google로 로그인</button>
        </div>
      </div>
    </div>
  );
}
