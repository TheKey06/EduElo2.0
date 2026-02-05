
import { LandingHeader } from "./views/landing/header"
import { MissionVision } from "./views/landing/mission-vision"
import { Hero } from "./views/landing/hero"
import { Objectives } from "./views/landing/objectives"
import { Features } from "./views/landing/features"
import { Footer } from "./views/landing/footer"


export default function Page() {
  return (
    <main>
      <LandingHeader />
      <Hero />
      <Features />
      <MissionVision />
      <Objectives />
      <Footer />
    </main>
    
  )
}