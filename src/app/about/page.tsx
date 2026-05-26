import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — NapMeridian Exim Consultancy Services',
  description: 'Who we are, what we believe, and why Indian exporters trust NapMeridian for end-to-end EXIM consultancy.',
};

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About NapMeridian</span>
          <h1>
            EXIM, demystified for India&apos;s{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>next generation</em> of traders.
          </h1>
          <p className="lede">
            We&apos;re an end-to-end import-export consultancy built for the SMEs, startups and growing enterprises that move Indian goods to the world. We handle the regulations, the paperwork, the certifications, the incentives and the follow-ups — so you can focus on the trade itself.
          </p>
          <div className="page-hero-meta">
            <div className="item"><span className="k">Founded</span><span className="v">2018</span></div>
            <div className="item"><span className="k">Based in</span><span className="v">India</span></div>
            <div className="item"><span className="k">Clients served</span><span className="v">500+</span></div>
            <div className="item"><span className="k">Sectors</span><span className="v">9 industries</span></div>
            <div className="item"><span className="k">Coverage</span><span className="v">Pan-India</span></div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="image-grid-3">
              <div className="tile tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80&auto=format&fit=crop')" }} />
              <div className="tile" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80&auto=format&fit=crop')" }} />
              <div className="tile" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591719762416-be9f3fb3b07e?w=900&q=80&auto=format&fit=crop')" }} />
              <div className="tile" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format&fit=crop')" }} />
              <div className="tile" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80&auto=format&fit=crop')" }} />
            </div>
            <div>
              <span className="eyebrow">Our story</span>
              <h2 style={{ marginTop: '18px' }}>
                A consultancy built from{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>the trade floor.</em>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.6' }}>
                NapMeridian was founded by trade compliance professionals who spent years inside customs houses, freight desks and DGFT corridors — and saw the same story play out again and again: capable Indian businesses, real products, ready buyers — but stalled by paperwork.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.6' }}>
                We started as a one-desk consultancy filing IECs for spice exporters out of Maharashtra. Today we work with engineering, pharma, FMCG and e-commerce exporters across the country — but the brief hasn&apos;t changed:{' '}
                <strong style={{ color: 'var(--ink)' }}>make exporting feel like a normal business activity, not a regulatory hurdle</strong>.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.6' }}>
                Every consultant on our bench is a specialist in their area of EXIM. We don&apos;t run a single playbook — we run eight, and we know which one your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section
        className="image-strip"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2400&q=80&auto=format&fit=crop')" }}
      >
        <div className="container">
          <span className="eyebrow">From 2018</span>
          <h2 style={{ fontSize: 'clamp(40px,5.5vw,84px)', marginTop: '14px' }}>
            Built around <em>one promise</em> —<br />the deadline doesn&apos;t slip.
          </h2>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div className="section-head-stack">
              <span className="eyebrow">What we stand for</span>
              <h2>
                Three commitments, written down<br />so we can be{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>held to them.</em>
              </h2>
            </div>
            <div>
              <p>The EXIM industry runs on trust. Here&apos;s what we ask you to trust us on — and how we keep that bargain.</p>
            </div>
          </div>

          <div className="about-pillars">
            {[
              { label: 'Mission', title: 'Open the doors of global trade to every Indian business.', body: 'Whatever your size, sector or state — if your product is ready, the world is ready. We make sure the regulation isn\'t the reason you don\'t go.' },
              { label: 'Vision', title: 'India\'s most-trusted boutique EXIM partner.', body: 'Not the biggest. The most reliable. The kind of firm clients refer their suppliers and competitors to — because the work speaks for itself.' },
              { label: 'Promise', title: 'No deadline missed, no incentive left on the table.', body: 'We track every RoDTEP, drawback, IGST refund and BRC follow-up against a shared dashboard. If we file it, we follow it through to credit.' },
              { label: 'Approach', title: 'Sector specialists, single point of contact.', body: 'You get one consultant who owns your relationship, backed by a team that knows pharma, spices, engineering and the rest of our nine sectors cold.' },
            ].map(({ label, title, body }) => (
              <div key={label} className="pillar">
                <div className="label">{label}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><div className="num">500<em>+</em></div><div className="label">Indian businesses supported since 2018</div></div>
            <div className="stat"><div className="num">₹40<em>Cr+</em></div><div className="label">In duty drawback &amp; RoDTEP claims processed</div></div>
            <div className="stat"><div className="num">98<em>%</em></div><div className="label">First-time approval rate on registrations &amp; filings</div></div>
            <div className="stat"><div className="num">7<em>yr</em></div><div className="label">Average consultant tenure on our bench</div></div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head-stack">
              <span className="eyebrow">Our core values</span>
              <h2>The five non-negotiables.</h2>
            </div>
            <div>
              <p>Posted on the office wall. Reviewed every quarter. Used to settle every tough internal call.</p>
            </div>
          </div>
          <div className="values-row">
            {[
              { letter: 'I', name: 'Integrity', desc: "If we can't deliver it, we say so. Up-front." },
              { letter: 'P', name: 'Professionalism', desc: 'Trained, certified, continuously up-skilled.' },
              { letter: 'T', name: 'Transparency', desc: 'Clear scopes, no hidden fees, status visible.' },
              { letter: 'C', name: 'Client Satisfaction', desc: 'Measured every engagement. Acted on.' },
              { letter: 'G', name: 'Global Standards', desc: 'ICC, WCO and DGFT — by the book.' },
            ].map(({ letter, name, desc }) => (
              <div key={letter} className="value-card">
                <div className="icon-circle">{letter}</div>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="pullquote">
        <div className="container">
          <q>&ldquo;Most consultancies file forms. NapMeridian builds <em>your export function.</em> There&apos;s a real difference.&rdquo;</q>
          <div className="cite">CEO — Spice exporter, Kerala</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>Work with us</span>
          <h2 style={{ marginTop: '16px' }}>
            Tell us about your <em>product.</em><br />We&apos;ll tell you what&apos;s possible.
          </h2>
          <p className="lede">
            A 30-minute call is usually enough to know whether we&apos;re the right partner — and to map out a realistic timeline if we are.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact">Book a consultation <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost" href="/services" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>See what we do</Link>
          </div>
        </div>
      </section>
    </>
  );
}
