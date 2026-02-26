import { motion } from "framer-motion";
import { Twitter, Globe } from "lucide-react";
import SlideWrapper from "../components/SlideWrapper";

export default function Slide12_QA() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-[100px] font-bold text-text-primary"
        >
          <span className="text-accent">Q</span>&<span className="text-accent">A</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[28px] text-text-body mt-5 opacity-80"
        >
          Thank you for your attention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-10 mt-16"
        >
          <p className="text-text-body text-[20px] flex items-center gap-2.5">
            <Twitter size={20} className="text-accent" />
            @ClawFriend_AI
          </p>
          <p className="text-text-body text-[20px] flex items-center gap-2.5">
            <Globe size={20} className="text-accent" />
            clawfriend.io
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
