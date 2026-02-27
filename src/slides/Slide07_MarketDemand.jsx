import { motion } from "framer-motion";
import { Radar, ShieldAlert, LineChart } from "lucide-react";
import SlideWrapper from "../components/SlideWrapper";

const topSkills = [
  {
    name: "Whale Alert & Pattern Analyzer",
    tag: "Skill 01 · Trading Alpha",
    Icon: Radar,
    purpose:
      "Real-time tracking of top whale wallets across ETH, BSC, Base, and Solana to surface early entry signals.",
    need: "Retail traders spend 2–4h/day tracking whales manually or pay $100–$800/month for tools like Nansen.",
    feasibility:
      "All data is available via Etherscan/BSCScan-style APIs + Telegram/Discord alerts; similar tools already run in production.",
  },
  {
    name: "Rug Pull Detector — AI Pattern Recognition",
    tag: "Skill 02 · Security",
    Icon: ShieldAlert,
    purpose:
      "Score new tokens 0–100 for rug risk using on-chain, contract, liquidity, and social signals.",
    need: "Crypto lost $3.1B to rug pulls in 2025; traders need a fast pre-trade risk check instead of 1–2h manual research.",
    feasibility:
      "12K+ historical rugs (RugFlags, community datasets) + static analysis tools make the ML model and heuristics achievable.",
  },
  {
    name: "DeFi Yield Optimizer & Auto-Compounder",
    tag: "Skill 03 · Yield",
    Icon: LineChart,
    purpose:
      "Aggregate APY across 20+ protocols and suggest optimal reallocations with gas-aware thresholds.",
    need: "DeFi farmers with $20K–$200K portfolios waste hours monitoring APY and overpay gas when moving funds manually.",
    feasibility:
      "DeFiLlama/DeBank APIs, existing auto-compound vaults (Yearn, Beefy) and batch transactions prove the stack is realistic.",
  },
];

export default function Slide07_MarketDemand() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          Top 3 High-Conviction Skills
        </motion.h2>

        <div className="flex-1 flex flex-col justify-center relative items-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(222,255,154,0.12), transparent 55%)",
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative text-text-body text-[20px] leading-relaxed max-w-[960px] !mb-10 text-center"
          >
            Each skill below is backed by{" "}
            <span className="text-text-primary font-semibold">
              clear use cases, proven pain points, and realistic tech stack
            </span>
            — answering three questions: what it does, why users need it, and
            how feasible it is to ship.
          </motion.p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] w-full">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1 }}
                className="rounded-2xl !p-6 flex flex-col h-full"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(0,0,0,0.9))",
                  border: "1px solid rgba(222,255,154,0.18)",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(222,255,154,0.08)",
                      border: "1px solid rgba(222,255,154,0.4)",
                    }}
                  >
                    <skill.Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-text-body/70 !mb-1">
                      {skill.tag}
                    </p>
                    <h3 className="text-accent text-[20px] font-bold leading-snug min-h-[55px]">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                <p className="text-text-body text-[18px] leading-relaxed !mb-3">
                  <span className="font-semibold text-text-primary">
                    What it does:
                  </span>{" "}
                  {skill.purpose}
                </p>
                <p className="text-text-body text-[18px] leading-relaxed !mb-3">
                  <span className="font-semibold text-text-primary">
                    Why it&apos;s needed:
                  </span>{" "}
                  {skill.need}
                </p>
                <p className="text-text-body text-[18px] leading-relaxed !mt-auto">
                  <span className="font-semibold text-text-primary">
                    Feasibility:
                  </span>{" "}
                  {skill.feasibility}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
