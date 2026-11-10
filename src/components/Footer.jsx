import logo from "../assets/logo.png";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why us" },
  { href: "#pricing", label: "Pricing" },
];

const services = [
  "Home construction",
  "Commercial construction",
  "Interiors & renovation",
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <img src={logo} alt="Beyond Bricks Construction" />
            </a>
            <p>
              Building durable homes and commercial spaces across Karnataka with
              transparent pricing and stage-wise quality checks.
            </p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                4th Floor, Prestige Tower, MG Road, Bengaluru, Karnataka 560001
              </li>
              <li>
                <a href="tel:+919845012345">+91 98450 12345</a>
              </li>
              <li>
                <a href="mailto:hello@beyondbricks.in">hello@beyondbricks.in</a>
              </li>
              <li>Monday – Saturday, 9:00 am – 6:30 pm</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Beyond Bricks Construction. All rights reserved.</p>
          <p>Designed &amp; built in Bengaluru, Karnataka.</p>
        </div>
      </div>
    </footer>
  );
}
