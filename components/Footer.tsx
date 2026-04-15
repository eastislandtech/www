export default function Footer() {
  return (
    <footer class="footer sm:footer-horizontal bg-base-300 p-16">
      <aside>
        <p>© {new Date().getFullYear()} East Island Tech</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Device Repair</a>
        <a className="link link-hover">Piano Servicing</a>
        <a className="link link-hover">Refurbished Sales</a>
        <a className="link link-hover">Hobby Electronics Components</a>
        <a className="link link-hover">Web Development Services</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a href="/about" className="link link-hover">About us</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/blog" className="link link-hover">Blog</a>
      </nav>
    </footer>
  );
}
