'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RetroNavBar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/music', label: 'Music' },
    { href: '/tour', label: 'Tour' },
    { href: '/guestbook', label: 'Guestbook' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="retro-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <span className={pathname === item.href ? 'active' : ''}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
