const services = [
  {
    title: 'Home Construction',
    text: 'Independent houses, duplexes and villas, designed and built end to end.',
  },
  {
    title: 'Commercial Construction',
    text: 'Offices, schools, retail and hospitality spaces delivered on schedule.',
  },
  {
    title: 'Interiors & Renovation',
    text: 'Finishing, fit-outs and upgrades for existing buildings.',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <h2>What we build</h2>
        <p className="sub">
          One team managing design, approvals, materials and construction, so you deal with a single
          point of contact.
        </p>
        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="ph">Photo</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
