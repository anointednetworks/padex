
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and anon key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client with error handling
let supabase;

if (supabaseUrl && supabaseAnonKey) {
  // Only create the client if both URL and key are available
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true
    }
  });
} else {
  // Create a mock client or placeholder when credentials are missing
  console.warn('Supabase credentials are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
  
  // Create a dummy client that won't throw errors but won't connect to anything
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured' } }),
      insert: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured' } }),
      update: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured' } }),
      delete: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured' } }),
    }),
    auth: {
      signIn: () => Promise.resolve({ user: null, error: { message: 'Supabase credentials not configured' } }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: null, unsubscribe: () => {} }),
    },
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured' } }),
        download: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured' } }),
      }),
    },
  };
}

export { supabase };
