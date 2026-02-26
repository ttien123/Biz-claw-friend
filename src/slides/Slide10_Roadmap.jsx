import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

const weeks = [
  {
    week: "Week 1",
    title: "Setup & Launch",
    desc: "OpenClaw PR submission. Core infrastructure finalization. Initial Twitter Ad testing & A/B creative validation.",
  },
  {
    week: "Week 2",
    title: "Scale Winners",
    desc: 'Deploying budget to high-performing ads. First wave of KOL tweets. "Awesome-Skills" Repository launch on GitHub.',
  },
  {
    week: "Week 3",
    title: "Retargeting",
    desc: "Dynamic retargeting for site visitors. Referral Rewards Bounty program. Intensive technical developer blog blitz.",
  },
  {
    week: "Week 4",
    title: "Optimization",
    desc: "Community Content Contest. Performance data analysis. ROI reporting and Phase 2 expansion budget planning.",
  },
];

export default function Slide10_Roadmap() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          GTM Execution Roadmap
        </motion.h2>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-[25px] w-full max-w-[1400px]">
            {weeks.map(({ week, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-2xl !px-5 !py-[30px] text-center"
                style={{
                  background: "linear-gradient(145deg, #111, #000)",
                  border: "1px solid rgba(222,255,154,0.1)",
                }}
              >
                <span
                  className="inline-block text-accent text-sm font-bold tracking-wider uppercase mb-5 px-4 py-1.5 rounded-full"
                  style={{ background: "rgba(222,255,154,0.1)" }}
                >
                  {week}
                </span>
                <h3 className="text-text-primary text-[22px] font-bold mb-4">
                  {title}
                </h3>
                <p className="text-text-body text-[16px] leading-relaxed opacity-80 text-center">
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
