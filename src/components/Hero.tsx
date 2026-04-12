import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { Eyebrow } from './Eyebrow'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const WHATSAPP_URL = 'https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vila%20Animalle.'

export default function Hero() {
  return (
    <section
      style={{ background: 'var(--white)', overflow: 'hidden' }}
      className="py-16 sm:py-20 md:py-24 lg:py-[96px]"
    >
      <div
        className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0"
        style={{ maxWidth: '1200px' }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Texto */}
          <div className="flex-1 order-2 lg:order-1" style={{ maxWidth: 600 }}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>Salvador, Bahia</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-nunito)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 8vw, 56px)',
                lineHeight: 1.15,
                color: 'var(--verde-escuro)',
                marginBottom: 20,
              }}
            >
              {/* Um porto seguro para a saúde e a{' '}
              longevidade{' '}
              do seu pet em Salvador. */}

              Vila Animalle Pet Care | <span style={{ color: 'var(--amarelo)' }}>Clínica veterinária</span> e pet shop na Vila Laura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-opensans)',
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 1.7,
                color: 'var(--ink-70)',
                maxWidth: 560,
                marginBottom: 32,
              }}
            >
              Na Vila Animalle, acreditamos que prevenir é o melhor caminho para uma vida longa e feliz. Com um atendimento acolhedor e focado na escuta ativa, a Dra. Mariana Boulhosa cuida do seu melhor amigo entendendo toda a rotina da sua família.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: 'var(--amarelo)',
                  color: 'var(--verde-escuro)',
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  transition: 'background 200ms',
                  minHeight: 48,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
              >
                <MessageCircle size={20} />
                Agendar consulta no WhatsApp
              </a>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--verde-escuro)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-opensans)',
                  fontWeight: 600,
                  fontSize: 13,
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-full)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: 16 }}>🐾</span>
                +3.000 pets atendidos com amor
              </div>
            </motion.div>
          </div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 w-full lg:w-[42%] relative"
            style={{ flexShrink: 0 }}
          >
            {/* Blob decorativo */}
            <div style={{
              position: 'absolute',
              inset: -24,
              background: 'var(--amarelo-light)',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 60%',
              zIndex: 0,
            }} />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80"
              alt="Dra. Mariana Boulhosa cuidando de um pet na Vila Animalle"
              style={{
                width: '100%',
                maxHeight: 520,
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
