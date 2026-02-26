import { motion } from "framer-motion";

export default function SlideWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ background: "#000" }}
    >
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] z-0"
        style={{ background: "radial-gradient(circle, rgba(222,255,154,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[30px] left-[30px] right-[30px] h-px z-0"
        style={{ background: "rgba(222,255,154,0.2)" }}
      />
      <div className="relative z-10 w-full h-full px-[60px] py-[60px]">
        {children}
      </div>
    </motion.div>
  );
}
