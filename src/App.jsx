import { useState } from 'react'
import './App.css'

const translations = {
  en: {
    home: 'home',
    about: 'about',
    projects: 'projects',
    contact: 'contact',
    heroTitle: "Hi, I'm ",
    heroRole: 'DevOps Engineer',
    heroDesc: 'Building digital products, one line at a time. 🐾',
    viewWork: 'View Work',
    contactMe: 'Contact Me',
    aboutTitle: 'About Me',
    aboutDesc: 'Brief introduction about your background, experience, and interests.',
    skillsTitle: 'Skills',
    projectsTitle: 'Projects',
    contactTitle: 'Get In Touch 🐾',
    footer: '© 2026 xGANDAx. Built with React. 🐾',
  },
  es: {
    home: 'inicio',
    about: 'sobre mí',
    projects: 'proyectos',
    contact: 'contacto',
    heroTitle: 'Hola, soy ',
    heroRole: 'Ingeniero DevOps',
    heroDesc: 'Construyendo productos digitales, línea a línea. 🐾',
    viewWork: 'Ver Proyectos',
    contactMe: 'Contáctame',
    aboutTitle: 'Sobre Mí',
    aboutDesc: 'Breve introducción sobre mi formación, experiencia e intereses.',
    skillsTitle: 'Habilidades',
    projectsTitle: 'Proyectos',
    contactTitle: 'Contáctame 🐾',
    footer: '© 2026 xGANDAx. Construido con React. 🐾',
  }
}

function App() {
  const [lang, setLang] = useState('en')
  const t = translations[lang]

  const sections = ["home", "about", "projects", "contact"]

  return (
    <div className="portfolio">
      {/* Header / Navigation */}
      <header className="header">
        <nav className="nav">
          <div className="logo">xGANDAx</div>
          <div className="nav-right">
            <ul className="nav-links">
              {sections.map(section => (
                <li key={section}>
                  <a href={`#${section}`}>{t[section]}</a>
                </li>
              ))}
              <li>
                <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>
                  {lang === 'en' ? 'ES' : 'EN'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="cat-icon">🐱</div>
          <h1>{t.heroTitle}<span className="highlight">xGANDAx</span></h1>
          <h2>{t.heroRole}</h2>
          <p>{t.heroDesc}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">{t.viewWork}</a>
            <a href="#contact" className="btn secondary">{t.contactMe}</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutDesc}</p>

        <h2>{t.skillsTitle}</h2>
        <div className="skills-grid">
          {['React', 'TypeScript', 'Node.js', 'Go', 'AWS', 'Docker', 'Kubernetes', 'Ansible', 'Google Cloud', 'Python', 'Terraform', 'Git', 'GitHub', 'CI/CD', 'DevOps', 'Jira', 'Markdown', 'Confluence', 'Prometheus', 'Grafana'].map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Demo Backstage</h3>
            <p>Description of the project</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Github Actions</span>
            </div>
            <a href="https://github.com/Demo-xGANDAx-org/Demo_Backstage" className="project-link">Code</a>
            <a href="https://backstage.xgandax.xyz/" className="project-link">View</a>
          </div>
          <div className="project-card">
            <h3>Demo Kubernetes</h3>
            <p>Description of the project</p>
            <div className="tech-stack">
              <span>Ansible</span>
              <span>Github Actions</span>
              <span>Kubernetes</span>
            </div>
            <a href="https://github.com/Demo-xGANDAx-org/Demo_Cluster_K3S" className="project-link" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch 🐾</h2>
        <p>email@example.com</p>
        <div className="social-links">
          <a href="https://github.com/yourusername">GitHub</a>
          <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 xGANDAx. Built with React. 🐾</p>
      </footer>
    </div>
  )
}

export default App
