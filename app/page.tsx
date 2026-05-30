"use client";
import { useState } from "react";

const BIAS_WORDS: Record<string, string> = {
  ninja: "expert",
  rockstar: "skilled professional",
  guru: "specialist",
  dominant: "confident",
  aggressive: "driven",
  competitive: "goal-oriented",
  manpower: "workforce",
  mankind: "humankind",
  chairman: "chairperson",
  salesman: "salesperson",
  policeman: "police officer",
  fireman: "firefighter",
  stewardess: "flight attendant",
  "young and energetic": "motivated",
  "digital native": "tech-savvy",
  "recent graduate": "entry-level candidate",
  "culture fit": "culture add",
  "strong english": "clear communicator",
  "native speaker": "fluent speaker",
};

function scanText(text: string) {
  const lower = text.toLowerCase();
  return Object.entries(BIAS_WORDS).filter(([word]) => lower.includes(word));
}

export default function Page() {
  const [text, setText] = useState("");
  const results = text.trim() ? scanText(text) : [];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">HR Tool</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Detect Biased Language<br />in Job Descriptions</h1>
        <p className="text-[#8b949e] text-lg mb-10">Paste your job post below and instantly identify words that discourage diverse candidates — with inclusive alternatives.</p>
        <textarea
          className="w-full h-44 bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-[#c9d1d9] text-sm resize-none focus:outline-none focus:border-[#58a6ff] placeholder-[#484f58]"
          placeholder="Paste your job description here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        {text.trim() && (
          <div className="mt-6 text-left">
            {results.length === 0 ? (
              <div className="bg-[#0f2a1a] border border-[#238636] rounded-lg p-4 text-[#3fb950] font-medium">No biased language detected. Great job!</div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-[#8b949e] mb-2">{results.length} issue{results.length > 1 ? "s" : ""} found:</p>
                {results.map(([word, alt]) => (
                  <div key={word} className="bg-[#1a1208] border border-[#9e6a03] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-[#d29922] font-semibold">&ldquo;{word}&rdquo;</span>
                    <span className="text-[#8b949e] text-sm">Replace with: <span className="text-[#58a6ff] font-medium">{alt}</span></span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Unlimited scans, full word library, CSV export</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {["500+ bias word database","Gender & age bias detection","Inclusive alternatives","Bulk job description upload","Priority support"].map(f => (
              <li key={f} className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span>{f}</li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >Get Started</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            ["How does the bias scanner work?", "We maintain a curated list of gender-coded, age-biased, and exclusionary words commonly found in job descriptions. Your text is scanned client-side in real time against this list."],
            ["Is my job description data stored?", "No. All scanning happens in your browser. We never send your text to any server."],
            ["Can I cancel my subscription anytime?", "Yes. You can cancel at any time from your Lemon Squeezy customer portal with no questions asked."]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
