import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ManagementSection } from "@/components/management-section"
import { HistorySection } from "@/components/history-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { ValuesSection } from "@/components/values-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ManagementSection />
      <HistorySection />
      <MissionVisionSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
