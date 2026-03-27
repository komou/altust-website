'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Shield, Zap, Clock, Database, TrendingUp, Headphones, Globe,
  FileText, BarChart3, Layers, ChevronLeft, ChevronRight,
} from 'lucide-react'

const ITEMS = [
  {
    icon: Shield,
    title: 'Rol Tabanlı Yetkilendirme',
    desc: 'Ekip üyelerine özel erişim hakları tanımlayın. Muhasebe, satış veya depo — herkes yalnızca kendi alanını görür.',
  },
  {
    icon: Zap,
    title: 'Gerçek Zamanlı Raporlar',
    desc: 'Anlık finansal durum takibi, canlı dashboard ve otomatik bildirimlerle işletmenizin nabzını her an tutun.',
  },
  {
    icon: Clock,
    title: 'Hızlı Kurulum',
    desc: '5 dakikada hesabınızı oluşturun, verilerinizi aktarın ve hemen kullanmaya başlayın. Teknik bilgi gerekmez.',
  },
  {
    icon: Database,
    title: 'Güvenli Altyapı',
    desc: 'Row Level Security ile veri izolasyonu, şifreli bağlantılar ve otomatik yedekleme. Verileriniz daima korumalı.',
  },
  {
    icon: TrendingUp,
    title: 'Ölçeklenebilir Yapı',
    desc: 'İşletmeniz büyüdükçe platform sizinle büyür. Sınırsız kullanıcı, sınırsız işlem — kapasite sorunu yok.',
  },
  {
    icon: Headphones,
    title: '7/24 Destek',
    desc: 'Uzman destek ekibimiz sorularınızda her zaman yanınızda. Chat, e-posta veya telefon — tercih sizin.',
  },
  {
    icon: Globe,
    title: "Türkiye'ye Uyumlu",
    desc: 'GİB entegrasyonu, e-Fatura, e-Arşiv ve KVKK uyumu — Türkiye mevzuatının gerektirdiği her şey dahil.',
  },
  {
    icon: FileText,
    title: 'e-Belge Entegrasyonu',
    desc: 'e-Fatura, e-Arşiv ve e-İrsaliye işlemlerinizi otomatik yönetin. Manuel süreçlere son verin.',
  },
  {
    icon: BarChart3,
    title: 'Detaylı Analizler',
    desc: 'Satış trendleri, stok devir hızı ve nakit akış analizleriyle veri odaklı iş kararları alın.',
  },
  {
    icon: Layers,
    title: 'Tam Entegre Modüller',
    desc: 'Satış, alım, finans ve stok modülleri birbiriyle tam entegre çalışır. Tekrar veri girişi yok.',
  },
]

// Sentinel nodes for seamless infinite loop
const EXTENDED = [ITEMS[ITEMS.length - 1], ...ITEMS, ITEMS[0]]
const CARD_W = 380
const GAP = 24
const STEP = CARD_W + GAP

export default function WhyUsCarousel() {
  // idx 0 = clone of last, 1..ITEMS.length = real items, ITEMS.length+1 = clone of first
  const [idx, setIdx] = useState(1)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)

  // After landing on sentinel, snap to real counterpart
  useEffect(() => {
    if (idx === ITEMS.length + 1) {
      const t = setTimeout(() => {
        setAnimated(false)
        setIdx(1)
      }, 650)
      return () => clearTimeout(t)
    }
    if (idx === 0) {
      const t = setTimeout(() => {
        setAnimated(false)
        setIdx(ITEMS.length)
      }, 650)
      return () => clearTimeout(t)
    }
  }, [idx])

  // Re-enable animation after snap
  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 30)
      return () => clearTimeout(t)
    }
  }, [animated])

  const next = useCallback(() => {
    setAnimated(true)
    setIdx(p => p + 1)
  }, [])

  const prev = useCallback(() => {
    setAnimated(true)
    setIdx(p => p - 1)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [paused, next])

  const currentDot = Math.max(0, Math.min(ITEMS.length - 1, idx - 1))
  const offset = -(idx * STEP)

  return (
    <div
      style={{ position: 'relative', paddingBottom: 56 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Track ── */}
      <div style={{ overflow: 'hidden', paddingLeft: 64, paddingRight: 0 }}>
        <div
          style={{
            display: 'flex',
            gap: GAP,
            transform: `translateX(${offset}px)`,
            transition: animated ? 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            willChange: 'transform',
          }}
        >
          {EXTENDED.map((item, i) => {
            const Icon = item.icon
            const isActive = i === idx
            return (
              <div
                key={i}
                style={{
                  width: CARD_W,
                  flexShrink: 0,
                  background: isActive
                    ? 'rgba(201,162,74,0.08)'
                    : 'rgba(255,255,255,0.025)',
                  border: `1px solid ${isActive ? 'rgba(201,162,74,0.4)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: 20,
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  transition: 'background 0.4s ease, border-color 0.4s ease',
                  boxShadow: isActive ? '0 0 0 1px rgba(201,162,74,0.15), 0 20px 40px rgba(0,0,0,0.3)' : 'none',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: isActive ? 'rgba(201,162,74,0.2)' : 'rgba(201,162,74,0.09)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    transition: 'background 0.4s ease',
                  }}
                >
                  <Icon size={26} color="#c9a24a" />
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    margin: '0 0 12px',
                    color: isActive ? '#e8e4dc' : '#b0aca4',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {item.title}
                </h4>

                {/* Desc */}
                <p
                  style={{
                    color: isActive ? '#9a9590' : '#5a5650',
                    fontSize: '0.88rem',
                    lineHeight: 1.75,
                    margin: 0,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Left Arrow ── */}
      <button
        onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 5000) }}
        aria-label="Önceki"
        style={{
          position: 'absolute',
          left: 14,
          top: '44%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(12,13,15,0.85)',
          border: '1px solid rgba(201,162,74,0.35)',
          color: '#c9a24a',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,162,74,0.18)'
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,162,74,0.6)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(12,13,15,0.85)'
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,162,74,0.35)'
        }}
      >
        <ChevronLeft size={22} />
      </button>

      {/* ── Right Arrow ── */}
      <button
        onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 5000) }}
        aria-label="Sonraki"
        style={{
          position: 'absolute',
          right: 14,
          top: '44%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(12,13,15,0.85)',
          border: '1px solid rgba(201,162,74,0.35)',
          color: '#c9a24a',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,162,74,0.18)'
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,162,74,0.6)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(12,13,15,0.85)'
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,162,74,0.35)'
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Dot Indicators ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimated(true)
              setIdx(i + 1)
              setPaused(true)
              setTimeout(() => setPaused(false), 5000)
            }}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === currentDot ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === currentDot ? '#c9a24a' : 'rgba(255,255,255,0.15)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.35s ease, background 0.35s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
