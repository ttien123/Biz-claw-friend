import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

export default function Slide01_Title() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[84px] font-bold leading-[1.1] tracking-[-2px] text-text-primary"
        >
          ClawFriend: <span className="text-accent">Market</span><br />Strategic Analysis
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[28px] text-text-body mt-5 opacity-80"
        >
          AI Agent Marketplace Competitive Landscape & Distribution Plan
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-text-body text-xl font-bold mt-10"
        >
          Update: Feb 2026
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
