import Layout from '@/components/layouts/_layout'
import BenefitGrid from '@/components/pages/home/_benefit-grid'
import Testimonial from '@/components/pages/home/_testimonial'
import TinyUrlForm from '@/components/pages/tiny-url/_tiny-url-form'
import HeroSection from '@/components/pages/_hero-section'
import { features } from '@/static/testimonial'

export default function CreateTinyUrl() {
  return (
    <Layout>
      <main>
        <HeroSection>
          <TinyUrlForm />
        </HeroSection>
        <BenefitGrid features={features} />
        <Testimonial />
      </main>
    </Layout>
  )
}
