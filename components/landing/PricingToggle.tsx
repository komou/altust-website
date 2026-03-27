'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const features = [
  'Sınırsız Kullanıcı',
  'Sınırsız Cari Hesap',
  'Tüm Raporlar & Analizler',
  'Tüm e-Belge Modülleri',
  'Çoklu Şube Desteği',
  'Finans & Nakit Yönetimi',
  'Stok & Depo Takibi',
  'API Erişimi',
  'Entegrasyonlar',
  '7/24 Öncelikli Destek',
]

// Yıllık: ₺15.000/yıl = ₺1.250/ay
// Aylık: ₺1.250 × 1.20 = ₺1.500/ay (%20 daha pahalı)
const ANNUAL_TOTAL = 15000
const ANNUAL_MONTHLY = 1250   // 15000 / 12
const MONTHLY = 1500          // 1250 * 1.20

export default function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(true)

  const price = isAnnual ? ANNUAL_MONTHLY : MONTHLY
  const saving = MONTHLY * 12 - ANNUAL_TOTAL // = 3000 TL tasarruf

  return (
    <div style={{ maxWidth: 520, margin: '0 auto' }}>

      {/* Toggle */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 12, marginBottom: 40,
      }}>
        <span style={{
          fontSize: '0.9rem',
          color: !isAnnual ? 'var(--landing-text)' : 'var(--landing-text-muted)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: !isAnnual ? 600 : 400,
        }}>Aylık</span>

        <button
          onClick={() => setIsAnnual(!isAnnual)}
          style={{
            width: 52, height: 28, borderRadius: 100,
            background: 'var(--landing-gold)', border: 'none',
            cursor: 'pointer', position: 'relative', transition: 'background 0.3s',
          }}
        >
          <span style={{
            position: 'absolute', top: 4,
            left: isAnnual ? 28 : 4,
            width: 20, height: 20, borderRadius: '50%',
            background: '#0c0d0f',
            transition: 'left 0.3s ease',
          }} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: '0.9rem',
            color: isAnnual ? 'var(--landing-text)' : 'var(--landing-text-muted)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: isAnnual ? 600 : 400,
          }}>Yıllık</span>
          <span style={{
            background: 'rgba(74, 222, 128, 0.15)', color: 'var(--landing-green)',
            fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px',
            borderRadius: 100, fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>%20 TASARRUF</span>
        </div>
      </div>

      {/* Kart */}
      <div style={{
        background: 'var(--landing-gold-dim)',
        border: '2px solid var(--landing-gold)',
        borderRadius: 20, padding: 36,
        textAlign: 'center', position: 'relative',
      }}>
        {/* Badge */}
        <div style={{
          position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--landing-gold)', color: '#0c0d0f',
          padding: '4px 16px', borderRadius: 100, fontSize: '0.72rem',
          fontWeight: 700, textTransform: 'uppercase',
          whiteSpace: 'nowrap', fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>14 Gün Ücretsiz Deneme</div>

        <h3 style={{
          fontFamily: "'Fraunces', serif", fontWeight: 700,
          fontSize: '1.3rem', margin: '8px 0 4px',
          color: 'var(--landing-text)',
        }}>AltÜst</h3>
        <p style={{
          color: 'var(--landing-text-muted)', fontSize: '0.85rem',
          margin: '0 0 20px', fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>Tüm özellikler, sınırsız kullanıcı</p>

        {/* Fiyat */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, justifyContent: 'center' }}>
            <span style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: '3.2rem', color: 'var(--landing-gold)',
            }}>
              ₺{price.toLocaleString('tr-TR')}
            </span>
            <span style={{
              color: 'var(--landing-text-muted)', fontSize: '0.9rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>/ay</span>
          </div>

          {isAnnual ? (
            <p style={{
              color: 'var(--landing-text-muted)', fontSize: '0.8rem',
              margin: '4px 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Yıllık ₺{ANNUAL_TOTAL.toLocaleString('tr-TR')} olarak faturalandırılır
              &nbsp;·&nbsp;
              <span style={{ color: 'var(--landing-green)' }}>
                ₺{saving.toLocaleString('tr-TR')} tasarruf
              </span>
            </p>
          ) : (
            <p style={{
              color: 'var(--landing-text-muted)', fontSize: '0.8rem',
              margin: '4px 0 0', fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Aylık faturalandırılır
              &nbsp;·&nbsp;
              <span style={{ color: 'var(--landing-text-muted)' }}>
                Yıllığa geçerek ₺{saving.toLocaleString('tr-TR')} tasarruf et
              </span>
            </p>
          )}
        </div>

        {/* Ayırıcı */}
        <div style={{
          borderTop: '1px solid var(--landing-border)',
          margin: '24px 0',
        }} />

        {/* Özellikler */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
          marginBottom: 28, textAlign: 'left',
        }}>
          {features.map((feat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={15} style={{ color: 'var(--landing-gold)', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.82rem', color: 'var(--landing-text-muted)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>{feat}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="/login" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          width: '100%', padding: '16px 32px', borderRadius: 12,
          background: 'var(--landing-gold)', color: '#0c0d0f',
          fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: 'all 0.3s ease',
          boxSizing: 'border-box',
        }}>
          14 Gün Ücretsiz Deneyin <ArrowRight size={18} />
        </a>

        <p style={{
          color: 'var(--landing-text-muted)', fontSize: '0.75rem',
          marginTop: 12, fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Kredi kartı gerektirmez · İstediğiniz zaman iptal edin
        </p>
      </div>
    </div>
  )
}
