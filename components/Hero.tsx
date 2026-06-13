"use client";

import { Sparkles, ArrowRight, Zap, Bot, MessageSquare, Mail, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-mesh">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-300 mb-6 animate-pulse-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrate Gmail, WhatsApp, Telegram & Outlook</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Your entire communication stack, <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              unified and automated by AI.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect your primary communication channels. Let LinkMatrix AI monitor, summarize, list priorities, and draft replies—all inside one intelligent dashboard.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#playground"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#playground"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-300 font-bold glass-card hover:bg-white/5 hover:text-white transition-all duration-200 border border-white/10"
            >
              Try Interactive Demo
            </a>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative mt-8 max-w-5xl mx-auto">
          {/* Decorative frame shadow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 opacity-60" />

          {/* Main Visual */}
          <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl relative">
            {/* Window controls */}
            <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-slate-500 ml-4 font-mono">linkmatrix.ai/dashboard</span>
            </div>

            {/* Dashboard Mockup Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Side: Active Feed */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Live Activity Stream</h3>
                
                {/* Gmail Item */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 hover:border-red-500/20 transition-all">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-slate-200">Gmail</span>
                      <span className="text-[10px] text-slate-400">2 min ago</span>
                    </div>
                    <h4 className="text-xs font-bold text-white truncate">Sarah Jenkins (Product Lead)</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                      "Can we review the roadmap specs tomorrow morning? I have updated the Figma prototypes and need feedback..."
                    </p>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 hover:border-emerald-500/20 transition-all">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-slate-200">WhatsApp</span>
                      <span className="text-[10px] text-slate-400">5 min ago</span>
                    </div>
                    <h4 className="text-xs font-bold text-white truncate">Marketing Dev Group</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                      "David: We need to push the landing page build tonight. Make sure the analytics hooks are wired."
                    </p>
                  </div>
                </div>

                {/* Telegram Item */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 hover:border-sky-500/20 transition-all">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-slate-200">Telegram</span>
                      <span className="text-[10px] text-slate-400">12 min ago</span>
                    </div>
                    <h4 className="text-xs font-bold text-white truncate">Crypto Alerts Feed</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                      "Ethereum transaction fees have dropped to 12 Gwei. Gas limit optimization complete."
                    </p>
                  </div>
                </div>
              </div>

              {/* Center: Processing Flow Visual */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center py-4 lg:py-0">
                <div className="h-[2px] w-8 lg:h-12 lg:w-[2px] bg-gradient-to-b from-purple-500/20 to-purple-500" />
                <div className="relative p-4 rounded-2xl bg-purple-900/30 border border-purple-500/50 text-purple-300 shadow-[0_0_25px_rgba(139,92,246,0.4)] animate-pulse">
                  <Bot className="w-8 h-8" />
                  <div className="absolute -inset-1 rounded-2xl bg-purple-500/30 blur-sm -z-10" />
                </div>
                <div className="h-[2px] w-8 lg:h-12 lg:w-[2px] bg-gradient-to-b from-purple-500 to-purple-500/20" />
              </div>

              {/* Right Side: AI Assistant Output */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">AI Copilot Analysis</h3>
                
                {/* Digest Summary */}
                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold text-white">Consolidated Smart Summary</span>
                    </div>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-semibold">Active</span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>• <strong className="text-slate-100">Figma Review:</strong> Sarah (Product) wants roadmap reviews tomorrow morning; Prototypes are updated.</p>
                    <p>• <strong className="text-slate-100">Launch Priority:</strong> Marketing dev group needs landing page push tonight with analytics wired.</p>
                    <p>• <strong className="text-slate-100">Gas Alert:</strong> Gas limit optimized; fee is currently low (12 Gwei).</p>
                  </div>
                </div>

                {/* Extracted Reminders */}
                <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-white">Suggested Calendar Tasks</span>
                    </div>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-semibold">Ready</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2 rounded bg-black/30 border border-white/5">
                      <span className="text-slate-200">🗓️ Review specs with Sarah</span>
                      <span className="text-[10px] text-blue-300 font-mono">Tomorrow 10:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded bg-black/30 border border-white/5">
                      <span className="text-slate-200">🚀 Deploy Landing Page & Web hooks</span>
                      <span className="text-[10px] text-blue-300 font-mono">Tonight 11:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Channel Bubbles */}
          <div className="hidden lg:block absolute -left-16 top-12 animate-float p-3 rounded-2xl bg-[#ea4335]/10 border border-[#ea4335]/30 text-[#ea4335] shadow-[0_0_20px_rgba(234,67,53,0.2)]">
            <Mail className="w-8 h-8" />
          </div>
          <div className="hidden lg:block absolute -right-16 top-20 animate-float-delayed p-3 rounded-2xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] shadow-[0_0_20px_rgba(37,211,102,0.2)]">
            <MessageSquare className="w-8 h-8" />
          </div>
          <div className="hidden lg:block absolute -left-12 bottom-12 animate-float-delayed p-3 rounded-2xl bg-[#0088cc]/10 border border-[#0088cc]/30 text-[#0088cc] shadow-[0_0_20px_rgba(0,136,204,0.2)]">
            <Bot className="w-8 h-8" />
          </div>
          <div className="hidden lg:block absolute -right-12 bottom-20 animate-float p-3 rounded-2xl bg-[#0078d4]/10 border border-[#0078d4]/30 text-[#0078d4] shadow-[0_0_20px_rgba(0,120,212,0.2)]">
            <Calendar className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
