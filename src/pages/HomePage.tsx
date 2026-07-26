import { SectionIntro } from '../components/SectionIntro/SectionIntro'
import { experience, projects, skills } from '../features/profile/profileData'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="page-width">
          <p className="eyebrow">Oxford MBA · Business & project delivery</p>
          <h1 className="display-title">Turning complexity into clear progress.</h1>
          <div className={styles.heroFooter}>
            <p>
              I’m Alicia Hunt—an Oxford MBA candidate with experience spanning
              financial markets, international infrastructure, business
              operations and trade.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/alicia-hunt-4394a6163/" rel="noreferrer" target="_blank">
              View LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={`page-width ${styles.aboutGrid}`}>
          <p className="eyebrow">Profile</p>
          <div>
            <h2 className={styles.statement}>
              A business-led perspective shaped by delivery on the ground.
            </h2>
            <p className="section-copy">
              My work has taken me from client transformation in financial
              markets to health-infrastructure projects across emerging
              markets. I’m at my best where commercial judgement, people and
              practical delivery meet.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.education} id="education">
        <div className="page-width">
          <SectionIntro eyebrow="Education" title="An international business outlook, grounded at Oxford." />
          <div className={styles.educationGrid}>
            <article>
              <p className={styles.year}>2025—2026</p>
              <h3>University of Oxford</h3>
              <p>MBA · Saïd Business School</p>
              <span>Women’s Impact Scholarship · 100% funded</span>
            </article>
            <article>
              <p className={styles.year}>2016—2019</p>
              <h3>Cardiff University</h3>
              <p>BSc Politics & International Relations</p>
              <span>First Class Honours · Top 1% of cohort</span>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.experience} id="experience">
        <div className="page-width">
          <SectionIntro
            eyebrow="Experience"
            title="Work across markets, organisations and borders."
            copy="A track record of taking ownership, aligning people and moving demanding work forward."
          />
          <div className={styles.timeline}>
            {experience.map((item) => (
              <article className={styles.role} key={item.organisation}>
                <p className={styles.roleDates}>{item.dates}</p>
                <div>
                  <h3>{item.organisation}</h3>
                  <p className={styles.roleName}>{item.role}</p>
                </div>
                <p className={styles.roleSummary}>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className="page-width">
          <SectionIntro eyebrow="Selected projects" title="Practical work with measurable reach." />
          <div className={styles.projectList}>
            {projects.map((project) => (
              <article className={styles.project} key={project.number}>
                <p className={styles.projectNumber}>{project.number}</p>
                <h3>{project.title}</h3>
                <div>
                  <p>{project.description}</p>
                  <span>{project.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.skills} id="skills">
        <div className="page-width">
          <SectionIntro eyebrow="Strengths" title="Commercially minded. Internationally experienced." />
          <ul className={styles.skillList}>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </section>

      <section className={styles.contactCta}>
        <div className={`page-width ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Interested in working together?</h2>
          </div>
          <a href="/?page=contact">Contact Alicia <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </>
  )
}
