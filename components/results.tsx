import { Card } from "@/components/ui/card"

const stats = [
  {
    metric: "300%",
    label: "Average ROI increase",
    company: "Fortune 500 Clients",
  },
  {
    metric: "2.5M+",
    label: "Leads generated",
    company: "Tech Startups",
  },
  {
    metric: "150+",
    label: "Successful campaigns",
    company: "Global Brands",
  },
  {
    metric: "98%",
    label: "Client retention rate",
    company: "Long-term Partners",
  },
]

export function Results() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Results that speak for themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"We measure success by your growth. Here's what we've achieved for our clients."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.metric}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.company}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
