import type { ReactNode } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export type NavLinkProps = {
  title: string
  href: string
  icon?: ReactNode
}

function NavLink({ title, href, icon = null }: NavLinkProps) {
  return (
    <Link href={href} className={clsx('nav-link font-plusjakartasans')}>
      {title}
      {icon}
    </Link>
  )
}

export default NavLink
