import { profile, marqueeWords } from '../data'

export default function Hero() {
  const onResume = (e) => {
    if (!profile.resumeUrl) {
      e.preventDefault()
      alert('Add your resumeUrl in src/data.js and it will open here.')
    }
  }

  const marquee = []
  for (let r = 0; r < 2; r++) {
    marqueeWords.forEach((w, i) => {
      marquee.push(
        <span key={`${r}-${i}`} className={i % 2 ? 'on' : ''}>{w}</span>
      )
      marquee.push(<span key={`${r}-${i}-d`} className="dot">✦</span>)
    })
  }

  return (
    <header id="top">
      <div className="wrap">
        <div className="hero-eyebrow">Bengaluru, India · Backend Engineer</div>
        <h1>Kaushik Ghosh<br /><span className="grad">builds systems that scale.</span></h1>
        <div className="hero-roles">
          <span className="role">Software Engineer</span><span className="by">by profession</span>
          <span className="role">System Design Writer</span><span className="by">by passion</span>
        </div>
        <p className="hero-sub">
          Backend-heavy engineer with <b>5 years</b> across Guidewire, Tekion & RailYatri — shipping{' '}
          <b>Java, Spring Boot, Kafka & microservices</b> at scale. I cut API latency from{' '}
          <b>712ms to 12ms</b>, and write system-design content for <b>17K+</b> followers as <b>@kgstrivers</b>.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my work →</a>
          <a
            href={profile.resumeUrl || '#'}
            target={profile.resumeUrl ? '_blank' : undefined}
            rel="noreferrer"
            className="btn btn-ghost"
            onClick={onResume}
          >📄 Resume</a>
        </div>

        <div className="marquee">
          <div className="marquee-track">{marquee}</div>
        </div>
      </div>
    </header>
  )
}
