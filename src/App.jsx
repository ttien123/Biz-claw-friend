import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slide01_Title from "./slides/Slide01_Title";
import Slide02_SectionCompetitive from "./slides/Slide02_SectionCompetitive";
import Slide03_Table from "./slides/Slide03_Table";
import Slide04_Strategy from "./slides/Slide04_Strategy";
import Slide05_SectionSkills from "./slides/Slide05_SectionSkills";
import Slide06_SkillCatalog from "./slides/Slide06_SkillCatalog";
import Slide07_MarketDemand from "./slides/Slide07_MarketDemand";
import Slide08_SectionDistribution from "./slides/Slide08_SectionDistribution";
import Slide09_Budget from "./slides/Slide09_Budget";
import Slide10_Roadmap from "./slides/Slide10_Roadmap";
import Slide11_GrowthMix from "./slides/Slide11_GrowthMix";
import Slide12_QA from "./slides/Slide12_QA";

const slides = [
  { component: Slide01_Title, label: "Title" },
  { component: Slide02_SectionCompetitive, label: "Competitive" },
  { component: Slide03_Table, label: "Benchmarking" },
  { component: Slide04_Strategy, label: "Strategy" },
  { component: Slide05_SectionSkills, label: "Skills" },
  { component: Slide06_SkillCatalog, label: "Catalog" },
  { component: Slide07_MarketDemand, label: "Demand" },
  { component: Slide08_SectionDistribution, label: "Distribution" },
  { component: Slide09_Budget, label: "Budget" },
  { component: Slide10_Roadmap, label: "Roadmap" },
  { component: Slide11_GrowthMix, label: "Growth" },
  { component: Slide12_QA, label: "Q&A" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showUI, setShowUI] = useState(true);

  const goTo = useCallback(
    (idx) => {
      if (idx < 0 || idx >= slides.length || idx === current) return;
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    let timer;
    const reset = () => {
      setShowUI(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowUI(false), 3500);
    };

    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        next();
        reset();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        prev();
        reset();
      } else if (e.key === "f" || e.key === "F")
        document.documentElement.requestFullscreen?.();
      else if (e.key === "Escape") document.exitFullscreen?.();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousemove", reset);
    reset();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousemove", reset);
      clearTimeout(timer);
    };
  }, [next, prev]);

  const Slide = slides[current].component;

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <div
      className="w-full h-full overflow-hidden relative select-none"
      style={{ background: "#000" }}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            duration: 0.45,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0"
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      <motion.div
        animate={{ opacity: showUI ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 z-50"
      >
        {/* Progress bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "rgba(222,255,154,0.1)" }}
        >
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, #deff9a, #84cc16)" }}
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-auto">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={s.label}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background:
                  i === current
                    ? "#deff9a"
                    : i < current
                      ? "rgba(222,255,154,0.4)"
                      : "rgba(222,255,154,0.15)",
                boxShadow:
                  i === current ? "0 0 10px rgba(222,255,154,0.4)" : "none",
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <div
          className="absolute bottom-5 right-8 text-sm font-mono font-semibold pointer-events-none"
          style={{ color: "rgba(222,255,154,0.4)" }}
        >
          {String(current + 1).padStart(2, "0")}
          <span className="mx-1" style={{ color: "rgba(222,255,154,0.15)" }}>
            /
          </span>
          {String(slides.length).padStart(2, "0")}
        </div>

        {/* Label */}
        <div
          className="absolute bottom-5 left-8 text-xs font-semibold tracking-wide uppercase pointer-events-none"
          style={{ color: "rgba(222,255,154,0.3)" }}
        >
          {slides[current].label}
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className={`pointer-events-auto absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            current === 0
              ? "opacity-0 pointer-events-none"
              : "opacity-40 hover:opacity-100"
          }`}
          style={{
            background: "rgba(26,26,26,0.8)",
            border: "1px solid rgba(222,255,154,0.15)",
          }}
        >
          <ChevronLeft size={18} style={{ color: "#deff9a" }} />
        </button>

        <button
          onClick={next}
          className={`pointer-events-auto absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            current === slides.length - 1
              ? "opacity-0 pointer-events-none"
              : "opacity-40 hover:opacity-100"
          }`}
          style={{
            background: "rgba(26,26,26,0.8)",
            border: "1px solid rgba(222,255,154,0.15)",
          }}
        >
          <ChevronRight size={18} style={{ color: "#deff9a" }} />
        </button>
      </motion.div>
    </div>
  );
}
