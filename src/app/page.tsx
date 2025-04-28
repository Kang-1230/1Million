import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-[96px] font-extrabold">안녕하세요, 유튜버님!</h1>
      <h3 className="text-[36px] font-medium flex">
        로그인하면 <div className="text-[#FFDB00]">원밀리언</div>의 코칭
        시스템을 볼 수 있어요.
      </h3>
      <h4>
        <Link href="https://www.youtube.com/">Youtube</Link>의 본인 채널이
        만들어져 있어야 로그인이 가능해요!
      </h4>
      <div>
        <button>Google로 로그인</button>
      </div>
    </div>
  );
}
