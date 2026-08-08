export default function HeroSection({ lenis }) {
  const scrollTo = (target, options) => {
    lenis?.current?.scrollTo(target, options)
  }

  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <span className="availability-pill hero-reveal">
          Available for Remote Work
        </span>

        <h1 className="hero-name hero-reveal">Ayoub Dellaoui</h1>

        <div className="hero-line hero-reveal" aria-hidden="true" />

        <p className="hero-tagline hero-reveal">I Turn Ideas Into Products</p>

        <p className="hero-description hero-reveal">
          Frontend-focused Full-Stack Developer specializing in fast, scalable
          web apps — from pixel-perfect UI to production-ready backends. If you
          have a problem, I ship the solution.
        </p>

        <div className="hero-actions hero-reveal">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => scrollTo('#work', { offset: -80 })}
          >
            View My Work
          </button>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => scrollTo('#contact', { offset: -80 })}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint__label">Scroll</span>
        <svg
          className="scroll-hint__chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 6L8 10.5L12.5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
