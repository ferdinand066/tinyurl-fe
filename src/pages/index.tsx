import Layout from '@/components/layouts/_layout'
import BenefitGrid from '@/components/pages/home/_benefit-grid'
import HeroSection from '@/components/pages/_hero-section'
import Testimonial from '@/components/pages/home/_testimonial'
import { features } from '@/static/testimonial'
import ButtonRedirect from '@/components/pages/home/_button-redirect'

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection>
          <ButtonRedirect />
        </HeroSection>

        {/* Feature section with grid */}
        <BenefitGrid features={features} />

        {/* Testimonial section */}
        <Testimonial />
      </main>
    </Layout>
  )
}
