import { motion } from 'motion/react'
import { Eyebrow } from './Eyebrow'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const blocks = [
  {
    title: 'Experiência Comprovada',
    highlight: '+3.000',
    highlightLabel: 'atendimentos realizados',
    description: 'com carinho e dedicação em Salvador. Cada consulta é uma oportunidade de fazer a diferença na vida do seu pet e da sua família.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=80',
    alt: 'Dra. Mariana em seu consultório',
  },
  {
    title: 'Escuta Ativa',
    highlight: 'Consultas sem pressa',
    highlightLabel: '',
    description: 'para que você possa tirar todas as suas dúvidas e se sentir segura. Aqui, o tutor também faz parte do processo de cuidado.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    alt: 'Dra. Mariana conversando com tutora',
    reverse: true,
  },
  {
    title: 'Foco em Longevidade',
    highlight: 'Viva mais e melhor',
    highlightLabel: '',
    description: 'Não tratamos apenas sintomas; trabalhamos para que seu pet viva mais e melhor ao seu lado. Medicina preventiva como filosofia de vida.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    alt: 'Pet saudável e feliz',
  },
]

export default function PropostaValor() {
  return (
    <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20 md:py-24 lg:py-[96px]">
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <Eyebrow>Por que a Vila Animalle</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 6vw, 42px)',
            color: 'var(--verde-escuro)',
            marginBottom: 16,
          }}>
            Por que confiar a saúde do seu pet à Vila Animalle?
          </h2>
          <p style={{
            fontFamily: 'var(--font-opensans)',
            fontSize: 'clamp(16px, 2vw, 17px)',
            lineHeight: 1.7,
            color: 'var(--ink-70)',
            maxWidth: 640,
            margin: '0 auto',
          }}>
            Sabemos que seu pet é parte da família. Por isso, nosso diferencial está no acolhimento superior e na comunicação clara com os tutores.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 sm:gap-20">
          {blocks.map((block) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col lg:gap-12 items-center gap-8 ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Imagem */}
              <div style={{ width: '100%', flex: '0 0 45%', maxWidth: '45%' }} className="!max-w-full lg:!max-w-[45%]">
                <ImageWithFallback
                  src={block.image}
                  alt={block.alt}
                  style={{
                    width: '100%',
                    height: 340,
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-xl)',
                    display: 'block',
                  }}
                />
              </div>

              {/* Texto */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 800,
                  fontSize: 'clamp(40px, 8vw, 64px)',
                  color: 'var(--amarelo)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {block.highlight}
                </div>
                {block.highlightLabel && (
                  <div style={{
                    fontFamily: 'var(--font-opensans)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--verde-escuro)',
                    marginBottom: 12,
                  }}>
                    {block.highlightLabel}
                  </div>
                )}
                <h3 style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  color: 'var(--verde-escuro)',
                  marginBottom: 12,
                  marginTop: 8,
                }}>
                  {block.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-opensans)',
                  fontSize: 'clamp(16px, 2vw, 17px)',
                  lineHeight: 1.7,
                  color: 'var(--ink-70)',
                }}>
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
