/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

import Icon from './LinkIcon'

type CustomLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
    className?: string
  }

const CustomLink = ({ href, children, className = '', ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link
        className={className + ' break-words no-underline hover:underline'}
        href={href}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a className={className + ' break-words no-underline hover:underline'} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      className={className + ' break-words no-underline hover:underline'}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
      <sup className="ml-1 inline-block align-baseline">
        <Icon />
      </sup>
    </a>
  )
}

const SemiBoldLink = ({ href, children, className, ...rest }: CustomLinkProps) => (
  <CustomLink
    className={className + ' font-semibold no-underline hover:underline'}
    href={href}
    {...rest}
  >
    {children}
  </CustomLink>
)

export default CustomLink
export { SemiBoldLink }
