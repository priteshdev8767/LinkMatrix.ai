"use client";

import { useState } from "react";
import { Sparkles, Bot, Calendar, MessageSquare, Mail, RefreshCw, CheckCircle2, ChevronRight, Cpu } from "lucide-react";

interface Scenario {
  id: string;
  source: string;
  sourceType: "gmail" | "whatsapp" | "telegram" | "outlook";
  sender: string;
  timestamp: string;
  avatarText: string;
  subject?: string;
  rawText: string;
  aiOutput: {
    summary: string[];
    actionItems: { text: string; done: boolean }[];
    suggestedReply?: string;
  };
}

export default function InteractiveDemo() {
  const [activeScenario, setActiveScenario] = useState<string>("gmail-chaos");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(true);

  const scenarios: Scenario[] = [
    {
      id: "gmail-chaos",
      source: "Gmail",
      sourceType: "gmail",
      sender: "Marcus Vance (Operations)",
      avatarText: "MV",
      timestamp: "Today, 10:24 AM",
      subject: "PROJECT UPDATE: Staging issues and Monday Q3 kickoff slide requirements",
      rawText: "Hey guys,\n\nWe are facing some serious issues with our staging database. The seed scripts crashed this morning and Justin is currently investigating. We need to make sure the data schemas align with the v2.4 spec. Can someone double-check that?\n\nAlso, for the Monday Q3 Kickoff meeting at 9:00 AM, I need the ops slides finalized. Sarah, please upload the financial metrics by Friday EOD. David, I need the support ticket count analysis. We will do a quick run-through on Friday at 4 PM to ensure everything is cohesive.\n\nLet's get this staging database solved first though. Let me know when it's resolved.",
      aiOutput: {
        summary: [
          "Staging database is currently down due to crashed seed scripts; Justin is investigating.",
          "Monday Q3 kickoff meeting is scheduled for 9:00 AM.",
          "Ops slides review is set for Friday at 4:00 PM."
        ],
        actionItems: [
          { text: "Align database schema with v2.4 spec (Priority: High)", done: false },
          { text: "Upload Q3 financial metrics slides (Assign: Sarah, due Friday EOD)", done: false },
          { text: "Compile support ticket count analysis (Assign: David, due Friday EOD)", done: false },
          { text: "Attend Friday slides run-through (Time: 4:00 PM)", done: false }
        ],
        suggestedReply: "Hi Marcus, Justin is resolving the staging database seed issue now. I have scheduled the slides run-through on the team calendar for Friday at 4:00 PM. Sarah and David are notified about the slide assets due Friday EOD."
      }
    },
    {
      id: "whatsapp-group",
      source: "WhatsApp",
      sourceType: "whatsapp",
      sender: "Product Launch Team (Group)",
      avatarText: "PL",
      timestamp: "Today, 11:05 AM",
      rawText: "[11:01] Sarah: Hey team, we need to finalize the landing page. The launch is in 48 hours.\n[11:02] David: The copywriting is done. Need @Justin to hook up the newsletter database schema.\n[11:03] Justin: Sure, I can get that database table created. Give me an hour.\n[11:04] Sarah: Perfect. Once Justin is done, I'll link the API and test. We also need to add a meta description for SEO. Who is writing that?\n[11:05] David: I can write the SEO metadata and meta description by 2 PM.",
      aiOutput: {
        summary: [
          "Product launch is scheduled in 48 hours.",
          "Justin is setting up the newsletter database schema table within the hour.",
          "David is writing the landing page SEO metadata by 2:00 PM today.",
          "Sarah will link the API and run end-to-end launch tests once the database is ready."
        ],
        actionItems: [
          { text: "Hook up newsletter database schema (Assign: Justin, due in 1 hour)", done: false },
          { text: "Write landing page SEO metadata (Assign: David, due 2:00 PM)", done: false },
          { text: "Integrate API and conduct launch testing (Assign: Sarah)", done: false }
        ],
        suggestedReply: "Sounds good, guys. Justin is creating the newsletter database tables now, and David will have the SEO metadata ready by 2 PM. Sarah will commence testing immediately after. Let's keep this momentum!"
      }
    },
    {
      id: "telegram-channel",
      source: "Telegram",
      sourceType: "telegram",
      sender: "Security Alerts Feed",
      avatarText: "SA",
      timestamp: "Today, 11:45 AM",
      rawText: "CRITICAL SECURITY BULLETIN: CVE-2026-9284 (High CVSS 8.4)\n\nAn authentication bypass vulnerability has been identified in standard OAuth middleware containers running v4.2.1 and below. Attackers can forge JWT signatures under specific edge configurations. All applications running OAuth middleware packages must update to container image v4.2.2 immediately. Patch details: security.auth-middleware.org/cve-2026-9284.",
      aiOutput: {
        summary: [
          "Critical Auth bypass vulnerability (CVE-2026-9284, CVSS 8.4) discovered in OAuth middleware v4.2.1 and below.",
          "Vulnerability permits forged JWT signatures under specific conditions.",
          "Immediate upgrade to container image v4.2.2 is required."
        ],
        actionItems: [
          { text: "Audit auth containers to check for OAuth middleware versions <= 4.2.1 (Critical)", done: false },
          { text: "Rebuild and deploy auth server using container image v4.2.2 (Critical)", done: false },
          { text: "Review patch bulletin details: security.auth-middleware.org/cve-2026-9284", done: false }
        ]
      }
    }
  ];

  const handleScenarioChange = (id: string) => {
    setActiveScenario(id);
    setIsProcessing(true);
    setShowResult(false);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 850);
  };

  const handleReProcess = () => {
    setIsProcessing(true);
    setShowResult(false);
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 850);
  };

  const activeData = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  const getSourceIcon = (type: string) => {
    switch (type) {
      case "gmail":
        return <Mail className="w-4 h-4 text-red-400" />;
      case "whatsapp":
        return <MessageSquare className="w-4 h-4 text-emerald-400" />;
      case "telegram":
        return <Bot className="w-4 h-4 text-sky-400" />;
      default:
        return <Calendar className="w-4 h-4 text-blue-400" />;
    }
  };

  const getSourceBg = (type: string) => {
    switch (type) {
      case "gmail":
        return "border-red-500/20 bg-red-500/5";
      case "whatsapp":
        return "border-emerald-500/20 bg-emerald-500/5";
      case "telegram":
        return "border-sky-500/20 bg-sky-500/5";
      default:
        return "border-blue-500/20 bg-blue-500/5";
    }
  };

  return (
    <section id="playground" className="py-20 bg-black/60 relative">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-300 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Try the AI Agent Live
          </h2>
          <p className="text-slate-400">
            Select a raw communications feed scenario below and see how LinkMatrix AI processes chaotic text streams into clear, actionable briefs.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Choose Scenarios */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Select a Feed Source</h3>
            
            {scenarios.map((scen) => {
              const isActive = activeScenario === scen.id;
              return (
                <button
                  key={scen.id}
                  onClick={() => handleScenarioChange(scen.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3.5 ${
                    isActive
                      ? "bg-white/5 border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.1)] text-white"
                      : "bg-[#030014]/40 border-white/5 text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl bg-white/5 shrink-0`}>
                    {getSourceIcon(scen.sourceType)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">{scen.source}</span>
                      <span className="text-[10px] text-slate-500">{scen.timestamp}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-200 truncate">{scen.sender}</h4>
                    {scen.subject && (
                      <p className="text-xs text-slate-400 truncate mt-0.5">{scen.subject}</p>
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 self-center text-slate-500 transition-transform ${isActive ? "rotate-90 text-purple-400" : ""}`} />
                </button>
              );
            })}

            <div className="p-4 rounded-2xl border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-center text-xs text-slate-500 py-8">
              <span>Need to connect your own?</span>
              <a href="#pricing" className="text-purple-400 hover:underline font-semibold mt-1">Get Started Free</a>
            </div>
          </div>

          {/* Right Panel: Simulated Live Console */}
          <div className="lg:col-span-8 glass-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            {/* Console topbar */}
            <div className="bg-white/3 border-b border-white/5 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">LinkMatrix Engine v1.0.8</span>
              </div>
              <button 
                onClick={handleReProcess}
                disabled={isProcessing}
                className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-mono disabled:opacity-50 transition-all"
              >
                <RefreshCw className={`w-3 h-3 ${isProcessing ? "animate-spin text-purple-400" : ""}`} />
                <span>Re-Process</span>
              </button>
            </div>

            {/* Console content */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5 min-h-[420px]">
              
              {/* Left Column: Raw Message Input */}
              <div className="p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Incoming Stream</span>
                    <span className="text-[10px] text-slate-500 font-mono">Size: {activeData.rawText.length} bytes</span>
                  </div>
                  
                  {/* Sender details */}
                  <div className="flex items-center space-x-3 mb-4 p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center font-bold text-sm text-purple-300">
                      {activeData.avatarText}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{activeData.sender}</div>
                      <div className="text-[10px] text-slate-400">{activeData.timestamp}</div>
                    </div>
                  </div>

                  {/* Body text */}
                  {activeData.subject && (
                    <div className="text-xs font-bold text-slate-200 mb-2 border-b border-white/5 pb-2">
                      Subject: {activeData.subject}
                    </div>
                  )}
                  <p className="text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-[240px] overflow-y-auto pr-2">
                    {activeData.rawText}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Routing: Local Sandbox</span>
                  <span className="text-emerald-400">Secure TLS</span>
                </div>
              </div>

              {/* Right Column: AI Output */}
              <div className="p-6 bg-purple-950/5 relative flex flex-col justify-between">
                {/* Processing Overlay */}
                {isProcessing && (
                  <div className="absolute inset-0 bg-[#030014]/90 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                    <div className="relative flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
                      <Bot className="w-5 h-5 text-purple-400 absolute" />
                    </div>
                    <span className="text-xs font-mono text-purple-300 animate-pulse">Running NLP Model...</span>
                  </div>
                )}

                {showResult && (
                  <div className="space-y-6 flex-1">
                    {/* Summary */}
                    <div>
                      <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider font-mono mb-2.5 flex items-center">
                        <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                        Smart Summary
                      </div>
                      <ul className="space-y-2">
                        {activeData.aiOutput.summary.map((sum, index) => (
                          <li key={index} className="text-xs text-slate-200 leading-normal flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>{sum}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tasks */}
                    <div>
                      <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider font-mono mb-2.5 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                        Extracted Tasks
                      </div>
                      <div className="space-y-2">
                        {activeData.aiOutput.actionItems.map((act, index) => (
                          <div 
                            key={index}
                            className="flex items-start text-xs p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-200 hover:border-purple-500/20 hover:bg-white/8 transition-all"
                          >
                            <input 
                              type="checkbox" 
                              defaultChecked={act.done}
                              className="w-4 h-4 rounded border-white/10 bg-black text-purple-500 focus:ring-purple-500 focus:ring-offset-black mr-2.5 mt-0.5 accent-purple-500 cursor-pointer"
                            />
                            <span>{act.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Autocomplete Response */}
                    {activeData.aiOutput.suggestedReply && (
                      <div>
                        <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider font-mono mb-2.5 flex items-center">
                          <Cpu className="w-3.5 h-3.5 mr-1.5" />
                          Suggested AI Response
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-slate-200 font-mono leading-relaxed relative">
                          <p>{activeData.aiOutput.suggestedReply}</p>
                          <div className="mt-3 flex justify-end space-x-2">
                            <button className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-[10px] font-bold border border-emerald-500/20 transition-all">
                              Copy Draft
                            </button>
                            <button className="px-2.5 py-1 rounded bg-emerald-500 text-black hover:bg-emerald-400 text-[10px] font-bold transition-all">
                              Send Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Accuracy Score: 99.4%</span>
                  <span>Tokens: 312 in / 148 out</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
