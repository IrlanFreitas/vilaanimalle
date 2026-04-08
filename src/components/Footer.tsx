import { Link } from 'react-router'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--verde-escuro)', color: 'var(--white)' }}>
      <div
        className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0 py-12 sm:py-16 md:py-20"
        style={{ maxWidth: '1200px' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Coluna 1: Logo + Desc + Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{
                width: 44, height: 44,
                background: 'var(--amarelo)',
                borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--verde-escuro)', fontSize: 18 }}>VA</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, color: 'var(--white)', fontSize: 16 }}>Vila Animalle</div>
                <div style={{ fontFamily: 'var(--font-opensans)', fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Pet Care • Salvador, BA</div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>
              Um porto seguro para a saúde e a longevidade do seu pet em Salvador, Bahia.
            </p>
            <a
              href="https://instagram.com/vilaanimalle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Vila Animalle"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-opensans)',
                fontSize: 14,
                fontWeight: 600,
                transition: 'color 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--amarelo)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              <Instagram size={18} />
              @vilaanimalle
            </a>
          </div>

          {/* Coluna 2: Sitemap */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--white)', marginBottom: 16 }}>
              Navegação
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { to: '/', label: 'Início' },
                { to: '/servicos', label: 'Serviços' },
                { to: '/produtos', label: 'Produtos' },
                { to: '/sobre', label: 'Sobre nós' },
                { to: '/blog', label: 'Blog' },
                { to: '/contato', label: 'Contato' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{
                      fontFamily: 'var(--font-opensans)',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--amarelo)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--white)', marginBottom: 16 }}>
              Serviços
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Consulta clínica',
                'Medicina preventiva',
                'Dermatologia',
                'Banho e tosa',
                'Ultrassonografia',
                'Vacinas importadas',
              ].map(service => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    style={{
                      fontFamily: 'var(--font-opensans)',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 200ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--amarelo)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--white)', marginBottom: 16 }}>
              Contato
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: 'var(--amarelo)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  R. Dr. Mário Rego dos Santos, 921 - Lojas A e B - Vila Laura, Salvador - BA, 40270-010
                </span>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--amarelo)', flexShrink: 0 }} />
                <a
                  href="tel:+5571982021139"
                  style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 200ms' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--amarelo)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  (71) 98202-1139
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--amarelo)', flexShrink: 0 }} />
                <a
                  href="mailto:contato@vilaanimalle.com.br"
                  style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 200ms' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--amarelo)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  contato@vilaanimalle.com.br
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Clock size={16} style={{ color: 'var(--amarelo)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  Segunda a Sexta<br />Horários flexíveis
                </span>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 20,
                background: 'var(--amarelo)',
                color: 'var(--verde-escuro)',
                fontFamily: 'var(--font-nunito)',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 16px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                transition: 'background 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
            >
              <MessageCircle size={15} />
              Fale pelo whatsapp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
          className="sm:flex-row sm:items-center sm:justify-between"
        >
          <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Vila Animalle Pet Care. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Política de privacidade', 'Política de cookies'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-opensans)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--amarelo)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
