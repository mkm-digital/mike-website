import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Ready to accelerate your growth?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          {"Let's discuss how we can help you achieve your marketing goals and drive measurable business results."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg group">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            Download Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
