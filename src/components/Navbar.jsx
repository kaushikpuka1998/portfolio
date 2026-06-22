import { useEffect, useState } from 'react'
import { profile } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#top" className="logo">kaushik<span>.ghosh()</span></a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <a href="#work" onClick={close}>Experience</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#skills" onClick={close}>Skills</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="nav-cta">Let's talk →</a>
        </div>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>☰</button>
      </div>
    </nav>
  )
}
