"use client";

import { Sparkles, Bot, Shield, Mail, Zap, CheckSquare, BarChart3, EyeOff } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="features" className="py-20 bg-[#030014]/60 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Designed for Peak Productivity
          </h2>
          <p className="text-slate-400">
            LinkMatrix AI processes text, links, and calendars so you can bypass the communication clutter.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[22rem]">
          {/* Card 1: Dashboard (Spans 1 col, 2 rows) */}
          <div className="md:row-span-2 rounded-3xl glass-card border border-white/5 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
            <div>
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Omni-Channel Analytics</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Monitor message volume, response rates, and attention distribution across Gmail, Telegram, WhatsApp, and Outlook in a unified dashboard.
              </p>
            </div>
            
            {/* Visual element */}
            <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Daily Volume Digest</span>
                <span className="text-purple-400 font-bold font-mono">148 processed</span>
              </div>
              {/* Progress bars */}
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                    <span>WhatsApp Chats</span>
                    <span>64%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "64%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                    <span>Gmail Conversations</span>
                    <span>22%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: "22%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                    <span>Telegram Feeds</span>
                    <span>14%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full" style={{ width: "14%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Smart Summarization (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 rounded-3xl glass-card border border-white/5 p-6 flex flex-col md:flex-row justify-between items-stretch overflow-hidden relative group hover:border-pink-500/30 transition-all duration-300">
            <div className="absolute bottom-0 right-0 w-[250px] h-[150px] bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors" />
            <div className="flex-1 flex flex-col justify-between mb-6 md:mb-0 md:mr-6">
              <div>
                <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 w-fit mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Contextual Thread Condensation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our custom model processes long-form text. It extracts central decisions, blocks spam, and summarizes multi-person discussions into readable digests.
                </p>
              </div>
              <span className="text-xs font-mono text-pink-400/80">NLP Core: Llama-3-Sync-70B</span>
            </div>
            
            {/* Visual element */}
            <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Original Email Thread vs. AI Summary</div>
              <div className="space-y-3">
                <div className="text-[11px] p-2 bg-white/2 rounded border border-white/5 text-slate-400 line-clamp-2">
                  "Let's reschedule the meeting from Tuesday to Wednesday. Also, we need to send the marketing materials to the review team..."
                </div>
                <div className="flex justify-center my-1">
                  <span className="text-purple-400 text-xs font-bold animate-pulse">⚡ Summary Output</span>
                </div>
                <div className="text-[11px] p-2 bg-purple-500/10 rounded border border-purple-500/20 text-slate-200">
                  🗓️ Rescheduled meeting to Wednesday. Send marketing materials to reviews.
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Action Items (Spans 1 col, 1 row) */}
          <div className="rounded-3xl glass-card border border-white/5 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            <div>
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit mb-6">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Action Item Extraction</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Never let an action item slip. LinkMatrix isolates specific task promises, dates, and assignees directly from your casual conversations.
              </p>
            </div>
            
            {/* Tasks list visual */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-xs p-2 rounded bg-white/5 border border-white/5 text-slate-300">
                <span className="w-4 h-4 rounded-md border border-purple-500 flex items-center justify-center mr-2 text-[10px] text-purple-400 font-bold">✓</span>
                <span>Send revised draft to Bob</span>
              </div>
              <div className="flex items-center text-xs p-2 rounded bg-white/5 border border-white/5 text-slate-300">
                <span className="w-4 h-4 rounded-md border border-purple-500 flex items-center justify-center mr-2 text-[10px] text-purple-400 font-bold">✓</span>
                <span>Verify staging servers</span>
              </div>
            </div>
          </div>

          {/* Card 4: Tone Matching (Spans 1 col, 1 row) */}
          <div className="rounded-3xl glass-card border border-white/5 p-6 flex flex-col justify-between overflow-hidden relative group hover:border-emerald-500/30 transition-all duration-300">
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
            <div>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit mb-6">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Contextual Draft Replies</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Generate instant drafts aligned with your history, tone, and goals. Edit, approve, and send in seconds.
              </p>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-full font-semibold">Professional Tone</span>
              <span className="text-[10px] bg-white/5 text-slate-400 px-2.5 py-1 rounded-full">Casual</span>
              <span className="text-[10px] bg-white/5 text-slate-400 px-2.5 py-1 rounded-full">Direct</span>
            </div>
          </div>

          {/* Card 5: Privacy (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 rounded-3xl glass-card border border-white/5 p-6 flex flex-col md:flex-row justify-between items-stretch overflow-hidden relative group hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
            <div className="flex-1 flex flex-col justify-between mb-6 md:mb-0 md:mr-6">
              <div>
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Sandboxed Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Your chat logs contain private metadata. LinkMatrix runs processes through secure sandboxes, adhering to strict SOC2, GDPR, and HIPAA compliance policies.
                </p>
              </div>
              <div className="flex items-center space-x-4 text-slate-300 text-xs">
                <span className="flex items-center"><EyeOff className="w-4 h-4 text-emerald-400 mr-1.5" /> No logs storage</span>
                <span className="flex items-center"><Zap className="w-4 h-4 text-purple-400 mr-1.5" /> E2EE Tunnels</span>
              </div>
            </div>
            
            {/* Visual element: Encryption locks */}
            <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center relative min-h-[120px]">
              <div className="p-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 animate-pulse">
                <Shield className="w-10 h-10" />
              </div>
              <span className="text-slate-400 text-xs font-mono mt-3">AES-256 Secured Sandbox</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
