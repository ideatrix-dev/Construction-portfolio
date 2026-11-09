const commitments = [
  {
    num: '01',
    title: 'On-time delivery',
    text: 'A fixed schedule agreed upfront, with a clear policy if we run late.',
  },
  {
    num: '02',
    title: 'Quality at every stage',
    text: 'Inspections at foundation, structure, masonry and finishing before work moves on.',
  },
  {
    num: '03',
    title: 'Safe payments',
    text: 'Stage-wise payments tied to verified milestones.',
  },
  {
    num: '04',
    title: 'Transparent pricing',
    text: 'A detailed quote and cost breakdown, with changes approved by you first.',
  },
]

export default function WhyUs() {
  return (
    <section className="band" id="why">
      <div className="wrap">
        <h2>Why Beyond Bricks</h2>
        <p className="sub">Four commitments on every project, big or small.</p>
        <div className="grid">
          {commitments.map((item) => (
            <div className="card" key={item.num}>
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
