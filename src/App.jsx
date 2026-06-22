import useReveal from './useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Metrics, Experience, Projects, Content, Skills, Contact } from './components/Sections'
import { profile } from './data'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Experience />
      <Projects />
      <Content />
      <Skills />
      <Contact />
      <footer>
        <div className="wrap">
          Designed & built by <span className="accent">{profile.name}</span> · Bengaluru, India
        </div>
      </footer>
    </>
  )
}
