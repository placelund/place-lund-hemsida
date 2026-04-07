'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  '/images/hero/hero-image-slideshow/66x.jpg',
  '/images/hero/hero-image-slideshow/IMG_7185.jpeg',
  '/images/hero/hero-image-slideshow/P1020214.JPG',
]

export default function HeroFade() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {heroImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt="Place Lund Hotel"
          fill
          quality={90}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  )
}