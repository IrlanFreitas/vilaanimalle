# Prompt Completo: Site Institucional Vila Animalle

## Visão Geral do Projeto

Crie um site institucional completo para a Vila Animalle Pet Care, uma clínica veterinária e pet shop de Salvador, Bahia, liderada pela Dra. Mariana Boulhosa. O site é uma vitrine de credibilidade e confiança focada em converter visitantes em leads qualificados via WhatsApp. O posicionamento central é: "Um porto seguro para a saúde e a longevidade do seu pet em Salvador." O foco está em longevidade, prevenção animal, acolhimento superior e uma linha natural exclusiva para pets com problemas de pele.

**NÃO é um e-commerce.** O objetivo é gerar contato direto via WhatsApp para agendamento de consultas.

## Especificações Técnicas

### Stack Tecnológico

- **Framework**: React 18+ com TypeScript
- **Roteamento**: React Router (Data Mode Pattern) usando `react-router` package
- **Estilização**: Tailwind CSS v4
- **Animações**: Motion (antiga Framer Motion) - importar como `import { motion } from 'motion/react'`
- **Ícones**: lucide-react (estilo line/outline com bordas arredondadas)
- **Abordagem**: Mobile-first, responsivo e pixel-perfect

### Estrutura de Arquivos

```

/src
  /app
    App.tsx (usa RouterProvider)
    routes.tsx
  /components
    Navigation.tsx
    Hero.tsx
    ServicosCards.tsx
    PropostaValor.tsx
    Depoimentos.tsx
    FAQ.tsx
    CTAFinal.tsx
    Footer.tsx
    WhatsAppFloat.tsx
    Eyebrow.tsx (componente reutilizável)
  /figma
    ImageWithFallback.tsx
  /pages
    Home.tsx
    ServicosPage.tsx
    ProdutosPage.tsx (Linha Natural)
    SobrePage.tsx
    ContatoPage.tsx
    BlogPage.tsx
    BlogPostPage.tsx
  /layouts
    RootLayout.tsx
  /styles
    theme.css
    fonts.css
  /assets
  /logos
    vilaanimalle-colorida.png
    vilaanimalle-colorida-nobg.png
    vilaanimalle-pb.png
    vilaanimalle-pb-nobg.png

```

## Sistema de Design (Design Tokens)

### Paleta de Cores

Extraída diretamente do logo da Vila Animalle:

```css
/* === Cores Principais === */

--amarelo: #f2b705; /* Cor principal - CTAs, destaques, botões WhatsApp, patinha do logo */
--amarelo-dark: #d9a204; /* Hover states de botões primários */
--amarelo-light: #fdf6e0; /* Backgrounds sutis, badges */
--amarelo-mid: #f5cc4d; /* Variante média para elementos decorativos */
--verde-escuro: #2d5016; /* Cor de texto principal - títulos, corpo, footer, tipografia do logo */

--verde-escuro-dark: #1e3a0e; /* Variante mais escura para hover de botões secundários */
--verde-escuro-light: #e8f0e3; /* Background claro verde */
--verde-acento: #5a8c2a; /* Cor secundária - contorno do gato no logo, links, hover states */
--verde-acento-dark: #467020; /* Hover de links */
--verde-acento-light: #edf4e6; /* Background sutil verde claro */

/* === Neutros === */

--white: #ffffff; /* Fundo principal de seções ímpares */
--off-white: #f5f5f0; /* Fundo alternado de seções pares (ritmo visual) */
--ink: #1c1917; /* Preto quase total (fallback) */
--ink-70: rgba(28, 25, 23, 0.7);
--ink-40: rgba(28, 25, 23, 0.4);
--ink-12: rgba(28, 25, 23, 0.12);
--ink-10: rgba(28, 25, 23, 0.1);
--ink-6: rgba(28, 25, 23, 0.06);
```

**Regras de uso de cor:**

- Texto sobre fundo branco/off-white: `var(--verde-escuro)` — contraste 4.5:1+ ✓
- Texto sobre fundo amarelo (#F2B705): `var(--verde-escuro)` — NUNCA usar texto branco sobre amarelo (não atende WCAG AA)
- Texto sobre fundo verde-escuro (#2D5016): `var(--white)` ou `var(--off-white)`
- CTAs primários (WhatsApp): fundo `var(--amarelo)`, texto `var(--verde-escuro)`
- CTAs secundários: borda `var(--verde-escuro)`, texto `var(--verde-escuro)`, hover inverte para fundo verde-escuro com texto branco
- Links inline: `var(--verde-acento)` com underline

### Tipografia

- **Títulos (H1, H2, H3)**: Nunito (Google Fonts) - `var(--font-nunito)` — peso Bold (700) e ExtraBold (800)

- **Corpo/UI**: Open Sans (Google Fonts) - `var(--font-opensans)` — peso Regular (400), SemiBold (600)

- Importar fontes em `/src/styles/fonts.css`

```css
/* fonts.css */

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap");

:root {
  --font-nunito: "Nunito", sans-serif;

  --font-opensans: "Open Sans", sans-serif;
}
```

### Border Radius

```css
--radius-sm: 8px; /* Botões, inputs */
--radius-md: 14px; /* Cards pequenos, badges */
--radius-lg: 16px; /* Cards de serviço */
--radius-xl: 24px; /* Cards grandes, seções */
--radius-2xl: 40px; /* Elementos decorativos */
--radius-full: 999px; /* Pills, avatares */
```

### Espaçamento e Layout

- Container máximo: `max-w-[1200px]` centralizado com `mx-auto`
- Usar **Flexbox** como padrão de layout (Autolayout)
- Grid CSS permitido para grids de cards (3 colunas, 2 colunas)
- Paddings laterais padrão:
- Mobile: `px-4` (16px)
- Small: `sm:px-6` (24px)
- Medium: `md:px-10` (40px)
- Large: `lg:px-0` (container já centralizado)
- Espaçamento entre seções: `py-16 sm:py-20 md:py-24 lg:py-[96px]`
- Espaçamento entre elementos dentro de seção: `gap-6 sm:gap-8`

**Escala tipográfica:**

| Elemento | Fonte | Peso | Mobile | Desktop | Clamp |

|----------|-------|------|--------|---------|-------|

| H1 Hero | Nunito | 800 | 32px | 56px | `clamp(32px, 8vw, 56px)` |

| H2 Seção | Nunito | 700 | 26px | 42px | `clamp(26px, 6vw, 42px)` |

| H3 Card/Sub | Nunito | 700 | 20px | 24px | `clamp(20px, 3vw, 24px)` |

| Body | Open Sans | 400 | 16px | 17px | `clamp(16px, 2vw, 17px)` |

| Body Small | Open Sans | 400 | 14px | 15px | — |

| CTA Button | Nunito | 700 | 16px | 16px | — |

| Caption/Label | Open Sans | 600 | 12px | 13px | — |

| Eyebrow | Open Sans | 600 | 10px | 11px | — |





### Sombras

```css
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-header: 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-float: 0 4px 16px rgba(0, 0, 0, 0.15);
```

---

## Componentes Globais

### 1. Navigation (Header)

### Desktop (> 1024px)

- Background: `rgba(255, 255, 255, 0.95)` com `backdrop-filter: blur(14px)`
- Fixed top, sticky — `position: fixed; top: 0; z-index: 50`
- Logo Vila Animalle à esquerda (versão colorida sem fundo — `vilaanimalle-colorida-nobg.png`)
- Links de navegação centralizados: Início | Serviços | Produtos | Sobre | Blog | Contato
- Fonte dos links: Open Sans, SemiBold (600), `var(--verde-escuro)`
- Hover dos links: `var(--verde-acento)` com transição 200ms
- CTA à direita: "Agendar no WhatsApp" — botão com fundo `var(--amarelo)`, texto `var(--verde-escuro)`, `border-radius: var(--radius-sm)`, ícone WhatsApp (lucide-react `MessageCircle` ou SVG oficial) à esquerda do texto
- Sombra suave aparece ao scroll: `var(--shadow-header)`
- Altura do header: 72px desktop, 64px mobile

### Mobile (< 1024px)

- Logo à esquerda (reduzido)
- Menu hamburguer à esquerda (ícone `Menu` / `X` do lucide-react)
- Botão WhatsApp compacto à direita (apenas ícone + "WhatsApp")
- Drawer lateral deslizando da esquerda
- Overlay escurecido: `rgba(0, 0, 0, 0.5)` com `backdrop-filter: blur(4px)`
- Largura do drawer: 85% (max 320px)
- Background do drawer: `var(--white)`
- Links empilhados verticalmente, fonte Nunito 700, 18px
- CTA "Agendar no WhatsApp" no final do drawer — full-width
- Bloqueia scroll da página quando aberto (`overflow: hidden` no body)
- Animação: slide da esquerda com Motion, 300ms

### 2. Footer Global

### Layout

- Background: `var(--verde-escuro)` (#2D5016)
- Texto: `var(--white)` e `rgba(255, 255, 255, 0.7)` para links
- Grid de 4 colunas desktop, empilhado mobile
- Logo: versão preto e branco sem fundo (`vilaanimalle-pb-nobg.png`) — usar filtro brightness para aparecer branco sobre fundo verde

### Conteúdo

- **Coluna 1:** Logo + breve descrição + redes sociais (Instagram)
- **Coluna 2:** Sitemap — Início, Serviços, Produtos, Sobre, Blog, Contato
- **Coluna 3:** Serviços — Consulta Clínica, Medicina Preventiva, Dermatologia, Banho e Tosa
- **Coluna 4:** Contato — Endereço Salvador, Telefone, E-mail, Horário de funcionamento, Mapa embed (Google Maps)

- **Barra inferior:** Avisos LGPD (Política de Privacidade | Política de Cookies), Copyright "© 2026 Vila Animalle Pet Care. Todos os direitos reservados."

### Responsividade

- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10`
- Padding: `py-12 sm:py-16 md:py-20`

### 3. WhatsApp Floating Button

**Presente em TODAS as páginas.** Este é o elemento mais importante de conversão.

- Posição: `fixed` canto inferior direito
- Z-index: `z-[9999]` (acima de tudo)
- Tamanho: `56px x 56px` mínimo (touch target acessível)
- Border-radius: `var(--radius-full)` (círculo)
- Background: `#25D366` (cor oficial WhatsApp) ou `var(--amarelo)` com ícone WhatsApp branco
- Sombra: `var(--shadow-float)`
- Micro-animação de pulso: `animate-pulse` sutil (escala 1 → 1.05 → 1) a cada 3 segundos. Não irritante.
- Ao clicar: abre `https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vila%20Animalle.`
- Margem: `bottom-6 right-6` (24px de cada borda)

### 4. Componente Reutilizável: Eyebrow

```tsx
interface EyebrowProps {
  children: React.ReactNode;

  color?: string;
}

export function Eyebrow({
  children,
  color = "var(--verde-acento)",
}: EyebrowProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div style={{ width: "18px", height: "1.5px", background: color }} />

      <span
        style={{
          fontFamily: "var(--font-opensans)",

          fontSize: "11px",

          fontWeight: 600,

          letterSpacing: "2.5px",

          textTransform: "uppercase",

          color,
        }}
      >
        {children}
      </span>
    </div>
  );
}
```

### 5. Componente Reutilizável: Botões

**Três tipos padronizados:**

```tsx
/* Botão Primário (WhatsApp / CTA principal) */

// Fundo: var(--amarelo), Texto: var(--verde-escuro)

// Border-radius: var(--radius-sm) (8px)

// Ícone WhatsApp à esquerda do texto

// Hover: var(--amarelo-dark) — escurece levemente

// Font: Nunito 700, 16px

// Padding: py-3 px-6 (12px 24px)

// Min-height: 48px

/* Botão Secundário */

// Fundo: transparent, Borda: 2px solid var(--verde-escuro), Texto: var(--verde-escuro)

// Border-radius: var(--radius-sm) (8px)

// Hover: fundo var(--verde-escuro), texto var(--white)

// Transição: 200ms ease

/* Link Terciário */

// Sem fundo, sem borda

// Texto: var(--verde-acento) com underline

// Hover: var(--verde-acento-dark)

// Seta → à direita do texto (lucide-react ArrowRight, 16px)
```

---

## Páginas e Seções

### 1. Home Page

A página mais crítica do site. Deve comunicar imediatamente a proposta de valor, gerar confiança e direcionar para o WhatsApp. Layout em zigue-zague (alternando texto/imagem entre seções).

---

#### Seção 1 — Hero Banner

### Layout

- Split layout: texto ~60% esquerda, foto ~40% direita

- Mobile: empilhado — foto no topo (aspect-ratio 4:3), texto abaixo

- Background: `var(--white)` ou gradiente sutil de off-white

- Elemento decorativo: forma orgânica (blob/patinha) em `var(--amarelo-light)` posicionada atrás da foto

### Conteúdo

- **Eyebrow:** "Salvador, Bahia" — cor `var(--verde-acento)`

- **H1:** "Um porto seguro para a saúde e a longevidade do seu pet em Salvador."

- Fonte: Nunito ExtraBold (800)

- Tamanho: `clamp(32px, 8vw, 56px)`

- Cor: `var(--verde-escuro)`

- Palavra "longevidade" pode ter destaque em `var(--amarelo)` (opcional, validar contraste)

- **Parágrafo lead:** "Na Vila Animalle, acreditamos que prevenir é o melhor caminho para uma vida longa e feliz. Com um atendimento acolhedor e focado na escuta ativa, a Dra. Mariana Boulhosa cuida do seu melhor amigo entendendo toda a rotina da sua família."

- Fonte: Open Sans Regular, `clamp(16px, 2vw, 18px)`
- Cor: `var(--ink-70)`
- Max-width: 560px

- **CTA primário:** Botão "Agendar consulta no WhatsApp" — estilo botão primário (amarelo)

- **Badge de confiança:** "+3.000 pets atendidos com amor"

- Background: `var(--verde-escuro)`, texto `var(--white)`

- Border-radius: `var(--radius-full)`

- Posicionado abaixo do CTA ou sobreposto no canto da imagem

- Font: Open Sans SemiBold, 13px

### Imagem

- Foto real da Dra. Mariana interagindo com um pet

- Border-radius: `var(--radius-xl)` (24px)

- Object-fit: cover

- **Placeholder (até fotos reais):** usar Unsplash "veterinarian woman caring pet clinic warm"

### Responsividade

- Desktop: flex-row, gap-12

- Tablet: flex-row, gap-8, proporções 55/45

- Mobile: flex-col, foto primeiro (full-width, max-height 300px), texto abaixo

---

#### Seção 2 — Serviços e Produtos (Cards)

### Layout

- Background: `var(--white)`

- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`

### Conteúdo

- **Eyebrow:** "Nossos serviços"

- **H2:** "Cuidado especializado para quem você mais ama"

- Cor: `var(--verde-escuro)`

- **Subtítulo:** "Oferecemos soluções que vão além do tratamento de doenças, focando na qualidade de vida e no bem-estar contínuo do seu pet."

- Cor: `var(--ink-70)`

- Max-width: 640px, centralizado

### Cards (3 unidades)

Cada card:

- Background: `var(--white)`
- Border: `1px solid var(--ink-10)`
- Border-radius: `var(--radius-lg)` (16px)
- Box-shadow: `var(--shadow-card)`
- Padding: `p-6 sm:p-8`
- Hover: `transform: translateY(-4px)`, shadow `var(--shadow-card-hover)`, borda muda para `var(--amarelo)` — transição 300ms

**Card 1 — Consulta Clínica Humanizada:**

- Ícone: `Stethoscope` (lucide-react) — cor `var(--amarelo)`, tamanho 40px
- H3: "Consulta Clínica Humanizada"
- Descrição: "Realizamos consultas mais longas e detalhadas para entender o contexto familiar e as necessidades reais do pet e do tutor, garantindo assertividade no diagnóstico."
- CTA: "Quero um atendimento humanizado →" — link terciário → WhatsApp

**Card 2 — Medicina Preventiva:**

- Ícone: `ShieldHeart` ou `ShieldCheck` (lucide-react) — cor `var(--amarelo)`, tamanho 40px
- H3: "Medicina Preventiva"
- Descrição: "Antecipamos problemas para evitar o agravamento de doenças e custos altos com tratamentos emergenciais, focando sempre na longevidade animal."
- CTA: "Proteger a saúde do meu pet →" — link terciário → WhatsApp

**Card 3 — Dermatologia e Linha Natural Exclusiva:**

- Ícone: `Leaf` (lucide-react) — cor `var(--amarelo)`, tamanho 40px
- H3: "Dermatologia e Linha Natural Exclusiva"
- Descrição: "Tratamento especializado para pets com problemas de pele e otites, utilizando uma linha natural exclusiva desenvolvida para oferecer alívio e cura sem agredir o organismo."
- CTA: "Conhecer a linha natural →" — link terciário → página /produtos

---

#### Seção 3 — Proposta de Valor e Autoridade (Diferencial)

### Layout

- Background: `var(--off-white)` (#F5F5F0)
- Layout zigue-zague: cada bloco alterna imagem/texto (imagem esquerda + texto direita, depois inverte)
- Mobile: empilhado (imagem + texto)
- Gap entre blocos: `gap-16 sm:gap-20`

### Conteúdo

- **Eyebrow:** "Por que a Vila Animalle"
- **H2:** "Por que confiar a saúde do seu pet à Vila Animalle?"
- **Subtítulo:** "Sabemos que seu pet é parte da família. Por isso, nosso diferencial está no acolhimento superior e na comunicação clara com os tutores."

**Bloco 1 — Experiência Comprovada:**

- Texto: "+3.000 atendimentos realizados com carinho e dedicação em Salvador."
- O número "+3.000" em destaque: Nunito ExtraBold, `clamp(40px, 8vw, 64px)`, cor `var(--amarelo)`
- Subtexto em Open Sans Regular, `var(--verde-escuro)`
- Imagem: Foto da Dra. Mariana em seu consultório. Border-radius `var(--radius-xl)`

**Bloco 2 — Escuta Ativa:**

- Texto: "Consultas sem pressa para que você possa tirar todas as suas dúvidas e se sentir segura."
- Imagem: Foto da Dra. Mariana conversando com tutora ou atendendo pet com calma

**Bloco 3 — Foco em Longevidade:**

- Texto: "Não tratamos apenas sintomas; trabalhamos para que seu pet viva mais e melhor ao seu lado."
- Imagem: Pet saudável e feliz

### Responsividade

- Desktop: flex-row alternando direção (`flex-row` / `flex-row-reverse`), gap-12
- Imagem: 45% width, border-radius `var(--radius-xl)`
- Texto: 55% width, alinhado verticalmente ao centro
- Mobile: flex-col, imagem full-width (max-height 250px)

---

#### Seção 4 — Prova Social (Depoimentos)

### Layout

- Background: `var(--verde-escuro)` (#2D5016) — seção escura para contraste
- Carousel horizontal com cards de depoimentos

### Conteúdo

- **Eyebrow:** "Depoimentos" — cor `var(--amarelo)`

- **H2:** "O que dizem as mães de pet da Vila Animalle" — cor `var(--white)`

- **Subtítulo:** "Veja por que somos avaliados com carinho no Google por quem já passou por nossas consultas." — cor `rgba(255,255,255,0.7)`

### Cards de Depoimentos

- Aspas decorativas: Nunito, itálico, cor `var(--amarelo)`, opacity 0.35, tamanho grande (60px)
- Texto do depoimento: Open Sans, itálico, cor `var(--white)`, 16px
- Avatar: círculo 48px com inicial da pessoa, background `var(--amarelo)`, texto `var(--verde-escuro)`
- Nome: Nunito SemiBold, branco
- Descrição: Open Sans, `rgba(255,255,255,0.6)`
- Card background: `rgba(255,255,255,0.08)`, border: `1px solid rgba(255,255,255,0.1)`, border-radius `var(--radius-lg)`

**Implementação ideal:** Widget de Google Reviews para autenticidade.

**Fallback:** Depoimentos coletados manualmente com selo visual "Avaliação verificada no Google ⭐⭐⭐⭐⭐" e link para o perfil do Google Meu Negócio.

### Responsividade

- Desktop: 3 cards visíveis, gap-6
- Tablet: 2 cards visíveis
- Mobile: 1 card, scroll horizontal com snap (`scroll-snap-type: x mandatory`)
- Padding cards: `p-6 sm:p-8`

---

#### Seção 5 — FAQ (Dúvidas Frequentes)

### Layout

- Background: `var(--white)`
- Componente Accordion (perguntas colapsáveis)
- Max-width: 800px, centralizado

### Conteúdo

- **Eyebrow:** "Dúvidas frequentes"
- **H2:** "Tire suas dúvidas"

### Perguntas (Accordion)

Cada item:

- Borda inferior: `1px solid var(--ink-10)`
- Padding: `py-5`
- Pergunta: Nunito Bold, 18px, cor `var(--verde-escuro)`, com ícone `ChevronDown` (lucide-react) à direita. Rotaciona 180° ao abrir
- Resposta: Open Sans Regular, 16px, cor `var(--ink-70)`, com animação de expand (Motion, height auto, 300ms)

**Pergunta 1:** "Quais são as formas de pagamento?"

**Resposta 1:** "Oferecemos condições facilitadas e parcelamento para garantir que seu pet receba o tratamento necessário sem pesar no seu orçamento."

**Pergunta 2:** "Por que a prevenção é tão importante?"

**Resposta 2:** "Resolver um problema logo no início, ou evitá-lo, é muito mais barato e menos doloroso para o animal do que tratar uma doença em estágio avançado."

_(Mais perguntas serão adicionadas após validação com Dra. Mariana — meta: 5-8 perguntas)_

**Schema Markup:** `FAQPage` (JSON-LD) — faz as perguntas aparecerem no Google.

---

#### Seção 6 — CTA Final

### Layout

- Background: `var(--amarelo)` (#F2B705) — banner full-width
- Texto centralizado
- Padding: `py-16 sm:py-20`

### Conteúdo

- **H2:** "Estamos prontos para receber você e seu pet" — cor `var(--verde-escuro)`

- **Parágrafo:** "Endereço: Salvador, Bahia. Horário de funcionamento: Segunda a Sexta, em horários flexíveis para sua rotina." — cor `var(--verde-escuro)`, opacity 0.8

- **CTA:** Botão "Falar com a Dra. Mariana agora no WhatsApp"

- Fundo: `var(--verde-escuro)`, texto `var(--white)`, ícone WhatsApp
- Border-radius: `var(--radius-sm)`
- Hover: `var(--verde-escuro-dark)`

---

### 2. Página de Serviços (/servicos)

### Hero Secundário

- Background: `var(--off-white)` com overlay suave
- Breadcrumb: "Início > Serviços" — Open Sans, 14px, cor `var(--verde-acento)`
- H1: "Nossos Serviços" — Nunito ExtraBold, `clamp(32px, 6vw, 48px)`
- Subtítulo descritivo

### Divisão: Dois Blocos

**Bloco A — Serviços Clínicos:**

- Eyebrow: "Clínica Veterinária"
- Grid 2 colunas desktop, 1 mobile
- Cards expandidos com:
- Imagem real do serviço (aspect-ratio 16:9), border-radius `var(--radius-lg)`
- Título (Nunito Bold)
- Descrição (Open Sans)
- CTA: "Agendar no WhatsApp" → botão primário

Serviços:

1. Consultas (clínica geral e especialista)
2. Ultrassonografia
3. Exames de sangue
4. Vacinas importadas

**Bloco B — Serviços de Estética:**

- Eyebrow: "Estética Pet"
- Mesmo layout de cards

Serviços:

1. Banho e Tosa
2. Carding
3. Hidratação

### Schema Markup: `Service`

---

### 3. Página de Produtos — Linha Natural (/produtos)

Página do diferencial competitivo. Deve educar a tutora sobre prevenção.

### Hero

- Imagem de produtos da linha natural + pet com pele saudável
- H1 focado no benefício: "Linha Natural Exclusiva para a Saúde da Pele do Seu Pet"

### Seção Educativa — Timeline Visual

Infográfico/timeline horizontal mostrando a progressão:

1. **Problema detectado** — "Seu pet apresenta coceira, vermelhidão ou otite recorrente"
2. **Prevenção com linha natural** — "Tratamento com produtos naturais que não agridem o organismo"
3. **Resultado positivo** — "Pele saudável, pet feliz, sem recorrências"

- Estilo: 3 steps conectados por linha tracejada em `var(--amarelo)`
- Cada step: círculo com número + ícone (lucide-react), título e descrição
- Cores alternadas: amarelo, verde-acento, verde-escuro

### Catálogo de Produtos

Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

Categorias:

1. **Farmácia Pet** — Antibióticos, Anti-inflamatórios

2. **Suplementos** — Ômega 3, Probióticos

3. **Linha Natural Exclusiva** — Produtos dermatológicos naturais

Cada produto:

- Foto do produto, border-radius `var(--radius-lg)`
- Nome (Nunito Bold, 18px)
- Breve descrição (Open Sans, 14px)
- CTA: "Consultar disponibilidade →" → WhatsApp

### Schema Markup: `Service` + `AggregateRating`

---

### 4. Página Sobre / Equipe (/sobre)

### Hero

- Foto grande da Dra. Mariana (retrato profissional no consultório)
- Full-width com overlay gradiente para legibilidade do texto
- H1: "Conheça a Dra. Mariana Boulhosa"

### História

- Eyebrow: "Nossa história"
- Texto sobre o propósito da Vila Animalle — ser um porto seguro para os tutores
- Motivação pessoal da Dra. Mariana
- Max-width: 720px

### Contador Animado

- "+3.000" com animação de contagem (número sobe de 0 a 3000 quando a seção entra na viewport)
- Usar `IntersectionObserver` + state incremental
- Fonte: Nunito ExtraBold, `clamp(48px, 10vw, 80px)`, cor `var(--amarelo)`
- Label: "atendimentos realizados com amor" — Open Sans, cor `var(--verde-escuro)`

### Galeria

- Grid de fotos reais: atendimentos, espaço, equipe, pets
- Grid: `grid-cols-2 sm:grid-cols-3 gap-3`
- Fotos com border-radius `var(--radius-md)`
- Hover: leve zoom `scale(1.04)` com transição 500ms

### Schema Markup: `AboutPage`

---

### 5. Página de Contato (/contato)

### Layout: Split

- Lado esquerdo: informações de contato + botão WhatsApp
- Lado direito: mapa Google Maps embed

### Conteúdo Lado Esquerdo

- H1: "Entre em Contato"
- **Botão WhatsApp direto** — MAIOR DESTAQUE, acima de tudo
- Full-width, botão primário grande
- "Falar com a Dra. Mariana no WhatsApp"

- **Informações:**

- Endereço: Salvador, Bahia (com ícone `MapPin`)
- Telefone: (71) XXXX-XXXX (com ícone `Phone`)
- E-mail: contato@vilaanimalle.com.br (com ícone `Mail`)
- Horário: Segunda a Sexta (com ícone `Clock`)
- **Formulário de captura** (secundário, abaixo das informações):
- Campos: Nome, E-mail, Telefone, Mensagem
- Botão submit: estilo secundário

- Label LGPD: checkbox obrigatório "Aceito a Política de Privacidade"

### Mapa

- Google Maps embed responsivo
- Border-radius: `var(--radius-xl)`
- Height: 400px desktop, 300px mobile

### Schema Markup: `ContactPage` + `LocalBusiness`

---

### 6. Blog (/blog)

### Listagem

- Grid: `grid-cols-1 sm:grid-cols-2 gap-6`
- Cards: imagem (16:9), título, excerpt, data, categoria
- Border-radius: `var(--radius-lg)`
- Hover: elevação + sombra

### Sidebar (desktop only)

- Categorias (tags clicáveis)
- Campo de busca
- CTA: "Agendar no WhatsApp" — card fixo com botão primário

### Página de Post Individual (/blog/:slug)

- H1 do post
- Imagem de capa full-width
- Conteúdo formatado: headings, imagens, listas, parágrafos
- CTA lateral fixo (sticky) para WhatsApp (desktop)
- Seção "Posts relacionados" ao final — grid 2-3 cards
- Schema Markup: `Article`

---

## Animações

### Motion/React

```tsx

// Fade up padrão

initial={{ opacity: 0, y: 28 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}

// Delays escalonados para listas/cards

// Item 1: delay 0.2s

// Item 2: delay 0.38s

// Item 3: delay 0.56s

// Item 4: delay 0.74s

```

### Hover States

- Botões: mudança de cor de fundo (200ms)
- Cards: `translateY(-4px)` com sombra ampliada (300ms)
- Imagens: `scale(1.04)` (500ms)
- Links: mudança de cor (200ms)
- WhatsApp float: pulso sutil contínuo (3s loop)

### Accordion FAQ

- Expand: height 0 → auto com Motion `layout` prop
- Chevron: rotação 180° (300ms)
- Easing: `[0.22, 1, 0.36, 1]`

### Contador Animado (Sobre)

- Trigger: `IntersectionObserver` quando seção entra na viewport
- Animação: incremento de 0 até 3000 em ~2 segundos
- Easing: ease-out

---

## Imagens

Usar ImageWithFallback component para todas as imagens:

```tsx
interface ImageWithFallbackProps {
  src: string;

  alt: string;

  className?: string;

  style?: React.CSSProperties;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
}: ImageWithFallbackProps) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,

          background: "var(--off-white)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          color: "var(--ink-40)",

          fontFamily: "var(--font-opensans)",

          fontSize: "14px",
        }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
```

### Sugestões de busca Unsplash (placeholders até fotos reais):

- Hero: "veterinarian woman caring dog clinic warm light"

- Consultório: "modern veterinary clinic interior warm"

- Dra. atendendo: "female veterinarian examining pet gentle"

- Pet saudável: "happy golden retriever portrait"

- Banho/Tosa: "dog grooming salon"

- Linha Natural: "natural pet skincare products"

- Depoimentos bg: "woman hugging dog close"

**IMPORTANTE:** Fotos reais da Dra. Mariana e dos atendimentos devem substituir os placeholders antes do lançamento. Stock photos destroem credibilidade.

---

## Rotas

```tsx
/ → Home
/servicos → ServicosPage
/produtos → ProdutosPage (Linha Natural)
/sobre → SobrePage
/blog → BlogPage
/blog/:slug → BlogPostPage
/contato → ContatoPage

```

## SEO

### Meta Tags Globais

- **Meta Título:** "Vila Animalle | Veterinária em Salvador | Longevidade e Prevenção Pet"

- **Meta Descrição:** "Cuide da saúde do seu pet com a Dra. Mariana Boulhosa em Salvador. Foco em medicina preventiva, consultas humanizadas e linha dermatológica natural exclusiva. Agende via WhatsApp!"

### Schema Markup por Página (JSON-LD)

| Página | Schema |

|--------|--------|

| Home | `WebSite` + `FAQPage` |

| Serviços | `Service` |

| Produtos (Linha Natural) | `Service` + `AggregateRating` |

| Sobre | `AboutPage` |

| Contato | `ContactPage` + `LocalBusiness` |

| Blog (post) | `Article` |

### URLs

- Amigáveis, em português: `/servicos`, `/sobre`, `/contato`, `/blog`

- Heading hierarchy correta: 1 H1 por página, H2 seções, H3 subseções

- Sitemap XML + robots.txt

- Canonical tags em todas as páginas

---

## Diretrizes de Responsividade Mobile-First

### Breakpoints Tailwind

- `sm`: 640px

- `md`: 768px

- `lg`: 1024px

- `xl`: 1280px

### Padrão de Classes Responsivas

```tsx

className="

text-[16px] sm:text-[16px] md:text-[17px]

px-4 sm:px-6 md:px-10 lg:px-0

py-16 sm:py-20 md:py-24 lg:py-[96px]

gap-6 sm:gap-8 md:gap-10 lg:gap-12

"

```

### Fontes Fluidas

Usar `clamp()` para títulos:

- H1 Hero: `clamp(32px, 8vw, 56px)`

- H2 Seções: `clamp(26px, 6vw, 42px)`

- H3 Cards: `clamp(20px, 3vw, 24px)`

- Body: `clamp(16px, 2vw, 17px)`

### Grids Responsivos

```tsx
// Cards de serviço (3 colunas)

className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";

// Cards de produto (3 colunas)

className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

// Galeria fotos (3 colunas)

className = "grid grid-cols-2 sm:grid-cols-3 gap-3";

// Zigue-zague (alternado)

className = "flex flex-col lg:flex-row gap-8 lg:gap-12";

// Bloco par: className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12"
```

---

## Acessibilidade (WCAG 2.1 AA)

- Usar tags semânticas: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

- Alt text descritivo em todas as imagens (especialmente fotos de pets e da Dra. Mariana)

- Aria-labels em botões de ícones (ex: `aria-label="Abrir WhatsApp"`)

- Contraste mínimo WCAG AA (4.5:1):

- ✅ `var(--verde-escuro)` sobre `var(--white)` → 10.8:1

- ✅ `var(--verde-escuro)` sobre `var(--amarelo)` → 5.2:1

- ❌ `var(--white)` sobre `var(--amarelo)` → 1.9:1 — **NUNCA USAR**

- Focus states visíveis: outline `2px solid var(--verde-acento)`, outline-offset 2px

- Navegação completa por teclado (Tab, Enter, Escape)

- Touch targets mínimo 44x44px em mobile (botões, links, ícones clicáveis)

- Hierarquia de cabeçalhos (H1–H6) organizada e semântica

---

## Performance

- Lazy loading de imagens (`loading="lazy"` em todas abaixo da dobra)

- Code splitting por rota (React Router lazy loading)

- Otimização de fontes: `display=swap` + preload critical fonts

- Imagens: formato WebP com fallback PNG/JPEG

- CDN para assets estáticos

- Minificação CSS/JS

- Meta: carregamento total < 3 segundos mobile

- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Segurança e Conformidade

- Certificado SSL obrigatório (HTTPS)

- **LGPD:**

- Banner de cookies: opção aceitar/recusar, posição bottom, não bloqueante

- Política de Privacidade: link no footer

- Formulários de captura: checkbox de consentimento explícito obrigatório

---

## Dados de Conteúdo

### Big Numbers

- +3.000 pets atendidos com amor

- Foco em longevidade e prevenção

- Linha natural exclusiva em Salvador

### Contato (pendente validação)

- Endereço: Salvador, Bahia — [endereço completo pendente]

- WhatsApp: (71) XXXXX-XXXX — [número pendente]

- Instagram: @vilaanimalle — [@ pendente]

- E-mail: contato@vilaanimalle.com.br — [pendente]

- Horário: Segunda a Sexta — [horários específicos pendentes]

### WhatsApp Pre-filled Messages

- CTA Hero: "Olá! Gostaria de agendar uma consulta na Vila Animalle."
- CTA Serviço Clínico: "Olá! Gostaria de agendar uma consulta clínica humanizada."
- CTA Preventiva: "Olá! Gostaria de saber mais sobre medicina preventiva para meu pet."
- CTA Dermatologia: "Olá! Meu pet tem problemas de pele e gostaria de conhecer a linha natural."
- CTA Float: "Olá! Vim pelo site e gostaria de mais informações."

---

## Exemplo de Implementação: Card de Serviço

```tsx
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  isExternal?: boolean;
}

export function ServiceCard({
  icon,
  title,
  description,
  ctaText,
  ctaHref,
  isExternal,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col p-6 sm:p-8 h-full"
      style={{
        background: "var(--white)",
        border: `1px solid ${isHovered ? "var(--amarelo)" : "var(--ink-10)"}`,
        borderRadius: "var(--radius-lg)",
        boxShadow: isHovered
          ? "var(--shadow-card-hover)"
          : "var(--shadow-card)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 300ms ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ícone */}

      <div
        className="mb-4 flex items-center justify-center w-14 h-14"
        style={{
          background: "var(--amarelo-light)",
          borderRadius: "var(--radius-md)",
          color: "var(--amarelo)",
        }}
      >
        {icon}
      </div>

      {/* Título */}

      <h3
        className="mb-3"
        style={{
          fontFamily: "var(--font-nunito)",
          fontSize: "clamp(20px, 3vw, 24px)",
          fontWeight: 700,
          color: "var(--verde-escuro)",
        }}
      >
        {title}
      </h3>

      {/* Descrição */}

      <p
        className="mb-6 flex-1"
        style={{
          fontFamily: "var(--font-opensans)",
          fontSize: "16px",
          lineHeight: 1.6,
          color: "var(--ink-70)",
        }}
      >
        {description}
      </p>

      {/* CTA */}

      <a
        href={ctaHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center gap-2 mt-auto"
        style={{
          fontFamily: "var(--font-opensans)",
          fontSize: "15px",
          fontWeight: 600,
          color: "var(--verde-acento)",
          textDecoration: "none",
        }}
      >
        {ctaText}

        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}
```

---

## Exemplo de Implementação: FAQ Accordion

```tsx
interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {items.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid var(--ink-10)" }}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left"
            aria-expanded={openIndex === index}
            style={{
              fontFamily: "var(--font-nunito)",
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--verde-escuro)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {item.question}

            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChevronDown size={20} style={{ color: "var(--verde-acento)" }} />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5"
              style={{
                fontFamily: "var(--font-opensans)",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--ink-70)",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
```

---

## Package.json Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.1.3",
    "motion": "^11.15.0",
    "lucide-react": "^0.468.0"
  },

  "devDependencies": {
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "typescript": "^5.7.3",
    "tailwindcss": "^4.0.0"
  }
}
```

---

## Checklist de Implementação

- [ ] Configurar projeto React + TypeScript
- [ ] Instalar dependências (react-router, motion, lucide-react)
- [ ] Configurar Tailwind CSS v4
- [ ] Criar theme.css com todos os design tokens (cores, sombras, radius)
- [ ] Criar fonts.css e importar Nunito + Open Sans do Google Fonts
- [ ] Criar estrutura de pastas conforme especificado
- [ ] Copiar assets do logo (4 versões) para /src/assets/logos
- [ ] Implementar Navigation (header) com menu mobile drawer
- [ ] Implementar WhatsApp Floating Button com animação de pulso
- [ ] Criar Hero section (split layout, responsivo)
- [ ] Criar seção Serviços e Produtos (3 cards)
- [ ] Criar seção Proposta de Valor (zigue-zague)
- [ ] Criar seção Depoimentos (carousel sobre fundo verde escuro)
- [ ] Criar seção FAQ (accordion com Schema FAQPage)
- [ ] Criar seção CTA Final (banner amarelo)
- [ ] Implementar Footer global (fundo verde escuro, 4 colunas)
- [ ] Criar ServicosPage (Serviços Clínicos + Estética)
- [ ] Criar ProdutosPage (Linha Natural com timeline educativa)
- [ ] Criar SobrePage (hero, história, contador animado, galeria)
- [ ] Criar ContatoPage (split com mapa + formulário + WhatsApp)
- [ ] Criar BlogPage (listagem com sidebar)
- [ ] Criar BlogPostPage (template de post individual)
- [ ] Adicionar Schema Markup JSON-LD em todas as páginas
- [ ] Configurar meta tags SEO por página
- [ ] Implementar animações Motion (fade up, hover states)
- [ ] Testar responsividade em todos os breakpoints (mobile, tablet, desktop)
- [ ] Testar acessibilidade (contraste, keyboard nav, alt texts, focus states)
- [ ] Performance audit (lazy loading, WebP, Core Web Vitals)
- [ ] Configurar LGPD (banner cookies, política de privacidade)
- [ ] Gerar sitemap XML + robots.txt
- [ ] Deploy

---

## Observações Finais

1. **Pixel-perfect**: Seguir fielmente os design tokens (cores, tipografia, espaçamentos)
2. **Mobile-first**: Começar pelo mobile e expandir para desktop
3. **Fotos reais obrigatórias**: Placeholders Unsplash são temporários. Fotos da Dra. Mariana são críticas para E-E-A-T e confiança
4. **WhatsApp é o CTA #1**: Deve estar acessível em TODOS os momentos (header, float, dentro de seções, footer)
5. **Tom acolhedor**: Design quente, orgânico, arredondado. Nunca frio, hospitalar ou genérico
6. **Consistência**: Reutilizar componentes (Eyebrow, ServiceCard, ImageWithFallback, botões)
7. **Acessibilidade**: Sempre verificar contrastes, touch targets e semântica HTML
8. **Performance**: Otimizar imagens (WebP), lazy loading, carregamento < 3s
9.  **SEO Local**: Schema Markup em todas as páginas, especialmente LocalBusiness no Contato
10. **Transições**: Suaves e profissionais (200-300ms padrão, 700ms para fade up)
11. **Anti-patterns a evitar**: stock photos, layout congestionado, CTA enterrado, design hospitalar frio, site que não funciona no celular

---

**Este prompt está completo e pronto para ser usado em qualquer ferramenta de IA para gerar o projeto Vila Animalle do zero.**
