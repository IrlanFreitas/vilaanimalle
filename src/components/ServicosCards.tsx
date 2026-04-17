import { useState } from 'react'
import { motion } from 'motion/react'
import { Stethoscope, ShieldCheck, Leaf, ArrowRight } from 'lucide-react'
import { Eyebrow } from './Eyebrow'

const WHATSAPP_BASE = 'https://wa.me/5571982021139?text='

const services = [
  {
    icon: <Stethoscope size={32} style={{ color: 'var(--amarelo)' }} />,
    title: 'Consulta clínica humanizada',
    description: 'Realizamos consultas mais longas e detalhadas para entender o contexto familiar e as necessidades reais do pet e do tutor, garantindo assertividade no diagnóstico.',
    ctaText: 'Quero um atendimento humanizado',
    ctaHref: WHATSAPP_BASE + 'Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20cl%C3%ADnica%20humanizada.',
    external: true,
  },
  {
    icon: <ShieldCheck size={32} style={{ color: 'var(--amarelo)' }} />,
    title: 'Medicina preventiva',
    description: 'Antecipamos problemas para evitar o agravamento de doenças e custos altos com tratamentos emergenciais, focando sempre na longevidade animal.',
    ctaText: 'Proteger a saúde do meu pet',
    ctaHref: WHATSAPP_BASE + 'Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20medicina%20preventiva%20para%20meu%20pet.',
    external: true,
  },
  {
    icon: <Leaf size={32} style={{ color: 'var(--amarelo)' }} />,
    title: 'Dermatologia e linha natural exclusiva',
    description: 'Tratamento especializado para pets com problemas de pele e otites, utilizando uma linha natural exclusiva desenvolvida para oferecer alívio e cura sem agredir o organismo.',
    ctaText: 'Conhecer a linha natural',
    ctaHref: 'https://www.petz.com.br/parceiro/dramarianaboulhosa',
    external: true,
  },
]

function ServiceCard({ icon, title, description, ctaText, ctaHref, external, delay }: {
  icon: React.ReactNode
  title: string
  description: string
  ctaText: string
  ctaHref: string
  external: boolean
  delay: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--white)',
        border: `1px solid ${hovered ? 'var(--amarelo)' : 'var(--ink-10)'}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: hovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 300ms ease',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 56, height: 56,
        background: 'var(--amarelo-light)',
        borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20,
        flexShrink: 0,
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-nunito)',
        fontSize: 'clamp(20px, 3vw, 22px)',
        fontWeight: 700,
        color: 'var(--verde-escuro)',
        marginBottom: 12,
        lineHeight: 1.3,
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: 'var(--font-opensans)',
        fontSize: 15,
        lineHeight: 1.7,
        color: 'var(--ink-70)',
        flex: 1,
        marginBottom: 24,
      }}>
        {description}
      </p>

      <a
        href={ctaHref}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-opensans)',
          fontSize: 15,
          fontWeight: 600,
          color: 'var(--verde-acento)',
          textDecoration: 'none',
          transition: 'color 200ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--verde-acento-dark)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--verde-acento)')}
      >
        {ctaText}
        <ArrowRight size={16} />
      </a>
    </motion.div>
  )
}

export default function ServicosCards() {
  return (
    <section style={{ background: 'var(--white)' }} className="py-16 sm:py-20 md:py-24 lg:py-[96px]">
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <Eyebrow>Nossos serviços</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 6vw, 42px)',
            color: 'var(--verde-escuro)',
            marginBottom: 16,
          }}>
            Cuidado especializado para quem você mais ama
          </h2>
          <p style={{
            fontFamily: 'var(--font-opensans)',
            fontSize: 'clamp(16px, 2vw, 17px)',
            lineHeight: 1.7,
            color: 'var(--ink-70)',
            maxWidth: 640,
            margin: '0 auto',
          }}>
            Oferecemos soluções que vão além do tratamento de doenças, focando na qualidade de vida e no bem-estar contínuo do seu pet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 0.18} />
          ))}
        </div>
      </div>
    </section>
  )
}
