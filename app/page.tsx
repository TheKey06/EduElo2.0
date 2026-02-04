
import { LandingHeader } from "./components/landing/header"
import { MissionVision } from "./components/landing/mission-vision"
import { Hero } from "./components/landing/hero"
import { Objectives } from "./components/landing/objectives"
import { Features } from "./components/landing/features"
import { Footer } from "./components/landing/footer"


export default function Page() {
  return (
    <main className="scroll-smooth">
      <LandingHeader />
      <Hero />
      <MissionVision />
      <Features />
      <Objectives />
      <Footer />
    </main>
    
  )
}