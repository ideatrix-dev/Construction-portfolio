const plans = [
  { title: 'Home Construction', price: '₹1,995 / sq.ft' },
  { title: 'Commercial Construction', price: '₹1,150 / sq.ft' },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <h2>Pricing</h2>
        <p className="sub">Clear starting rates for every build.</p>
        <div className="grid">
          {plans.map((plan) => (
            <div className="card" key={plan.title}>
              <h3>{plan.title}</h3>
              <p>Starting at</p>
              <div className="price">{plan.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
