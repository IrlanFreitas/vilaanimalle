import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Eyebrow } from './Eyebrow'

const faqItems = [
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Oferecemos condições facilitadas e parcelamento para garantir que seu pet receba o tratamento necessário sem pesar no seu orçamento. Aceitamos cartão de crédito, débito, PIX e dinheiro.',
  },
  {
    question: 'Por que a prevenção é tão importante?',
    answer: 'Resolver um problema logo no início, ou evitá-lo, é muito mais barato e menos doloroso para o animal do que tratar uma doença em estágio avançado. Consultas preventivas regulares identificam problemas cedo.',
  },
  {
    question: 'O que é a Linha Natural Exclusiva?',
    answer: 'É uma linha de produtos dermatolólogicos desenvolvida especialmente para pets com problemas de pele e otites. Formulada com ingredientes naturais, oferece alívio e cura sem agredir o organismo do pet.',
  },
  {
    question: 'Como agendar uma consulta?',
    answer: 'O agendamento é feito pelo WhatsApp. É rápido, prático e você já tira suas dúvidas iniciais com a equipe da Dra. Mariana. Basta clicar no botão de WhatsApp aqui no site.',
  },
  {
    question: 'A clínica atende quais tipos de pet?',
    answer: 'Atendemos principalmente cães e gatos. Para dúvidas sobre outras espécies, entre em contato pelo WhatsApp.',
  },
  {
    question: 'Qual é o diferencial das consultas da Vila Animalle?',
    answer: 'Nossas consultas são mais longas e focadas na escuta ativa. A Dra. Mariana entende que cada pet tem uma rotina e histórico único. Aqui, o tutor também é parte fundamental do processo de cuidado.',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottom: '1px solid var(--ink-10)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
        style={{
          fontFamily: 'var(--font-nunito)',
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--verde-escuro)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: 16,
        }}
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={20} style={{ color: 'var(--verde-acento)' }} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p className="pb-5" style={{
          fontFamily: 'var(--font-opensans)',
          fontSize: 16,
          lineHeight: 1.7,
          color: 'var(--ink-70)',
        }}>
          {answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
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
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-nunito)',
            fontWeight: 700,
            fontSize: 'clamp(26px, 6vw, 42px)',
            color: 'var(--verde-escuro)',
          }}>
            Tire suas dúvidas
          </h2>
        </motion.div>

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {faqItems.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>

        {/* Schema FAQPage JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqItems.map(item => ({
              '@type': 'Question',
              'name': item.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer,
              },
            })),
          }),
        }} />
      </div>
    </section>
  )
}
