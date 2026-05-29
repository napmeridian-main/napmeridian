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
          <span className="eyebrow">About us</span>
          <h1>Making global trade simple for Indian businesses.</h1>
          <p className="lede">
            We&apos;re an import-export consultancy built for the SMEs, startups and growing enterprises that move Indian goods to the world. We handle the regulations and paperwork, so you can focus on the trade itself.
          </p>
          <div className="page-hero-meta">
            <div className="item"><div className="k">Founded</div><div className="v">2018</div></div>
            <div className="item"><div className="k">Clients served</div><div className="v">500+</div></div>
            <div className="item"><div className="k">Industries</div><div className="v">9 sectors</div></div>
            <div className="item"><div className="k">Coverage</div><div className="v">Pan-India</div></div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="feature-split">
            <div className="fs-media">
              <img
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=80&auto=format&fit=crop"
                alt="Cargo ship at an international port"
              />
              <span className="fs-caption"><span className="dot" />Trade compliance, India</span>
            </div>
            <div>
              <span className="eyebrow">Our story</span>
              <h2 style={{ marginTop: '14px' }}>Built from the trade floor.</h2>
              <p>
                NapMeridian was founded by trade-compliance professionals who spent years inside customs houses, freight desks and DGFT offices. They kept seeing the same thing: capable businesses with real products and ready buyers — stalled by paperwork.
              </p>
              <p>
                We started as a one-desk consultancy filing IECs for spice exporters in Maharashtra. Today we work with engineering, pharma, FMCG and e-commerce exporters across the country. But the goal hasn&apos;t changed: <strong>make exporting feel like a normal business activity, not a regulatory hurdle.</strong>
              </p>
              <p>
                Every consultant on our team is a specialist. You get one point of contact who owns your relationship, backed by people who know your sector cold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section bg-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2 style={{ marginTop: '14px' }}>Commitments we hold ourselves to.</h2>
          </div>
          <div className="pillars">
            <div className="pillar">
              <div className="label">Our mission</div>
              <h3>Open global trade to every Indian business.</h3>
              <p>Whatever your size or sector — if your product is ready, the world is ready. We make sure regulation isn&apos;t the reason you don&apos;t go.</p>
            </div>
            <div className="pillar">
              <div className="label">Our promise</div>
              <h3>No deadline missed, no incentive left behind.</h3>
              <p>We track every claim and follow-up on a shared dashboard. If we file it, we follow it through to credit.</p>
            </div>
            <div className="pillar">
              <div className="label">Our approach</div>
              <h3>Specialists, with one point of contact.</h3>
              <p>One consultant owns your engagement, backed by a team that knows the rules for your industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><div className="num">500<span className="u">+</span></div><div className="label">Businesses supported since 2018</div></div>
            <div className="stat"><div className="num">₹40<span className="u">Cr+</span></div><div className="label">In incentive claims processed</div></div>
            <div className="stat"><div className="num">98<span className="u">%</span></div><div className="label">First-time approval rate</div></div>
            <div className="stat"><div className="num">40<span className="u">+</span></div><div className="label">Export markets reached</div></div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our core values</span>
            <h2 style={{ marginTop: '14px' }}>Five things we don&apos;t compromise on.</h2>
          </div>
          <div className="values-row">
            <div className="value-card">
              <div className="vc-ico">I</div>
              <h4>Integrity</h4>
              <p>If we can&apos;t deliver it, we say so up front.</p>
            </div>
            <div className="value-card">
              <div className="vc-ico">P</div>
              <h4>Professionalism</h4>
              <p>Trained, certified, always up to date.</p>
            </div>
            <div className="value-card">
              <div className="vc-ico">T</div>
              <h4>Transparency</h4>
              <p>Clear scopes, no hidden fees.</p>
            </div>
            <div className="value-card">
              <div className="vc-ico">C</div>
              <h4>Client Focus</h4>
              <p>Your outcome is the only metric.</p>
            </div>
            <div className="value-card">
              <div className="vc-ico">G</div>
              <h4>Global Standards</h4>
              <p>By the book — ICC, WCO and DGFT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Tell us about your product. We&apos;ll tell you what&apos;s possible.</h2>
          <p className="lede">
            A 30-minute call is usually enough to know whether we&apos;re the right partner — and to map a realistic timeline if we are.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-light" href="/contact">
              Book a free consultation <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/services">See what we do</Link>
          </div>
        </div>
      </section>
    </>
  );
}
