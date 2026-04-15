import { define } from "@/utils.ts";
import { getCookies } from "@std/http";

export default define.middleware(async (ctx) => {
  console.log("ADMIN AUTH REQUIRED");
  const cookies = getCookies(ctx.req.headers);
  const token = cookies["session"];

  if (!token) {
    return new Response(null, {
      status: 303,
      headers: { Location: "/login" },
    });
  }

  const res = await fetch(`${Deno.env.get("SUPABASE_URL")}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      apikey: Deno.env.get("SUPABASE_KEY")!,
    },
  });

  if (res.status !== 200) {
    return new Response(null, {
      status: 303,
      headers: { Location: "/login" },
    });
  }
  return await ctx.next();
});
