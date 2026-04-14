import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Heart, Award, Users, MessageCircle } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import CTAFinal from '../components/CTAFinal'

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <div ref={ref}>{count.toLocaleString('pt-BR')}</div>
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80', alt: 'Pet feliz na Vila Animalle' },
  { src: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&q=80', alt: 'Atendimento veterinário' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', alt: 'Consulta humanizada' },
  { src: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&q=80', alt: 'Clínica veterinária' },
  { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80', alt: 'Pet saudável' },
  { src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80', alt: 'Banho e tosa' },
]

const values = [
  { icon: <Heart size={28} />, title: 'Acolhimento', description: 'Cada tutor e seu pet são recebidos com atenção genuína e cuidado personalizado.' },
  { icon: <Award size={28} />, title: 'Excelência', description: 'Medicina veterinária de alta qualidade, fundamentada em evidências e prática clínica.' },
  { icon: <Users size={28} />, title: 'Parceria', description: 'Trabalhamos juntos com o tutor para o bem-estar contínuo do pet.' },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>Início</Link>
            <span style={{ color: 'var(--ink-40)', fontSize: 14 }}>/</span>
            <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)' }}>Sobre</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1 }}
            >
              <Eyebrow>Conheça a Vila Animalle</Eyebrow>
              <h1 style={{
                fontFamily: 'var(--font-nunito)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 6vw, 48px)',
                color: 'var(--verde-escuro)',
                marginBottom: 20,
                lineHeight: 1.2,
              }}>
                Conheça a Dra. Mariana Boulhosa
              </h1>
              <p style={{
                fontFamily: 'var(--font-opensans)',
                fontSize: 'clamp(16px, 2vw, 17px)',
                lineHeight: 1.7,
                color: 'var(--ink-70)',
                maxWidth: 560,
              }}>
                Médica veterinária apaixonada por longevidade animal e medicina preventiva. Fundou a Vila Animalle com o propósito de ser um porto seguro para pets e tutores em Salvador.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '0 0 40%', width: '100%' }}
              className="!flex-[0_0_auto] w-full lg:!w-[40%]"
            >
              <ImageWithFallback
                src="/imagens/doutora_1.webp"
                alt="Dra. Mariana Boulhosa - Médica Veterinária"
                style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section style={{ background: 'var(--white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Nossa história</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 5vw, 36px)',
              color: 'var(--verde-escuro)',
              marginBottom: 24,
            }}>
              Um sonho que se tornou um porto seguro
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 16, lineHeight: 1.8, color: 'var(--ink-70)' }}>
                A Vila Animalle nasceu da certeza de que o cuidado veterinário deveria ser muito mais do que tratar doenças. Desde o início, a Dra. Mariana Boulhosa acreditou que cada consulta é uma oportunidade de fazer a diferença na qualidade de vida de um pet e de toda a sua família.
              </p>
              <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 16, lineHeight: 1.8, color: 'var(--ink-70)' }}>
                Com formação sólida e especialização em medicina preventiva e dermatologia veterinária, a Dra. Mariana percebeu que a maioria dos problemas crônicos dos pets poderia ser prevenida ou tratada de forma mais eficaz com uma abordagem integrativa e natural.
              </p>
              <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 16, lineHeight: 1.8, color: 'var(--ink-70)' }}>
                Assim surgiu a Vila Animalle: um espaço pensado para ser acolhedor, tranquilo e humano. Um lugar onde o tutor se sente ouvido e o pet, cuidado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contador animado */}
      <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                fontFamily: 'var(--font-nunito)',
                fontWeight: 800,
                fontSize: 'clamp(48px, 10vw, 80px)',
                color: 'var(--amarelo)',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                +<AnimatedCounter target={3000} />
              </div>
              <p style={{
                fontFamily: 'var(--font-opensans)',
                fontSize: 18,
                fontWeight: 600,
                color: 'var(--verde-escuro)',
                marginTop: 8,
              }}>
                atendimentos realizados com amor
              </p>
              <p style={{
                fontFamily: 'var(--font-opensans)',
                fontSize: 15,
                color: 'var(--ink-70)',
                marginTop: 4,
              }}>
                em Salvador, Bahia
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ background: 'var(--white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <Eyebrow>Nossos valores</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 5vw, 36px)',
              color: 'var(--verde-escuro)',
            }}>
              O que nos guia
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  width: 64, height: 64,
                  background: 'var(--amarelo-light)',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--amarelo)',
                  margin: '0 auto 16px',
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 20, color: 'var(--verde-escuro)', marginBottom: 10 }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 15, lineHeight: 1.7, color: 'var(--ink-70)' }}>
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            <Eyebrow>Galeria</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 'clamp(26px, 5vw, 36px)', color: 'var(--verde-escuro)' }}>
              Nossa clínica em fotos
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)' }}
                whileHover={{ scale: 1.04 }}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: 200, objectFit: 'cover', transition: 'transform 500ms ease', display: 'block' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section style={{ background: 'var(--verde-escuro-light)' }} className="py-12">
        <div className="mx-auto px-4 sm:px-6 text-center" style={{ maxWidth: 600 }}>
          <p style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 20, color: 'var(--verde-escuro)', marginBottom: 16 }}>
            Quer conhecer a clínica? Venha nos visitar!
          </p>
          <a
            href="https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20Vila%20Animalle%20e%20agendar%20uma%20visita."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--amarelo)', color: 'var(--verde-escuro)',
              fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16,
              padding: '14px 28px', borderRadius: 'var(--radius-sm)', textDecoration: 'none',
              transition: 'background 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
          >
            <MessageCircle size={18} />
            Agendar visita pelo WhatsApp
          </a>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
