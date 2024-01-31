import Layout from '@/components/layouts/_layout'
import BenefitGrid from '@/components/pages/home/_benefit-grid'
import Testimonial from '@/components/pages/home/_testimonial'
import RenameUrlForm from '@/components/pages/rename-url/_rename-url-form'
import HeroSection from '@/components/pages/_hero-section'
import { features } from '@/static/testimonial'
import QrCodeForm from '@/components/pages/qr-code/_qr-code-form'

export default function CreateTinyUrl() {
  return (
    <Layout>
      <main>
        <HeroSection>
            <QrCodeForm />
        </HeroSection>
        <BenefitGrid features={features} />
        <Testimonial />
      </main>
    </Layout>
  )
}
