// lib/auth.ts
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export function getServerSupabase(req: Request) {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_KEY")!,
    {
      global: {
        headers: {
          Authorization: req.headers.get("Authorization") || "",
        },
      },
    },
  );
}
