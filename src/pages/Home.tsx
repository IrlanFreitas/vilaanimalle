import Hero from '../components/Hero'
import ServicosCards from '../components/ServicosCards'
import PropostaValor from '../components/PropostaValor'
import Depoimentos from '../components/Depoimentos'
import FAQ from '../components/FAQ'
import CTAFinal from '../components/CTAFinal'

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Vila Animalle Pet Care',
          'url': 'https://vilaanimalle.com.br',
          'description': 'Clínica veterinária na Vila Laura, Salvador - BA. Medicina preventiva, consultas humanizadas e linha dermatolólogica natural exclusiva.',
        }),
      }} />
      <Hero />
      <ServicosCards />
      <PropostaValor />
      <Depoimentos />
      <FAQ />
      <CTAFinal />
    </>
  )
}
