import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

const rows = [
  {
    name: "SkillzWave",
    focus: "Skills library",
    metrics: "42K+ Skills",
    model: "Subscription",
    gap: "No trading layer",
  },
  {
    name: "Virtuals",
    focus: "Tokenization",
    metrics: "$12M+ Volume",
    model: "1% Trade Fee",
    gap: "No skill market",
  },
  {
    name: "Heurist",
    focus: "Web3 Agents",
    metrics: "100+ Tools",
    model: "Pay-per-use",
    gap: "Chain limited",
  },
  {
    name: "Playhouse",
    focus: "B2B Automation",
    metrics: "$2.3M Savings",
    model: "Commission",
    gap: "Retail focus",
  },
  {
    name: "ClawFriend",
    focus: "All-in-One",
    metrics: "New (BSC)",
    model: "5% Perpetual",
    gap: "Early Adoption",
    highlight: true,
  },
];

const headers = [
  "Platform",
  "Core Focus",
  "Metrics (2026)",
  "Model",
  "Key Gap",
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
            className="w-full rounded-xl overflow-hidden max-w-[1200px]"
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
                      {r.gap}
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
