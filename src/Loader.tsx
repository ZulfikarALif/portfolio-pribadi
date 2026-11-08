import { useEffect, useState } from "react";

type LoaderProps = {
  onDone: () => void;
  duration?: number; // lama pengisian dalam ms
};

export default function Loader({ onDone, duration = 2400 }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  // Hitung progres, kunci scroll selama loading
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const total = reduce ? 300 : duration;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / total, 1);
      // easeInOutCubic: mulai pelan, ngebut di tengah, melambat di akhir
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setLeaving(true);
    };

    document.body.style.overflow = "hidden";
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [duration]);

  // Setelah 100%: buka scroll, mulai animasi hero, lalu lepas dari DOM
  useEffect(() => {
    if (!leaving) return;
    document.body.style.overflow = "";
    onDone();
    const timer = window.setTimeout(() => setGone(true), 1100);
    return () => window.clearTimeout(timer);
  }, [leaving]); // eslint-disable-line react-hooks/exhaustive-deps

  if (gone) return null;

  return (
    <div
      className={`loader${leaving ? " loader-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
    >
      <div className="loader-inner">
        <span className="loader-label">Portofolio</span>

        <div className="loader-count" aria-hidden="true">
          {progress}
          <span>%</span>
        </div>

        <div className="loader-bar" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>

        <span className="loader-name">Zulfikar Alip Takasihaeng</span>
      </div>
    </div>
  );
}
