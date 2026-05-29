'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = [
    'nav',
    isHome ? 'on-photo' : '',
    scrolled ? 'scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={navClass}>
        <div className="container nav-inner">
          <Link className="logo" href="/">
            <span className="logo-mark">N</span>
            <span className="name">NapMeridian</span>
          </Link>
          <nav>
            <ul className="nav-links">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    className="nav-link"
                    href={href}
                    aria-current={pathname === href ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <Link className="btn btn-ghost" href="/services">Services</Link>
            <Link className="btn btn-primary" href="/contact">
              Free consultation
            </Link>
            <button
              className="menu-btn"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
        links={links}
      />
    </>
  );
}
