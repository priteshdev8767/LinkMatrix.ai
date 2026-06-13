"use client";

import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Sandbox",
      price: "$0",
      description: "Ideal for testing and single integration users.",
      features: [
        "Connect 1 feed stream (e.g., Gmail only)",
        "Standard smart summarizing",
        "50 AI processes per day",
        "AES-256 standard encryption",
        "Community support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro Pilot",
      price: "$15",
      period: "/month",
      description: "Perfect for busy professionals and builders.",
      features: [
        "Connect unlimited streams",
        "Deep context summarization core",
        "Unlimited daily AI processes",
        "Automatic action item extraction",
        "Calendar synchronization (Outlook/Google)",
        "Tone-matched autocomplete drafts",
        "Priority Slack support"
      ],
      cta: "Start 7-Day Free Trial",
      popular: true
    },
    {
      name: "Enterprise Core",
      price: "Custom",
      description: "For organizations demanding absolute privacy.",
      features: [
        "Custom sandboxed hosting (on-prem/VPC)",
        "Local open-source model configurations",
        "SOC2 Type II compliance audit reports",
        "Dedicated account strategist",
        "99.9% uptime SLA guarantee",
        "Custom API integrations"
      ],
      cta: "Contact Enterprise",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#030014]/60 border-t border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Transparent, Value-Focused Pricing
          </h2>
          <p className="text-slate-400">
            Start free, upgrade as your communications volume grows. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? "bg-purple-950/20 border-2 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.15)] scale-[1.03] md:scale-[1.05]"
                  : "glass-card border border-white/5 hover:border-white/10"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[11px] font-bold tracking-wider uppercase flex items-center space-x-1.5 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{tier.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{tier.price}</span>
                  {tier.period && <span className="text-sm font-medium text-slate-400 ml-1">{tier.period}</span>}
                </div>

                <div className="border-b border-white/5 mb-6 pb-6" />

                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-300">
                      <Check className="w-4 h-4 text-purple-400 mr-2.5 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 ${
                    tier.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-500 hover:to-pink-400 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
