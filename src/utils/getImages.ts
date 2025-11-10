import fs from 'fs'
import path from 'path'

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Get room images with dynamic hero selection
 *
 * Hero image selection:
 * 1. Look for image with "-hero" or "-main" in filename
 * 2. If not found, use first image alphabetically
 *
 * @param folder - The folder name inside /public/images/ (e.g., 'rooms/single-street')
 * @param shuffle - Whether to shuffle gallery images (default: true)
 * @returns Object with heroImage and galleryImages array
 */
export function getRoomImages(folder: string, shuffle: boolean = true): {
  heroImage: string
  galleryImages: string[]
} {
  const imagesDir = path.join(process.cwd(), 'public', 'images', folder)

  try {
    // Read all files in the directory
    const files = fs.readdirSync(imagesDir)

    // Filter for image files only
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )

    if (imageFiles.length === 0) {
      console.warn(`No images found in ${folder}`)
      return { heroImage: '', galleryImages: [] }
    }

    // Sort alphabetically for consistent fallback
    const sortedImages = imageFiles.sort()

    // Find hero image (contains -hero or -main in filename)
    const heroIndex = sortedImages.findIndex(file =>
      /-hero\.|hero\.|-main\.|main\./i.test(file)
    )

    let heroImage: string
    let galleryImages: string[]

    if (heroIndex !== -1) {
      // Hero image found
      heroImage = sortedImages[heroIndex]
      galleryImages = sortedImages.filter((_, index) => index !== heroIndex)
    } else {
      // No hero image, use first alphabetically
      heroImage = sortedImages[0]
      galleryImages = sortedImages.slice(1)
    }

    // Shuffle gallery images if requested
    if (shuffle && galleryImages.length > 0) {
      galleryImages = shuffleArray(galleryImages)
    }

    // Return full paths relative to /public/images/
    return {
      heroImage: `/images/${folder}/${heroImage}`,
      galleryImages: galleryImages.map(img => `/images/${folder}/${img}`)
    }
  } catch (error) {
    console.error(`Error reading images from ${folder}:`, error)
    return { heroImage: '', galleryImages: [] }
  }
}

/**
 * Get all images from a folder (no hero selection, just shuffle)
 * Useful for gallery pages
 */
export function getGalleryImages(folder: string, shuffle: boolean = true): string[] {
  const imagesDir = path.join(process.cwd(), 'public', 'images', folder)

  try {
    const files = fs.readdirSync(imagesDir)
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )

    const sortedImages = imageFiles.sort()
    const images = sortedImages.map(img => `/images/${folder}/${img}`)

    return shuffle ? shuffleArray(images) : images
  } catch (error) {
    console.error(`Error reading images from ${folder}:`, error)
    return []
  }
}
