import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ovffeggymtfzenbxybfn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92ZmZlZ2d5bXRmemVuYnh5YmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NjM0OTgsImV4cCI6MjA1MTAzOTQ5OH0.5opGPFzIXN0GLMtxMYaTYVXL1pRP6p6e9oUFIMjd-A8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
