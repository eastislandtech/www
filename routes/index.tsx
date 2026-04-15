// routes/index.tsx
import { define } from "@/utils.ts";

export default define.page((ctx) => {
  return (
    <>
      <main>
        {/* HERO */}
        <section class="prose max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 class="max-w-2xl mx-auto">
            Precision Tech Repair & Piano Services in Eastern PEI
          </h1>
          <p class="mt-6 max-w-2xl mx-auto">
            Fast, professional service across Kings County and surrounding
            areas.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" class="btn btn-primary">
              Contact Us
            </a>
            <a href="/about" class="btn">
              Learn More
            </a>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section class="max-w-4xl mx-auto px-6 pb-12 text-center prose">
          Trusted local service • Fast turnaround • Transparent pricing
        </section>

        {/* SERVICES */}
        <section class="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8 prose">
          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h2 class="card-title mt-4">Device Repair</h2>
              <p>
                Phones, laptops, AV Equipment, Watches and more.
              </p>
              <ul>
                <li>Circuit Board Work</li>
                <li>Screen replacements</li>
                <li>Battery issues</li>
                <li>Replacement Parts</li>
                <li>Diagnostics</li>
              </ul>
              <div class="card-actions flex">
                <a href="/contact" class="btn btn-primary flex-1">
                  Request Repair →
                </a>
                <a href="" class="btn btn-ghost flex-1">Learn More</a>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h2 class="card-title mt-4">Piano Services</h2>
              <p>
                Keep your piano sounding its best.
              </p>
              <ul>
                <li>Standard tuning</li>
                <li>Pitch correction</li>
                <li>Minor Repairs and Regulation</li>
                <li>Maintenance</li>
              </ul>
              <div class="card-actions">
                <a href="/contact" class="btn btn-primary w-full">
                  Book Service →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS (PLACEHOLDER) */}
        <section class="min-w-full bg-accent py-16 prose">
          <div class="max-w-4xl mx-auto px-8">
            <h2 class="text-accent-content">What Clients Say</h2>
            <blockquote>
              “Fast, professional, and affordable. Highly recommended.”
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section class="py-20 text-center">
          <h2 class="text-3xl font-bold">Ready to get started?</h2>
          <p class="mt-4 text-gray-600">
            Submit a request and we’ll get back to you quickly.
          </p>
          <a href="/contact" class="mt-8 btn btn-primary">
            Request Service
          </a>
        </section>
      </main>
    </>
  );
});
