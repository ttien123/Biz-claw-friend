import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

const segments = [
  { label: "Paid Acquisition (40%)", color: "#deff9a" },
  { label: "Organic & Content (30%)", color: "#84cc16" },
  { label: "Referral Bounties (15%)", color: "#daffde" },
  { label: "Strategic Partnerships (15%)", color: "#1a1a1a", border: true },
];

export default function Slide11_GrowthMix() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          Projected User Growth Mix
        </motion.h2>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-[60px] w-full items-center max-w-[1280px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex justify-center"
            >
              <div
                className="w-[380px] h-[380px] rounded-full"
                style={{
                  background:
                    "conic-gradient(#deff9a 0% 40%, #84cc16 40% 70%, #daffde 70% 85%, #1a1a1a 85% 100%)",
                  border: "10px solid #000",
                  boxShadow: "0 0 60px rgba(222,255,154,0.1)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ul className="space-y-5">
                {segments.map(({ label, color, border }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-4 text-text-body text-[20px]"
                  >
                    <span
                      className="w-5 h-5 rounded shrink-0"
                      style={{
                        background: color,
                        border: border ? "1px solid #deff9a" : "none",
                      }}
                    />
                    {label}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                {/* <h3 className="text-text-primary text-2xl font-bold">
                  Total Reach: 1.5M - 2.0M
                </h3> */}
                <p className="text-text-body text-[20px] mt-2">
                  Estimated CAC: $7.81 - $15.63
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
