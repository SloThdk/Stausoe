"use client";
import { useEffect, useRef, useState } from "react";

export function CountUp({
  target,
  suffix = "",
  duration = 1600,
  style,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  style?: React.CSSProperties;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(el);
    return () => { observer.disconnect(); };
  }, [target, duration]);

  return <span ref={ref} style={style}>{count}{suffix}</span>;
}
