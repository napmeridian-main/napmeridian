'use client';

import Link from 'next/link';

interface Props {
  open: boolean;
  onClose: () => void;
  pathname: string;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, pathname, links }: Props) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu-head">
        <Link className="logo" href="/" onClick={onClose}>
          <span className="logo-mark">N</span>
          <span className="name">NapMeridian</span>
        </Link>
        <button className="menu-btn mobile-close" aria-label="Close menu" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <ul className="mobile-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={onClose}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mobile-menu-cta">
        <Link className="btn btn-primary" href="/contact" onClick={onClose}>
          Free consultation <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
