'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  '/images/hero/hero-image-slideshow/IMG_7185.jpeg',
  '/images/hero/hero-image-slideshow/IMG_7192.jpeg',
  '/images/hero/hero-image-slideshow/IMG_7200.jpeg',
  '/images/hero/hero-image-slideshow/66x.jpg',
  '/images/hero/hero-image-slideshow/P1020214.JPG',
  '/images/hero/hero-image-slideshow/heroplaceholder.png',
]

export default function HeroFade() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {heroImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Place Lund Hotel - View ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="100vw"
        />
      ))}
    </div>
  )
}
