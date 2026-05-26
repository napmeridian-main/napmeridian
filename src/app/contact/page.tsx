import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — NapMeridian Exim Consultancy',
  description: 'Book a free consultation with NapMeridian. EXIM advisory for Indian SMEs, exporters and importers.',
};

export default function Contact() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Let&apos;s talk</span>
          <h1>
            Tell us what you ship.<br />
            We&apos;ll tell you <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>what&apos;s next.</em>
          </h1>
          <p className="lede">
            A short call — usually 30 minutes — is enough to map your situation against the right scope of work. No upsell, no obligation, and no charge for the first call.
          </p>
          <div className="page-hero-meta">
            <div className="item"><span className="k">Phone</span><span className="v">+91-XXXXX XXXXX</span></div>
            <div className="item"><span className="k">Email</span><span className="v">info@napmeridian.com</span></div>
            <div className="item"><span className="k">Hours</span><span className="v">Mon–Sat · 10–7 IST</span></div>
            <div className="item"><span className="k">Reply within</span><span className="v">1 business day</span></div>
          </div>
        </div>
      </section>

      {/* FORM + ASIDE */}
      <section className="section" id="form">
        <div className="container">
          <div className="contact-layout">
            <div>
              <span className="eyebrow">Send us a brief</span>
              <h2 style={{ marginTop: '18px' }}>Get in touch.</h2>
              <p style={{ color: 'var(--muted)', maxWidth: '46ch', marginBottom: '32px' }}>
                Share a little about your business and what you need help with. The right specialist on our team will respond within one business day.
              </p>
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <span className="eyebrow">Direct lines</span>
              <h3 style={{ marginTop: '16px' }}>
                Or reach us <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>directly.</em>
              </h3>
              <p style={{ color: 'var(--muted)', marginTop: '8px' }}>Prefer email or phone? We&apos;re easy to reach.</p>

              <ul className="contact-list">
                <li>
                  <span className="ico">📍</span>
                  <div>
                    <div className="k">Office</div>
                    <div className="v">[Full Address Line 1]<br />[Full Address Line 2]<br />India — [PIN]</div>
                  </div>
                </li>
                <li>
                  <span className="ico">📞</span>
                  <div>
                    <div className="k">Phone</div>
                    <div className="v">+91-XXXXX XXXXX</div>
                  </div>
                </li>
                <li>
                  <span className="ico">✉️</span>
                  <div>
                    <div className="k">Email</div>
                    <div className="v">info@napmeridian.com</div>
                  </div>
                </li>
                <li>
                  <span className="ico">🌐</span>
                  <div>
                    <div className="k">Website</div>
                    <div className="v">www.napmeridian.com</div>
                  </div>
                </li>
                <li>
                  <span className="ico">🕐</span>
                  <div>
                    <div className="k">Hours</div>
                    <div className="v">Mon – Sat · 10:00 – 19:00 IST<br />Closed on Indian public holidays</div>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>Follow us</div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                  {['LinkedIn', 'Instagram', 'Facebook', 'YouTube'].map(s => (
                    <Link key={s} href="#" style={{ borderBottom: '1px solid var(--line-strong)', paddingBottom: '2px' }}>{s}</Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* OFFICE PHOTO + MAP */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <div
            className="contact-map-split"
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '12px', borderRadius: 'var(--radius)', overflow: 'hidden' }}
          >
            <div
              style={{
                height: '420px',
                backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1600&q=80&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', left: '24px', top: '24px', background: 'var(--paper)', padding: '12px 16px', borderRadius: '999px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                Office · India
              </div>
              <div style={{ position: 'absolute', left: '24px', bottom: '24px', right: '24px', color: '#fff' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', lineHeight: '1.1' }}>Drop by the office.</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', opacity: '.85', marginTop: '8px' }}>By appointment · Mon – Sat · 10:00 – 19:00 IST</div>
              </div>
            </div>
            <div style={{
              height: '420px',
              position: 'relative',
              background: 'linear-gradient(135deg, var(--paper-2) 0%, var(--paper-3) 100%)',
              backgroundImage: 'repeating-linear-gradient(0deg, var(--line) 0px, var(--line) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, var(--line) 0px, var(--line) 1px, transparent 1px, transparent 40px)',
              border: '1px solid var(--line)',
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--accent)', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: '-12px', border: '1px solid var(--accent)', borderRadius: '50%', animation: 'bob 2s ease-in-out infinite' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>[ Google Maps embed ]</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', padding: '0 24px', textAlign: 'center' }}>NapMeridian HQ</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
