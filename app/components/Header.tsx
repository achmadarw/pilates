"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="bg-stone-800 fixed top-0 left-0 right-0 w-full z-50"
      style={{
        boxShadow:
          "0 8px 32px rgba(120, 113, 108, 0.3), 0 4px 16px rgba(120, 113, 108, 0.2)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="sm" color="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-orange-400 transition-colors font-medium flex items-center">
                ABOUT
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 bg-gray-800 border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 min-w-[200px]">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  OUR STUDIO
                </Link>
                <Link
                  href="/teachers"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  TEACHERS
                </Link>
              </div>
            </div>

            {/* Classes Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-orange-400 transition-colors font-medium flex items-center">
                CLASSES
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 bg-gray-800 border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 min-w-[200px]">
                <Link
                  href="/classes/original-hot-yoga"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  ORIGINAL HOT YOGA
                </Link>
                <Link
                  href="/classes/hot-flow"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  HOT FLOW
                </Link>
                <Link
                  href="/classes/yin"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  YIN
                </Link>
                <Link
                  href="/classes/inferno-hot-pilates"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  INFERNO HOT PILATES
                </Link>
                <Link
                  href="/classes/mat-pilates"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  MAT PILATES
                </Link>
                <Link
                  href="/classes"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  VIEW ALL CLASSES
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              PRICING
            </Link>

            <Link
              href="/online-classes"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              ONLINE CLASSES
            </Link>

            <Link
              href="/workshops"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              WORKSHOPS
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              CONTACT
            </Link>

            <Link
              href="/book"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-medium transition-colors"
            >
              TIMETABLE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white mt-1 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white mt-1 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-white hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/classes"
              className="text-white hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CLASSES
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PRICING
            </Link>
            <Link
              href="/online-classes"
              className="text-white hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ONLINE CLASSES
            </Link>
            <Link
              href="/workshops"
              className="text-white hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              WORKSHOPS
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-orange-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/book"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              TIMETABLE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
