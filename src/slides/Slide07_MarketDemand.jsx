import { motion } from "framer-motion";
import SlideWrapper from "../components/SlideWrapper";
import AnimatedCounter from "../components/AnimatedCounter";

export default function Slide07_MarketDemand() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[48px] font-bold text-text-primary mb-10"
          style={{ borderLeft: "6px solid #deff9a", paddingLeft: 20 }}
        >
          Validating Market Demand
        </motion.h2>

        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-[60px] w-full items-center max-w-[1280px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p
                className="text-[140px] font-bold leading-none"
                style={{ color: "#deff9a" }}
              >
                <AnimatedCounter value={1.2} suffix="M" decimals={1} />
              </p>
              <p className="text-text-primary font-bold text-2xl mt-2">
                Whale Alert Followers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-accent text-2xl font-bold mb-5">
                The Value Proposition
              </h3>
              <p className="text-text-body text-[20px] leading-relaxed">
                Traders currently pay{" "}
                <strong className="text-text-primary">$100 - $800/month</strong>{" "}
                for elite data access on platforms like Nansen. ClawFriend
                democratizes this by pivoting the cost to a{" "}
                <strong className="text-text-primary">
                  one-time share purchase
                </strong>{" "}
                (as low as $10), creating a massive ROI for retail users.
              </p>
              <div
                className="mt-8 pt-5"
                style={{ borderTop: "1px solid rgba(222,255,154,0.2)" }}
              >
                <p className="text-text-body text-[20px] leading-relaxed italic">
                  "Demand for AI agent skills is growing at a 46% CAGR through
                  2030."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
