import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "AI Chatbots", href: "/services#ai-chatbots" },
  { name: "AI Automation", href: "/services#ai-automation" },
  { name: "AI Form Assistant", href: "/services#ai-form-assistant" },
  { name: "Custom AI Solutions", href: "/services#custom-ai-solutions" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Acceptable Use", href: "/acceptable-use" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo-link"
              aria-label="Velquorin Labs home"
            >
              <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={260}
                height={80}
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              Velquorin Labs builds intelligent AI solutions that help
              businesses automate workflows, improve customer experiences,
              and work smarter.
            </p>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h2 className="footer-heading">Company</h2>

            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h2 className="footer-heading">Services</h2>

            <ul className="footer-links">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h2 className="footer-heading">Legal</h2>

            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Velquorin Labs. All rights reserved.
          </p>

          <p>
            Building intelligent solutions for modern businesses.
          </p>
        </div>

      </div>
    </footer>
  );
}