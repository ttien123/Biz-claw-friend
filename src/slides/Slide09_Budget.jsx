import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

const bars = [
  { label: "Twitter / X Ads", pct: 50, amount: "$5,000" },
  { label: "Crypto KOLs", pct: 30, amount: "$3,000" },
  { label: "Reddit Campaigns", pct: 15, amount: "$1,500" },
  { label: "Community Bounties", pct: 5, amount: "$500" },
];

export default function Slide09_Budget() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          Budget Allocation ($10,000 Total)
        </motion.h2>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[15px] w-full max-w-[1280px]">
            {bars.map(({ label, pct, amount }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-5"
              >
                <span className="w-[250px] text-right text-text-body text-[20px] font-medium shrink-0">
                  {label}
                </span>
                <div
                  className="flex-1 h-[35px] rounded-[10px] overflow-hidden"
                  style={{ background: "#222" }}
                >
                  <motion.div
                    className="h-full rounded-[10px]"
                    style={{
                      background: "linear-gradient(90deg, #deff9a, #84cc16)",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{
                      delay: 0.4 + i * 0.12,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <span className="text-text-body text-[20px] w-[80px] shrink-0">
                  {amount}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-[60px] max-w-[1280px] !mt-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-text-body text-[20px] leading-relaxed text-center"
            >
              <strong className="text-text-primary">Paid Acquisition:</strong>{" "}
              Targeting followers of Nansen, DefiLlama, and Arkham with direct
              CAC of $16.67.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-text-body text-[20px] leading-relaxed text-center"
            >
              <strong className="text-text-primary">Organic Leverage:</strong>{" "}
              180K+ GitHub stars via OpenClaw integration and technical
              developer blogs.
            </motion.p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
