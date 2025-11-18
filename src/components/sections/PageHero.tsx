import Image from 'next/image'

interface PageHeroProps {
  image: string
  title: string
  description?: string
  buttons?: React.ReactNode
  minHeight?: string
}

export default function PageHero({
  image,
  title,
  description,
  buttons,
  minHeight = '500px'
}: PageHeroProps) {
  return (
    <section
      className="relative h-[60vh] flex items-center justify-center"
      style={{ minHeight }}
    >
      <Image
        src={image}
        alt={title}
        fill
        quality={100}
        className="object-cover"
        priority
      />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#004225] mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        {buttons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons}
          </div>
        )}
      </div>
    </section>
  )
}
