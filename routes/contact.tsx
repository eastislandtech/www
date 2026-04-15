// routes/contact.tsx
import { define } from "@/utils.ts";
import { page } from "fresh";
import { supabase } from "../lib/supabase.ts";
import { sendEmail } from "../lib/email.ts";
import ServiceTabs from "@/islands/ServiceTabs.tsx";

export const handler = define.handlers({
  async POST(ctx) {
    const form = await ctx.req.formData();

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      service: form.get("service"),
      details: form.get("details"),
      device: form.get("device"),
      issue: form.get("issue"),
      pianoType: form.get("pianoType"),
      lastTuned: form.get("lastTuned"),
      created_at: new Date().toISOString(),
    };

    await supabase.from("requests").insert([data]);

    await sendEmail(data);

    return new Response(null, {
      status: 303,
      headers: { Location: "/contact?success=1" },
    });
  },
});

export default define.page((ctx) => {
  const success = ctx.url.searchParams.get("success");

  return (
    <>
      <main class="min-h-screen">
        <div class="max-w-2xl mx-auto mt-8 bg-base-100 p-6 rounded-xl shadow prose">
          <h1 class="text-2xl font-bold">Request Service</h1>
          {success && (
            <p class="text-success mt-4">Request submitted successfully!</p>
          )}

          <div class="mt-6">
            <div class="tabs tabs-border">
              <input
                type="radio"
                class="tab"
                aria-label="Device Repair"
                name="form-tabs"
                checked="checked"
              />
              <div class="tab-content mt-4">
                <form method="POST" class="space-y-4">
                  <input type="hidden" name="service" value="electronics" />
                  <input
                    class="input input-neutral w-full"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    class="input input-neutral w-full"
                    name="email"
                    placeholder="Email"
                    required
                  />

                  <input
                    class="input input-neutral w-full"
                    name="device"
                    placeholder="Device (e.g. iPhone 12, Audio Amplifier)"
                  />
                  <select name="issue" class="select select-neutral w-full">
                    <option value="">Issue Type</option>
                    <option value="screen">Screen</option>
                    <option value="battery">Battery</option>
                    <option value="diagnostic">Diagnostic</option>
                    <option value="other">Other</option>
                  </select>

                  <textarea
                    name="details"
                    placeholder="Describe the issue"
                    class="textarea textarea-neutral w-full"
                  />
                  <button class="btn btn-primary w-full">
                    Submit Service Request
                  </button>
                </form>
              </div>

              <input
                type="radio"
                class="tab"
                aria-label="Piano Service"
                name="form-tabs"
              />
              <div class="tab-content">Piano Service Form</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
