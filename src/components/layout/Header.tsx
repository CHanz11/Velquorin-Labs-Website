"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-border-default/70 bg-site-background/85 backdrop-blur-xl">
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center"
            aria-label="Velquorin Labs home"
          >
            <Image
              src="/images/velquorin-labs-logo-horizontal.png"
              alt="Velquorin Labs"
              width={260}
              height={80}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-brand-light focus-visible:outline-none"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-default bg-surface text-white transition hover:bg-surface-elevated lg:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border-default py-5 lg:hidden"
          >
            <nav
              className="flex flex-col gap-2"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition hover:bg-surface hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 font-semibold text-white transition hover:bg-brand-light"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}