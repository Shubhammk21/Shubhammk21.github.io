import React, { useEffect, useState } from "react";
import css from "./Loader.module.css";
import { Logo } from "../assets/Images"; // replace with your logo import if available

/**
 * Loader props:
 * - visible (bool) : show/hide
 * - simulateMs (number) : optional simulated duration (ms) for demo/progress.
 * - onFinish (fn) : callback when progress finishes
 */
export default function Loader({
  visible = true,
  simulateMs = 1400,
  onFinish,
}) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  // If simulateMs is provided, animate progress from 0 to 100
  useEffect(() => {
    if (!show) return;

    if (!simulateMs || simulateMs <= 0) {
      setProgress(100);
      if (onFinish) onFinish();
      return;
    }

    let start = null;
    const duration = simulateMs;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 150);
      }
    };
    requestAnimationFrame(step);
    return () => {};
  }, [show, simulateMs, onFinish]);

  if (!show) return null;

  return (
    <div
      className={css.overlay}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className={css.container}>
        {/* Logo + animated ring */}
        <div className={css.logoWrap}>
          {/* you can swap this img with an inline SVG or React component */}
          <img src={Logo} alt="WebZova logo" className={css.logo} />
          <svg className={css.ring} viewBox="0 0 100 100" aria-hidden>
            <defs>
              <linearGradient id="gradRing" x1="0" x2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradRing)"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Headline */}
        <h3 className={css.title}>Shubham Singh</h3>
        <p className={css.subtitle}>Java Full Stack-Developer</p>

        {/* Progress bar */}
        <div className={css.progressWrap} aria-hidden>
          <div className={css.progressTrack}>
            <div
              className={css.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={css.progressMeta}>
            <span className={css.pct}>{progress}%</span>
            <span className={css.hint}>Loading resources</span>
          </div>
        </div>

        {/* Micro text */}
        <div className={css.micro}>
          <span>Optimizing performance • Preparing UI</span>
        </div>
      </div>
    </div>
  );
}
