const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop",
    title: "Tech Startup",
    description: "Brand strategy & social media growth",
    result: "+300% engagement in 3 months",
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=640&h=360&fit=crop",
    title: "Gourmet Restaurant",
    description: "Website redesign & SEO",
    result: "+150% online reservations",
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=640&h=360&fit=crop",
    title: "Fashion Brand",
    description: "Content production & influencer collabs",
    result: "+80K new followers",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=360&fit=crop",
    title: "Wellness Center",
    description: "Complete rebranding",
    result: "3x more leads",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=640&h=360&fit=crop",
    title: "E-Learning Platform",
    description: "Digital marketing strategy",
    result: "+40% conversion rate",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&h=360&fit=crop",
    title: "Luxury Real Estate",
    description: "Video marketing campaign",
    result: "2.5M video views",
  },
]

const testimonials = [
  {
    quote:
      "MkM Digital transformed our social media presence completely. Their strategic approach and creative content helped us triple our engagement rates in just a few months.",
    name: "Sarah Johnson",
    role: "CEO, TechSolutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The website MkM designed for us increased our conversion rate by 60%. Their team understood our brand perfectly and delivered beyond expectations.",
    name: "Michael Rossi",
    role: "Founder, ItalianEats",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Working with MkM was a game-changer for our marketing strategy. Their data-driven approach helped us allocate our budget more efficiently and double our ROI.",
    name: "Emma Laurent",
    role: "Marketing Director, SwissLux",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl">
                <p className="text-xl italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
