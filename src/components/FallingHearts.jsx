import { useMemo } from "react";

const COLORS = [  "#f1dc89ff"];

export default function FallingHearts({ count = 20 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, () => {
      const size = 12 + Math.random() * 16;
      return {
        leftPct: Math.random() * 100,
        size,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 10,
        driftPct: Math.random() * 30 - 15,
        color: COLORS[(Math.random() * COLORS.length) | 0],
      };
    });
  }, [count]);

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${h.leftPct}%`,
            width: `${h.size}px`,
            height: `${h.size}px`,
            color: h.color,
            "--fall-duration": `${h.duration}s`,
            "--fall-delay": `${h.delay}s`,
            "--drift": `${h.driftPct}%`,
          }}
        />
      ))}
    </div>
  );
}
