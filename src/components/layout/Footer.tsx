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
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Acceptable Use", href: "/acceptable-use" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-default bg-site-deep">
      <div className="site-container">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex"
              aria-label="Velquorin Labs home"
            >
              <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={260}
                height={80}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm text-text-secondary">
              Velquorin Labs builds intelligent AI solutions that help
              businesses automate workflows, improve customer experiences,
              and work smarter.
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-sm font-semibold text-white">Legal</h2>

            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-border-default py-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-sm text-text-muted">
            © {new Date().getFullYear()} Velquorin Labs. All rights reserved.
          </p>

          <p className="m-0 text-sm text-text-muted">
            Building intelligent solutions for modern businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}