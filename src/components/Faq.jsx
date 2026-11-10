const faqs = [
  {
    question: 'What does Beyond Bricks Construction do?',
    answer:
      'We manage home and commercial projects end to end, from design and approvals to construction and handover.',
  },
  {
    question: 'Do you take both residential and commercial projects?',
    answer: 'Yes. We build houses and villas as well as offices, retail and educational spaces.',
  },
  {
    question: 'How are payments handled?',
    answer: 'Payments are made in stages, linked to verified progress.',
  },
  {
    question: 'How long does a typical home take to build?',
    answer:
      'A 2,000–3,000 sq.ft. home usually takes 10–12 months from foundation to handover, depending on design approvals and site conditions.',
  },
  {
    question: 'Do you provide a warranty?',
    answer:
      'Yes. The structure is covered for 10 years, waterproofing for 5 years, and all finishing work for 1 year.',
  },
]

export default function Faq() {
  return (
    <section>
      <div className="wrap">
        <h2>FAQ</h2>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
