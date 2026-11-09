const projects = [
  { type: 'RESIDENTIAL', name: 'Project name', meta: '0000 sq.ft. · City' },
  { type: 'COMMERCIAL', name: 'Project name', meta: '00000 sq.ft. · City' },
  { type: 'RESIDENTIAL', name: 'Project name', meta: '0000 sq.ft. · City' },
]

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Recent projects</h2>
        <p className="sub">Replace these placeholders with your own completed work.</p>
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
