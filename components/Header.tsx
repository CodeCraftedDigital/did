"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#applications", label: "APPLICATIONS" },
  { href: "#how-it-works", label: "HOW IT WORKS" },
  { href: "#performance", label: "PERFORMANCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/DamItDams-Logo-Light.svg"
              alt="Dam-It-Dams Logo"
              width={160}
              height={24}
              className="h-5 lg:h-6 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/80 hover:text-primary-light transition-colors tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2 border border-primary-light text-primary-light font-semibold text-xs uppercase tracking-wider hover:bg-primary-light hover:text-dark transition-all duration-300"
          >
            Get A Quote
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-light"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-dark border-t border-white/10 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-white/80 hover:text-primary-light transition-colors tracking-wider font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-xs py-2 px-4 text-center mt-2"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </header>
  );
}
