import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Stethoscope, Shield, Syringe, Activity, Scissors, Bath, Sparkles, MessageCircle } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import CTAFinal from '../components/CTAFinal'

const WHATSAPP_BASE = 'https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20'

const clinicalServices = [
  {
    icon: <Stethoscope size={28} />,
    title: 'Consultas clínicas',
    description: 'Consultas humanizadas com tempo suficiente para entender toda a rotina e histórico do seu pet. Clínica geral e especialista.',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80',
    waMsg: 'uma%20consulta%20cl%C3%ADnica.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Ultrassonografia',
    description: 'Diagnóstico por imagem preciso para avaliação de órgãos internos, gestação e monitoramento de tratamentos.',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&q=80',
    waMsg: 'uma%20ultrassonografia.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Exames de sangue',
    description: 'Hemograma completo, bioquímica sérica e outros exames laboratoriais para diagnóstico preciso e prevenção.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80',
    waMsg: 'exames%20de%20sangue.',
  },
  {
    icon: <Syringe size={28} />,
    title: 'Vacinas importadas',
    description: 'Programa completo de vacinação com vacinas importadas de alta qualidade para máxima proteção do seu pet.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    waMsg: 'informa%C3%A7%C3%B5es%20sobre%20vacinas.',
  },
]

const esteticaServices = [
  {
    icon: <Scissors size={28} />,
    title: 'Banho e tosa',
    description: 'Banho terapêutico e tosa profissional com produtos de qualidade, adaptados ao tipo de pelagem do seu pet.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80',
    waMsg: 'um%20banho%20e%20tosa.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Carding',
    description: 'Técnica especializada para remoção de pelos mortos e manutenção da pelagem dupla, prevenindo nós e quedas excessivas.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    waMsg: 'um%20carding.',
  },
  {
    icon: <Bath size={28} />,
    title: 'Hidratação',
    description: 'Tratamento de hidratação profunda para pelagens ressecadas ou com baixa hidratação, com produtos naturais.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    waMsg: 'uma%20hidrata%C3%A7%C3%A3o.',
  },
]

function ServiceCard({ service, delay }: { service: typeof clinicalServices[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--ink-10)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
      }}
    >
      <ImageWithFallback
        src={service.image}
        alt={service.title}
        style={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
      <div style={{ padding: '24px' }}>
        <div style={{
          width: 44, height: 44,
          background: 'var(--amarelo-light)',
          borderRadius: 'var(--radius-md)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--amarelo)',
          marginBottom: 14,
        }}>
          {service.icon}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-nunito)',
          fontWeight: 700,
          fontSize: 20,
          color: 'var(--verde-escuro)',
          marginBottom: 10,
        }}>
          {service.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-opensans)',
          fontSize: 15,
          lineHeight: 1.7,
          color: 'var(--ink-70)',
          marginBottom: 20,
        }}>
          {service.description}
        </p>
        <a
          href={WHATSAPP_BASE + service.waMsg}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--amarelo)',
            color: 'var(--verde-escuro)',
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
            fontSize: 14,
            padding: '10px 20px',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            transition: 'background 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
        >
          <MessageCircle size={15} />
          Agendar no WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

export default function ServicosPage() {
  return (
    <>
      {/* Hero secundário */}
      <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>Início</Link>
            <span style={{ color: 'var(--ink-40)', fontSize: 14 }}>/</span>
            <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)' }}>Serviços</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>O que oferecemos</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 48px)',
              color: 'var(--verde-escuro)',
              marginBottom: 16,
            }}>
              Nossos serviços
            </h1>
            <p style={{
              fontFamily: 'var(--font-opensans)',
              fontSize: 'clamp(16px, 2vw, 17px)',
              lineHeight: 1.7,
              color: 'var(--ink-70)',
              maxWidth: 600,
            }}>
              Cuidamos do seu pet com serviços clínicos especializados e estética profissional, sempre com foco na longevidade e bem-estar animal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços Clínicos */}
      <section style={{ background: 'var(--white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <Eyebrow>Clínica Veterinária</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 5vw, 36px)',
              color: 'var(--verde-escuro)',
            }}>
              Serviços clínicos
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {clinicalServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Estética */}
      <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <Eyebrow>Estética Pet</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 5vw, 36px)',
              color: 'var(--verde-escuro)',
            }}>
              Serviços de estética
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {esteticaServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
