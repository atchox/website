import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: Props) {
  return (
    <div className={clsx('mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0', className)}>
      {children}
    </div>
  )
}
