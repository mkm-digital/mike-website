import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowWeWork } from "@/components/how-we-work"
import { Services } from "@/components/services"
import { WhySocialMedia } from "@/components/why-social-media"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <WhySocialMedia />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
