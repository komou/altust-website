import {
  Users, Package, ShoppingCart, ShoppingBag, Landmark, FileText, BarChart3, Plug,
  CheckCircle2, ArrowRight, Star, ChevronDown, Mail, Phone, MapPin, Shield,
  GitBranch, Zap, Clock,
} from 'lucide-react'
import MobileMenu from '@/components/landing/MobileMenu'
import PricingToggle from '@/components/landing/PricingToggle'

/* ===== VERI ===== */

const features = [
  {
    icon: Users,
    title: 'Cari Hesap Yönetimi',
    desc: 'Müşteri ve tedarikçi hesaplarınızı detaylıca takip edin. Risk limitleri, şube yönetimi ve yetkili kişi bilgileri tek panelde.',
  },
  {
    icon: Package,
    title: 'Stok & Depo Takibi',
    desc: 'Ürünlerinizi birim bazında yönetin, depo kontrolünü sağlayın. Barkod entegrasyonu ve anlık stok durumu.',
  },
  {
    icon: ShoppingCart,
    title: 'Satış Yönetimi',
    desc: 'Sipariş, irsaliye ve fatura süreçlerinizi uçtan uca yönetin. e-Fatura ve e-Arşiv entegrasyonu dahil.',
  },
  {
    icon: ShoppingBag,
    title: 'Alım Yönetimi',
    desc: 'Tedarikçi teklifleri, satın alma siparişleri ve alım faturaları tek bir yerden kontrol altında.',
  },
  {
    icon: Landmark,
    title: 'Finans & Nakit Yönetimi',
    desc: 'Kasa, banka hesapları, kredi kartları, POS cihazları, çek ve senet takibinizi kolayca yapın.',
  },
  {
    icon: FileText,
    title: 'e-Belge Entegrasyonu',
    desc: 'e-Fatura, e-Arşiv ve e-İrsaliye işlemlerinizi doğrudan platform üzerinden gerçekleştirin.',
  },
  {
    icon: BarChart3,
    title: 'Raporlama & Analiz',
    desc: 'Finansal raporlar, bilanço analizleri ve stok raporları ile işletmenizin nabzını tutun.',
  },
  {
    icon: Plug,
    title: 'Entegrasyonlar',
    desc: 'Banka, e-ticaret platformları ve mali müşavir bağlantıları ile iş süreçlerinizi hızlandırın.',
  },
]

const steps = [
  { num: '01', title: 'Hesap Oluşturun', desc: 'E-posta adresinizle saniyeler içinde kaydolun.' },
  { num: '02', title: 'Firma Bilgilerinizi Girin', desc: 'Şirket bilgilerinizi ve vergi detaylarınızı ekleyin.' },
  { num: '03', title: 'Verilerinizi Aktarın', desc: 'Mevcut verilerinizi kolayca içe aktarın veya sıfırdan başlayın.' },
  { num: '04', title: 'Kullanmaya Başlayın', desc: 'Tüm modüllere hemen erişin, işletmenizi dijitale taşıyın.' },
]


const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    company: 'Yılmaz Ticaret',
    text: 'AltÜst ile muhasebe süreçlerimiz inanılmaz kolaylaştı. Özellikle cari hesap takibi ve e-fatura entegrasyonu çok pratik.',
    rating: 5,
  },
  {
    name: 'Elif Kaya',
    company: 'Kaya Tekstil',
    text: 'Stok ve depo yönetimi modülü tam ihtiyacımız olan şeydi. Artık Excel tablolarıyla uğraşmıyoruz.',
    rating: 5,
  },
  {
    name: 'Mehmet Demir',
    company: 'Demir İnşaat',
    text: 'Finans modülü ve raporlama özellikleri sayesinde nakit akışımızı çok daha iyi yönetiyoruz.',
    rating: 5,
  },
]

const faqs = [
  {
    q: 'Ücretsiz deneme nasıl çalışıyor?',
    a: '14 gün boyunca tüm özelliklere sınırsız erişim sağlarsınız. Kredi kartı bilgisi gerektirmez. Deneme süresi sonunda planınızı aktifleştirerek kullanmaya devam edebilirsiniz.',
  },
  {
    q: 'Verilerim güvende mi?',
    a: 'Kesinlikle. Verileriniz Supabase altyapısında, Row Level Security (RLS) ile korunur. Her firma yalnızca kendi verilerine erişebilir.',
  },
  {
    q: 'e-Fatura entegrasyonu nasıl çalışıyor?',
    a: 'GİB onaylı entegratör bağlantımız sayesinde e-Fatura, e-Arşiv ve e-İrsaliye işlemlerinizi doğrudan platform üzerinden gerçekleştirebilirsiniz.',
  },
  {
    q: 'Mevcut verilerimi aktarabilir miyim?',
    a: 'Evet. Excel ve CSV formatında toplu veri aktarımı yapabilirsiniz. Ayrıca diğer muhasebe yazılımlarından geçiş desteği sunuyoruz.',
  },
  {
    q: 'Kaç kullanıcı ekleyebilirim?',
    a: 'AltÜst tek plan ile çalışır ve sınırsız kullanıcı desteği sunar. Ekibinizdeki herkes platforma erişebilir.',
  },
  {
    q: 'Mobil cihazlardan erişebilir miyim?',
    a: 'AltÜst tamamen responsive tasarıma sahiptir. Herhangi bir tarayıcı üzerinden mobil cihazlardan rahatlıkla erişebilirsiniz.',
  },
]

const whyUs = [
  {
    icon: GitBranch,
    title: 'Çoklu Şube Desteği',
    desc: 'Tek panelden tüm şubelerinizi yönetin, şube bazlı raporlar alın.',
  },
  {
    icon: Shield,
    title: 'Rol Tabanlı Yetkilendirme',
    desc: 'Ekip üyelerine özel erişim hakları tanımlayın, veri güvenliğini sağlayın.',
  },
  {
    icon: Zap,
    title: 'Gerçek Zamanlı Raporlar',
    desc: 'Anlık finansal durum takibi, canlı dashboard ve otomatik bildirimler.',
  },
  {
    icon: Clock,
    title: 'Hızlı Kurulum',
    desc: '5 dakikada hesabınızı oluşturun, verilerinizi aktarın ve kullanmaya başlayın.',
  },
]

/* ===== STILLER ===== */

const s = {
  page: {
    background: 'var(--landing-bg)',
    color: 'var(--landing-text)',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    minHeight: '100vh',
    overflowX: 'hidden' as const,
  },
  section: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '100px 24px',
  },
  sectionTitle: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 900,
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    textAlign: 'center' as const,
    marginBottom: 16,
    color: 'var(--landing-text)',
  },
  sectionSubtitle: {
    textAlign: 'center' as const,
    color: 'var(--landing-text-muted)',
    fontSize: '1.05rem',
    maxWidth: 600,
    margin: '0 auto 60px',
    lineHeight: 1.7,
  },
  goldText: {
    color: 'var(--landing-gold)',
  },
  card: {
    background: 'var(--landing-card-bg)',
    border: '1px solid var(--landing-border)',
    borderRadius: 20,
    padding: 32,
    transition: 'all 0.3s ease',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '14px 32px',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    cursor: 'pointer',
    border: 'none',
  },
  btnPrimary: {
    background: 'var(--landing-gold)',
    color: '#0c0d0f',
  },
  btnGhost: {
    background: 'transparent',
    color: 'var(--landing-text)',
    border: '1px solid var(--landing-border)',
  },
}

/* ===== SAYFA ===== */

export default function LandingPage() {
  return (
    <div style={s.page} className="landing-page">

      {/* ===== NAV ===== */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(12,13,15,0.85)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--landing-border)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>
          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'var(--landing-gold)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: '0.9rem', color: '#0c0d0f',
            }}>AÜ</div>
            <span style={{
              fontFamily: "'Fraunces', serif", fontWeight: 700,
              fontSize: '1.2rem', color: 'var(--landing-text)',
            }}>Alt<span style={s.goldText}>Üst</span></span>
          </a>

          {/* Desktop Links */}
          <div className="desktop-nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['Özellikler', 'Nasıl Çalışır', 'Fiyatlandırma', 'İletişim'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ö/g, 'o').replace(/ı/g, 'i').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ /g, '-')}`}
                style={{
                  color: 'var(--landing-text-muted)', textDecoration: 'none',
                  fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s',
                }}
              >{label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="desktop-nav-cta" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="https://app.altust.com.tr/login" style={{
              color: 'var(--landing-text-muted)', textDecoration: 'none',
              fontSize: '0.88rem', fontWeight: 500,
            }}>Giriş Yap</a>
            <a href="https://app.altust.com.tr/login" style={{
              ...s.btn, ...s.btnPrimary,
              padding: '10px 22px', fontSize: '0.85rem',
            }}>Ücretsiz Deneyin</a>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section style={{
        paddingTop: 160, paddingBottom: 80,
        textAlign: 'center', position: 'relative',
        backgroundImage: `
          radial-gradient(rgba(201,162,74,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          {/* Badge */}
          <div className="landing-fade-up landing-fade-up-1" style={{
            display: 'inline-flex', gap: 16, padding: '8px 20px',
            borderRadius: 100, border: '1px solid var(--landing-border)',
            background: 'var(--landing-card-bg)', marginBottom: 32,
            fontSize: '0.78rem', color: 'var(--landing-text-muted)',
          }}>
            <span>✓ Bulut Tabanlı</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>✓ Güvenli</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>✓ Kolay Kullanım</span>
          </div>

          {/* Heading */}
          <h1 className="landing-fade-up landing-fade-up-2" style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            lineHeight: 1.08, margin: '0 0 24px',
            color: 'var(--landing-text)',
          }}>
            Defteri Kapatın.<br />
            <span style={s.goldText}>Dijitale Geçin.</span>
          </h1>

          {/* Subtitle */}
          <p className="landing-fade-up landing-fade-up-3" style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--landing-text-muted)',
            lineHeight: 1.7, maxWidth: 560, margin: '0 auto 40px',
          }}>
            KOBİ&apos;ler için tasarlanmış modern ön muhasebe ve finans yönetimi platformu.
            Siz işinize bakın, gerisini AltÜst halletsin.
          </p>

          {/* CTAs */}
          <div className="landing-fade-up landing-fade-up-4" style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
          }}>
            <a href="https://app.altust.com.tr/login" style={{ ...s.btn, ...s.btnPrimary }}>
              Ücretsiz Deneyin <ArrowRight size={18} />
            </a>
            <a href="#ozellikler" style={{ ...s.btn, ...s.btnGhost }}>
              Özellikleri Keşfet
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ borderTop: '1px solid var(--landing-border)', borderBottom: '1px solid var(--landing-border)' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '48px 24px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }} className="stats-grid">
          {[
            { value: '500+', label: 'Aktif İşletme' },
            { value: '1M+', label: 'İşlem Kaydı' },
            { value: '%99.9', label: 'Uptime Garantisi' },
            { value: '7/24', label: 'Destek Hattı' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
                color: 'var(--landing-gold)', marginBottom: 4,
              }}>{stat.value}</div>
              <div style={{ color: 'var(--landing-text-muted)', fontSize: '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ÖZELLIKLER ===== */}
      <section id="ozellikler" style={s.section}>
        <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
          ÖZELLİKLER
        </p>
        <h2 style={s.sectionTitle}>İşinizi Büyütecek <span style={s.goldText}>Araçlar</span></h2>
        <p style={s.sectionSubtitle}>
          Cari hesaptan stok takibine, e-faturadan finansal raporlamaya kadar ihtiyacınız olan her şey tek platformda.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20,
        }} className="features-grid">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} style={{
                ...s.card, position: 'relative', overflow: 'hidden',
              }}>
                {/* Köşe Numarası */}
                <span style={{
                  position: 'absolute', top: 16, right: 20,
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: '3.5rem', opacity: 0.04, color: 'var(--landing-text)',
                  lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'var(--landing-gold-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={24} style={{ color: 'var(--landing-gold)' }} />
                </div>

                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: '1.2rem', marginBottom: 10,
                }}>{f.title}</h3>
                <p style={{
                  color: 'var(--landing-text-muted)', fontSize: '0.9rem',
                  lineHeight: 1.7, margin: 0,
                }}>{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== NASIL ÇALIŞIR ===== */}
      <section id="nasil-calisir" style={{
        ...s.section, background: 'var(--landing-bg2)',
        borderTop: '1px solid var(--landing-border)',
        borderBottom: '1px solid var(--landing-border)',
        maxWidth: '100%', padding: '100px 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
            BAŞLANGIÇ
          </p>
          <h2 style={s.sectionTitle}>Nasıl <span style={s.goldText}>Çalışır?</span></h2>
          <p style={s.sectionSubtitle}>
            4 basit adımda işletmenizi dijitale taşıyın.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
          }} className="howit-grid">
            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, position: 'relative' }}>
                  {/* Vertical line */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: 'absolute', left: 19, top: 44, bottom: -4,
                      width: 2, background: 'linear-gradient(to bottom, var(--landing-gold-dim), transparent)',
                    }} />
                  )}
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                    background: 'var(--landing-gold-dim)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: '0.85rem', color: 'var(--landing-gold)',
                  }}>{step.num}</div>
                  <div style={{ paddingBottom: 36 }}>
                    <h4 style={{
                      fontFamily: "'Fraunces', serif", fontWeight: 700,
                      fontSize: '1.1rem', marginBottom: 6, margin: '2px 0 6px',
                    }}>{step.title}</h4>
                    <p style={{
                      color: 'var(--landing-text-muted)', fontSize: '0.88rem',
                      lineHeight: 1.6, margin: 0,
                    }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mockup Card */}
            <div style={{
              ...s.card, background: 'var(--landing-bg3)',
              padding: 0, overflow: 'hidden',
            }}>
              {/* Mockup Header */}
              <div style={{
                padding: '16px 24px', borderBottom: '1px solid var(--landing-border)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#facc15' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ade80' }} />
                <span style={{
                  marginLeft: 12, fontSize: '0.75rem',
                  color: 'var(--landing-text-muted)',
                }}>altust.app/dashboard</span>
              </div>
              {/* Mockup Content */}
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--landing-text-muted)', marginBottom: 2 }}>TOPLAM CARİ</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1.8rem', color: 'var(--landing-gold)' }}>2,847</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--landing-text-muted)', marginBottom: 2 }}>AYLIK CİRO</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1.8rem', color: 'var(--landing-green)' }}>₺1.2M</div>
                  </div>
                </div>
                {/* Mini Table */}
                {[
                  { name: 'E-Fatura #2847', status: 'Onaylandı', color: 'var(--landing-green)' },
                  { name: 'İrsaliye #1293', status: 'Yolda', color: 'var(--landing-gold)' },
                  { name: 'Sipariş #0891', status: 'Bekliyor', color: 'var(--landing-yellow)' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 0',
                    borderTop: i === 0 ? '1px solid var(--landing-border)' : 'none',
                    borderBottom: '1px solid var(--landing-border)',
                  }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--landing-text)' }}>{row.name}</span>
                    <span style={{
                      fontSize: '0.72rem', padding: '3px 10px', borderRadius: 6,
                      background: `${row.color}15`, color: row.color,
                    }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEDEN ALTÜST ===== */}
      <section style={s.section}>
        <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
          AVANTAJLAR
        </p>
        <h2 style={s.sectionTitle}>Neden <span style={s.goldText}>AltÜst?</span></h2>
        <p style={s.sectionSubtitle}>
          Sadece bir muhasebe yazılımı değil, işletmenizin dijital dönüşüm ortağı.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
        }} className="why-grid">
          {whyUs.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} style={{
                ...s.card, textAlign: 'center',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'var(--landing-gold-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={26} style={{ color: 'var(--landing-gold)' }} />
                </div>
                <h4 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: '1.05rem', marginBottom: 8, margin: '0 0 8px',
                }}>{item.title}</h4>
                <p style={{
                  color: 'var(--landing-text-muted)', fontSize: '0.85rem',
                  lineHeight: 1.6, margin: 0,
                }}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== FİYATLANDIRMA ===== */}
      <section id="fiyatlandirma" style={{
        ...s.section, background: 'var(--landing-bg2)',
        maxWidth: '100%', padding: '100px 24px',
        borderTop: '1px solid var(--landing-border)',
        borderBottom: '1px solid var(--landing-border)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
            FİYATLANDIRMA
          </p>
          <h2 style={s.sectionTitle}>Tek Plan, <span style={s.goldText}>Sınırsız Erişim</span></h2>
          <p style={s.sectionSubtitle}>
            Tüm özellikler, sınırsız kullanıcı. Yıllık ödemede %20 tasarruf edin.
          </p>

          <PricingToggle />
        </div>
      </section>

      {/* ===== MÜŞTERİ YORUMLARI ===== */}
      <section style={s.section}>
        <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
          REFERANSLAR
        </p>
        <h2 style={s.sectionTitle}>Müşterilerimiz <span style={s.goldText}>Ne Diyor?</span></h2>
        <p style={s.sectionSubtitle}>
          AltÜst kullanan işletme sahiplerinin deneyimleri.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={s.card}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} style={{ color: 'var(--landing-gold)', fill: 'var(--landing-gold)' }} />
                ))}
              </div>
              <p style={{
                fontSize: '0.92rem', lineHeight: 1.7,
                color: 'var(--landing-text)', marginBottom: 20, margin: '0 0 20px',
                fontStyle: 'italic',
              }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--landing-gold-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: '0.85rem', color: 'var(--landing-gold)',
                }}>{t.name.charAt(0)}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--landing-text-muted)', fontSize: '0.78rem' }}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SSS ===== */}
      <section style={{
        ...s.section, background: 'var(--landing-bg2)',
        maxWidth: '100%', padding: '100px 24px',
        borderTop: '1px solid var(--landing-border)',
        borderBottom: '1px solid var(--landing-border)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
            SSS
          </p>
          <h2 style={s.sectionTitle}>Sıkça Sorulan <span style={s.goldText}>Sorular</span></h2>
          <p style={{ ...s.sectionSubtitle, marginBottom: 48 }}>
            Merak ettiğiniz soruların cevapları burada.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                ...s.card, padding: 0, cursor: 'pointer',
              }}>
                <summary style={{
                  padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', listStyle: 'none', fontWeight: 600,
                  fontSize: '0.95rem',
                }}>
                  {faq.q}
                  <ChevronDown size={18} style={{ color: 'var(--landing-text-muted)', flexShrink: 0 }} />
                </summary>
                <div style={{
                  padding: '0 24px 20px',
                  color: 'var(--landing-text-muted)', fontSize: '0.88rem',
                  lineHeight: 1.7,
                }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANDI ===== */}
      <section style={{
        padding: '100px 24px', textAlign: 'center',
        background: `
          radial-gradient(ellipse at 70% 20%, rgba(201,162,74,0.1), transparent 60%),
          var(--landing-bg)
        `,
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            ...s.sectionTitle, marginBottom: 16,
          }}>
            Hemen <span style={s.goldText}>Ücretsiz</span> Deneyin
          </h2>
          <p style={{
            color: 'var(--landing-text-muted)', fontSize: '1.05rem',
            lineHeight: 1.7, marginBottom: 36,
          }}>
            İşletmenizi dijitale taşımak için daha iyi bir zaman yok.
            Kredi kartı gerektirmez, 14 gün ücretsiz.
          </p>
          <a href="https://app.altust.com.tr/login" style={{
            ...s.btn, ...s.btnPrimary,
            padding: '16px 40px', fontSize: '1.05rem',
            boxShadow: '0 4px 20px rgba(201,162,74,0.25)',
          }}>
            Ücretsiz Hesap Oluşturun <ArrowRight size={20} />
          </a>
          <p style={{
            color: 'var(--landing-text-muted)', fontSize: '0.78rem', marginTop: 16,
          }}>
            ✓ Kredi kartı gerektirmez &nbsp; ✓ 14 gün ücretsiz &nbsp; ✓ İstediğiniz zaman iptal
          </p>
        </div>
      </section>

      {/* ===== İLETİŞİM ===== */}
      <section id="iletisim" style={{
        ...s.section, background: 'var(--landing-bg2)',
        maxWidth: '100%', padding: '100px 24px',
        borderTop: '1px solid var(--landing-border)',
        borderBottom: '1px solid var(--landing-border)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ ...s.sectionSubtitle, marginBottom: 8, fontSize: '0.82rem', color: 'var(--landing-gold)' }}>
            İLETİŞİM
          </p>
          <h2 style={s.sectionTitle}>Bizimle <span style={s.goldText}>İletişime Geçin</span></h2>
          <p style={s.sectionSubtitle}>
            Sorularınız mı var? Size yardımcı olmaktan memnuniyet duyarız.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40,
          }} className="contact-grid">
            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                { icon: Mail, label: 'E-posta', value: 'info@altust.app' },
                { icon: Phone, label: 'Telefon', value: '+90 (212) 000 00 00' },
                { icon: MapPin, label: 'Adres', value: 'İstanbul, Türkiye' },
              ].map((info, i) => {
                const Icon = info.icon
                return (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: 'var(--landing-gold-dim)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={20} style={{ color: 'var(--landing-gold)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--landing-text-muted)', marginBottom: 2 }}>{info.label}</div>
                      <div style={{ fontWeight: 500, fontSize: '0.95rem' }}>{info.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Form (static — no server action) */}
            <div style={{ ...s.card, background: 'var(--landing-bg3)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--landing-text-muted)', marginBottom: 6, display: 'block' }}>Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="Adınız"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 12,
                      background: 'var(--landing-bg2)', border: '1px solid var(--landing-border)',
                      color: 'var(--landing-text)', fontSize: '0.9rem', outline: 'none',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--landing-text-muted)', marginBottom: 6, display: 'block' }}>E-posta</label>
                  <input
                    type="email"
                    placeholder="ornek@sirket.com"
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 12,
                      background: 'var(--landing-bg2)', border: '1px solid var(--landing-border)',
                      color: 'var(--landing-text)', fontSize: '0.9rem', outline: 'none',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: '0.78rem', color: 'var(--landing-text-muted)', marginBottom: 6, display: 'block' }}>Konu</label>
                <select style={{
                  width: '100%', padding: '12px 16px', borderRadius: 12,
                  background: 'var(--landing-bg2)', border: '1px solid var(--landing-border)',
                  color: 'var(--landing-text)', fontSize: '0.9rem', outline: 'none',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  <option value="">Bir konu seçin</option>
                  <option value="demo">Demo Talebi</option>
                  <option value="fiyat">Fiyat Bilgisi</option>
                  <option value="destek">Teknik Destek</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: '0.78rem', color: 'var(--landing-text-muted)', marginBottom: 6, display: 'block' }}>Mesaj</label>
                <textarea
                  placeholder="Mesajınızı yazın..."
                  rows={4}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 12,
                    background: 'var(--landing-bg2)', border: '1px solid var(--landing-border)',
                    color: 'var(--landing-text)', fontSize: '0.9rem', outline: 'none',
                    resize: 'vertical', fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                />
              </div>
              <button style={{
                ...s.btn, ...s.btnPrimary, width: '100%', justifyContent: 'center',
              }}>
                Mesaj Gönder <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        borderTop: '1px solid var(--landing-border)',
        padding: '60px 24px 32px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40,
            marginBottom: 48,
          }} className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'var(--landing-gold)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Fraunces', serif", fontWeight: 900,
                  fontSize: '0.9rem', color: '#0c0d0f',
                }}>AÜ</div>
                <span style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: '1.2rem', color: 'var(--landing-text)',
                }}>Alt<span style={s.goldText}>Üst</span></span>
              </div>
              <p style={{
                color: 'var(--landing-text-muted)', fontSize: '0.85rem',
                lineHeight: 1.7, maxWidth: 280,
              }}>
                Türkiye&apos;nin modern ön muhasebe ve finans yönetimi platformu.
                KOBİ&apos;ler için tasarlandı.
              </p>
            </div>

            {/* Özellikler */}
            <div>
              <h4 style={{
                fontSize: '0.82rem', fontWeight: 600, color: 'var(--landing-text)',
                marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>Özellikler</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Cari Hesaplar', 'Stok Takibi', 'Satış Yönetimi', 'Finans', 'e-Fatura', 'Raporlar'].map((link) => (
                  <a key={link} href="#ozellikler" style={{
                    color: 'var(--landing-text-muted)', textDecoration: 'none',
                    fontSize: '0.85rem', transition: 'color 0.2s',
                  }}>{link}</a>
                ))}
              </div>
            </div>

            {/* Şirket */}
            <div>
              <h4 style={{
                fontSize: '0.82rem', fontWeight: 600, color: 'var(--landing-text)',
                marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>Şirket</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Hakkımızda', 'Blog', 'Kariyer', 'İletişim', 'Destek'].map((link) => (
                  <a key={link} href="#" style={{
                    color: 'var(--landing-text-muted)', textDecoration: 'none',
                    fontSize: '0.85rem', transition: 'color 0.2s',
                  }}>{link}</a>
                ))}
              </div>
            </div>

            {/* Yasal */}
            <div>
              <h4 style={{
                fontSize: '0.82rem', fontWeight: 600, color: 'var(--landing-text)',
                marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>Yasal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Gizlilik Politikası', 'KVKK', 'Kullanım Şartları', 'Çerez Politikası'].map((link) => (
                  <a key={link} href="#" style={{
                    color: 'var(--landing-text-muted)', textDecoration: 'none',
                    fontSize: '0.85rem', transition: 'color 0.2s',
                  }}>{link}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: '1px solid var(--landing-border)', paddingTop: 24,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}>
            <span style={{ color: 'var(--landing-text-muted)', fontSize: '0.78rem' }}>
              © 2026 AltÜst. Tüm hakları saklıdır.
            </span>
            <span style={{ color: 'var(--landing-text-muted)', fontSize: '0.78rem' }}>
              Türkiye&apos;de ❤️ ile yapıldı.
            </span>
          </div>
        </div>
      </footer>

      {/* ===== RESPONSIVE CSS ===== */}
      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .howit-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary svg { transform: rotate(180deg); }
        details summary svg { transition: transform 0.2s ease; }
      `}</style>
    </div>
  )
}
