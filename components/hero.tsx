"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Vanta.js would be loaded here in production
    // For now, we'll use a static background
  }, [])

  return (
    <section
      id="home"
      className="relative flex items-end justify-center overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tavola%20disegno%202-2%20copia-5crcUZN5hhr4FSHybwbZa6dLlEA7Kv.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated background overlay */}
      <div ref={vantaRef} className="absolute inset-0 hidden md:block bg-black/50" />

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center relative pb-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition duration-300"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
