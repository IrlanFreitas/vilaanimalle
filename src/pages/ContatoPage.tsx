import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { Eyebrow } from '../components/Eyebrow'

const WHATSAPP_URL = 'https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Mariana%20da%20Vila%20Animalle.'

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '', lgpd: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.lgpd) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--off-white)' }} className="py-12 sm:py-16">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 16 }}>
            <Link to="/" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>Início</Link>
            <span style={{ color: 'var(--ink-40)', fontSize: 14 }}>/</span>
            <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)' }}>Contato</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Fale conosco</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-nunito)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 48px)',
              color: 'var(--verde-escuro)',
            }}>
              Entre em Contato
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content: split layout */}
      <section style={{ background: 'var(--white)' }} className="py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0" style={{ maxWidth: '1200px' }}>
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Lado esquerdo */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1 }}
            >
              {/* MAIOR DESTAQUE: WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  background: 'var(--amarelo)',
                  color: 'var(--verde-escuro)',
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 18,
                  padding: '18px 32px',
                  borderRadius: 'var(--radius-sm)',
                  textDecoration: 'none',
                  transition: 'background 200ms',
                  marginBottom: 36,
                  boxShadow: 'var(--shadow-card-hover)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--amarelo-dark)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--amarelo)')}
              >
                <MessageCircle size={24} />
                Falar com a Dra. Mariana no WhatsApp
              </a>

              {/* Informações de contato */}
              <div style={{ marginBottom: 36 }}>
                <h2 style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'var(--verde-escuro)',
                  marginBottom: 20,
                }}>
                  Informações
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--amarelo-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} style={{ color: 'var(--amarelo)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 600, fontSize: 15, color: 'var(--verde-escuro)', marginBottom: 2 }}>Endereço</div>
                      <div style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)', lineHeight: 1.5 }}>Salvador, Bahia<br /><span style={{ fontSize: 12, color: 'var(--ink-40)' }}>(Endereço completo em breve)</span></div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--amarelo-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={18} style={{ color: 'var(--amarelo)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 600, fontSize: 15, color: 'var(--verde-escuro)', marginBottom: 2 }}>Telefone</div>
                      <a href="tel:+5571982021139" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>
                        (71) 98202-1139
                      </a>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--amarelo-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} style={{ color: 'var(--amarelo)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 600, fontSize: 15, color: 'var(--verde-escuro)', marginBottom: 2 }}>E-mail</div>
                      <a href="mailto:contato@vilaanimalle.com.br" style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--verde-acento)', textDecoration: 'none' }}>
                        contato@vilaanimalle.com.br
                      </a>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--amarelo-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={18} style={{ color: 'var(--amarelo)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-nunito)', fontWeight: 600, fontSize: 15, color: 'var(--verde-escuro)', marginBottom: 2 }}>Horário</div>
                      <div style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)', lineHeight: 1.6 }}>
                        Segunda a Sexta<br />Horários flexíveis para sua rotina
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Formulário de captura */}
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'var(--verde-escuro)',
                  marginBottom: 20,
                }}>
                  Envie uma mensagem
                </h2>
                {submitted ? (
                  <div style={{
                    background: 'var(--verde-escuro-light)',
                    border: '1px solid var(--verde-acento)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
                    <p style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 18, color: 'var(--verde-escuro)' }}>
                      Mensagem enviada com sucesso!
                    </p>
                    <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 15, color: 'var(--ink-70)', marginTop: 8 }}>
                      Entraremos em contato em breve. Ou se preferir, fale diretamente pelo WhatsApp!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { id: 'nome', label: 'Nome *', type: 'text', placeholder: 'Seu nome completo', required: true },
                      { id: 'email', label: 'E-mail *', type: 'email', placeholder: 'seu@email.com', required: true },
                      { id: 'telefone', label: 'Telefone', type: 'tel', placeholder: '(71) 99999-9999', required: false },
                    ].map(field => (
                      <div key={field.id}>
                        <label style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, fontWeight: 600, color: 'var(--verde-escuro)', display: 'block', marginBottom: 6 }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.id as keyof typeof form] as string}
                          onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            border: '1px solid var(--ink-12)',
                            borderRadius: 'var(--radius-sm)',
                            fontFamily: 'var(--font-opensans)',
                            fontSize: 15,
                            color: 'var(--verde-escuro)',
                            background: 'var(--white)',
                            outline: 'none',
                            transition: 'border-color 200ms',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--verde-acento)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--ink-12)')}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, fontWeight: 600, color: 'var(--verde-escuro)', display: 'block', marginBottom: 6 }}>
                        Mensagem *
                      </label>
                      <textarea
                        placeholder="Como podemos ajudar você e seu pet?"
                        required
                        rows={4}
                        value={form.mensagem}
                        onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid var(--ink-12)',
                          borderRadius: 'var(--radius-sm)',
                          fontFamily: 'var(--font-opensans)',
                          fontSize: 15,
                          color: 'var(--verde-escuro)',
                          background: 'var(--white)',
                          outline: 'none',
                          resize: 'vertical',
                          transition: 'border-color 200ms',
                        }}
                        onFocus={e => (e.target.style.borderColor = 'var(--verde-acento)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--ink-12)')}
                      />
                    </div>

                    {/* LGPD */}
                    <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        required
                        checked={form.lgpd}
                        onChange={e => setForm(f => ({ ...f, lgpd: e.target.checked }))}
                        style={{ marginTop: 3, accentColor: 'var(--verde-acento)' }}
                      />
                      <span style={{ fontFamily: 'var(--font-opensans)', fontSize: 13, color: 'var(--ink-70)', lineHeight: 1.5 }}>
                        Aceito a <a href="#" style={{ color: 'var(--verde-acento)', textDecoration: 'underline' }}>Política de Privacidade</a> e consinto com o tratamento dos meus dados para fins de contato. *
                      </span>
                    </label>

                    <button
                      type="submit"
                      style={{
                        border: '2px solid var(--verde-escuro)',
                        background: 'transparent',
                        color: 'var(--verde-escuro)',
                        fontFamily: 'var(--font-nunito)',
                        fontWeight: 700,
                        fontSize: 15,
                        padding: '12px 24px',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        transition: 'all 200ms',
                        alignSelf: 'flex-start',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--verde-escuro)'
                        e.currentTarget.style.color = 'var(--white)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--verde-escuro)'
                      }}
                    >
                      Enviar mensagem
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: 1 }}
            >
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                height: 400,
                background: 'var(--off-white)',
                border: '1px solid var(--ink-10)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88625985316!2d-38.6437246!3d-12.9704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71606f94fa18e1f%3A0xb5e9aee1fe4af41e!2sSalvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Vila Animalle em Salvador, Bahia"
                />
              </div>
              <div style={{
                marginTop: 20,
                padding: '20px',
                background: 'var(--verde-escuro-light)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--verde-escuro)',
              }}>
                <p style={{ fontFamily: 'var(--font-nunito)', fontWeight: 700, fontSize: 16, color: 'var(--verde-escuro)', marginBottom: 8 }}>
                  📍 Vila Animalle Pet Care
                </p>
                <p style={{ fontFamily: 'var(--font-opensans)', fontSize: 14, color: 'var(--ink-70)', lineHeight: 1.6 }}>
                  Salvador, Bahia<br />
                  <span style={{ fontWeight: 600, color: 'var(--verde-acento)' }}>Segunda a Sexta</span> — Horários flexíveis
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
