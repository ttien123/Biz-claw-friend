import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";

export default function Slide05_SectionSkills() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 0.6 }}
          className="border-none h-1 mb-8"
          style={{ background: "#deff9a" }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[72px] font-bold text-text-primary"
        >
          Skill <span className="text-accent">Research</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[28px] text-text-body mt-5 opacity-80"
        >
          High-Demand Capabilities for the AI Economy
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
