import HeroFade from './HeroFade'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Hero Background with Fading Images */}
      <div className="absolute inset-0">
        <HeroFade />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white">
            Place Lund Hotel
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto font-light">
            Welcome, you have found <span className="font-semibold">YOUR</span> <span className="font-semibold">PLACE</span> in Lund
          </h2>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
