import { ReactNode } from 'react'

export default function AuthorNote({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <aside className={className + ` -mt-6 pl-4 text-sm text-gray-500`}>{children}</aside>
}
