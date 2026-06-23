import {metrics, experience, projects, skills, profile, marqueeWords} from '../data'

export function Hero() {

    const onResume = (e) => {
        if (!profile.resumeUrl) {
            e.preventDefault()
            alert('Add your resumeUrl in src/data.js and it will open here.')
        }
    }
    return (
        <header className="hero-full">
            {/* background photo + gradient overlays */}
            <div className="hero-bg">
                <img src="public/me1.JPEG" alt="Kaushik Ghosh"/>
                <div className="hero-tint"/>
                <div className="hero-fade-top"/>
                <div className="hero-fade-bottom"/>
            </div>

            {/* centered text */}
            <div className="wrap hero-center">
                <div className="hero-eyebrow">// backend engineer</div>
                <h1>Kaushik <span className="grad">Ghosh</span></h1>
                <h2 className="hero-title">Software Engineer</h2>
                <p className="hero-by">by profession</p>
                <h2 className="hero-title sm">Technical Content Creator</h2>
                <p className="hero-by">by craft</p>
                <p className="hero-work">
                    Working <a href="https://www.guidewire.com/" target="_blank" rel="noreferrer"
                               className="hero-at">@Guidewire</a>
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View work</a>
                    <a href="#contact" className="btn btn-ghost">Get in touch</a>
                    <a
                        href={profile.resumeUrl || '#'}
                        target={profile.resumeUrl ? '_blank' : undefined}
                        rel="noreferrer"
                        className="btn btn-ghost"
                        onClick={onResume}
                    >📄 Resume</a>
                </div>
            </div>
        </header>

    )
}

export function Metrics() {
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
        <section id="metrics">
            <div className="wrap">
                <div className="metrics reveal">
                    {metrics.map((m, i) => (
                        <div className="metric" key={i}>
                            <div className="num">{m.num}</div>
                            <div className="lbl">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="marquee">
                <div className="marquee-track">{marquee}</div>
            </div>
        </section>
    )
}

export function Experience() {
    return (
        <section id="work">
            <div className="wrap">
                <div className="sec-head reveal">
                    <span className="sec-tag">// where I've worked</span>
                    <h2>Experience</h2>
                    <p>Five years of shipping production backends across insurance, automotive and travel-tech.</p>
                </div>
                <div className="xp">
                    {experience.map((x, i) => (
                        <div className="xp-item reveal" key={i}>
                            <div className="xp-when">
                                {x.when}
                                <span className="co">{x.company}</span>
                                {x.link && (
                                    <a href={x.link} target="_blank" rel="noreferrer" className="xp-link"
                                       aria-label={`Visit ${x.company}`}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                            <div>
                                <div className="xp-role">{x.role}</div>
                                <div className="xp-loc">{x.location}</div>
                                <ul className="xp-points">
                                    {x.points.map((p, j) => <li key={j}>{p}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Projects() {
    return (
        <section id="projects">
            <div className="wrap">
                <div className="sec-head reveal">
                    <span className="sec-tag">// things I've built</span>
                    <h2>Projects</h2>
                    <p>Side projects spanning distributed systems, web apps and mobile.</p>
                </div>
                <div className="proj-grid">
                    {[...projects]
                        .sort((a, b) => (b.demo ? 1 : 0) - (a.demo ? 1 : 0))
                        .map((p, i) => (
                            <div className="card reveal" key={i}>
                                <div className="card-top"><h3>{p.title}</h3><span className="card-ic">{p.badge}</span>
                                </div>
                                <p>{p.desc}</p>
                                <div className="tags">{p.tags.map((t, j) => <span className="tag"
                                                                                  key={j}>{t}</span>)}</div>
                                <div className="card-links">
                                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">▶ Demo</a>}
                                    {p.code && <a href={p.code} target="_blank" rel="noreferrer"
                                                  className={p.demo ? 'muted' : ''}>⌥ Code</a>}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export function Content() {
    return (
        <section id="content">
            <div className="wrap">
                <div className="sec-head reveal">
                    <span className="sec-tag">// beyond the codebase</span>
                    <h2>I teach what I build</h2>
                </div>
                <div className="split">
                    <div className="feat reveal">
                        <div>
                            <div className="big">17K+ <span className="u">followers</span></div>
                            <h3>@kgstrivers on LinkedIn</h3>
                            <p>I write about Java internals, backend engineering and system design — Redis internals,
                                write-through vs write-behind caching, order-matching engines, and large-scale system
                                breakdowns with branded diagrams.</p>
                        </div>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost"
                           style={{alignSelf: 'flex-start'}}>Follow on LinkedIn →</a>
                    </div>
                    <div className="feat reveal">
                        <div>
                            <div className="big">600+ <span className="u">solved</span></div>
                            <h3>Competitive Programming</h3>
                            <p>3-star on CodeChef and 600+ algorithmic problems on LeetCode — keeping data structures,
                                graph algorithms and optimization sharp the hard way.</p>
                        </div>
                        <a href={profile.leetcode} target="_blank" rel="noreferrer" className="btn btn-ghost"
                           style={{alignSelf: 'flex-start'}}>See on Leetcode →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Skills() {
    return (
        <section id="skills">
            <div className="wrap">
                <div className="sec-head reveal">
                    <span className="sec-tag">// my toolkit</span>
                    <h2>Skills</h2>
                </div>
                <div className="skill-grid">
                    {skills.map((s, i) => (
                        <div className="skill-col reveal" key={i}>
                            <h4>{s.group}</h4>
                            <div className="items">{s.items.map((it, j) => <span className="chip"
                                                                                 key={j}>{it}</span>)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Contact() {
    return (
        <section id="contact">
            <div className="wrap">
                <span className="sec-tag reveal" style={{display: 'block'}}>// say hello</span>
                <h2 className="reveal">Let's build<br/><span className="grad">something solid.</span></h2>
                <p className="reveal">Open to backend & full-stack roles, system-design conversations, and
                    collaborations. The inbox is always open.</p>
                <div className="contact-row reveal">
                    <a href={`mailto:${profile.email}`} className="btn btn-primary">✉ Email me</a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">in
                        LinkedIn</a>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">⌥ GitHub</a>
                    <a href={profile.medium} target="_blank" rel="noreferrer" className="btn btn-ghost">✎ Medium</a>
                </div>
            </div>
        </section>
    )
}
