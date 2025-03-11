
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and anon key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client with error handling
let supabase;

// Validate that we have both URL and key, and that the URL is valid
if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
  try {
    // Validate URL by attempting to construct a URL object
    new URL(supabaseUrl);
    
    // Only create the client if both URL and key are available and URL is valid
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true
      }
    });
    console.log('Supabase client initialized successfully');
  } catch (error) {
    console.error('Invalid Supabase URL:', error);
    supabase = createMockClient();
  }
} else {
  console.warn('Supabase credentials are missing or invalid. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
  supabase = createMockClient();
}

// Create a mock client for when credentials are missing or invalid
function createMockClient() {
  return {
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
