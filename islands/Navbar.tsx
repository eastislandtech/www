// islands/Navbar.tsx
import { useState } from "preact/hooks";
import { LuMenu } from "@preact-icons/lu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar bg-base-300/95 shadow-sm z-9999 sticky top-0">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href="/">East Island Tech</a>
      </div>
      <div class="hidden md:flex md:navbar-end">
        <ul class="menu menu-horizontal">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <details>
              <summary>Store</summary>
              <ul class="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <div className="divider px-2"></div>
          <li>
            <a href="/contact" className="btn btn-sm btn-primary">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex md:hidden">
        <button className="btn btn-square btn-ghost">
          <LuMenu class="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
