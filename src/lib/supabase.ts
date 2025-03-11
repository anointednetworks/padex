
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and anon key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client with error handling
let supabase;

// Better validation with helpful console messages
if (!supabaseUrl) {
  console.error('Supabase URL is missing. Please set VITE_SUPABASE_URL in your .env.local file.');
  supabase = createMockClient();
} else if (!supabaseAnonKey) {
  console.error('Supabase Anon Key is missing. Please set VITE_SUPABASE_ANON_KEY in your .env.local file.');
  supabase = createMockClient();
} else {
  try {
    // Validate URL format
    new URL(supabaseUrl);
    
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true
      }
    });
    console.log('Supabase client initialized successfully with URL:', supabaseUrl);
    
    // Test connection with a more reliable query
    supabase.from('subscribers').select('*').limit(1)
      .then(response => {
        if (response.error) {
          console.error('Supabase connection test failed:', response.error);
        } else {
          console.log('Supabase connection test successful');
        }
      })
      .catch(error => {
        console.error('Supabase connection test threw an exception:', error);
      });
  } catch (error) {
    console.error('Invalid Supabase URL:', error);
    supabase = createMockClient();
  }
}

// Improved mock client with better logging
function createMockClient() {
  console.warn('Using mock Supabase client. Forms will not work.');
  return {
    from: (table) => ({
      select: (columns) => {
        console.log(`Mock: SELECT ${columns || '*'} FROM ${table}`);
        return Promise.resolve({ data: [], error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } });
      },
      insert: (data) => {
        console.log(`Mock: INSERT INTO ${table}`, data);
        return Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } });
      },
      update: (data) => {
        console.log(`Mock: UPDATE ${table}`, data);
        return Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } });
      },
      delete: () => {
        console.log(`Mock: DELETE FROM ${table}`);
        return Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } });
      },
      count: () => {
        console.log(`Mock: COUNT FROM ${table}`);
        return Promise.resolve({ data: 0, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } });
      },
      eq: () => ({ 
        single: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } }) 
      }),
      limit: () => Promise.resolve({ data: [], error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } }),
    }),
    auth: {
      signIn: () => Promise.resolve({ user: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: null, unsubscribe: () => {} }),
    },
    storage: {
      from: () => ({
        upload: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } }),
        download: () => Promise.resolve({ data: null, error: { message: 'Supabase credentials not configured', details: 'Check your .env.local file' } }),
      }),
    },
  };
}

export { supabase };
