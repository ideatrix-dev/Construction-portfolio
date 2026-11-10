const projects = [
  { type: 'RESIDENTIAL', name: 'The Courtyard House', meta: '3,200 sq.ft. · Bengaluru' },
  { type: 'COMMERCIAL', name: 'Nexus Business Park', meta: '42,000 sq.ft. · Mysuru' },
  { type: 'RESIDENTIAL', name: 'Lakeview Villas', meta: '8,500 sq.ft. · Udupi' },
]

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Recent projects</h2>
        <p className="sub">
          A selection of homes and commercial spaces delivered across Karnataka.
        </p>
        <div className="grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <div className="ph">Project photo</div>
              <span className="num">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
