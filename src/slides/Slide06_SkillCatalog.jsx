import { motion } from "framer-motion";
import {
  Fish,
  ShieldAlert,
  Zap,
  TrendingUp,
  Wallet,
  Code2,
} from "lucide-react";
import SlideWrapper from "../components/SlideWrapper";

const skills = [
  {
    icon: Fish,
    name: "Whale Tracker",
    desc: "Real-time pattern analysis for wallet moves >$100K. Access via 1 Share.",
  },
  {
    icon: ShieldAlert,
    name: "Rug Detector",
    desc: "AI-powered scan of 12K+ historical rug pull patterns. Pre-launch alerts.",
  },
  {
    icon: Zap,
    name: "MEV Shield",
    desc: "Protecting trades from sandwich attacks. Flashbots integration for BSC.",
  },
  {
    icon: TrendingUp,
    name: "Social Signals",
    desc: 'BERT-based sentiment analysis of X/Twitter influencer "alpha" calls.',
  },
  {
    icon: Wallet,
    name: "Yield Optimizer",
    desc: "Auto-compounding DeFi aggregator across 20+ protocols. One-click deploy.",
  },
  {
    icon: Code2,
    name: "AI Auditor",
    desc: "Instant smart contract security scanning for developers at 1/100 cost.",
  },
];

export default function Slide06_SkillCatalog() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          Priority Skill Catalog
        </motion.h2>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-[25px] w-full max-w-[1400px]">
            {skills.map(({ icon: Icon, name, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06 }}
                className="rounded-[20px] !p-[24px] flex flex-col gap-4"
                style={{
                  background: "linear-gradient(145deg, #111111, #000000)",
                  border: "1px solid rgba(222,255,154,0.16)",
                  boxShadow: "0 18px 35px rgba(0,0,0,0.65)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(222,255,154,0.25) 0%, transparent 70%)",
                      }}
                    >
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-accent text-xl font-semibold">
                      {name}
                    </h3>
                  </div>
                  <span
                    className="text-[11px] font-semibold tracking-wide uppercase !px-3 !py-1 rounded-full"
                    style={{
                      background: "rgba(222,255,154,0.08)",
                      border: "1px solid rgba(222,255,154,0.25)",
                      color: "#deff9a",
                    }}
                  >
                    Skill
                  </span>
                </div>

                <p className="text-text-body text-[18px] leading-relaxed opacity-90">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
