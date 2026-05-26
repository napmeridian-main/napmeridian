import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2400&q=80&auto=format&fit=crop')" }}
        />
        <div className="container">
          <div className="hero-eyebrow">
            <span className="dash" />
            <span>EXIM Consultancy &nbsp;·&nbsp; India</span>
          </div>
          <h1 className="hero-title">
            Your gateway to <em>global trade</em>, simplified.
          </h1>
          <div className="hero-meta-row">
            <div className="hero-feature-card">
              <div
                className="thumb"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80&auto=format&fit=crop')" }}
              />
              <div>
                <div className="label">Most requested</div>
                <h4>Import Export Code (IEC)</h4>
                <p>End-to-end IEC registration with DGFT — usually live within 2 working days.</p>
              </div>
            </div>
            <div className="hero-subline">
              From first registration to final shipment — we handle the paperwork so you can focus on the trade.
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="hero-scroll-cue">
                <span>Scroll to explore</span>
                <span className="ring">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 4v16M6 14l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="section-tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="section-head-stack">
              <span className="eyebrow">A consultancy, not a paperwork shop</span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,44px)', lineHeight: '1.15', color: 'var(--ink)', margin: 0, maxWidth: '30ch' }}>
                We&apos;re the team Indian SMEs, exporters and importers call when the rules feel complicated — and we make sure they aren&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div
              className="photo"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&q=80&auto=format&fit=crop')" }}
            >
              <span className="tag">Trade compliance · India</span>
            </div>
            <div>
              <span className="eyebrow">Who we are</span>
              <h2 style={{ marginTop: '18px' }}>
                Eight years of trade desks, customs floors and DGFT corridors — distilled into{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>one consultancy.</em>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '42ch' }}>
                NapMeridian was founded by compliance professionals who saw the same story play out again and again: capable businesses, real products, ready buyers — stalled by paperwork. We exist to remove that bottleneck.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '42ch' }}>
                Today, 500+ exporters across nine industries rely on us for end-to-end EXIM consultancy. Every consultant on our bench is a specialist; every engagement is owned by a single point of contact.
              </p>
              <Link className="btn btn-ghost" href="/about" style={{ marginTop: '8px' }}>
                Read more about us <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-head-stack">
              <span className="eyebrow">What we do</span>
              <h2>Eight practice areas, <em>one team.</em></h2>
            </div>
            <div>
              <p>From your first IEC to post-shipment incentive claims, every part of the EXIM lifecycle is handled in-house by specialists who do this every day.</p>
              <Link className="btn btn-ghost" href="/services" style={{ marginTop: '8px' }}>
                See every service <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="svc-carousel">
          {[
            { num: '01 / Setup', title: 'Business Setup & Registration', href: '/services#setup', desc: 'IEC · GST · RCMC · MSME/Udyam · DSC · AD Code · HS classification' },
            { num: '02 / Compliance', title: 'DGFT & Government Compliance', href: '/services#dgft', desc: 'Licensing · Export schemes · RoDTEP/RoSCTL · EPCG · Advance Authorization · SCOMET' },
            { num: '03 / Export', title: 'Export Documentation', href: '/services#export-docs', desc: 'Commercial invoice · Packing list · Bill of Lading / Airway Bill · Shipping Bill' },
            { num: '04 / Origin', title: 'Certificate of Origin', href: '/services#origin', desc: 'Preferential CoO under FTA & CECA agreements · Non-preferential CoO issuance' },
            { num: '05 / Banking', title: 'FEMA & Banking Compliance', href: '/services#fema', desc: 'Resolving EDPMS & IDPMS issues · Foreign exchange documentation support' },
            { num: '06 / Incentives', title: 'Export Incentives & Subsidies', href: '/services#incentives', desc: 'Duty drawback claims · RoDTEP filing · IGST refund processing' },
            { num: '07 / Import', title: 'Import Documentation & Advisory', href: '/services#import-docs', desc: 'Bill of Entry verification under duty exemption schemes · Customs & duty advisory' },
            { num: '08 / Capability', title: 'Training & Support', href: '/services#training', desc: 'EXIM programs · Startup export guidance · SOP setup · Corporate EXIM training' },
          ].map(({ num, title, href, desc }) => (
            <Link key={href} className="svc-cell" href={href}>
              <div className="svc-num">{num}</div>
              <h3>{title}</h3>
              <div className="svc-arrow">↗</div>
              <div className="svc-desc">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* INDUSTRIES MARQUEE */}
      <section>
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '32px' }}>
          <div className="section-head" style={{ marginBottom: '24px' }}>
            <div className="section-head-stack">
              <span className="eyebrow">Industries we serve</span>
              <h2>Across <em>nine</em> sectors of Indian export.</h2>
            </div>
            <div>
              <p>From farm-gate spices to engineered components, our team brings sector-specific HS-code knowledge and incentive expertise to every assignment.</p>
              <Link className="btn btn-ghost" href="/industries" style={{ marginTop: '8px' }}>
                Explore industries <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="industries-marquee">
          <div className="marquee-track">
            {[
              'Agriculture & Food', 'Spices & Commodities', 'Textiles & Garments',
              'Engineering Goods', 'Pharmaceuticals', 'Handicrafts',
              'Chemicals', 'FMCG Products', 'E-commerce Exporters',
              'Agriculture & Food', 'Spices & Commodities', 'Textiles & Garments',
              'Engineering Goods', 'Pharmaceuticals', 'Handicrafts',
              'Chemicals', 'FMCG Products', 'E-commerce Exporters',
            ].map((item, i) => (
              <span key={i} className={`marquee-item${i % 2 !== 0 ? ' muted' : ''}`}>
                {item} <span className="star">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section
        className="image-strip"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=2400&q=80&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">Coverage</span>
          <h2 style={{ fontSize: 'clamp(40px,5.5vw,84px)', marginTop: '14px' }}>
            Pan-India footprint.<br /><em>40+ markets.</em>
          </h2>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="container">
          <div className="section-head">
            <div className="section-head-stack">
              <span className="eyebrow">How we work</span>
              <h2>A five-step <em>process,</em> end&#8209;to&#8209;end.</h2>
            </div>
            <div>
              <p>You stay in the loop at every stage. No black-box paperwork — just a structured engagement with clear deliverables.</p>
            </div>
          </div>
          <div className="process-steps">
            {[
              { n: '01', title: 'Consultation', desc: 'Understanding client requirements and trade goals.' },
              { n: '02', title: 'Documentation & Compliance', desc: 'Complete registration and legal formalities.' },
              { n: '03', title: 'Market & Buyer Support', desc: 'Finding opportunities and connecting with buyers.' },
              { n: '04', title: 'Shipment Execution', desc: 'Coordinating logistics and customs procedures.' },
              { n: '05', title: 'Post-Shipment Support', desc: 'Payment follow-up and incentive claims.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="process-step">
                <div className="step-marker">{n}</div>
                <div className="step-label">Step {n === '01' ? 'One' : n === '02' ? 'Two' : n === '03' ? 'Three' : n === '04' ? 'Four' : 'Five'}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="eyebrow">Why teams choose us</span>
              <h2 style={{ marginTop: '18px' }}>Reliability is <em>the whole</em> service.</h2>
              <p style={{ color: 'var(--muted)', maxWidth: '38ch', marginTop: '16px' }}>
                EXIM rules change often. Our value is keeping you compliant, getting you incentives you&apos;re owed, and never letting a deadline slip — even when DGFT or customs systems do.
              </p>
              <Link className="btn btn-primary" href="/about" style={{ marginTop: '20px' }}>
                About NapMeridian <span className="arrow">→</span>
              </Link>
            </div>
            <div>
              <ul className="why-list">
                {[
                  ['Professional & transparent', 'Fixed-scope retainers, clear deliverables.'],
                  ['End-to-end EXIM support', 'From IEC to post-shipment claims.'],
                  ['Fast documentation', '2-day median turnaround on filings.'],
                  ['Industry expertise', 'Sector-specific HS & FTA knowledge.'],
                  ['Customized trade solutions', 'Built around your product & market.'],
                  ['Reliable international network', 'Buyer leads & logistics partners.'],
                  ['Cost-effective consultancy', 'Pricing that suits SME margins.'],
                  ['Single point of contact', 'One consultant owns your engagement.'],
                ].map(([title, desc]) => (
                  <li key={title}>
                    <span className="check">✓</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="num">500<em>+</em></div>
              <div className="label">Indian businesses supported across sectors</div>
            </div>
            <div className="stat">
              <div className="num">₹40<em>Cr+</em></div>
              <div className="label">In duty drawback & RoDTEP claims processed</div>
            </div>
            <div className="stat">
              <div className="num">18</div>
              <div className="label">FTA / CECA agreements we file CoOs under</div>
            </div>
            <div className="stat">
              <div className="num">2<em>d</em></div>
              <div className="label">Median turnaround on documentation</div>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="pullquote">
        <div className="container">
          <q>&ldquo;They handled our first RoDTEP claim, then our second, then our SCOMET filing. Five years later they still pick up on the <em>first ring.&rdquo;</em></q>
          <div className="cite">Operations Lead — Mid-cap engineering exporter, Pune</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>Let&apos;s talk</span>
          <h2 style={{ marginTop: '16px' }}>
            Ready to <em>ship the world?</em><br />We&apos;ll get the paperwork out of the way.
          </h2>
          <p className="lede">
            Book a free 30-minute consultation. We&apos;ll review your product, market and existing setup, and outline the fastest path to your first (or next) export.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact">
              Book a consultation <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/services" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>
              Browse all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
