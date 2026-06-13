"use client";

import { Mail, Globe, Send, Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-white/5 py-12 md:py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                <Bot className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                LinkMatrix<span className="text-purple-400">.ai</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              LinkMatrix AI connects your Gmail, WhatsApp, Telegram, and Outlook feeds to an intelligent co-pilot, generating summaries, reminders, and draft replies.
            </p>
            {/* Social icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all" aria-label="GitHub">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-5 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#integrations" className="text-slate-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#playground" className="text-slate-400 hover:text-white transition-colors">Playground</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Integrations</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#integrations" className="text-slate-400 hover:text-white transition-colors">Gmail</a></li>
                <li><a href="#integrations" className="text-slate-400 hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#integrations" className="text-slate-400 hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#integrations" className="text-slate-400 hover:text-white transition-colors">Outlook</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Privacy & Trust</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GDPR Sandbox</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">SOC2 Compliance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Get Product Updates</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to our weekly digest for security bulletins, patch updates, and product features.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all pr-8"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white rounded-xl px-3 py-2.5 text-xs font-bold transition-all shadow-[0_0_10px_rgba(139,92,246,0.2)]"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} LinkMatrix.ai. All rights reserved.</span>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Security Audit</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Status: Normal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
