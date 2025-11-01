import { TrendingUp, Users, Target, BarChart3, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"

export function WhySocialMedia() {
  const stats = [
    {
      icon: Users,
      number: "5.31B",
      label: "Active Social Media Users",
      description: "65% of global population",
    },
    {
      icon: TrendingUp,
      number: "5-8x",
      label: "Higher ROI",
      description: "With data-driven strategies",
    },
    {
      icon: Target,
      number: "25%",
      label: "Digital Ad Spending",
      description: "Goes to social media",
    },
    {
      icon: BarChart3,
      number: "1 Day",
      label: "Per Week",
      description: "Average time spent on social",
    },
  ]

  const professionalBenefits = [
    "SEO & advertising expertise",
    "Professional design & copywriting",
    "Advanced data analysis & reporting",
    "Continuous algorithm updates",
    "Campaign optimization",
    "Maximum ROI with reduced waste",
    "Strategic adaptation over time",
    "Ongoing support & feedback",
  ]

  const diyLimitations = [
    "Limited expertise across disciplines",
    "Inadequate professional tools",
    "Lack of advanced analytics",
    "No continuous trend monitoring",
    "Time-consuming learning curve",
    "Inconsistent results",
    "No strategic oversight",
    "Limited scalability",
  ]

  return (
    <section id="why-social-media" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Social Media Marketing in 2025?</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In 2025, social media marketing has become essential. Social platforms are the main hub of public attention
            and the key space for visibility, engagement, and business growth.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Visual Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image src="/social-media-analytics-dashboard-with-graphs-and-m.jpg" alt="Social Media Analytics" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image src="/professional-marketing-team-collaborating-on-socia.jpg" alt="Marketing Team Collaboration" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image src="/smartphone-showing-multiple-social-media-apps-inst.jpg" alt="Social Media Platforms" fill className="object-cover" />
          </div>
        </div>

        {/* Platform Overview */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Multiple Platforms, Unique Opportunities</h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Platforms such as <span className="text-blue-400 font-semibold">Facebook</span>,{" "}
            <span className="text-blue-400 font-semibold">Instagram</span>,{" "}
            <span className="text-blue-400 font-semibold">TikTok</span>, and{" "}
            <span className="text-blue-400 font-semibold">LinkedIn</span> each offer distinct audiences, languages, and
            content types that can be leveraged for different marketing goals. Understanding these nuances is key to
            maximizing your reach and engagement.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">DIY vs. Professional Management</h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Managing social media marketing independently versus relying on industry professionals leads to very
            different outcomes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Professional Benefits */}
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Working with Professionals</h4>
              </div>
              <ul className="space-y-3">
                {professionalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-sm text-blue-300 font-semibold">
                  Result: Maximize ROI, reduce waste, and build data-driven strategies with continuous support.
                </p>
              </div>
            </div>

            {/* DIY Limitations */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-600 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">DIY Management</h4>
              </div>
              <ul className="space-y-3">
                {diyLimitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">{limitation}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <p className="text-sm text-gray-400 font-semibold">
                  Result: Limited expertise, inadequate tools, and lack of advanced analysis often lead to suboptimal
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Choosing an agency simplifies administrative tasks and ensures ongoing support with continuous feedback and
            strategic adaptation over time.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
          >
            Start Your Professional Journey
          </a>
        </div>
      </div>
    </section>
  )
}
