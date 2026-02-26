import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

const points = [
  {
    bold: "BSC Dominance:",
    text: "Capturing the high-velocity, low-gas retail ecosystem of BNB Smart Chain.",
  },
  {
    bold: "Social-Native:",
    text: "Direct Twitter integration for viral discovery (Friend.tech mechanics).",
  },
  {
    bold: "Integrated Economy:",
    text: "Only platform combining Bonding Curve Trading + Holder-Gated Skills.",
  },
  {
    bold: "Best Economics:",
    text: "5% creator fees vs industry standard 0.7-1%.",
  },
];

export default function Slide04_Strategy() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          The Strategic Advantage
        </motion.h2>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-[60px] w-full items-center max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-accent text-[32px] font-bold mb-5">
                The Integrated Flywheel
              </h3>
              <ul className="space-y-4">
                {points.map(({ bold, text }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-text-body text-[20px] leading-relaxed list-disc ml-5"
                  >
                    <strong className="text-text-primary">{bold}</strong> {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-[400px] rounded-3xl overflow-hidden"
              style={{ border: "1px solid #deff9a" }}
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, rgba(222,255,154,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(132,204,22,0.1) 0%, transparent 50%), linear-gradient(135deg, #111 0%, #000 100%)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                  <div className="text-[64px]">🦞</div>
                  <div className="flex items-center gap-3">
                    {["Trading", "Skills", "Social"].map((label, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-accent font-bold text-lg">
                          {label}
                        </span>
                        {i < 2 && (
                          <span className="text-accent/40 text-2xl">↔</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-text-muted text-sm">
                    Built on BNB Smart Chain
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
