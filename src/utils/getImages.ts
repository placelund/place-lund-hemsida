import imageManifest from '@/data/image-manifest.json'

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
 * Natural/numeric sort for image filenames
 * Ensures proper ordering: 1, 2, 3, 10, 11 instead of 1, 10, 11, 2, 3
 */
export function naturalSort(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
}

/**
 * Get room images with dynamic hero selection
 *
 * Hero image selection:
 * 1. Look for image with "-hero" or "-main" in filename
 * 2. If not found, use first image numerically
 *
 * @param folder - The folder name inside /public/images/ (e.g., 'rooms/single-street')
 * @param shuffle - Whether to shuffle gallery images (default: false for consistent ordering)
 * @returns Object with heroImage and galleryImages array
 */
export function getRoomImages(folder: string, shuffle: boolean = false): {
  heroImage: string
  galleryImages: string[]
} {
  try {
    // Get images from manifest
    const images = (imageManifest as Record<string, string[]>)[folder] || []

    if (images.length === 0) {
      console.warn(`No images found in ${folder}`)
      return { heroImage: '', galleryImages: [] }
    }

    // Sort using natural/numeric sort for proper number ordering
    const sortedImages = [...images].sort(naturalSort)

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

    return {
      heroImage,
      galleryImages
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
  try {
    const images = (imageManifest as Record<string, string[]>)[folder] || []
    const sortedImages = [...images].sort(naturalSort)

    return shuffle ? shuffleArray(sortedImages) : sortedImages
  } catch (error) {
    console.error(`Error reading images from ${folder}:`, error)
    return []
  }
}
