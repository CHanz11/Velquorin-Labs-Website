"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent page scrolling while mobile navigation is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
          ===================================================== */}
      <header className="site-header">
        {/* Purple top accent */}
        <div className="header-top-accent">
          <div className="header-top-accent-gradient" />
          <div className="header-top-accent-glow" />
        </div>

        <div className="site-container">
          <div className="header-inner">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="header-logo"
              aria-label="Velquorin Labs home"
            >
              <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={320}
                height={100}
                priority
                className="header-logo-image"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="header-nav" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="header-nav-link"
                >
                  {item.name}

                  <span
                    className="header-nav-link-indicator"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="header-actions">
              {/* Email */}
              <a
                href="mailto:velquorinlabs@gmail.com"
                className="header-email"
                aria-label="Email Velquorin Labs"
              >
                <span className="header-email-icon">
                  <svg
                    viewBox="0 0 24 24"
                    className="header-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span className="header-email-content">
                  <span className="header-email-label">Email Us</span>

                  <span className="header-email-address">
                    velquorinlabs@gmail.com
                  </span>
                </span>
              </a>

              {/* Divider */}
              <div className="header-divider" />

              {/* CTA */}
              <Link href="/contact" className="header-cta">
                <span>Get Started</span>

                <svg
                  viewBox="0 0 24 24"
                  className="header-cta-arrow"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="header-mobile-menu-button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <svg
                viewBox="0 0 24 24"
                className="header-mobile-menu-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h12M4 17h8" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMobileMenu}
        className={`mobile-navigation-backdrop ${
          mobileMenuOpen ? "is-open" : ""
        }`}
      />

      {/* Right slide-in drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`mobile-navigation ${
          mobileMenuOpen ? "is-open" : ""
        }`}
      >
        {/* Drawer Header */}
        <div className="mobile-navigation-header">
          <div
            aria-hidden="true"
            className="mobile-navigation-header-glow"
          />

          <div className="mobile-navigation-header-inner">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="mobile-navigation-logo"
              aria-label="Velquorin Labs home"
            >
              <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={220}
                height={70}
                className="mobile-navigation-logo-image"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="mobile-navigation-close"
              aria-label="Close navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="mobile-navigation-close-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="mobile-navigation-content">
          <div>
            <p className="mobile-navigation-section-label">
              Navigation
            </p>

            <nav className="mobile-navigation-links">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="mobile-navigation-link"
                >
                  <div className="mobile-navigation-link-content">
                    <span className="mobile-navigation-link-number">
                      0{index + 1}
                    </span>

                    <span className="mobile-navigation-link-name">
                      {item.name}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="mobile-navigation-link-arrow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Contact */}
          <div className="mobile-navigation-contact">
            <p className="mobile-navigation-section-label">
              Get In Touch
            </p>

            <a
              href="mailto:velquorinlabs@gmail.com"
              className="mobile-navigation-email"
            >
              <span className="mobile-navigation-email-icon">
                <svg
                  viewBox="0 0 24 24"
                  className="mobile-navigation-email-svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>

              <span className="mobile-navigation-email-content">
                <span className="mobile-navigation-email-label">
                  Email Us
                </span>

                <span className="mobile-navigation-email-address">
                  velquorinlabs@gmail.com
                </span>
              </span>
            </a>
          </div>

          {/* CTA */}
          <div className="mobile-navigation-footer">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mobile-navigation-cta"
            >
              <span>Start a Project</span>

              <svg
                viewBox="0 0 24 24"
                className="mobile-navigation-cta-arrow"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

            <div className="mobile-navigation-tagline">
              <span className="mobile-navigation-tagline-dot" />

              <p>AI &amp; Digital Solutions</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}