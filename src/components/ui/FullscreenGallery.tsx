'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullscreenGalleryProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  isOpen: boolean;
}

export function FullscreenGallery({
  images,
  initialIndex,
  onClose,
  isOpen,
}: FullscreenGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10001] text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Close fullscreen gallery"
      >
        <X size={32} />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors z-[10001] p-3 rounded-full hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/90 transition-colors z-[10001] p-3 rounded-full hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="relative w-[90vw] h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
          fill
          className="object-contain"
          quality={90}
          priority
          sizes="90vw"
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 px-4 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Thumbnail Navigation (for larger galleries) */}
      {images.length > 1 && images.length <= 10 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 p-2 rounded-lg">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`relative w-12 h-12 rounded overflow-hidden border-2 transition-opacity ${
                index === currentIndex
                  ? 'border-white opacity-100'
                  : 'border-white/30 opacity-60 hover:opacity-80'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface GalleryImageProps {
  src: string;
  alt: string;
  allImages: string[];
  className?: string;
  aspectRatio?: string;
  quality?: number;
  priority?: boolean;
}

export function GalleryImage({
  src,
  alt,
  allImages,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  quality = 85,
  priority = false,
}: GalleryImageProps) {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const imageIndex = allImages.indexOf(src);
  const validIndex = imageIndex !== -1 ? imageIndex : 0;

  return (
    <>
      <div
        className={`relative ${aspectRatio} cursor-pointer overflow-hidden rounded-lg group ${className}`}
        onClick={() => setIsFullscreenOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={quality}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-3">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </div>

      <FullscreenGallery
        images={allImages}
        initialIndex={validIndex}
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
      />
    </>
  );
}

// Specialized component for simple image grids
interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  aspectRatio?: string;
  gap?: string;
  className?: string;
}

export function ImageGrid({
  images,
  columns = { default: 1, md: 2, lg: 3 },
  aspectRatio = 'aspect-[4/3]',
  gap = 'gap-4',
  className = '',
}: ImageGridProps) {
  const allImageSrcs = images.map(img => img.src);

  const getGridClasses = () => {
    const classes = [`grid-cols-${columns.default}`];
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
    return classes.join(' ');
  };

  return (
    <div className={`grid ${getGridClasses()} ${gap} ${className}`}>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          allImages={allImageSrcs}
          aspectRatio={aspectRatio}
          priority={index < 3} // Prioritize first 3 images
        />
      ))}
    </div>
  );
}