'use client';

import { signInWithGoogle } from '../lib/supabase/auth';

export default function LoginButton() {
  const handleLogin = async () => {
    try {
      console.log(
        'GOOGLE_CLIENT_ID:',
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      );

      await signInWithGoogle();

      const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      const redirect_uri =
        'https://vuwhjbfdoavrlicxcsem.supabase.co/auth/v1/callback';
      const scope = [
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/yt-analytics.readonly',
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
      ].join(' ');

      const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(
        scope
      )}&response_type=token&access_type=online&prompt=consent`;
      window.location.href = authUrl;
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return <button onClick={handleLogin}>구글로 로그인하기</button>;
}
