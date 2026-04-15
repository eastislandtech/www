import { useSignal } from "@preact/signals";

export default function ServiceTabs() {
  const tab = useSignal("electronics");

  return (
    <div>
      <div class="flex mb-6 border-b">
        <button
          class={`px-4 py-2 ${
            tab.value === "electronics" ? "border-b-2 border-accent" : ""
          }`}
          onClick={() => (tab.value = "electronics")}
        >
          Electronics
        </button>
        <button
          class={`px-4 py-2 ${
            tab.value === "piano" ? "border-b-2 border-accent" : ""
          }`}
          onClick={() => (tab.value = "piano")}
        >
          Piano
        </button>
      </div>

      {tab.value === "electronics" && (
        <form method="POST" class="space-y-4">
          <input type="hidden" name="service" value="electronics" />

          <input name="name" placeholder="Name" required class="w-full input" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            class="w-full input"
          />

          <input
            name="device"
            placeholder="Device (e.g. iPhone 12, Dell Laptop)"
            class="w-full input"
          />

          <select name="issue" class="select w-full">
            <option value="">Issue Type</option>
            <option value="screen">Screen</option>
            <option value="battery">Battery</option>
            <option value="diagnostic">Diagnostic</option>
          </select>

          <textarea
            name="details"
            placeholder="Describe the issue"
            class="w-full textarea"
          />

          <button class="btn btn-primary w-full">
            Submit Electronics Request
          </button>
        </form>
      )}

      {tab.value === "piano" && (
        <form method="POST" class="space-y-4">
          <input type="hidden" name="service" value="piano" />

          <input
            name="name"
            placeholder="Name"
            required
            class="w-full border p-2 rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            class="w-full border p-2 rounded"
          />

          <select name="pianoType" class="w-full border p-2 rounded">
            <option value="">Piano Type</option>
            <option value="upright">Upright</option>
            <option value="grand">Grand</option>
          </select>

          <input
            name="lastTuned"
            placeholder="Last tuned (if known)"
            class="w-full border p-2 rounded"
          />

          <textarea
            name="details"
            placeholder="Additional details"
            class="w-full border p-2 rounded"
          />

          <button class="btn btn-primary w-full">Submit Tuning Request</button>
        </form>
      )}
    </div>
  );
}
