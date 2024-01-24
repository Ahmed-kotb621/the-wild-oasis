import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bjapkyprupdeauyymxsa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqYXBreXBydXBkZWF1eXlteHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTAzOTYsImV4cCI6MjAyMTU4NjM5Nn0.Ie-eqWAa0ICtV1d0kBc2cb4uJHGXWGhFcBIEAct8yrc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
