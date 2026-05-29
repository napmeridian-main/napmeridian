import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="logo" href="/">
              <span className="logo-mark">N</span>
              <span className="name">NapMeridian</span>
            </Link>
            <div className="footer-tagline">
              Import &amp; export, made simple — for India&apos;s businesses.
            </div>
            <Link className="btn btn-primary" href="/contact">
              Free consultation
            </Link>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#setup">Business Setup</Link></li>
              <li><Link href="/services#dgft">DGFT Compliance</Link></li>
              <li><Link href="/services#export-docs">Export Documentation</Link></li>
              <li><Link href="/services#origin">Certificate of Origin</Link></li>
              <li><Link href="/services#fema">FEMA &amp; Banking</Link></li>
              <li><Link href="/services#incentives">Export Incentives</Link></li>
              <li><Link href="/services#import-docs">Import Advisory</Link></li>
              <li><Link href="/services#training">Training &amp; Support</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>[Full Address], India</li>
              <li>+91-XXXXX XXXXX</li>
              <li>info@napmeridian.com</li>
              <li>www.napmeridian.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 NapMeridian Exim Consultancy Services. All rights reserved.</div>
          <div className="socials">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
