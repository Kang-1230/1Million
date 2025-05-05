import WindowOpenButton from './components/WindowOpenButton';

export default function Home() {
  const client_id =
    '607136172632-8f9b43ornn2ba464mt8ep1pts2eqemmm.apps.googleusercontent.com';
  //.env.local 파일로 옮기기
  const redirect_uri = 'http://localhost:3000/callback';
  //배포 시 재등록 필요
  const scope = [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/yt-analytics.readonly',
    'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
  ].join(' ');

  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(
    scope
  )}&response_type=token&access_type=online&prompt=consent`;

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
          <WindowOpenButton
            buttonName="Youtube"
            url="https://www.youtube.com/"
          />
          의 본인 채널이 만들어져 있어야 로그인이 가능해요!
        </h4>
        <div>
          <button onClick={() => (window.location.href = authUrl)}>
            Google로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
