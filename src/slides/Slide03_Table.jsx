import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

const rows = [
  {
    name: "SkillzWave",
    focus: "Skills marketplace",
    metrics: "42,000+ skills, 22+ platforms",
    model: "Subscription ($299–399/mo enterprise)",
    strength: "Massive skills library, Multi-platform",
    weakness: "No agent trading, No bonding curve",
  },
  {
    name: "Heurist Mesh",
    focus: "Web3-native agents",
    metrics: "42 agents, 25 data providers, 100 tools",
    model: "API access + pay-per-use (x402)",
    strength: "Web3 specialized, 70% efficiency gain",
    weakness: "Limited to Web3 use cases, Small agent pool",
  },
  {
    name: "ClawMarket",
    focus: "Skills marketplace",
    metrics: "56 skills, 22K+ installs (top skill)",
    model: "On-chain escrow (USDC)",
    strength: "Crypto-native, Autonomous purchasing",
    weakness: "No social layer, Small ecosystem",
  },
  {
    name: "Virtuals Protocol",
    focus: "Agent tokenization",
    metrics: "2,200+ agents, $12M+ volume",
    model: "1% trading fee (70% creator, 30% protocol)",
    strength: "Large agent pool, Proven volume",
    weakness: "Complex tokenization, Volume concentrated in top agents",
  },
  {
    name: "Playhouse",
    focus: "Business automation",
    metrics: "500+ agents",
    model: "15–30% commission + subscriptions",
    strength: "Enterprise focus, Quality assurance",
    weakness: "High commission, B2B only",
  },
  {
    name: "Agent.market",
    focus: "Performance-based",
    metrics: "Live benchmarks",
    model: "Pay-for-performance",
    strength: "Quality focus, No payment for failures",
    weakness: "Limited use cases, New model (unproven)",
  },
];

const headers = [
  "Competitor",
  "Focus Area",
  "Scale / Metrics",
  "Monetization Model",
  "Strengths",
  "Weaknesses",
];

export default function Slide03_Table() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          Market Benchmarking Matrix
        </motion.h2>

        <div className="flex-1 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden max-w-[1400px]"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      className="text-left text-accent font-bold text-[20px] !px-5 !py-5"
                      style={{
                        background: "rgba(222,255,154,0.05)",
                        borderBottom: "1px solid rgba(222,255,154,0.1)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    style={{ borderBottom: "1px solid rgba(222,255,154,0.1)" }}
                  >
                    <td
                      className="!px-5 !py-5 text-[20px] leading-relaxed"
                      style={{
                        color: r.highlight ? "#deff9a" : "#daffde",
                        fontWeight: r.highlight ? 700 : 400,
                      }}
                    >
                      {r.name}
                    </td>
                    <td className="!px-5 !py-5 text-[20px] text-text-body leading-relaxed">
                      {r.focus}
                    </td>
                    <td className="!px-5 !py-5 text-[20px] text-text-body leading-relaxed">
                      {r.metrics}
                    </td>
                    <td className="!px-5 !py-5 text-[20px] text-text-body leading-relaxed">
                      {r.model}
                    </td>
                    <td className="!px-5 !py-5 text-[20px] text-text-body leading-relaxed">
                      {r.strength}
                    </td>
                    <td className="!px-5 !py-5 text-[20px] text-text-body leading-relaxed">
                      {r.weakness}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
