import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Calendar, Tag, Search, MessageCircle, ArrowRight } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const posts = [
  {
    slug: 'importancia-medicina-preventiva',
    title: 'Por que a medicina preventiva é o melhor investimento para o seu pet',
    excerpt: 'Descubra como consultas regulares e um plano de saúde preventivo podem prolongar a vida do seu pet e evitar gastos emergenciais.',
    date: '2026-02-10',
    category: 'Medicina Preventiva',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=80',
  },
  {
    slug: 'dermatite-atopica-caes',
    title: 'Dermatite atópica em cães: sintomas, causas e tratamento natural',
    excerpt: 'A dermatite atópica é uma das alergias de pele mais comuns em cães. Saiba como identificar e tratar com nossa linha natural exclusiva.',
    date: '2026-01-28',
    category: 'Dermatologia',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
  },
  {
    slug: 'otite-gatos-prevencao',
    title: 'Otite em gatos: como prevenir e tratar sem agressão ao organismo',
    excerpt: 'A otite é um problema recorrente em gatos. Aprenda os sinais de alerta e como nossa solução auricular natural pode ajudar.',
    date: '2026-01-15',
    category: 'Dermatologia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  },
  {
    slug: 'alimentacao-longevidade-pet',
    title: 'Alimentação e longevidade: o que seu pet come faz diferença',
    excerpt: 'A dieta certa pode fazer seu pet viver mais e com mais saúde. Entenda a relação entre nutrição e longevidade animal.',
    date: '2025-12-20',
    category: 'Nutrição',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    slug: 'vacinas-importadas-protecao',
    title: 'Vacinas importadas: o que são e por que oferecem mais proteção',
    excerpt: 'Saiba a diferença entre as vacinas nacionais e importadas e por que optamos por oferecer as melhores opções para os pets da Vila Animalle.',
    date: '2025-12-05',
    category: 'Prevenção',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  },
  {
    slug: 'estresse-pets-consultas',
    title: 'Como reduzir o estresse do seu pet nas consultas veterinárias',
    excerpt: 'Consultas veterinárias podem ser assustadoras para alguns pets. Confira nossas dicas para tornar a experiência mais tranquila para o seu companheiro.',
    date: '2025-11-18',
    category: 'Bem-estar',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80',
  },
]

const categories = ['Todos', 'Medicina Preventiva', 'Dermatologia', 'Nutrição', 'Prevenção', 'Bem-estar']

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'Todos' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--off-white)' }} className="py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>Início</Link>
            <span style={{ color: 'var(--ink-40)', fontSize: 14 }}>/</span>
            <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)' }}>Blog</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <Eyebrow>Conteúdo educativo</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 800, fontSize: 'clamp(32px, 6vw, 48px)', color: 'var(--verde-escuro)', marginBottom: 12 }}>
              Blog Vila Animalle
            </h1>
            <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 16, lineHeight: 1.7, color: 'var(--ink-70)', maxWidth: 560 }}>
              Dicas, informações e conhecimento para você cuidar melhor do seu pet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content area */}
      <section style={{ background: 'var(--white)' }} className="py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Posts */}
            <div style={{ flex: 1 }}>
              {/* Mobile: search + filter */}
              <div className="lg:hidden mb-8">
                <div style={{ position: 'relative', marginBottom: 16 }}>
                  <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-40)' }} />
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px 10px 38px', border: '1px solid var(--ink-12)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-escuro)', outline: 'none' }}
                  />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        border: `1px solid ${activeCategory === cat ? 'var(--verde-escuro)' : 'var(--ink-12)'}`,
                        background: activeCategory === cat ? 'var(--verde-escuro)' : 'transparent',
                        color: activeCategory === cat ? 'var(--white)' : 'var(--ink-70)',
                        fontFamily: 'var(--font-opensans)',
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 200ms',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filtered.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--ink-10)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: 'var(--shadow-card)',
                      overflow: 'hidden',
                      transition: 'transform 300ms ease, box-shadow 300ms ease',
                    }}
                    whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
                  >
                    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                      />
                    </Link>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          background: 'var(--amarelo-light)',
                          color: 'var(--verde-escuro)',
                          fontFamily: 'var(--font-opensans)',
                          fontWeight: 600, fontSize: 11, letterSpacing: 0.5,
                          padding: '3px 10px', borderRadius: 'var(--radius-full)',
                        }}>
                          <Tag size={10} />
                          {post.category}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-opensans)', fontSize: 12, color: 'var(--ink-40)' }}>
                          <Calendar size={12} />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                        <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 17, color: 'var(--verde-escuro)', lineHeight: 1.4, marginBottom: 10, transition: 'color 200ms' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--verde-acento)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--verde-escuro)')}
                        >
                          {post.title}
                        </h2>
                      </Link>
                      <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-70)', marginBottom: 16 }}>
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-opensans)', fontSize: 14, fontWeight: 600, color: 'var(--verde-acento)', textDecoration: 'none', transition: 'color 200ms' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--verde-acento-dark)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--verde-acento)')}
                      >
                        Ler artigo <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
                {filtered.length === 0 && (
                  <p style={{ fontFamily: 'var(--font-opensans)', color: 'var(--ink-40)', gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
                    Nenhum artigo encontrado.
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar (desktop) */}
            <aside className="hidden lg:flex flex-col gap-6" style={{ width: 280, flexShrink: 0 }}>
              {/* Search */}
              <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--verde-escuro)', marginBottom: 12 }}>Buscar</h3>
                <div style={{ position: 'relative' }}>
                  <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-40)' }} />
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px 10px 38px', border: '1px solid var(--ink-12)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-escuro)', outline: 'none', background: 'var(--white)' }}
                  />
                </div>
              </div>

              {/* Categorias */}
              <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--verde-escuro)', marginBottom: 12 }}>Categorias</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: 'none',
                        background: activeCategory === cat ? 'var(--verde-escuro)' : 'transparent',
                        color: activeCategory === cat ? 'var(--white)' : 'var(--ink-70)',
                        fontFamily: 'var(--font-opensans)',
                        fontSize: 14,
                        fontWeight: activeCategory === cat ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 200ms',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA WhatsApp sticky */}
              <div style={{
                background: 'var(--verde-escuro)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                position: 'sticky',
                top: 96,
              }}>
                <p style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--white)', marginBottom: 8 }}>
                  Tem dúvidas sobre o seu pet?
                </p>
                <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 16 }}>
                  Fale diretamente com a Dra. Mariana e agende sua consulta.
                </p>
                <a
                  href="https://wa.me/5571999999999?text=Ol%C3%A1!%20Vim%20pelo%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    background: 'var(--amarelo)', color: 'var(--verde-escuro)',
                    fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 14,
                    padding: '12px', borderRadius: 'var(--radius-sm)', textDecoration: 'none',
                    transition: 'background 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
                >
                  <MessageCircle size={16} />
                  Agendar no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
