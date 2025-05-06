// lib/supabase/auth.ts
import { createClient } from '@/app/lib/supabase/client';

export const signInWithGoogle = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes:
        'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/yt-analytics.readonly',
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  console.log('구글 로그인 완료', data);

  if (error) throw console.log('구글 로그인 실패', error);
  return data;
};
