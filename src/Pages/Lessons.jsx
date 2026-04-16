import "./Lessons.css"

const plans = [
  {
    name: "Starter",
    price: "€35",
    per: "/ lesson",
    features: ["1 lesson per week", "Beginner friendly", "Technique basics", "Sheet music included"],
    featured: false,
  },
  {
    name: "Regular",
    price: "€60",
    per: "/ month",
    features: ["2 lessons per week", "All levels welcome", "Repertoire building", "Theory & ear training", "Progress tracking"],
    featured: true,
  },
  {
    name: "Intensive",
    price: "€110",
    per: "/ month",
    features: ["3 lessons per week", "Advanced students", "Exam preparation", "Performance coaching", "Recorded sessions"],
    featured: false,
  },
]

function Lessons() {
  return (
    <section className="lessons">
      <h2>Lesson options</h2>
      <p className="lessons-sub">
        Flexible packages to match your pace and goals. All lessons are 45 minutes.
      </p>
      <div className="lessons-cards">
        {plans.map((plan) => (
          <div key={plan.name} className={`lesson-card ${plan.featured ? "featured" : ""}`}>
            {plan.featured && <span className="badge">Most popular</span>}
            <h3>{plan.name}</h3>
            <div className="lesson-price">
              {plan.price} <span>{plan.per}</span>
            </div>
            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className={plan.featured ? "btn-primary" : "btn-secondary"}>
              Get started
            </button>
          </div>
        ))}
      </div>

      <div className="lessons-steps">
        <h3>What to expect</h3>
        <div className="steps-grid">
          <div className="step"><span>1</span><p>Free trial lesson to assess your level and set goals</p></div>
          <div className="step"><span>2</span><p>Personalised curriculum tailored to your style</p></div>
          <div className="step"><span>3</span><p>Weekly lessons with feedback and practice tasks</p></div>
          <div className="step"><span>4</span><p>Monthly reviews to track progress and adjust your plan</p></div>
        </div>
      </div>
    </section>
  )
}

export default Lessons