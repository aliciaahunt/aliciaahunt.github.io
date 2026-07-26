import aliciaPortrait from '../assets/alicia-hunt-linkedin.jpg'
import styles from './ContactPage.module.css'

export function ContactPage() {
  return (
    <section className={styles.contactPage}>
      <div className={`page-width ${styles.inner}`}>
        <div className={styles.introduction}>
          <img
            className={styles.portrait}
            src={aliciaPortrait}
            alt="Alicia Hunt"
          />
          <p className="eyebrow">Contact</p>
          <h1 className="display-title">Let’s start a conversation.</h1>
          <p className="section-copy">
            I’m always interested in thoughtful conversations about business,
            international projects and opportunities where clear delivery matters.
          </p>
        </div>
        <div className={styles.contactOptions}>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            rel="noreferrer"
            target="_blank"
          >
            <span>Email</span>
            <strong>aliciahunt229@gmail.com</strong>
            <small>Go to your inbox ↗</small>
          </a>
          <a href="https://www.linkedin.com/in/alicia-hunt-4394a6163/" rel="noreferrer" target="_blank">
            <span>LinkedIn</span>
            <strong>Connect with Alicia</strong>
            <small>View profile ↗</small>
          </a>
        </div>
      </div>
    </section>
  )
}
