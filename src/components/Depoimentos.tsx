import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Eyebrow } from './Eyebrow'

const testimonials = [
  {
    quote: 'A Dra. Mariana é incrível! Ela dedicou todo o tempo necessário para entender o histórico do meu gato. Nunca me senti tão acolhida em uma consulta veterinária.',
    name: 'Ana Carolina S.',
    role: 'Tutora do Mimi (gato, 4 anos)',
    initial: 'A',
  },
  {
    quote: 'Minha cachorra tinha problemas de pele há anos. Depois da linha natural da Vila Animalle, ela melhorou completamente! Recomendo de coração.',
    name: 'Fernanda Lima',
    role: 'Tutora da Luna (golden, 6 anos)',
    initial: 'F',
  },
  {
    quote: 'O que mais me impressionou foi a paciência e a atenção. A Dra. Mariana explicou tudo detalhadamente e ainda mandou mensagem depois para saber como a Nina estava.',
    name: 'Juliana Rocha',
    role: 'Tutora da Nina (poodle, 3 anos)',
    initial: 'J',
  },
  {
    quote: 'Ambiente lindo, equipe atenciosa e a consulta mais completa que já fiz. Meu pet ficou tranquilo durante todo o atendimento. Nota 10!',
    name: 'Carla Mendes',
    role: 'Tutora do Toby (beagle, 5 anos)',
    initial: 'C',
  },
  {
    quote: 'Finalmente encontrei uma veterinária que não tem pressa. A Dra. Mariana entendeu que meu cachorro é ansioso e adaptou a consulta para ele. Excelente!',
    name: 'Mariana Costa',
    role: 'Tutora do Bob (vira-lata, 2 anos)',
    initial: 'M',
  },
]

export default function Depoimentos() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 340
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 8)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8)
  }

  return (
    <section style={{ background: 'var(--verde-escuro)', overflow: 'hidden' }} className="py-16 sm:py-20 md:py-24 lg:py-[96px]">
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <Eyebrow color="var(--amarelo)">Depoimentos</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 6vw, 42px)',
              color: 'var(--white)',
              marginBottom: 12,
            }}>
              O que dizem as mães de pet da Vila Animalle
            </h2>
            <p style={{
              fontFamily: 'var(--font-opensans)',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 560,
            }}>
              Veja por que somos avaliados com carinho no Google por quem já passou por nossas consultas.
            </p>
          </div>

          {/* Setas */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Depoimento anterior"
              style={{
                width: 44, height: 44,
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255,255,255,0.2)',
                background: canScrollLeft ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: canScrollLeft ? 'var(--white)' : 'rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canScrollLeft ? 'pointer' : 'default',
                transition: 'all 200ms',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Próximo depoimento"
              style={{
                width: 44, height: 44,
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255,255,255,0.2)',
                background: canScrollRight ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: canScrollRight ? 'var(--white)' : 'rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: canScrollRight ? 'pointer' : 'default',
                transition: 'all 200ms',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: 4,
          }}
          className="[&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                minWidth: 'clamp(280px, 80vw, 340px)',
                scrollSnapAlign: 'start',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--amarelo)" color="var(--amarelo)" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: 'var(--font-opensans)',
                fontSize: 15,
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: 'var(--white)',
                flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--amarelo)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, color: 'var(--verde-escuro)', fontSize: 18 }}>
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 600, color: 'var(--white)', fontSize: 15 }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Google badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 10px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span style={{ fontSize: 12 }}>⭐</span>
                <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                  Avaliação verificada no Google
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
