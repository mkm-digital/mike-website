import { Video, FileText, Search, Rocket, TrendingUp } from "lucide-react"

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      icon: Video,
      title: "Preliminary Free Video Call",
      description:
        "You explain your project, your values, objectives, and vision. We listen and understand your needs.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Custom Package & Quote",
      description: "We create a comprehensive package and detailed quote tailored specifically to your company.",
    },
    {
      number: "03",
      icon: Search,
      title: "Market Research & Preparation",
      description:
        "We study the market, your competitors, your company, and products. We prepare all materials: photos, videos, graphics, and more.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Publish",
      description: "We start publishing consistently and continuously. No breaks, no delays—just steady momentum.",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Constant Optimization",
      description:
        "We continuously analyze performance, refine strategies, and optimize results to ensure ongoing growth.",
    },
  ]

  return (
    <section id="how-we-work" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Our proven 5-step process ensures your brand gets the attention and results it deserves
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-5xl md:text-6xl font-bold text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[88px] top-full w-0.5 h-8 bg-gradient-to-b from-zinc-800 to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
