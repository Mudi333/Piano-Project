import "./Hero.css"
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
  return (
    <section className="hero">

      <div className="hero-avatar">CH</div>

      <h1>Music begins with a single note</h1>

      <p>
        Hi, I'm Claire — a passionate piano teacher helping students
        from beginners to advanced discover the joy of music.
      </p>

      <div className="hero-buttons">
      
        <button className="btn-primary" onClick={() => navigate("/booking")}>
      Book a free trial
    </button>
        <button className="btn-secondary" onClick={() => navigate("/lessons")}>
          See lesson options
        </button>
      </div>

    </section>
  )
}

export default Hero