const stories = [
  {
    quote:
      '“Beyond Bricks handled everything from approvals to the final coat of paint. Our house was ready two weeks ahead of schedule and the cost never changed.”',
    who: 'Ananya Rao · 3 BHK, Bengaluru',
  },
  {
    quote:
      '“They delivered our office fit-out without disrupting existing operations. Clean work and clear updates every week.”',
    who: 'Karthik Shetty · Commercial office, Mangaluru',
  },
  {
    quote:
      '“Our duplex came in exactly on budget. The weekly photos and stage-wise checklists made the whole process stress-free, even while we were overseas.”',
    who: 'Rohan & Priya Menon · 4 BHK duplex, Mangaluru',
  },
  {
    quote:
      '“We renovated two floors of our clinic while it stayed open. The crew was tidy, punctual and respectful of our patients.”',
    who: 'Dr. Shalini Bhat · Clinic renovation, Hubballi',
  },
  {
    quote:
      '“From soil testing to handover, Beyond Bricks kept every promise. The structural warranty gave us real peace of mind.”',
    who: 'Vinod Kumar · 2 BHK, Mysuru',
  },
]

export default function Testimonials() {
  const loop = [...stories, ...stories]

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Client stories</h2>
        <p className="sub">What homeowners and businesses say about working with us.</p>
        <div className="marquee">
          <div className="marquee-track">
            {loop.map((story, index) => (
              <div
                className="card story-card"
                key={index}
                aria-hidden={index >= stories.length ? 'true' : undefined}
              >
                <p className="q">{story.quote}</p>
                <p className="who">{story.who}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
