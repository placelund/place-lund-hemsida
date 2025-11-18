interface AmenitiesListProps {
  amenities: string[]
  columns?: 1 | 2 | 3
  className?: string
}

export default function AmenitiesList({
  amenities,
  columns = 2,
  className = ''
}: AmenitiesListProps) {
  const gridClass = columns === 1
    ? 'grid-cols-1'
    : columns === 3
    ? 'grid-cols-1 md:grid-cols-3'
    : 'grid-cols-1 md:grid-cols-2'

  return (
    <ul className={`grid ${gridClass} gap-3 ${className}`}>
      {amenities.map((amenity, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="text-[#004225] font-bold text-xl">•</span>
          <span className="text-gray-700">{amenity}</span>
        </li>
      ))}
    </ul>
  )
}
