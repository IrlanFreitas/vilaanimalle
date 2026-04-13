import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const testimonials = [
  {
    quote:
      "Espaço aconchegante! E o principal: a melhor profissional de SSA. Confio no trabalho dela, oferece um atendimento humanizado aos meus amados. Ainda possui um espaço maravilhoso para banho, e eles saem de lá relaxados e cheirosos! Se não morasse tão longe, levaria toda semana! Lá praticamente achamos tudo: profissionais competentes, brinquedos, medicamentos e outros! Desejo muito que a vet Mariana conquiste a cada dia mais o espaço que merece!",
    name: "Mira Barros",
    initial: "M",
  },
  {
    quote:
      "MELHOR QUE JÁ FUI! O Villa Animalle reúne a parte da medicina veterinária com a parte de petshop, é excelente!!!!! Qualquer coisa com meu filhote corro para lá, seja pra atendimento, banho ou para comprar petiscos e roedores naturais!!!! Dr. Mariana é sempre muito amorosa com meu cachorrinho!! Um alívio achar um lugar que vão tratar meu cachorrinho como eu mesmo trataria, tenho 100000% de confiança!!!!",
    name: "Erasmo Batalha",
    initial: "E",
  },
  {
    quote:
      "Excelente. Indico qualquer animal ir para Dra Mariana. Excelente profissional, humana, atenciosa, carinhosa com o seu pet, etc. Fiquem todos com Deus.",
    name: "Osni Barbosa",
    initial: "O",
  },
  {
    quote:
      "Fui indicada por uma vizinha e quando minha filha Míriam levou nossa Maggie, gostamos do atendimento, carinho, cuidados e dedicação com nossa Yorkshire de 13 anos.",
    name: "Josemari Gomes de Paula",
    initial: "J",
  },
  {
    quote:
      "Paco é sempre muito bem cuidado por dra Mariana! Que faz literalmente por amor!!!! Aqui vc sente que os cuidados são verdadeiros e puros 🤍🤍🤍🤍",
    name: "Tâmara Pinho",
    initial: "T",
  },
];

export default function Depoimentos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  return (
    <section
      style={{ background: "var(--verde-escuro)", overflow: "hidden" }}
      className="py-16 sm:py-20 md:py-24 lg:py-[96px]"
    >
      <div
        className="mx-auto px-4 sm:px-6 md:px-10 lg:px-0"
        style={{ maxWidth: "1200px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <Eyebrow color="var(--amarelo)">Depoimentos</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-nunito)",
                fontWeight: 700,
                fontSize: "clamp(26px, 6vw, 42px)",
                color: "var(--white)",
                marginBottom: 12,
              }}
            >
              O que dizem as mães de pet da Vila Animalle
            </h2>
            <p
              style={{
                fontFamily: "var(--font-opensans)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 560,
              }}
            >
              Veja por que somos avaliados com carinho no Google por quem já
              passou por nossas consultas.
            </p>
          </div>

          {/* Setas */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Depoimento anterior"
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255,255,255,0.2)",
                background: canScrollLeft
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
                color: canScrollLeft ? "var(--white)" : "rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollLeft ? "pointer" : "default",
                transition: "all 200ms",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Próximo depoimento"
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255,255,255,0.2)",
                background: canScrollRight
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
                color: canScrollRight
                  ? "var(--white)"
                  : "rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canScrollRight ? "pointer" : "default",
                transition: "all 200ms",
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
            display: "flex",
            gap: 24,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
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
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                minWidth: "clamp(280px, 80vw, 340px)",
                scrollSnapAlign: "start",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    fill="var(--amarelo)"
                    color="var(--amarelo)"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-opensans)",
                  fontSize: 15,
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: "var(--white)",
                  flex: 1,
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-full)",
                    background: "var(--amarelo)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-nunito)",
                      fontWeight: 700,
                      color: "var(--verde-escuro)",
                      fontSize: 18,
                    }}
                  >
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-nunito)",
                      fontWeight: 600,
                      color: "var(--white)",
                      fontSize: 15,
                    }}
                  >
                    {t.name}
                  </div>
                </div>
              </div>

              {/* Google badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 10px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{ fontSize: 12 }}>⭐</span>
                <span
                  style={{
                    fontFamily: "var(--font-opensans)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 600,
                  }}
                >
                  Avaliação verificada no Google
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ver mais */}
        <div
          style={{ width: "100%", display: `flex`, justifyContent: "center" }}
        >
          <a
            href="https://www.google.com/search?sca_esv=761836ba98f04a06&sxsrf=ANbL-n5CS340l8sF6dHIOZUhCdYwV0-ywA:1775605232995&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcycJcQXK-b8Z3tQwxTcKtN64HJhr50YqHjRWyS8LvuPv4pqR4tZOb7xI_Ba8MN2rFd8JsA21__JPg2B9heyP3S3qaCt-ER-g4vXMrydB9sR0r6FgA%3D%3D&q=Vila+Animalle+Coment%C3%A1rios&sa=X&ved=2ahUKEwiQ8bH59NyTAxUzALkGHSgODyMQ0bkNegQIMBAH&biw=1280&bih=683&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--amarelo)",
              color: "var(--verde-escuro)",
              fontFamily: "var(--font-nunito)",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 28px",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              transition: "background 200ms",
              minHeight: 48,
              whiteSpace: "nowrap",
              margin: "auto",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--amarelo-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--amarelo)")
            }
          >
            <Plus size={20} />
            Ver mais avaliações
          </a>
        </div>
      </div>
    </section>
  );
}
