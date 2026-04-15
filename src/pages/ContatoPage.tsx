import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Eyebrow } from "../components/Eyebrow";

const WHATSAPP_URL =
  "https://wa.me/5571982021139?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Mariana%20da%20Vila%20Animalle.";

export default function ContatoPage() {

  return (
    <>
      {/* Hero */}
      <section
        style={{ background: "var(--off-white)" }}
        className="py-12 sm:py-16"
      >
        <div
          className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0"
          style={{ maxWidth: "1200px" }}
        >
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Link
              to="/"
              style={{
                fontFamily: "var(--font-opensans)",
                fontSize: 14,
                color: "var(--verde-acento)",
                textDecoration: "none",
              }}
            >
              Início
            </Link>
            <span style={{ color: "var(--ink-40)", fontSize: 14 }}>/</span>
            <span
              style={{
                fontFamily: "var(--font-opensans)",
                fontSize: 14,
                color: "var(--ink-70)",
              }}
            >
              Contato
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>Fale conosco</Eyebrow>
            <h1
              style={{
                fontFamily: "var(--font-nunito)",
                fontWeight: 800,
                fontSize: "clamp(32px, 6vw, 48px)",
                color: "var(--verde-escuro)",
              }}
            >
              Entre em Contato
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content: split layout */}
      <section
        style={{ background: "var(--white)" }}
        className="py-16 sm:py-20"
      >
        <div
          className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0"
          style={{ maxWidth: "1200px" }}
        >
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  background: "var(--amarelo)",
                  color: "var(--verde-escuro)",
                  fontFamily: "var(--font-nunito)",
                  fontWeight: 700,
                  fontSize: 18,
                  padding: "18px 32px",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  transition: "background 200ms",
                  marginBottom: 36,
                  boxShadow: "var(--shadow-card-hover)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--amarelo-dark)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--amarelo)")
                }
              >
                <MessageCircle size={24} />
                Falar com a Dra. Mariana no WhatsApp
              </a>

              {/* Informações de contato */}
              <div style={{ marginBottom: 36 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-nunito)",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--verde-escuro)",
                    marginBottom: 20,
                  }}
                >
                  Informações
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "var(--amarelo-light)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={18} style={{ color: "var(--amarelo)" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-nunito)",
                          fontWeight: 600,
                          fontSize: 15,
                          color: "var(--verde-escuro)",
                          marginBottom: 2,
                        }}
                      >
                        Endereço
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-opensans)",
                          fontSize: 14,
                          color: "var(--ink-70)",
                          lineHeight: 1.5,
                        }}
                      >
                        R. Dr. Mário Rego dos Santos, 921 - Lojas A e B - Vila
                        Laura, Salvador - BA, 40270-010
                        <br />
                      </div>
                    </div>
                  </li>
                  <li
                    style={{ display: "flex", gap: 14, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "var(--amarelo-light)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} style={{ color: "var(--amarelo)" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-nunito)",
                          fontWeight: 600,
                          fontSize: 15,
                          color: "var(--verde-escuro)",
                          marginBottom: 2,
                        }}
                      >
                        Telefone
                      </div>
                      <a
                        href="tel:+5571982021139"
                        style={{
                          fontFamily: "var(--font-opensans)",
                          fontSize: 14,
                          color: "var(--verde-acento)",
                          textDecoration: "none",
                        }}
                      >
                        (71) 98202-1139
                      </a>
                    </div>
                  </li>

                  <li
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "var(--amarelo-light)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={18} style={{ color: "var(--amarelo)" }} />
                    </div>
                    <div>
                      Horário de funcionamento:
                      <br />
                      Segunda a Sexta: 08:00–12:00, 13:00–17:00
                      <br />
                      Sábados: 08:00–12:00
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ flex: 1 }}
            >
              <div
                style={{
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  height: 400,
                  background: "var(--off-white)",
                  border: "1px solid var(--ink-10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0015828012233!2d-38.48918102543364!3d-12.971750259811174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d4eb543927%3A0xee40390612cdf8d!2sR.%20Dr.%20M%C3%A1rio%20Rego%20dos%20Santos%2C%20921%20-%20Vila%20Laura%2C%20Salvador%20-%20BA%2C%2040270-200!5e0!3m2!1spt-BR!2sbr!4v1776031899454!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Vila Animalle em Salvador, Bahia"
                />
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "20px",
                  background: "var(--verde-escuro-light)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--verde-escuro)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-nunito)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--verde-escuro)",
                    marginBottom: 8,
                  }}
                >
                  📍 Vila Animalle Pet Care
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-opensans)",
                    fontSize: 14,
                    color: "var(--ink-70)",
                    lineHeight: 1.6,
                  }}
                >
                  R. Dr. Mário Rego dos Santos, 921 - Lojas A e B - Vila Laura,
                  Salvador - BA, 40270-010
                  <br />
                  <span
                    style={{ fontWeight: 600, color: "var(--verde-acento)" }}
                  >
                    Horário de funcionamento:
                  </span>
                  <br />
                  Segunda a Sexta: 08:00–12:00, 13:00–17:00 <br /> 
                  Sábados: 08:00–12:00
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
