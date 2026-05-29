import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries — NapMeridian Exim Consultancy',
  description: 'The nine sectors NapMeridian serves — agriculture, spices, textiles, engineering, pharmaceuticals, handicrafts, chemicals, FMCG and e-commerce.',
};

const industries = [
  {
    n: '01',
    title: 'Agriculture & Food Products',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80&auto=format&fit=crop',
    desc: 'Grains, pulses, oilseeds, processed food. APEDA, FSSAI & phyto-sanitary support; cold-chain documentation; buyer-spec compliance.',
  },
  {
    n: '02',
    title: 'Spices & Commodities',
    img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80&auto=format&fit=crop',
    desc: 'Spices Board RCMC, quality testing protocols, traceable origin documentation. Strong experience with Kerala & Andhra exporters.',
  },
  {
    n: '03',
    title: 'Textiles & Garments',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
    desc: 'RoSCTL, AEPC, TEXPROCIL RCMC, country-of-origin under FTAs. Made-ups, home textiles, ready-made garments.',
  },
  {
    n: '04',
    title: 'Engineering Goods',
    img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80&auto=format&fit=crop',
    desc: 'EEPC India RCMC, EPCG & Advance Authorization, component classification, anti-dumping advisory.',
  },
  {
    n: '05',
    title: 'Pharmaceuticals',
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=80&auto=format&fit=crop',
    desc: 'Pharmexcil RCMC, CDSCO, country-specific regulatory dossiers, free-sale & non-prohibition certificates.',
  },
  {
    n: '06',
    title: 'Handicrafts',
    img: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=900&q=80&auto=format&fit=crop',
    desc: 'EPCH RCMC, GI-tag documentation, artisan-cluster sourcing certificates, cultural-export verification.',
  },
  {
    n: '07',
    title: 'Chemicals',
    img: 'https://images.unsplash.com/photo-1581093458791-9d42cc05b8e1?w=900&q=80&auto=format&fit=crop',
    desc: 'CHEMEXCIL RCMC, REACH/SCOMET classification, hazmat documentation, MSDS & safety packet support.',
  },
  {
    n: '08',
    title: 'FMCG Products',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop',
    desc: 'Personal care, packaged foods, cleaning products. Label compliance, BIS, halal/kosher certification.',
  },
  {
    n: '09',
    title: 'E-commerce Exporters',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80&auto=format&fit=crop',
    desc: 'D2C sellers on Amazon Global, eBay, Etsy. Courier-mode export documentation, payment-platform reconciliation.',
  },
];

const ftas = [
  { type: 'FTA', name: 'ASEAN' },
  { type: 'CECA', name: 'Singapore' },
  { type: 'CEPA', name: 'Japan' },
  { type: 'CEPA', name: 'UAE' },
  { type: 'CEPA', name: 'South Korea' },
  { type: 'ECTA', name: 'Australia' },
  { type: 'FTA', name: 'SAFTA' },
  { type: 'PTA', name: 'Mercosur' },
  { type: 'CECPA', name: 'Mauritius' },
  { type: 'FTA', name: 'Sri Lanka' },
  { type: 'PTA', name: 'Chile' },
  { type: '+ more', name: 'EFTA, MEFTA…' },
];

export default function Industries() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Industries we serve</span>
          <h1>
            Sector specialists for{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>nine</em>{' '}
            categories of Indian export.
          </h1>
          <p className="lede">
            Each industry has its own HS codes, its own FTA quirks, its own buyer expectations. We staff our team accordingly — so when you call, you reach someone who&apos;s already shipped your category.
          </p>
          <div className="page-hero-meta">
            <div className="item"><div className="k">Sectors</div><div className="v">9</div></div>
            <div className="item"><div className="k">Trade agreements</div><div className="v">18</div></div>
            <div className="item"><div className="k">Export markets</div><div className="v">40+</div></div>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="section">
        <div className="container">
          <div className="ind-grid">
            {industries.map(({ n, title, img, desc }) => (
              <div key={n} className="ind-card">
                <div className="ind-photo" style={{ backgroundImage: `url('${img}')` }} />
                <div className="ind-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '48px', maxWidth: '48ch', color: 'var(--muted)' }}>
            Don&apos;t see your sector?{' '}
            <Link href="/contact" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--accent)', paddingBottom: '1px' }}>
              Get in touch
            </Link>{' '}
            — chances are we&apos;ve shipped something adjacent.
          </p>
        </div>
      </section>

      {/* FTA SECTION */}
      <section className="section-tight" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where Indian exporters ship to</span>
            <h2 style={{ marginTop: '14px' }}>18 trade agreements, 40+ markets.</h2>
            <p className="lede">
              We file Certificates of Origin under every FTA and CECA India is currently signatory to.
            </p>
          </div>

          <div className="fta-grid">
            {ftas.map(({ type, name }, i) => (
              <div key={i} className="fta-item">
                <div className="k">{type}</div>
                <div className="v" style={i === 11 ? { color: 'var(--muted)' } : undefined}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>Industry-specific advice</span>
          <h2 style={{ marginTop: '16px' }}>
            Your sector has its own <em>quirks.</em><br />We probably already know them.
          </h2>
          <p className="lede">
            Tell us what you ship — we&apos;ll walk you through the regulatory map, the relevant FTAs, and the incentives most exporters in your category miss.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact">Book a consultation <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost" href="/services" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>See our full scope</Link>
          </div>
        </div>
      </section>
    </>
  );
}
