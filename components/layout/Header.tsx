'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Test Civique France"
              width={290}
              height={88}
              priority
              className="h-[97px] w-auto object-contain"
            />
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/a-propos"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-lg"
            >
              À propos
            </Link>
            <Link
              href="/tarifs"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-lg"
            >
              Tarifs
            </Link>
            <Link
              href="/articles"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-lg"
            >
              Articles
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-lg"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-lg"
            >
              Contact
            </Link>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Connexion
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Inscription
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/a-propos"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/tarifs"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="/articles"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Link
                  href="/login"
                  className="px-4 py-2 text-center border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 text-center bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inscription
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
