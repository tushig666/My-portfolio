import profileImg from './assets/profile.jpg';
import { useLanguage } from './i18n';
import './App.css';

function App() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <div className="navbar">
        <nav>
          <a href="#about">{t.about}</a>
          <a href="#projects">{t.projectsTitle || 'Show What I Can Do'}</a>
          <a href="#skills">{t.skills}</a>
          <a href="#contact">{t.contact}</a>
        </nav>
        <div className="lang-toggle" style={{ marginLeft: '2rem' }}>
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option value="en">EN</option>
            <option value="mn">MN</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
      <div className="container pro-portfolio">
        <header>
          <div className="hero">
            <a href={t.githubLink} target="_blank" rel="noopener noreferrer">
              <img
                src={profileImg}
                alt="Tushig Avatar"
                className="avatar"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <div className="hero-text">
              <h1>{t.name}</h1>
              <p className="title">{t.title}</p>
              <p className="intro">{t.heroIntro}</p>
              <div className="socials">
                <a href={t.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </header>
        {/* About Section - left image, right text */}
        <section id="about" className="section-alt">
          <div className="section-alt-image">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80" alt="About" />
          </div>
          <div className="section-alt-content">
            <h2>{t.about}</h2>
            <p className="about-highlight">{t.aboutText}</p>
          </div>
        </section>
        {/* Projects Section - side by side cards, no image */}
        <section id="projects" className="section-alt reverse">
          <div className="section-alt-content" style={{ width: '100%' }}>
            <h2>{t.projectsTitle || 'Show What I Can Do'}</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>{t.projectOne}</h3>
                <p>React, Node.js, D3.js, PostgreSQL</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>{t.projectTwo}</h3>
                <p>Next.js, Stripe, MongoDB, AWS</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
          </div>
          <div className="section-alt-image" />
        </section>
        {/* Skills Section - three compact blocks */}
        <section id="skills" className="section-alt">
          <div className="section-alt-image">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Skills" />
          </div>
          <div className="section-alt-content">
            <h2>{t.skills}</h2>
            <div className="skills-section">
              <div className="skill-block">
                <h4>{t.skillsFrontend}</h4>
                <ul className="skills-list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="skill-block">
                <h4>{t.skillsBackend}</h4>
                <ul className="skills-list">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div className="skill-block">
                <h4>{t.skillsOther}</h4>
                <ul className="skills-list">
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>CI/CD</li>
                  <li>Jest</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section - creative */}
        <section id="contact" className="contact-section">
          <h2>{t.contact}</h2>
          <p>{t.contactText}</p>
          <div className="contact-links">
            <a href="mailto:tsetushig@gmail.com">{t.email}</a>
            <a href={t.githubLink} target="_blank" rel="noopener noreferrer">{t.github}</a>
          </div>
        </section>
        <footer>
          <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
