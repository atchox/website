import { ReactNode } from 'react'

export default function CustomBlockquote({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <blockquote
      className={className + ' no-quote border-l-3 border-gray-400 pl-3 text-2xl/8 italic'}
    >
      {children}
    </blockquote>
  )
}
