import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`page-width ${styles.inner}`}>
        <div>
          <p className={styles.name}>Alicia Hunt</p>
          <p className={styles.note}>Oxford MBA · Business & project delivery</p>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/alicia-hunt-4394a6163/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:aliciahunt229@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
