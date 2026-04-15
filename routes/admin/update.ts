// routes/admin/update.ts
import { Handlers } from "$fresh/server.ts";
import { supabase } from "../../lib/supabase.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();

    const id = form.get("id");
    const status = form.get("status");

    await supabase
      .from("requests")
      .update({ status })
      .eq("id", id);

    return new Response(null, {
      status: 303,
      headers: { Location: "/admin" },
    });
  },
};
