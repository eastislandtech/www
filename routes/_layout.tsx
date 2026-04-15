import { define } from "@/utils.ts";
import Navbar from "@/islands/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

export default define.layout(({ Component, state, url }) => {
  return (
    <div class="layout">
      <Navbar />
      <main>
        <Component />
      </main>
      <Footer />
    </div>
  );
});
