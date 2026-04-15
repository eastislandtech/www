// routes/admin/index.tsx
import { page } from "fresh";
import { define } from "@/utils.ts";
import { supabase } from "@/lib/supabase.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const { data } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    return page(data || []);
  },
});

export default define.page((ctx) => {
  const requests = ctx.data || [];

  return (
    <main class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {requests.length === 0
          ? <p>No requests yet.</p>
          : (
            <div class="overflow-x-auto bg-white rounded-xl shadow">
              <table class="w-full text-left">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-3">Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Details</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((r) => (
                    <tr class="border-t">
                      <td class="p-3">{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.service}</td>
                      <td>{r.details}</td>
                      <td>{r.status || "new"}</td>
                      <td>
                        <form method="POST" action="/admin/update">
                          <input type="hidden" name="id" value={r.id} />
                          <select name="status" class="border p-1">
                            <option value="new">New</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="completed">Completed</option>
                          </select>
                          <button class="ml-2 bg-accent text-white px-2 py-1 rounded">
                            Save
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      </div>
    </main>
  );
});
