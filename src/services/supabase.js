import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://cayvzlauyuhkfqqkjwyf.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNheXZ6bGF1eXVoa2ZxcWtqd3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNTg1MjcsImV4cCI6MjAyMDczNDUyN30.oYfmHHs1kFZtn1yMdSGkV3rolibgYLNdQ2CH0cZ_irY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
