import logo from '../assets/logo.png'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#why', label: 'Why us' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="logo">
          <img src={logo} alt="Beyond Bricks Construction" />
        </a>
        <nav>
          {links.map((link) => (
            <a key={link.href} className="h" href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="btn"
            style={{ color: '#fff', marginLeft: 20, padding: '8px 16px' }}
            href="#contact"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
