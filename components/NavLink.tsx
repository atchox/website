'use client'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

const NavLink = ({
  href,
  className = '',
  ...rest
}: LinkProps & { className?: string } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const pathname = usePathname()

  const hasPath = pathname !== '/' && pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`${hasPath ? '' : 'hover:text-gray-950 dark:hover:text-gray-400'} m-1 ${hasPath ? 'dark:text-red-800' : ''} font-semibold text-gray-900 dark:text-gray-100`}
      {...rest}
    />
  )
}

const LogoLink = ({
  href,
  className = '',
  ...rest
}: LinkProps & { className?: string } & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const pathname = usePathname()

  const isHome = pathname === '/'

  return (
    <Link href="/" {...rest}>
      <div className="flex items-center justify-between">
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 fill-none stroke-red-800 stroke-4 font-serif text-[100px] ${isHome ? 'fill-red-800' : ''}`}
        >
          <text y="54">a.</text>
        </svg>
      </div>
    </Link>
  )
}

export default NavLink
export { LogoLink }
