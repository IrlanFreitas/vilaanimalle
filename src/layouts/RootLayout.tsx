import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '72px' }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
