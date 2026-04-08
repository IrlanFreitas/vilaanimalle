import { useParams, Link } from 'react-router'
import { motion } from 'motion/react'
import { Calendar, Tag, ArrowLeft, MessageCircle } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const posts: Record<string, {
  title: string
  date: string
  category: string
  image: string
  content: string[]
  related: string[]
}> = {
  'importancia-medicina-preventiva': {
    title: 'Por que a medicina preventiva é o melhor investimento para o seu pet',
    date: '2026-02-10',
    category: 'Medicina Preventiva',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200&q=80',
    content: [
      'Quando pensamos em saúde do nosso pet, muitas vezes esperamos os sinais de que algo está errado para procurar ajuda veterinária. Mas essa abordagem reativa pode custar caro — tanto financeiramente quanto em termos de sofrimento animal.',
      'A medicina preventiva é a filosofia que guia toda a atuação da Vila Animalle. Em vez de esperar pelo problema, trabalhamos para identificar riscos antes que eles se tornem doenças.',
      '## Por que prevenir é mais inteligente?',
      'Doenças crônicas como diabetes, problemas cardíacos, renais e ortopédicos se desenvolvem silenciosamente. Uma consulta preventiva regular pode identificar alterações sutis em exames de sangue que, se tratadas precocemente, evitam o quadro clínico grave.',
      'Além disso, o custo de uma consulta preventiva é significativamente menor do que um internamento de emergência. E o mais importante: seu pet não precisa sofrer.',
      '## O que inclui uma consulta preventiva?',
      'Na Vila Animalle, as consultas preventivas incluem avaliação clínica completa, revisão do histórico vacinal, discussão sobre alimentação e estilo de vida, além de exames laboratoriais quando necessário. Tudo isso com atenção individualizada para a rotina de cada família.',
      '## Longevidade como objetivo',
      'Nosso objetivo não é apenas tratar — é ajudar o seu pet a viver mais anos com qualidade. A medicina preventiva é o caminho mais eficaz para isso.',
    ],
    related: ['dermatite-atopica-caes', 'alimentacao-longevidade-pet'],
  },
  'dermatite-atopica-caes': {
    title: 'Dermatite atópica em cães: sintomas, causas e tratamento natural',
    date: '2026-01-28',
    category: 'Dermatologia',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80',
    content: [
      'A dermatite atópica é uma das condições de pele mais comuns em cães, especialmente em raças como Labrador, Golden Retriever, Bulldog e Cocker Spaniel. Mas pode afetar qualquer raça.',
      '## O que é dermatite atópica?',
      'É uma doença inflamatória crônica da pele, geralmente desencadeada por alérgenos ambientais como ácaros, pólen, fungos e até certos alimentos. A predisposição genética tem papel importante.',
      '## Sinais que devem chamar atenção',
      'Coceira intensa (especialmente nas patas, axilas, virilha e orelhas), pele avermelhada ou com manchas, pelagem opaca ou com queda excessiva, lambedura persistente das patas e cheiro característico são os principais sinais.',
      '## O papel da linha natural',
      'Na Vila Animalle, desenvolvemos uma linha natural exclusiva para o manejo da dermatite atópica. Com ingredientes como aloe vera, óleo de coco fracionado e extratos botânicos anti-inflamatórios, a linha oferece alívio sem os efeitos colaterais dos corticoides.',
      '## Quando procurar ajuda',
      'Ao notar qualquer desses sinais de forma persistente, procure atendimento. Quanto mais cedo o diagnóstico, mais simples e eficaz o tratamento.',
    ],
    related: ['otite-gatos-prevencao', 'importancia-medicina-preventiva'],
  },
  'otite-gatos-prevencao': {
    title: 'Otite em gatos: como prevenir e tratar sem agressão ao organismo',
    date: '2026-01-15',
    category: 'Dermatologia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80',
    content: [
      'A otite, ou inflamação do canal auditivo, é um problema que afeta uma parcela significativa dos gatos ao longo da vida. Muitas vezes subestimada pelos tutores, pode se tornar crônica se não tratada adequadamente.',
      '## Sinais de otite em gatos',
      'Chacoalhar frequente da cabeça, coçar as orelhas, inclinação da cabeça para um lado, secreção escura ou amarelada nas orelhas e odor forte são os principais sinais.',
      '## Causas mais comuns',
      'Ácaros de ouvido (Otodectes), infecções bacterianas, fungos (Malassezia), corpo estranho e alergias são as causas mais frequentes. Em gatos que saem para rua, os ácaros são especialmente comuns.',
      '## Solução auricular natural',
      'Nossa solução auricular natural conta com ingredientes antimicrobianos suaves que combatem as infecções sem agredir a flora natural do canal auditivo. É uma alternativa eficaz aos tratamentos convencionais com menos efeitos colaterais.',
      '## Prevenção é o melhor caminho',
      'Limpar as orelhas regularmente com produtos adequados, visitas preventivas ao veterinário e uma alimentação balanceada reduzem significativamente o risco de otite.',
    ],
    related: ['dermatite-atopica-caes', 'importancia-medicina-preventiva'],
  },
  'alimentacao-longevidade-pet': {
    title: 'Alimentação e longevidade: o que seu pet come faz diferença',
    date: '2025-12-20',
    category: 'Nutrição',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80',
    content: [
      'Assim como em humanos, a alimentação é um dos pilares mais importantes da saúde e longevidade dos pets. O que e quanto seu cão ou gato come impacta diretamente sua qualidade de vida.',
      '## A importância da dieta adequada',
      'Uma dieta equilibrada fornece os nutrientes essenciais para o funcionamento dos órgãos, manutenção do sistema imunológico e prevenção de doenças crônicas como obesidade, diabetes e doenças renais.',
      '## Ômega 3 e a saúde da pele',
      'O ômega 3 é um dos suplementos com maior evidência científica em medicina veterinária. Além de beneficiar a saúde cardiovascular, articular e cognitiva, tem papel fundamental na saúde da pele e pelagem.',
      '## Probióticos para imunidade',
      'O intestino é o maior órgão imunológico do corpo. Probióticos equilibram a microbiota intestinal, reduzindo episódios de diarreia, alergias alimentares e fortalecendo a imunidade geral.',
      '## Quando consultar?',
      'Se seu pet está com sobrepeso, pelagem opaca, problemas digestivos frequentes ou baixa energia, uma avaliação nutricional com a Dra. Mariana pode fazer toda a diferença.',
    ],
    related: ['importancia-medicina-preventiva', 'dermatite-atopica-caes'],
  },
  'vacinas-importadas-protecao': {
    title: 'Vacinas importadas: o que são e por que oferecem mais proteção',
    date: '2025-12-05',
    category: 'Prevenção',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80',
    content: [
      'A vacinação é um dos atos mais importantes de cuidado preventivo que um tutor pode fazer pelo seu pet. E a escolha da vacina faz diferença.',
      '## Diferença entre vacinas nacionais e importadas',
      'As vacinas importadas geralmente passam por rigorosos processos de controle de qualidade internacionais. Muitas apresentam adjuvantes mais modernos que estimulam uma resposta imune mais robusta e duradoura.',
      '## Quais doenças cobrem?',
      'As vacinas polivalentes para cães cobrem doenças como Cinomose, Parvovirose, Hepatite, Parainfluenza e Leptospirose. Para gatos, cobrem Panleucopenia, Rinotraqueíte e Calicivirose, entre outras.',
      '## Importância do protocolo vacinal completo',
      'Um filhote precisa de uma série inicial de vacinas para construir imunidade adequada. A interrupção do protocolo deixa janelas de vulnerabilidade.',
      '## Na Vila Animalle',
      'Trabalhamos com vacinas importadas de alta qualidade e mantemos um calendário personalizado para cada pet, considerando seu estilo de vida, exposição e histórico.',
    ],
    related: ['importancia-medicina-preventiva', 'estresse-pets-consultas'],
  },
  'estresse-pets-consultas': {
    title: 'Como reduzir o estresse do seu pet nas consultas veterinárias',
    date: '2025-11-18',
    category: 'Bem-estar',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&q=80',
    content: [
      'Muitos pets desenvolvem medo ou ansiedade em relação às consultas veterinárias. Isso é compreensível — o ambiente é desconhecido, há cheiros diferentes e às vezes procedimentos desconfortáveis.',
      '## Por que o estresse nas consultas é um problema?',
      'Além de ser ruim para o bem-estar do animal, o estresse pode dificultar o exame clínico, mascarar alguns sintomas e tornar as consultas traumáticas, dificultando os próximos atendimentos.',
      '## Dicas para ajudar seu pet',
      'Habitue o pet à caixinha de transporte ou colar com antecedência, sem associá-la à ida ao veterinário. Leve objetos com cheiro de casa. Mantenha-se calmo — os pets percebem nossa ansiedade.',
      '## Nossa abordagem na Vila Animalle',
      'A Dra. Mariana adota uma abordagem de "Fear Free" — baseada em reduzir o medo e aumentar o conforto do pet durante a consulta. Cada atendimento é adaptado às necessidades do animal.',
      '## Consultas sem pressa',
      'Aqui, as consultas têm tempo adequado para que o pet se ambiente, explore o espaço e se sinta confortável antes de qualquer procedimento. Isso faz toda a diferença.',
    ],
    related: ['importancia-medicina-preventiva', 'alimentacao-longevidade-pet'],
  },
}

const allPosts = [
  { slug: 'importancia-medicina-preventiva', title: 'Por que a medicina preventiva é o melhor investimento para o seu pet', date: '2026-02-10', category: 'Medicina Preventiva', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&q=80' },
  { slug: 'dermatite-atopica-caes', title: 'Dermatite atópica em cães: sintomas, causas e tratamento natural', date: '2026-01-28', category: 'Dermatologia', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80' },
  { slug: 'otite-gatos-prevencao', title: 'Otite em gatos: como prevenir e tratar', date: '2026-01-15', category: 'Dermatologia', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80' },
  { slug: 'alimentacao-longevidade-pet', title: 'Alimentação e longevidade: o que seu pet come faz diferença', date: '2025-12-20', category: 'Nutrição', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { slug: 'vacinas-importadas-protecao', title: 'Vacinas importadas: o que são e por que oferecem mais proteção', date: '2025-12-05', category: 'Prevenção', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80' },
  { slug: 'estresse-pets-consultas', title: 'Como reduzir o estresse do seu pet nas consultas veterinárias', date: '2025-11-18', category: 'Bem-estar', image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&q=80' },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? posts[slug] : null

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontFamily: 'var(--font-nunito)', fontSize: 32, color: 'var(--verde-escuro)', marginBottom: 16 }}>
          Post não encontrado
        </h1>
        <Link to="/blog" style={{ color: 'var(--verde-acento)', fontFamily: 'var(--font-opensans)', fontSize: 16 }}>
          ← Voltar ao blog
        </Link>
      </div>
    )
  }

  const relatedPosts = allPosts.filter(p => post.related.includes(p.slug))

  return (
    <>
      {/* Schema Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': post.title,
          'datePublished': post.date,
          'author': { '@type': 'Person', 'name': 'Dra. Mariana Boulhosa' },
          'publisher': { '@type': 'Organization', 'name': 'Vila Animalle Pet Care' },
        }),
      }} />

      {/* Hero image */}
      <div style={{ height: 380, overflow: 'hidden', position: 'relative' }}>
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
      </div>

      {/* Content + Sidebar */}
      <section style={{ background: 'var(--white)' }} className="py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1, minWidth: 0 }}
            >
              {/* Breadcrumb */}
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 24 }}>
                <Link to="/" style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'var(--verde-acento)', textDecoration: 'none' }}>Início</Link>
                <span style={{ color: 'var(--ink-40)', fontSize: 13 }}>/</span>
                <Link to="/blog" style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'var(--verde-acento)', textDecoration: 'none' }}>Blog</Link>
                <span style={{ color: 'var(--ink-40)', fontSize: 13 }}>/</span>
                <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'var(--ink-70)' }}>{post.category}</span>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                <span style={{ background: 'var(--amarelo-light)', color: 'var(--verde-escuro)', fontFamily: 'var(--font-opensans)', fontWeight: 600, fontSize: 11, letterSpacing: 0.5, padding: '4px 12px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Tag size={10} />
                  {post.category}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'var(--ink-40)' }}>
                  <Calendar size={13} />
                  {formatDate(post.date)}
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-nunito)',
                fontWeight: 800,
                fontSize: 'clamp(28px, 5vw, 40px)',
                lineHeight: 1.25,
                color: 'var(--verde-escuro)',
                marginBottom: 32,
              }}>
                {post.title}
              </h1>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--ink-10)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-full)', background: 'var(--amarelo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, color: 'var(--verde-escuro)', fontSize: 16 }}>M</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 15, color: 'var(--verde-escuro)' }}>Dra. Mariana Boulhosa</div>
                  <div style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'var(--ink-40)' }}>Médica Veterinária · Vila Animalle Pet Care</div>
                </div>
              </div>

              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {post.content.map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={i} style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 22, color: 'var(--verde-escuro)', marginTop: 16 }}>
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  return (
                    <p key={i} style={{ fontFamily: 'var(--font-opensans)', fontSize: 16, lineHeight: 1.8, color: 'var(--ink-70)' }}>
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {/* Back button */}
              <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--ink-10)' }}>
                <Link
                  to="/blog"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-opensans)', fontSize: 14, fontWeight: 600, color: 'var(--verde-acento)', textDecoration: 'none' }}
                >
                  <ArrowLeft size={16} />
                  Voltar ao blog
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6" style={{ width: 280, flexShrink: 0 }}>
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
                  A Dra. Mariana pode ajudar. Agende sua consulta pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/5571982021139?text=Ol%C3%A1!%20Li%20um%20artigo%20no%20blog%20da%20Vila%20Animalle%20e%20gostaria%20de%20agendar%20uma%20consulta."
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

          {/* Posts relacionados */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid var(--ink-10)' }}>
              <h2 style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 24, color: 'var(--verde-escuro)', marginBottom: 24 }}>
                Posts relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((rp, i) => (
                  <motion.div
                    key={rp.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--ink-10)' }}
                  >
                    <Link to={`/blog/${rp.slug}`} style={{ textDecoration: 'none' }}>
                      <ImageWithFallback src={rp.image} alt={rp.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                      <div style={{ padding: '16px' }}>
                        <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 11, color: 'var(--verde-acento)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{rp.category}</span>
                        <p style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 15, color: 'var(--verde-escuro)', marginTop: 6, lineHeight: 1.4 }}>{rp.title}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
