'use client';

import { signInWithGoogle } from '../lib/supabase/auth';

export default function LoginButton() {
  const handleLogin = async () => {
    try {
      await signInWithGoogle();

      const client_id = process.env.GOOGLE_CLIENT_ID;
      const redirect_uri = 'http://localhost:3000/callback';
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
