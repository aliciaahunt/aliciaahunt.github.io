import styles from './SiteHeader.module.css'

type SiteHeaderProps = {
  isContactPage: boolean
}

export function SiteHeader({ isContactPage }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`page-width ${styles.inner}`}>
        <a className={styles.brand} href="/" aria-label="Alicia Hunt, home">
          AH
        </a>
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li><a href="/#experience">Experience</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li>
              <a className={styles.contactLink} href={isContactPage ? '/' : '/?page=contact'}>
                {isContactPage ? 'Home' : 'Contact'}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
