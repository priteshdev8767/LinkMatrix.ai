"use client";

import { useState } from "react";
import { Mail, MessageSquare, Bot, Calendar, Sparkles, CheckCircle2, Shield } from "lucide-react";

interface IntegrationDetail {
  id: string;
  name: string;
  icon: any;
  colorClass: string;
  bgGlow: string;
  borderColor: string;
  features: string[];
  mockTitle: string;
  mockContent: string;
  mockAgentOutput: {
    summary: string[];
    actionItems: string[];
  };
}

export default function Integrations() {
  const [activeTab, setActiveTab] = useState<string>("gmail");

  const integrations: IntegrationDetail[] = [
    {
      id: "gmail",
      name: "Gmail",
      icon: Mail,
      colorClass: "text-[#ea4335]",
      bgGlow: "rgba(234, 67, 53, 0.05)",
      borderColor: "hover:border-[#ea4335]/30",
      features: [
        "Thread summarizing (condense 20+ emails)",
        "Priority inbox tagging based on context",
        "Automated custom reply drafting",
        "Attachments extraction and categorization"
      ],
      mockTitle: "Client Onboarding Feedback",
      mockContent: "From: mark@hypergrowth.co\nSubject: Onboarding roadmap review\n\nHey team, we've reviewed the onboarding guide you sent. Overall it looks solid, but we need some changes. First, the setup steps in Chapter 3 are too complex for our marketing team—can we simplify? Second, we need API keys by Wednesday so we can start testing. Third, the billing timeline in the contract needs alignment; we prefer quarterly instead of monthly. Let's hop on a call this Friday to finalize.",
      mockAgentOutput: {
        summary: [
          "Hypergrowth wants changes to Chapter 3 onboarding steps for simpler setup.",
          "Billing preference stated as quarterly (contract current draft: monthly).",
          "A alignment call is requested for this Friday."
        ],
        actionItems: [
          "Simplify setup instructions in Chapter 3 of onboarding guide (Assign: Tech team).",
          "Generate and send API keys by Wednesday.",
          "Update contract billing clause to quarterly.",
          "Schedule feedback call with Mark for Friday."
        ]
      }
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: MessageSquare,
      colorClass: "text-[#25d366]",
      bgGlow: "rgba(37, 211, 102, 0.05)",
      borderColor: "hover:border-[#25d366]/30",
      features: [
        "Unread chat group summaries",
        "Mentions and keyword alerts (@yourname)",
        "Task list generation from conversations",
        "Quiet hour filtering (mute non-essential chats)"
      ],
      mockTitle: "Dev & Ops Sync Chat",
      mockContent: "[14:20] Alex: @Justin did we deploy the hotfix for the signup page?\n[14:21] Justin: Not yet, still testing in staging. I'll push it in 30 mins.\n[14:22] Alex: Okay, we also need to update the Terms of Service links on the footer. The marketing team said it's pointing to the 2025 version.\n[14:24] Sarah: I'll handle the ToS link update. I'll get it live by 5 PM.\n[14:25] Alex: Great. Let me know when both are live.",
      mockAgentOutput: {
        summary: [
          "Justin is testing signup hotfix, scheduled to deploy in 30 minutes.",
          "Sarah is updating the footer Terms of Service links to the latest version by 5:00 PM."
        ],
        actionItems: [
          "Verify signup hotfix deployment (Assign: Justin, due in 30 mins).",
          "Update footer Terms of Service links to current version (Assign: Sarah, due 5:00 PM)."
        ]
      }
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: Bot,
      colorClass: "text-[#0088cc]",
      bgGlow: "rgba(0, 136, 204, 0.05)",
      borderColor: "hover:border-[#0088cc]/30",
      features: [
        "Channel feed digest consolidation",
        "Shared documents & links archiver",
        "Alert routing based on custom rules",
        "Group message transcription & summary"
      ],
      mockTitle: "Founder Community Feed",
      mockContent: "Telegram Channel: SaaS Innovators\nPost by @crypto_dev: We just released our open-source React boilerplates with next-gen caching configurations. Read the codebase architecture guide here: github.com/saas-innovators/next-boilerplate. We are hosting a live Q&A space tomorrow at 6 PM UTC to discuss Next.js Server Actions scalability. Join using link: t.me/saas_live_space.",
      mockAgentOutput: {
        summary: [
          "SaaS Innovators released open-source React/Next boilerplates on GitHub.",
          "Live Q&A space scheduled for tomorrow at 6:00 PM UTC discussing scalability."
        ],
        actionItems: [
          "Star and bookmark GitHub repository: github.com/saas-innovators/next-boilerplate.",
          "Set calendar reminder for Next.js scalability Q&A space (Tomorrow, 6:00 PM UTC)."
        ]
      }
    },
    {
      id: "outlook",
      name: "Outlook",
      icon: Calendar,
      colorClass: "text-[#0078d4]",
      bgGlow: "rgba(0, 120, 212, 0.05)",
      borderColor: "hover:border-[#0078d4]/30",
      features: [
        "Calendar schedule optimizing",
        "Pre-meeting preparation briefs",
        "Automated out-of-office summaries",
        "Corporate emails priority analysis"
      ],
      mockTitle: "Bi-Weekly QBR Prep",
      mockContent: "From: vp_operations@enterprise.corp\nSubject: Preparing slides for QBR meeting\n\nHi everyone, our Quarterly Business Review (QBR) is scheduled for next Monday at 9 AM. I need the operations dashboard reports updated. Linda, please compile the churn metrics. Robert, I need the Q2 infrastructure spend analysis. Please submit all slide decks by Thursday EOD so we can review.",
      mockAgentOutput: {
        summary: [
          "Quarterly Business Review (QBR) meeting confirmed for next Monday, 9:00 AM.",
          "All operations reports and slide decks must be finalized by Thursday EOD."
        ],
        actionItems: [
          "Submit infrastructure spend analysis (Assign: Robert, due Thursday EOD).",
          "Compile churn metrics slide deck (Assign: Linda, due Thursday EOD)."
        ]
      }
    }
  ];

  const activeData = integrations.find((i) => i.id === activeTab) || integrations[0];
  const IconComponent = activeData.icon;

  return (
    <section id="integrations" className="py-20 bg-black/40 border-y border-white/5 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Unified Integrations
          </h2>
          <p className="text-slate-400">
            LinkMatrix seamlessly connects to the applications you rely on. Your communications are routed through a highly secure local sandbox for AI analysis.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {integrations.map((item) => {
            const ItemIcon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{ backgroundColor: isActive ? item.bgGlow : "transparent" }}
                className={`flex items-center justify-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.1)] text-white font-bold"
                    : "border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <ItemIcon className={`w-5 h-5 ${item.colorClass}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel: Info & Feature bullets */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border border-white/5">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl bg-white/5 ${activeData.colorClass}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{activeData.name} Integration</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Connect your {activeData.name} stream in under 30 seconds. LinkMatrix monitors the connection and summarizes threads instantly.
              </p>
              
              <ul className="space-y-4">
                {activeData.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mr-3 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-xs text-slate-400">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              <span>AES-256 end-to-end encryption. LinkMatrix never stores your passwords.</span>
            </div>
          </div>

          {/* Right panel: Active Interactive Simulation */}
          <div className="lg:col-span-7 rounded-2xl glass-card border border-white/5 overflow-hidden flex flex-col">
            {/* Simulation Header */}
            <div className="bg-white/3 border-b border-white/5 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono text-slate-400">Live AI Connection Simulator</span>
              </div>
              <span className="text-xs bg-white/5 text-slate-300 px-2.5 py-1 rounded-full font-mono">
                {activeData.name.toLowerCase()}_stream.json
              </span>
            </div>

            {/* Simulation Grid */}
            <div className="p-6 flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Message Box */}
              <div className="flex flex-col h-full">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex justify-between">
                  <span>Raw Incoming Content</span>
                  <span className="text-slate-500 font-mono">Input</span>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] leading-relaxed text-slate-300 overflow-y-auto max-h-[280px]">
                  <strong className="text-slate-100">{activeData.mockTitle}</strong>
                  <div className="border-b border-white/5 my-2" />
                  <p className="whitespace-pre-wrap">{activeData.mockContent}</p>
                </div>
              </div>

              {/* AI Agent Output Box */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>AI Analysis Output</span>
                  </div>
                  
                  {/* Summary Block */}
                  <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 mb-4">
                    <h4 className="text-[11px] font-bold text-purple-300 uppercase tracking-wider mb-2">Smart Summary</h4>
                    <ul className="space-y-1.5">
                      {activeData.mockAgentOutput.summary.map((sum, index) => (
                        <li key={index} className="text-xs text-slate-200 leading-normal">
                          • {sum}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tasks Block */}
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <h4 className="text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-2">Extracted Tasks</h4>
                    <ul className="space-y-1.5">
                      {activeData.mockAgentOutput.actionItems.map((act, index) => (
                        <li key={index} className="text-xs text-slate-200 leading-normal flex items-start">
                          <span className="text-blue-400 mr-2 font-bold">✓</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
