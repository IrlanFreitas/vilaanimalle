import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5571999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vila%20Animalle.'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '72px',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: scrolled ? 'var(--shadow-header)' : 'none',
          transition: 'box-shadow 300ms ease',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-10"
          style={{ maxWidth: '1200px' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Vila Animalle - Início">
            <div
              style={{
                width: 44,
                height: 44,
                background: 'var(--amarelo)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--verde-escuro)', fontSize: 18 }}>VA</span>
            </div>
            <div className="hidden sm:block">
              <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--verde-escuro)', fontSize: 16, lineHeight: 1 }}>
                Vila Animalle
              </span>
              <div style={{ fontFamily: 'var(--font-opensans)', fontSize: 11, color: 'var(--verde-acento)', fontWeight: 600 }}>
                Pet Care
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-opensans)',
                  fontWeight: 600,
                  fontSize: 15,
                  color: isActive ? 'var(--verde-acento)' : 'var(--verde-escuro)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                  position: 'relative',
                })}
                className="hover:!text-[var(--verde-acento)]"
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2"
            style={{
              background: 'var(--amarelo)',
              color: 'var(--verde-escuro)',
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 15,
              padding: '10px 20px',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'background 200ms',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
            aria-label="Agendar no WhatsApp"
          >
            <MessageCircle size={16} />
            Agendar no WhatsApp
          </a>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--amarelo)',
                color: 'var(--verde-escuro)',
                fontFamily: 'var(--font-nunito)',
                fontWeight: 700,
                fontSize: 13,
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              style={{ background: 'none', border: 'none', padding: 4, color: 'var(--verde-escuro)' }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '85%',
                maxWidth: 320,
                zIndex: 101,
                background: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 24px 32px',
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div style={{ width: 36, height: 36, background: 'var(--amarelo)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--verde-escuro)', fontSize: 14 }}>VA</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--verde-escuro)', fontSize: 15 }}>Vila Animalle</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  style={{ background: 'none', border: 'none', color: 'var(--verde-escuro)', padding: 4 }}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1 flex-1" aria-label="Menu mobile">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      fontFamily: 'var(--font-nunito)',
                      fontWeight: 700,
                      fontSize: 18,
                      color: isActive ? 'var(--verde-acento)' : 'var(--verde-escuro)',
                      textDecoration: 'none',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--ink-6)',
                    })}
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              {/* CTA full-width */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: 'var(--amarelo)',
                  color: 'var(--verde-escuro)',
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  marginTop: 24,
                }}
              >
                <MessageCircle size={18} />
                Agendar no WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
