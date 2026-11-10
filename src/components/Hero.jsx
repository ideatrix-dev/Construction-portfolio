const headline = "More Than Buildings. We Create Lasting Impressions.";
const words = headline.split(" ");

const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "20+", label: "Quality checks" },
  { value: "10K", label: "Sq.ft. built" },
  { value: "30+", label: "Districts served" },
];

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="wrap">
        <h1 aria-label={headline}>
          {words.map((word, i) => (
            <span key={i}>
              <span
                className="word"
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p>
          Beyond Bricks Construction delivers homes and commercial spaces across
          Karnataka, from design to handover, with clear pricing and stage-wise
          quality checks.
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
  );
}
