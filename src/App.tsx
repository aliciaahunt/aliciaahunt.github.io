import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'

function App() {
  const isContactPage =
    new URLSearchParams(window.location.search).get('page') === 'contact'

  return (
    <div className="site-shell">
      <SiteHeader isContactPage={isContactPage} />
      <main>{isContactPage ? <ContactPage /> : <HomePage />}</main>
      <SiteFooter />
    </div>
  )
}

export default App
