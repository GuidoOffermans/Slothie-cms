import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SupabaseClientOptions } from '@supabase/supabase-js/dist/main/lib/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supaOptions: SupabaseClientOptions = {};

export const supabase: SupabaseClient = createClient(
	supabaseUrl,
	supabaseAnonKey,
	supaOptions,
);
