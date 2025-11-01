import { MessageCircle, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Let&apos;s Build Your Growth Plan</h2>
        <p className="text-xl text-center mb-16 max-w-2xl mx-auto">
          Every brand is unique, and so are our strategies.
Tell us about your goals and availability for a free call, and we’ll craft a plan tailored to your needs. We&apos;ll reply within 24 hours.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block mb-2">
                Monthly Budget
              </label>
              <select
                id="budget"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="1-5k">€400 - €700</option>
                <option value="5-10k">€700 - €1,200</option>
                <option value="10-20k">€1,200 - €2,000</option>
                <option value="20k+">€2,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2">Insert social media links (if available)</label>
            <div className="space-y-3">
              <input
                type="url"
                id="social1"
                placeholder="https://instagram.com/yourprofile"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                id="social2"
                placeholder="https://facebook.com/yourpage"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                id="social3"
                placeholder="https://linkedin.com/company/yourcompany"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition duration-300 w-full md:w-auto"
          >
            Send Request
          </button>
        </form>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <a
            href="mailto:info@mkmdigital.com"
            className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
          >
            <Mail className="w-5 h-5" />
            info@mkmdigitalagency.com
          </a>
        </div>
      </div>
    </section>
  )
}
