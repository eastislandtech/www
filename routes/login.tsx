import { define } from "@/utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const form = await ctx.req.formData();
    const email = form.get("email");
    const password = form.get("password");

    const res = await fetch(
      `${Deno.env.get("SUPABASE_URL")}/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "appication/json",
          "apikey": Deno.env.get("SUPABASE_KEY")!,
        },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await res.json();

    if (!data.access_token) {
      return new Response("Login failed", { status: 401 });
    }

    return new Response(null, {
      status: 303,
      headers: {
        "Set-Cookie": `session=${data.access_token}; Path=/; HttpOnly`,
        Location: "/admin",
      },
    });
  },
});

export default define.page((ctx) => {
  return (
    <main class="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        method="POST"
        class="bg-white p-6 rounded-xl shadow w-full max-w-sm space-y-4"
      >
        <h1 class="text-xl font-bold">Admin Login</h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          class="w-full border p-2 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          class="w-full border p-2 rounded"
        />

        <button class="bg-accent text-white w-full py-2 rounded">Login</button>
      </form>
    </main>
  );
});
