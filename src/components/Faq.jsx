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
