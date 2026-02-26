import { useEffect, useState } from "react";

export default function AnimatedCounter({ value, suffix = "", prefix = "", duration = 1.5, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const num = parseFloat(String(value).replace(/[^0-9.]/g, ""));

  useEffect(() => {
    const start = Date.now();
    const ms = duration * 1000;
    const tick = () => {
      const t = Math.min((Date.now() - start) / ms, 1);
      setCount(num * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [num, duration]);

  return <span>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}
