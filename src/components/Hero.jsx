const stats = [
  { value: '[##]+', label: 'Projects delivered' },
  { value: '[##]+', label: 'Quality checks' },
  { value: '[##]', label: 'Sq.ft. built' },
  { value: '[##]+', label: 'Cities served' },
]

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="wrap">
        <h1>We build more than walls. We build what lasts.</h1>
        <p>
          Beyond Bricks Construction delivers homes and commercial spaces from design to handover,
          with clear pricing and stage-wise quality checks.
        </p>
        <a className="btn" href="#contact">
          Start your project
        </a>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <b>{stat.value}</b>
              <small>{stat.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
