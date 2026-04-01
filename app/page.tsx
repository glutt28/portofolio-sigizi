import Header from '@/components/header'
import Hero from '@/components/hero'
import DashboardsSection from '@/components/dashboards-section'
import FeaturesSection from '@/components/features-section'
import WorkflowSection from '@/components/workflow-section'
import TechnologySection from '@/components/technology-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DashboardsSection />
      <FeaturesSection />
      <div id="workflow">
        <WorkflowSection />
      </div>
      <div id="technology">
        <TechnologySection />
      </div>
      <Footer />
    </div>
  )
}
