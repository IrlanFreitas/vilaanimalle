import { motion } from 'motion/react'
import { Link } from 'react-router'
import { AlertCircle, Leaf, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import CTAFinal from '../components/CTAFinal'

const WHATSAPP_BASE = 'https://wa.me/5571999999999?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20de%20'

const timelineSteps = [
  {
    number: 1,
    icon: <AlertCircle size={24} />,
    title: 'Problema detectado',
    description: 'Seu pet apresenta coceira, vermelhidão ou otite recorrente. Identificamos a causa raiz.',
    color: 'var(--amarelo)',
  },
  {
    number: 2,
    icon: <Leaf size={24} />,
    title: 'Prevenção com linha natural',
    description: 'Tratamento com produtos naturais que não agridem o organismo, formulados especialmente pela Dra. Mariana.',
    color: 'var(--verde-acento)',
  },
  {
    number: 3,
    icon: <CheckCircle size={24} />,
    title: 'Resultado positivo',
    description: 'Pele saudável, pet feliz, sem recorrências. Acompanhamento contínuo para manter os resultados.',
    color: 'var(--verde-escuro)',
  },
]

const products = [
  {
    category: 'Farmácia Pet',
    items: [
      {
        name: 'Antibióticos Veterinários',
        description: 'Antibióticos de alta eficácia para tratamento de infecções bacterianas em cães e gatos.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
        tag: 'Farmácia',
      },
      {
        name: 'Anti-inflamatórios',
        description: 'Anti-inflamatórios específicos para pets, com menor impacto gástrico e maior eficácia.',
        image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&q=80',
        tag: 'Farmácia',
      },
    ],
  },
  {
    category: 'Suplementos',
    items: [
      {
        name: 'Ômega 3 Pet',
        description: 'Suplemento de ômega 3 para saúde da pele, pelagem brilhante e suporte articular.',
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9d058?w=400&q=80',
        tag: 'Suplemento',
      },
      {
        name: 'Probióticos',
        description: 'Probióticos para equilibrar a flora intestinal e melhorar a imunidade do seu pet.',
        image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80',
        tag: 'Suplemento',
      },
    ],
  },
  {
    category: 'Linha Natural Exclusiva',
    items: [
      {
        name: 'Shampoo Dermatológico Natural',
        description: 'Shampoo com ingredientes naturais formulado para pets com pele sensível, dermatite e alergias.',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80',
        tag: '🌿 Natural Exclusivo',
      },
      {
        name: 'Condicionador Natural Pet',
        description: 'Condicionador hidratante com aloe vera e óleos naturais para pelagem macia e saudável.',
        image: 'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?w=400&q=80',
        tag: '🌿 Natural Exclusivo',
      },
      {
        name: 'Loção Antipruriginosa',
        description: 'Loção natural para alívio imediato da coceira, formulada sem corticoides e sem agentes irritantes.',
        image: 'https://images.unsplash.com/photo-1631390389252-9f4e0d15b877?w=400&q=80',
        tag: '🌿 Natural Exclusivo',
      },
      {
        name: 'Solução Auricular Natural',
        description: 'Solução para limpeza e tratamento de otites com ingredientes naturais antimicrobianos.',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80',
        tag: '🌿 Natural Exclusivo',
      },
    ],
  },
]

export default function ProdutosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>Início</Link>
            <span style={{ color: 'var(--ink-40)', fontSize: 14 }}>/</span>
            <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)' }}>Produtos</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div style={{ flex: 1 }}>
              <Eyebrow>Linha Natural Exclusiva</Eyebrow>
              <h1 style={{
                fontFamily: 'var(--font-nunito)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 6vw, 48px)',
                color: 'var(--verde-escuro)',
                marginBottom: 16,
                lineHeight: 1.2,
              }}>
                Linha Natural Exclusiva para a Saúde da Pele do Seu Pet
              </h1>
              <p style={{
                fontFamily: 'var(--font-opensans)',
                fontSize: 'clamp(16px, 2vw, 17px)',
                lineHeight: 1.7,
                color: 'var(--ink-70)',
                maxWidth: 560,
              }}>
                Desenvolvida pela Dra. Mariana Boulhosa, nossa linha natural é a resposta para pets que sofrem com problemas de pele crônicos, sem o uso de substâncias agressivas.
              </p>
            </div>
            <div style={{ width: '100%', flex: '0 0 40%', maxWidth: '40%' }} className="!max-w-full lg:!max-w-[40%]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80"
                alt="Linha natural exclusiva Vila Animalle"
                style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline educativa */}
      <section style={{ background: 'var(--white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <Eyebrow>Como funciona</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 6vw, 42px)',
              color: 'var(--verde-escuro)',
            }}>
              Da coceira à cura: entenda o processo
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Linha conectando os steps (só desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[16.6%] right-[16.6%] h-[2px]" style={{
              background: 'repeating-linear-gradient(90deg, var(--amarelo) 0, var(--amarelo) 8px, transparent 8px, transparent 16px)',
            }} />

            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}
              >
                <div style={{
                  width: 64, height: 64,
                  borderRadius: 'var(--radius-full)',
                  background: step.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--white)',
                  marginBottom: 20,
                  boxShadow: 'var(--shadow-card)',
                }}>
                  {step.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 18,
                  color: 'var(--verde-escuro)',
                  marginBottom: 10,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-opensans)',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'var(--ink-70)',
                }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de produtos */}
      <section style={{ background: 'var(--off-white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <Eyebrow>Catálogo</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 700,
              fontSize: 'clamp(26px, 6vw, 42px)',
              color: 'var(--verde-escuro)',
            }}>
              Nossos Produtos
            </h2>
          </motion.div>

          {products.map((cat, ci) => (
            <div key={cat.category} className="mb-14">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 24,
                  color: 'var(--verde-escuro)',
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: '2px solid var(--amarelo)',
                  display: 'inline-block',
                }}
              >
                {cat.category}
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((product, pi) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: (ci * 0.1) + (pi * 0.12), ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--ink-10)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-card)',
                      overflow: 'hidden',
                    }}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: 180, objectFit: 'cover' }}
                    />
                    <div style={{ padding: '20px' }}>
                      <div style={{
                        display: 'inline-block',
                        background: 'var(--amarelo-light)',
                        color: 'var(--verde-escuro)',
                        fontFamily: 'var(--font-opensans)',
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        marginBottom: 10,
                      }}>
                        {product.tag}
                      </div>
                      <h4 style={{
                        fontFamily: 'var(--font-nunito)',
                        fontWeight: 700,
                        fontSize: 17,
                        color: 'var(--verde-escuro)',
                        marginBottom: 8,
                      }}>
                        {product.name}
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-opensans)',
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: 'var(--ink-70)',
                        marginBottom: 16,
                      }}>
                        {product.description}
                      </p>
                      <a
                        href={WHATSAPP_BASE + encodeURIComponent(product.name) + '.'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontFamily: 'var(--font-opensans)',
                          fontSize: 14,
                          fontWeight: 600,
                          color: 'var(--verde-acento)',
                          textDecoration: 'none',
                          transition: 'color 200ms',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--verde-acento-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--verde-acento)')}
                      >
                        Consultar disponibilidade
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section style={{ background: 'var(--verde-escuro-light)' }} className="py-12">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0 text-center" style={{ maxWidth: '800px' }}>
          <p style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
            fontSize: 20,
            color: 'var(--verde-escuro)',
            marginBottom: 16,
          }}>
            Dúvidas sobre algum produto? A Dra. Mariana pode indicar o tratamento ideal para o seu pet.
          </p>
          <a
            href="https://wa.me/5571999999999?text=Ol%C3%A1!%20Meu%20pet%20tem%20problemas%20de%20pele%20e%20gostaria%20de%20conhecer%20a%20linha%20natural."
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
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
          >
            <MessageCircle size={18} />
            Falar com a Dra. Mariana no WhatsApp
          </a>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
