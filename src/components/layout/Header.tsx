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
      <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/90 shadow-[0_8px_35px_rgba(76,29,149,0.06)] backdrop-blur-xl">
        {/* Purple top accent */}
        <div className="relative h-[3px] w-full overflow-hidden bg-violet-50">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-600 to-indigo-500" />
          <div className="absolute left-1/2 top-0 h-8 w-[45%] -translate-x-1/2 bg-violet-500/20 blur-xl" />
        </div>

        <div className="site-container">
          <div className="flex h-[92px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="group flex shrink-0 items-center"
              aria-label="Velquorin Labs home"
            >
              <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={320}
                height={100}
                priority
                className="h-[52px] w-auto object-contain transition duration-300 group-hover:scale-[1.02] sm:h-[58px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 rounded-full border border-violet-100/80 bg-gradient-to-b from-white to-violet-50/40 p-1.5 shadow-[0_6px_20px_rgba(76,29,149,0.05)] lg:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition duration-300 hover:bg-white hover:text-violet-700 hover:shadow-[0_4px_14px_rgba(124,58,237,0.08)]"
                >
                  {item.name}

                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 transition-all duration-300 group-hover:w-5" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-5 lg:flex">
              {/* Email */}
              <a
                href="mailto:velquorinlabs@gmail.com"
                className="group hidden items-center gap-2.5 lg:flex"
                aria-label="Email Velquorin Labs"
              >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200/70 bg-gradient-to-br from-violet-50 to-purple-100/70 text-violet-600 shadow-[0_5px_16px_rgba(124,58,237,0.10)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-violet-300 group-hover:shadow-[0_8px_20px_rgba(124,58,237,0.16)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
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

                <span className="flex flex-col">
                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    Email Us
                  </span>

                  <span className="text-xs font-medium text-slate-700 transition group-hover:text-violet-700">
                    velquorinlabs@gmail.com
                  </span>
                </span>
              </a>

              {/* Divider */}
              <div className="hidden h-8 w-px bg-slate-200 lg:block" />

              {/* CTA */}
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-violet-500/20 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(124,58,237,0.38)] focus-visible:outline-none"
              >
                Get Started

                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-violet-50/70 text-violet-700 shadow-sm transition duration-200 hover:border-violet-200 hover:bg-violet-100 lg:hidden"
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
                className="h-5 w-5"
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
        className={`fixed inset-0 z-[60] bg-slate-950/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right slide-in drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed bottom-0 right-0 top-0 z-[70] flex w-[88%] max-w-[390px] flex-col overflow-y-auto border-l border-slate-200 bg-white shadow-[-20px_0_60px_rgba(15,23,42,0.15)] transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="relative border-b border-slate-200 px-6 py-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-24 w-40 bg-violet-100/60 blur-3xl"
          />

          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMobileMenu}
              aria-label="Velquorin Labs home"
            >
              <Image
                src="/images/velquorin-labs-logo-horizontal.png"
                alt="Velquorin Labs"
                width={220}
                height={70}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              aria-label="Close navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
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

        {/* Navigation content */}
        <div className="flex flex-1 flex-col px-6 py-7">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Navigation
            </p>

            <nav className="space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between rounded-xl px-3 py-3.5 transition duration-200 hover:bg-violet-50"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium text-violet-400">
                      0{index + 1}
                    </span>

                    <span className="text-base font-medium text-slate-800 transition group-hover:text-violet-700">
                      {item.name}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-300 transition duration-200 group-hover:translate-x-1 group-hover:text-violet-500"
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

          {/* Mobile contact */}
          <div className="mt-8 border-t border-slate-200 pt-7">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Get In Touch
            </p>

            <a
              href="mailto:velquorinlabs@gmail.com"
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-violet-200 hover:bg-violet-50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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

              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.15em] text-slate-400">
                  Email Us
                </span>

                <span className="block truncate text-sm font-medium text-slate-700 group-hover:text-violet-700">
                  velquorinlabs@gmail.com
                </span>
              </span>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-8">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(124,58,237,0.22)] transition hover:shadow-[0_12px_34px_rgba(124,58,237,0.30)]"
            >
              Start a Project

              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                AI &amp; Digital Solutions
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}