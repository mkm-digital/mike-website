import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 items-start">
          <div>
            <div className="relative h-14 w-56 mb-6">
              <Image
                src="/mkm-digital-logo.png"
                alt="MkM Digital"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="text-gray-400 leading-relaxed space-y-1 text-sm">
              <p className="font-semibold text-white">MkM Digital S.R.L.</p>
              <p>CIF: 51255386</p>
              <p>J2025008896004</p>
              <p>Str. Dimitrie Cantemir 86 A</p>
              <p>Oradea, Romania</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Strategy & Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Photo & Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Design & SEO
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 MkM Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
