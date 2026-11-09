const stories = [
  { quote: '“Short client testimonial goes here.”', who: 'Client name · 3 BHK' },
  { quote: '“Short client testimonial goes here.”', who: 'Client name · 4 BHK' },
]

export default function Testimonials() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2>Client stories</h2>
        <p className="sub">Use real, permitted client reviews here.</p>
        <div className="grid">
          {stories.map((story, index) => (
            <div className="card" key={index}>
              <p className="q">{story.quote}</p>
              <p className="who">{story.who}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
