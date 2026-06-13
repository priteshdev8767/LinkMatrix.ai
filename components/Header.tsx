"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X, Bot } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030014]/70 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105">
              <Bot className="w-5.5 h-5.5 text-white" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 blur-sm -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              LinkMatrix<span className="text-purple-400">.ai</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#integrations"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Integrations
            </a>
            <a
              href="#playground"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Playground
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <a
              href="#playground"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-xl group bg-gradient-to-br from-purple-600 to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#030014] rounded-[10px] group-hover:bg-opacity-0">
                Start Free Trial
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#030014]/95 backdrop-blur-lg border-b border-white/5 mt-4">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Features
          </a>
          <a
            href="#integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Integrations
          </a>
          <a
            href="#playground"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Playground
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
          >
            FAQ
          </a>
          <div className="pt-4 pb-2 border-t border-white/5 flex flex-col space-y-2 px-3">
            <button className="w-full text-center py-2 text-base font-semibold text-slate-300 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <a
              href="#playground"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
