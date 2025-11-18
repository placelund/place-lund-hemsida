interface Specification {
  label: string
  value: string | React.ReactNode
}

interface SpecificationBoxProps {
  title: string
  specifications: Specification[]
  className?: string
}

export default function SpecificationBox({
  title,
  specifications,
  className = ''
}: SpecificationBoxProps) {
  return (
    <div className={`bg-[#f5f5f5] p-6 rounded-lg border-2 border-[#004225] ${className}`}>
      <h3 className="text-xl font-bold text-[#004225] mb-4">{title}</h3>
      <ul className="space-y-3">
        {specifications.map((spec, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#004225] font-bold text-xl">•</span>
            <span className="text-gray-700">
              <strong>{spec.label}:</strong> {spec.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
