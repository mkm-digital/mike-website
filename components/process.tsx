const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "We dive deep into your business, market, and competitors to understand opportunities and challenges.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Create a comprehensive marketing strategy aligned with your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Creative Execution",
    description: "Bring the strategy to life with compelling creative assets and campaigns across all channels.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Deploy campaigns and continuously optimize based on performance data and market feedback.",
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our proven process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A systematic approach to marketing excellence that delivers consistent results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
