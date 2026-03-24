import { createClient } from "@supabase/supabase-js";

// Service role client — only use in server-side API routes, never expose to the browser
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
