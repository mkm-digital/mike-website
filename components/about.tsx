import { User, Pencil, Camera, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Who We Are</h2>

        <p className="text-xl text-center text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          MkM Digital is a full-service marketing agency combining creativity, strategy, and technology to help brands
          grow with purpose.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-10 text-center">Our team brings together four core experts:</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mike */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <User className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mike</h4>
                  <p className="text-blue-400 text-sm mb-3">Founder & Visual Designer</p>
                  <p className="text-gray-300 leading-relaxed">
                    Shaping the identity of brands through impactful design, post layouts, and creative direction.
                  </p>
                </div>
              </div>
            </div>

            {/* Desirée */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Pencil className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Desirée</h4>
                  <p className="text-blue-400 text-sm mb-3">Copywriter & Social Media Manager</p>
                  <p className="text-gray-300 leading-relaxed">
                    Crafting the voice of each brand and managing communication with precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Azdin */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Camera className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Azdin</h4>
                  <p className="text-blue-400 text-sm mb-3">Photographer & Videomaker</p>
                  <p className="text-gray-300 leading-relaxed">
                    Producing high-quality visuals and professional edits that tell authentic stories.
                  </p>
                </div>
              </div>
            </div>

            {/* Valery */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <TrendingUp className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Valery</h4>
                  <p className="text-blue-400 text-sm mb-3">Strategist</p>
                  <p className="text-gray-300 leading-relaxed">
                    Transforming insights and analytics into clear, effective marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/30 max-w-4xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-gray-200">
            We build bold, cohesive brands with a focus on creativity, measurable results, and genuine collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}
