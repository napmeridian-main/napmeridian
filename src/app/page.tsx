import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=2400&q=80&auto=format&fit=crop')" }}
        />
        <div className="container">
          <span className="eyebrow">Import &amp; Export Consultancy · India</span>
          <h1>Export and import, <span className="accent">made simple.</span></h1>
          <p className="hero-sub">
            We handle the licenses, paperwork, compliance and incentives for your international trade — start to finish — so you can focus on selling your product.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">
              Book a free consultation <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/services">See what we do</Link>
          </div>
          <div className="hero-trust">
            <div className="item"><div className="v">500+</div><div className="k">Businesses helped</div></div>
            <div className="item"><div className="v">9</div><div className="k">Industries served</div></div>
            <div className="item"><div className="v">2 days</div><div className="k">Typical turnaround</div></div>
            <div className="item"><div className="v">Since 2018</div><div className="k">Trusted across India</div></div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 style={{ marginTop: '14px' }}>One team for every step of your trade journey.</h2>
            <p className="lede">
              Whether you&apos;re exporting for the first time or scaling an established trade business, we take care of the registrations, government compliance and documentation that usually slow exporters down.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-tight bg-soft">
        <div className="container">
          <div className="svc-grid">

            <Link className="svc-card" href="/services#setup">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
                </span>
                <div><div className="num">01</div><h3>Business Setup &amp; Registration</h3></div>
              </div>
              <p>Get legally ready to trade. We obtain every code and registration your business needs to import or export.</p>
              <div className="svc-tags"><span>IEC</span><span>GST</span><span>RCMC</span><span>MSME / Udyam</span><span>DSC</span><span>AD Code</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#dgft">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3l8 4v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
                </span>
                <div><div className="num">02</div><h3>DGFT &amp; Government Compliance</h3></div>
              </div>
              <p>Stay compliant with DGFT and claim every export scheme your business qualifies for.</p>
              <div className="svc-tags"><span>Licensing</span><span>RoDTEP / RoSCTL</span><span>EPCG</span><span>Advance Authorization</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#export-docs">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M9.5 13h5M9.5 16.5h5"/></svg>
                </span>
                <div><div className="num">03</div><h3>Export Documentation</h3></div>
              </div>
              <p>Every shipping document prepared and double-checked before it ever reaches customs.</p>
              <div className="svc-tags"><span>Commercial Invoice</span><span>Packing List</span><span>Bill of Lading / AWB</span><span>Shipping Bill</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#origin">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="10" r="6"/><path d="M9 15l-1 6 4-2 4 2-1-6"/></svg>
                </span>
                <div><div className="num">04</div><h3>Certificate of Origin</h3></div>
              </div>
              <p>Prove where your goods are made and unlock lower import duties in your buyer&apos;s country.</p>
              <div className="svc-tags"><span>Preferential (FTA &amp; CECA)</span><span>Non-preferential</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#fema">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg>
                </span>
                <div><div className="num">05</div><h3>FEMA &amp; Banking Compliance</h3></div>
              </div>
              <p>Clear the foreign-exchange paperwork that holds up your export payments at the bank.</p>
              <div className="svc-tags"><span>EDPMS resolution</span><span>IDPMS resolution</span><span>BRC / FIRC</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#incentives">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>
                </span>
                <div><div className="num">06</div><h3>Export Incentives &amp; Subsidies</h3></div>
              </div>
              <p>Claim back the money the government owes you on every export — on time and in full.</p>
              <div className="svc-tags"><span>Duty Drawback</span><span>RoDTEP filing</span><span>IGST Refund</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#import-docs">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>
                </span>
                <div><div className="num">07</div><h3>Import Documentation &amp; Advisory</h3></div>
              </div>
              <p>Bring goods in at the right duty, with clean customs paperwork and expert advice.</p>
              <div className="svc-tags"><span>Bill of Entry</span><span>Duty exemption schemes</span><span>Customs advisory</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

            <Link className="svc-card" href="/services#training">
              <div className="svc-card-head">
                <span className="svc-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M7 9v5c0 1.5 5 3 5 3s5-1.5 5-3V9"/></svg>
                </span>
                <div><div className="num">08</div><h3>Training &amp; Support</h3></div>
              </div>
              <p>Build your own in-house export capability with hands-on training and ready-to-use SOPs.</p>
              <div className="svc-tags"><span>EXIM programs</span><span>Startup guidance</span><span>Corporate training</span></div>
              <span className="more">Learn more <span className="arrow">→</span></span>
            </Link>

          </div>
          <div style={{ marginTop: '28px' }}>
            <Link className="link-arrow" href="/services">See full service details <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div className="fs-media">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80&auto=format&fit=crop"
                alt="Container shipping yard"
              />
              <span className="fs-caption"><span className="dot" />End-to-end trade support</span>
            </div>
            <div>
              <span className="eyebrow">Why choose us</span>
              <h2 style={{ marginTop: '14px' }}>A consultancy that owns the outcome — not just the paperwork.</h2>
              <p>EXIM rules change often and a single missed filing can stall a shipment or a payment. Our job is to make sure that never happens.</p>
              <ul className="feature-list">
                <li><span className="tick">✓</span><div><b>End-to-end EXIM support</b> <span>— from your first IEC to post-shipment incentive claims.</span></div></li>
                <li><span className="tick">✓</span><div><b>Fast, transparent service</b> <span>— fixed scopes, clear deliverables, 2-day median turnaround.</span></div></li>
                <li><span className="tick">✓</span><div><b>Real industry expertise</b> <span>— sector-specific HS-code and FTA knowledge across 9 industries.</span></div></li>
                <li><span className="tick">✓</span><div><b>One point of contact</b> <span>— a single consultant owns your engagement, start to finish.</span></div></li>
              </ul>
              <Link className="link-arrow" href="/about">More about NapMeridian <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER / EARN */}
      <section className="section bg-accent">
        <div className="container">
          <div className="feature-split reverse">
            <div className="fs-media">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop"
                alt="Partnership handshake"
              />
              <span className="fs-caption"><span className="dot" />Turn your product into export revenue</span>
            </div>
            <div>
              <span className="eyebrow">Partner with us</span>
              <h2 style={{ marginTop: '14px' }}>Partner up with us — and start earning from exports.</h2>
              <p>Exporting isn&apos;t just paperwork; it&apos;s a new revenue stream. We help you reach higher-value international buyers and claim the incentives that put real cash back in your account.</p>
              <ul className="feature-list">
                <li><span className="tick">✓</span><div><b>Reach paying global buyers</b> <span>— sell into 40+ markets where your product earns more.</span></div></li>
                <li><span className="tick">✓</span><div><b>Get money back on every shipment</b> <span>— duty drawback, RoDTEP and IGST refunds, claimed in full.</span></div></li>
                <li><span className="tick">✓</span><div><b>Make your price more competitive</b> <span>— FTA certificates cut the duty your buyer pays abroad.</span></div></li>
              </ul>
              <div className="earn-callout">
                <div className="ec-num">₹40Cr+</div>
                <div className="ec-label">already returned to our clients through incentive claims</div>
              </div>
              <Link className="btn btn-primary" href="/contact">
                Partner with us <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2 style={{ marginTop: '14px' }}>A clear five-step process.</h2>
            <p className="lede">You always know what&apos;s happening, what&apos;s next, and what we need from you.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">1</div>
              <h4>Consultation</h4>
              <p>We understand your product, target markets and trade goals.</p>
            </div>
            <div className="step">
              <div className="n">2</div>
              <h4>Documentation</h4>
              <p>We complete every registration and compliance formality.</p>
            </div>
            <div className="step">
              <div className="n">3</div>
              <h4>Buyer Support</h4>
              <p>We help you find opportunities and connect with buyers.</p>
            </div>
            <div className="step">
              <div className="n">4</div>
              <h4>Shipment</h4>
              <p>We coordinate logistics and customs procedures.</p>
            </div>
            <div className="step">
              <div className="n">5</div>
              <h4>Post-Shipment</h4>
              <p>We follow up on payments and file your incentive claims.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Industries we serve</span>
            <h2 style={{ marginTop: '14px' }}>Sector expertise across nine industries.</h2>
            <p className="lede">Every industry has its own codes, certifications and buyer expectations. We staff our team accordingly.</p>
          </div>
          <div className="ind-chips">
            {[
              'Agriculture & Food', 'Spices & Commodities', 'Textiles & Garments',
              'Engineering Goods', 'Pharmaceuticals', 'Handicrafts',
              'Chemicals', 'FMCG Products', 'E-commerce Exporters',
            ].map((ind) => (
              <Link key={ind} className="ind-chip" href="/industries">
                <span className="dot" />{ind}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '28px' }}>
            <Link className="link-arrow" href="/industries">Explore industries in detail <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="num">500<span className="u">+</span></div>
              <div className="label">Indian businesses supported</div>
            </div>
            <div className="stat">
              <div className="num">₹40<span className="u">Cr+</span></div>
              <div className="label">In incentive claims processed</div>
            </div>
            <div className="stat">
              <div className="num">18</div>
              <div className="label">Trade agreements we file under</div>
            </div>
            <div className="stat">
              <div className="num">98<span className="u">%</span></div>
              <div className="label">First-time approval rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to start exporting? Let&apos;s talk.</h2>
          <p className="lede">
            Book a free 30-minute consultation. We&apos;ll review your product and setup, and map out the fastest path to your first or next shipment.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact">
              Book a free consultation <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/services">Browse all services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
