import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Mariana%20da%20Vila%20Animalle.'

export default function CTAFinal() {
  return (
    <section style={{ background: 'var(--amarelo)' }} className="py-16 sm:py-20">
      <div
        className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0 text-center"
        style={{ maxWidth: '1200px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 6vw, 42px)',
            color: 'var(--verde-escuro)',
            marginBottom: 16,
          }}>
            Estamos prontos para receber você e seu pet
          </h2>
          <p style={{
            fontFamily: 'var(--font-opensans)',
            fontSize: 'clamp(16px, 2vw, 17px)',
            lineHeight: 1.7,
            color: 'var(--verde-escuro)',
            opacity: 0.8,
            marginBottom: 32,
            maxWidth: 560,
            margin: '0 auto 32px',
          }}>
            Endereço: R. Dr. Mário Rego dos Santos, 921 - Lojas A e B - Vila Laura, Salvador - BA, 40270-010 <br/>
            Horário de funcionamento: <br/>
            Segunda a Sexta, 08:00–12:00, 13:00–17:00 <br/>
            Sábados, 08:00–12:00
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--verde-escuro)',
              color: 'var(--white)',
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 16,
              padding: '16px 32px',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'background 200ms',
              minHeight: 54,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--verde-escuro-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--verde-escuro)')}
          >
            <MessageCircle size={20} />
            Falar com a Dra. Mariana agora no whatsapp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
