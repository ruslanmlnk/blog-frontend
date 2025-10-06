"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function TopCategoriesBar({
  items = [
    "ПОЛИТИКА И ВЫБОРЫ",
    "РЕПРЕССИИ В РОССИИ",
    "ЕВРОПА",
    "УКРАИНА",
  ],
  speed = 60, // pixels per second
}: {
  items?: string[];
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [seqWidth, setSeqWidth] = useState(1);
  const [copies, setCopies] = useState(6);
  const [ready, setReady] = useState(false);

  const sequence = useMemo(() => {
    return (
      <div className="flex items-center whitespace-nowrap" key="sequence">
        {items.map((text, idx) => (
          <div className="flex items-center" key={idx}>
            <span className="px-5 select-none cursor-default text-[#767676] text-[12px] leading-none font-bold uppercase">
              {text}
            </span>
            <span className="text-[#0B4CC0] px-5">*</span>
          </div>
        ))}
      </div>
    );
  }, [items]);

  useEffect(() => {
    const recalc = () => {
      const m = measureRef.current;
      const c = containerRef.current;
      if (!m || !c) return;
      const w = m.scrollWidth || 1;
      const cw = c.clientWidth || 0;
      setSeqWidth(w);
      // Need enough copies to cover container while translating by one sequence width
      const need = Math.max(3, Math.ceil(cw / w) + 2);
      setCopies(need);
      setReady(true);
    };
    recalc();
    const ro1 = new ResizeObserver(recalc);
    const ro2 = new ResizeObserver(recalc);
    if (measureRef.current) ro1.observe(measureRef.current);
    if (containerRef.current) ro2.observe(containerRef.current);
    window.addEventListener("resize", recalc);
    return () => {
      ro1.disconnect();
      ro2.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  const duration = Math.max(10, Math.round(seqWidth / speed));

  return (
    <div className="bg-[#EBEBEB] border-b border-[#DADADA] overflow-hidden">
      <div ref={containerRef} className="relative w-full h-[87px] flex items-center overflow-hidden px-6">
        {/* Hidden measurer for a single sequence */}
        <div
          className="absolute left-0 top-0 opacity-0 pointer-events-none h-0 overflow-hidden whitespace-nowrap"
          ref={measureRef}
          aria-hidden
        >
          {sequence}
        </div>
        {/* Marquee track: N sequences for seamless loop */}
        <div
          className={`flex items-center whitespace-nowrap will-change-transform transition-opacity ${ready ? "opacity-100" : "opacity-0"}`}
          style={{
            animation: `topbar-marquee ${duration}s linear infinite`,
            // @ts-expect-error CSS var for keyframes
            "--w": `${seqWidth}px`,
          }}
        >
          {Array.from({ length: copies }).map((_, i) => (
            <div className="flex items-center" key={i}>
              {sequence}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
