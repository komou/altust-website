'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#ozellikler', label: 'Özellikler' },
  { href: '#nasil-calisir', label: 'Nasıl Çalışır' },
  { href: '#fiyatlandirma', label: 'Fiyatlandırma' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button — sadece mobilde gorunur */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menüyü aç"
        className="hidden md:!hidden p-2 bg-transparent border-none cursor-pointer mobile-menu-btn"
        style={{ color: 'var(--landing-text)' }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-[99] flex flex-col p-8 gap-2"
          style={{ background: 'var(--landing-bg)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="no-underline text-lg py-3.5 transition-colors duration-200 hover:opacity-80"
              style={{
                color: 'var(--landing-text-muted)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                borderBottom: '1px solid var(--landing-border)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-6">
            <a
              href="/login"
              className="no-underline text-center py-3 px-6 rounded-xl text-[0.95rem]"
              style={{
                color: 'var(--landing-text)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                border: '1px solid var(--landing-border)',
              }}
            >
              Giriş Yap
            </a>
            <a
              href="/login"
              className="no-underline text-center py-3 px-6 rounded-xl text-[0.95rem] font-semibold"
              style={{
                background: 'var(--landing-gold)',
                color: '#0c0d0f',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Ücretsiz Deneyin
            </a>
          </div>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          .desktop-nav-links { display: none !important; }
          .desktop-nav-cta { display: none !important; }
        }
      `}</style>
    </>
  )
}
