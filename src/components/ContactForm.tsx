'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success show">
        <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>Got it</span>
        <h3 style={{ marginTop: '18px' }}>Thanks — your enquiry is in.</h3>
        <p style={{ color: 'rgba(255,255,255,.75)', marginTop: '8px' }}>
          A consultant matched to your sector will reach out within one business day. For anything urgent, call us on{' '}
          <strong style={{ color: 'var(--paper)' }}>+91-XXXXX XXXXX</strong>.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Full name</label>
          <input id="f-name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company</label>
          <input id="f-company" type="text" placeholder="Your business" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone (with country code)</label>
          <input id="f-phone" type="tel" placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-industry">Industry</label>
          <select id="f-industry">
            <option>Select industry…</option>
            <option>Agriculture &amp; Food</option>
            <option>Spices &amp; Commodities</option>
            <option>Textiles &amp; Garments</option>
            <option>Engineering Goods</option>
            <option>Pharmaceuticals</option>
            <option>Handicrafts</option>
            <option>Chemicals</option>
            <option>FMCG Products</option>
            <option>E-commerce Exporter</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-stage">Where are you in your EXIM journey?</label>
          <select id="f-stage">
            <option>Select stage…</option>
            <option>Just exploring exports</option>
            <option>Need IEC &amp; registrations</option>
            <option>Already exporting — need ongoing support</option>
            <option>Need help with a specific issue</option>
            <option>Looking for training</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-service">Service(s) of interest</label>
        <select id="f-service">
          <option>Select service…</option>
          <option>Business Setup &amp; Registration</option>
          <option>DGFT &amp; Government Compliance</option>
          <option>Export Documentation</option>
          <option>Certificate of Origin</option>
          <option>FEMA &amp; Banking Compliance</option>
          <option>Export Incentives &amp; Subsidies</option>
          <option>Import Documentation &amp; Advisory</option>
          <option>Training &amp; Support</option>
          <option>Not sure — please advise</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-message">Tell us briefly</label>
        <textarea
          id="f-message"
          placeholder="Your product, target market, current setup, and what you'd like help with…"
        />
      </div>

      <div className="form-foot">
        <div className="form-note">
          By submitting, you agree to be contacted by NapMeridian regarding your enquiry. We do not share your information.
        </div>
        <button type="submit" className="btn btn-primary">
          Send enquiry <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}
