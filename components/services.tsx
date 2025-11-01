import { Target, Users, Camera, Globe, TrendingUp, Package } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Strategy & Consulting",
    description: "Market analysis, brand positioning, and growth plans tailored to your business objectives.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Content calendars, post design, copywriting, and community engagement to grow your audience.",
  },
  {
    icon: Camera,
    title: "Photo & Video Production",
    description: "Professional shoots, editing, and visual storytelling that captures your brand essence.",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Conversion-focused websites with intuitive UX/UI design that drives results.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Content optimization, backlinks strategy, and technical SEO to improve your rankings.",
  },
  {
    icon: Package,
    title: "Complete Packages",
    description: "Custom bundles combining multiple services for comprehensive brand growth.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition duration-300 inline-block"
          >
            Request a Custom Package
          </a>
        </div>
      </div>
    </section>
  )
}
