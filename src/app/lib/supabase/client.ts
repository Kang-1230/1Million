'use client';

import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function createClient() {
  console.log('supabase 확인', supabaseUrl, supabaseAnonKey);
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
