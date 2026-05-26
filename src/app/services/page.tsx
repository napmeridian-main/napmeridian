import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — NapMeridian Exim Consultancy',
  description: 'The full scope of NapMeridian\'s EXIM consultancy services: registrations, DGFT compliance, documentation, certificates of origin, incentives, training and more.',
};

const services = [
  {
    id: 'setup',
    num: '01 / Business Setup',
    title: 'Business Setup & Registration',
    blurb: 'Everything you need to legally trade across borders — registered, certified, and verified with the right authorities.',
    items: [
      { name: 'Import Export Code (IEC)', extra: 'DGFT registration, end-to-end. Usually live within 2 working days.' },
      { name: 'GST registration', extra: 'Including LUT & export-without-IGST setup.' },
      { name: 'RCMC', extra: 'Registration Cum Membership Certificate with the right Export Promotion Council.' },
      { name: 'MSME / Udyam registration', extra: 'Unlock concessional credit & preferential schemes.' },
      { name: 'Digital Signature Certificate (DSC)', extra: 'Class 3 DSC for DGFT, customs & tender filings.' },
      { name: 'AD Code registration', extra: 'Authorised Dealer code with customs, port-wise.' },
      { name: 'HS code classification', extra: 'Right code, right duty, right incentive eligibility.' },
    ],
  },
  {
    id: 'dgft',
    num: '02 / DGFT & Compliance',
    title: 'DGFT & Government Compliance',
    blurb: 'Licensing, schemes and authorizations — navigated by consultants who deal with DGFT every working day.',
    items: [
      { name: 'DGFT licensing', extra: 'Application, follow-up, query resolution.' },
      { name: 'Export promotion schemes', extra: 'Eligibility mapping & benefit forecasting.' },
      { name: 'RoDTEP / RoSCTL benefits', extra: 'Filing, e-scrip generation, transfer assistance.' },
      { name: 'EPCG authorization', extra: 'Zero-duty capital goods import against export obligation.' },
      { name: 'Advance Authorization', extra: 'Duty-free input imports for export production.' },
      { name: 'SCOMET licensing', extra: 'For restricted items — dual-use, chemicals, defence.' },
    ],
  },
  {
    id: 'export-docs',
    num: '03 / Export Documentation',
    title: 'Export Documentation',
    blurb: 'Preparation and verification of every document a shipment needs. Errors caught before customs ever sees them.',
    items: [
      { name: 'Commercial Invoice', extra: 'Buyer-spec, Incoterm-correct, payment-clause complete.' },
      { name: 'Packing List', extra: 'Carton-level, weight-verified, dimension-matched.' },
      { name: 'Bill of Lading / Airway Bill', extra: 'Drafting, verification, amendment support with carriers.' },
      { name: 'Shipping Bill', extra: 'EDI filing, drawback & RoDTEP claim-ready.' },
      { name: 'Insurance & Inspection', extra: 'Marine insurance, third-party inspection, fumigation paperwork.' },
      { name: 'Buyer-specific paperwork', extra: 'Halal, COA, MSDS, phyto-sanitary — whatever your buyer needs.' },
    ],
  },
  {
    id: 'origin',
    num: '04 / Certificate of Origin',
    title: 'Certificate of Origin',
    blurb: 'Preferential and non-preferential origin certification under every relevant trade agreement India is party to.',
    items: [
      { name: 'Preferential CoO — FTAs & CECAs', extra: 'ASEAN, Japan, Korea, UAE, Australia, SAFTA, Mercosur — we file under all.' },
      { name: 'Non-Preferential CoO', extra: 'Standard origin certificates via chamber of commerce.' },
      { name: 'Rules of Origin advisory', extra: 'Make sure your product actually qualifies before you commit.' },
      { name: 'e-CoO platform filing', extra: 'Online CoO portal end-to-end handling.' },
      { name: 'Amendments & reissuance', extra: 'For shipment changes, buyer-side corrections.' },
      { name: 'Origin audit support', extra: 'Documentation defence if origin is queried.' },
    ],
  },
  {
    id: 'fema',
    num: '05 / FEMA & Banking',
    title: 'FEMA & Banking Compliance',
    blurb: 'The forex paperwork that\'s easy to ignore — until your AD bank flags an entry. We resolve before it escalates.',
    items: [
      { name: 'EDPMS issues', extra: 'Export Data Processing & Monitoring System reconciliation.' },
      { name: 'IDPMS issues', extra: 'Import Data Processing & Monitoring System resolution.' },
      { name: 'BRC closure', extra: 'Bank Realisation Certificate follow-through with your AD bank.' },
      { name: 'FIRC support', extra: 'Foreign Inward Remittance Certificate filing & tracking.' },
      { name: 'Forex hedging advisory', extra: 'Working with banking partners on rate-locking strategies.' },
      { name: 'RBI advance & deferred filings', extra: 'Outstanding entries cleared.' },
    ],
  },
  {
    id: 'incentives',
    num: '06 / Incentives & Subsidies',
    title: 'Export Incentives & Subsidies',
    blurb: 'The money you\'re owed back from the government — claimed on time, in full, traceable to your books.',
    items: [
      { name: 'Duty drawback claims', extra: 'All industry rate & brand rate.' },
      { name: 'RoDTEP filing', extra: 'From shipping bill to e-scrip in your account.' },
      { name: 'IGST refund processing', extra: 'Export-under-LUT IGST recovery.' },
      { name: 'State incentive claims', extra: 'Industrial policy & sector-specific state subsidies.' },
      { name: 'MEIS / SEIS legacy', extra: 'Closing out unclaimed scrips from prior years.' },
      { name: 'Reconciliation dashboards', extra: 'Shipment-to-incentive tracking against your books.' },
    ],
  },
  {
    id: 'import-docs',
    num: '07 / Import & Customs',
    title: 'Import Documentation & Advisory',
    blurb: 'Whether you import inputs, finished goods or capital equipment — duty exposure, exemption eligibility and customs paperwork, handled.',
    items: [
      { name: 'Bill of Entry verification', extra: 'Under duty exemption schemes — EOU, EPCG, Advance Auth.' },
      { name: 'Customs & duty advisory', extra: 'Classification, valuation, anti-dumping exposure.' },
      { name: 'Import licensing', extra: 'For restricted items, end-use certificates.' },
      { name: 'SVB & valuation rulings', extra: 'Special Valuation Branch support for related-party imports.' },
      { name: 'Customs duty refunds', extra: 'Where overpayment or post-clearance corrections apply.' },
      { name: 'Bond & LUT management', extra: 'Provisional assessment, continuity bonds, warehouse licenses.' },
    ],
  },
  {
    id: 'training',
    num: '08 / Training & Support',
    title: 'Training & Support',
    blurb: 'Capability-building for your team. Because the goal isn\'t to make you depend on us — it\'s to make your export function self-sufficient.',
    items: [
      { name: 'EXIM training programs', extra: 'Live cohorts, recorded modules, certification.' },
      { name: 'Startup export guidance', extra: 'Zero-to-first-shipment hand-holding.' },
      { name: 'Documentation workshops', extra: 'For ops, finance & CHA-facing teams.' },
      { name: 'Operational SOP setup', extra: 'Process docs your team will actually follow.' },
      { name: 'Corporate EXIM training', extra: 'Custom programs for enterprise compliance & trade teams.' },
      { name: 'Update briefings', extra: 'Quarterly briefs on DGFT & customs policy changes.' },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>
            Every part of the{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>EXIM lifecycle,</em>{' '}
            handled in-house.
          </h1>
          <p className="lede">
            Eight practice areas, four-plus dozen line-items, one consultancy. Browse what we do — or jump straight to the area you need.
          </p>
          <div className="page-hero-meta">
            <div className="item"><span className="k">Practice areas</span><span className="v">08</span></div>
            <div className="item"><span className="k">Median turnaround</span><span className="v">2 days</span></div>
            <div className="item"><span className="k">First-time approval</span><span className="v">98%</span></div>
            <div className="item"><span className="k">Engagement model</span><span className="v">Project &amp; retainer</span></div>
          </div>
          <nav style={{ marginTop: '48px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['setup', 'dgft', 'export-docs', 'origin', 'fema', 'incentives', 'import-docs', 'training'].map((id, i) => (
              <Link key={id} className="btn btn-ghost" href={`#${id}`}>
                0{i + 1} {id === 'export-docs' ? 'Export Docs' : id === 'import-docs' ? 'Import Docs' : id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section
        className="image-strip"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?w=2400&q=80&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">In-house team</span>
          <h2 style={{ fontSize: 'clamp(40px,5.5vw,84px)', marginTop: '14px' }}>
            Eight practice areas.<br /><em>One accountable team.</em>
          </h2>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="section">
        <div className="container">
          {services.map((svc) => (
            <article key={svc.id} className="svc-detail" id={svc.id}>
              <div className="svc-meta">
                <div className="num">{svc.num}</div>
                <h3>{svc.title}</h3>
                <p className="svc-blurb">{svc.blurb}</p>
              </div>
              <ul className="svc-items">
                {svc.items.map(({ name, extra }) => (
                  <li key={name}>
                    <div>
                      <strong>{name}</strong>
                      <span className="extra">{extra}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURE SPLIT — engagement model */}
      <section className="section-tight">
        <div className="container">
          <div className="feature-split reverse">
            <div>
              <span className="eyebrow">Engagement model</span>
              <h2 style={{ marginTop: '18px' }}>
                Project, retainer,{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>or both.</em>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '42ch' }}>
                Most clients start with a one-off project — usually an IEC + GST + RCMC bundle, or a specific incentive claim — and convert to an ongoing retainer once they see how we work.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { n: '01', label: 'Project', desc: 'Fixed scope, fixed fee, written deliverables.' },
                  { n: '02', label: 'Retainer', desc: 'Monthly support for shipments, filings & incentive claims.' },
                  { n: '03', label: 'Embedded', desc: 'For larger exporters — we sit alongside your trade team.' },
                ].map(({ n, label, desc }) => (
                  <li key={n} style={{ display: 'flex', gap: '14px', alignItems: 'start', padding: '14px 0', borderTop: '1px solid var(--line)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '.14em' }}>{n}</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{label}</div>
                      <div style={{ color: 'var(--muted)', fontSize: '14px' }}>{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link className="btn btn-primary" href="/contact">
                Discuss your engagement <span className="arrow">→</span>
              </Link>
            </div>
            <div
              className="photo tall"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80&auto=format&fit=crop')" }}
            >
              <span className="tag">Consulting · Pan-India</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="container">
          <div className="section-head">
            <div className="section-head-stack">
              <span className="eyebrow">How an engagement runs</span>
              <h2>From <em>&ldquo;interested&rdquo;</em> to your first incentive credit.</h2>
            </div>
            <div>
              <p>A clear five-step sequence. You always know what&apos;s happening, what&apos;s next, and what you need to provide.</p>
            </div>
          </div>
          <div className="process-steps">
            {[
              { n: '01', title: 'Consultation', desc: '30-minute call. Understand your product, your buyers, your timeline.' },
              { n: '02', title: 'Documentation', desc: 'Registrations, licences and compliance set up against a written scope.' },
              { n: '03', title: 'Buyer Support', desc: 'Buyer matchmaking, market research, RFQ support if needed.' },
              { n: '04', title: 'Shipment Execution', desc: 'Coordinated logistics, customs, banking. We sit on the calls with the CHA.' },
              { n: '05', title: 'Post-Shipment', desc: 'BRC closure, incentive filing, payment follow-up to credit.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="process-step">
                <div className="step-marker">{n}</div>
                <div className="step-label">Step {['One','Two','Three','Four','Five'][i]}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>Get started</span>
          <h2 style={{ marginTop: '16px' }}>Not sure which service you <em>actually</em> need?</h2>
          <p className="lede">
            That&apos;s normal. A short discovery call is usually enough to map your situation to the right scope of work — no obligation, no upsell.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact">Book a consultation <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost" href="/industries" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>Industry experience</Link>
          </div>
        </div>
      </section>
    </>
  );
}
