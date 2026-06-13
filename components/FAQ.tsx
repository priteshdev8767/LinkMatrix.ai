"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does LinkMatrix protect my privacy and chat data?",
      answer: "Privacy is our primary core principle. LinkMatrix operates on a sandboxed local-first architecture. When you connect streams, authentication details and message transcripts are processed via end-to-end encrypted tunnels. We do not persist raw message logs on our servers. You can also configure LinkMatrix to utilize fully local models, ensuring no text data ever leaves your computer."
    },
    {
      question: "Does it support Telegram channels or just direct messages?",
      answer: "Both! LinkMatrix can hook into direct chats, group streams, and public channels. You can write custom routing filters, such as: 'Only summarize crypto channels once every 6 hours' or 'Alert me immediately if I am mentioned in the Product group chat'."
    },
    {
      question: "Can it auto-send replies, or does it only draft them?",
      answer: "By default, LinkMatrix operates in 'Co-Pilot Mode' where it pre-drafts contextual replies and presents them for your approval, edit, and click-to-send. For trusted streams, you can enable 'Auto-Agent Mode' with custom rule constraints, e.g., auto-replying to calendar confirmations or standard out-of-office FAQs."
    },
    {
      question: "What LLM models power the summarization and task extraction?",
      answer: "We utilize our fine-tuned Llama-3-Sync-70B model for deep context summarization and task isolation. It has been trained specifically on communication logs, emails, and timeline management data, allowing it to achieve 99.4% accuracy on task extraction compared to generic models. You can also hook up your own OpenAI or Anthropic API keys."
    },
    {
      question: "Is there support for Outlook corporate accounts (Exchange)?",
      answer: "Yes, LinkMatrix supports personal Outlook.com accounts as well as corporate Exchange, Microsoft 365, and Azure AD OAuth integrations, maintaining compliance with standard corporate security permissions."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-black/40 border-t border-white/5 relative">
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Have questions about integrations, security, or capabilities? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white/5 border-purple-500/30"
                    : "glass-card border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-white focus:outline-none"
                >
                  <span className="text-sm font-bold sm:text-base">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-purple-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                  )}
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-5 text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
