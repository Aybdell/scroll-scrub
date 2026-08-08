import './App.css'

function App() {
  return (
    <>
      <video
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
        className="hero-video"
      />

      <div className="hero-overlay" />

      <div className="scroll-content">
        <h1 className="hero-title">Scroll Scrub</h1>
      </div>
    </>
  )
}

export default App
