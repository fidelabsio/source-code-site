"use client";

import { useEffect, useRef, useState } from "react";

export type TimelineStepState = {
  pending: boolean;
  active: boolean;
  running: boolean;
  done: boolean;
  label: "Purchased" | "Running" | "Completed";
};

/**
 * Drives a "purchase -> delivery -> setup" style timeline: starts once the
 * container scrolls into view (or is hovered), then steps through each card
 * in sequence, alternating a 2200ms "active" beat and a 700ms settle beat.
 */
export function useTimelineAnimation<T extends HTMLElement = HTMLElement>(stepCount: number) {
  const containerRef = useRef<T>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let phaseNow = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let started = false;

    function step() {
      phaseNow += 1;
      setPhase(phaseNow);
      if (phaseNow < stepCount * 2) {
        timer = setTimeout(step, phaseNow % 2 === 1 ? 2200 : 700);
      }
    }

    function start() {
      if (started) return;
      started = true;
      timer = setTimeout(step, 1200);
    }

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
              observer?.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
    }
    el.addEventListener("mouseenter", start);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      el.removeEventListener("mouseenter", start);
    };
  }, [stepCount]);

  function getStepState(index: number): TimelineStepState {
    const done = phase >= (index + 1) * 2;
    const active = phase === (index + 1) * 2 - 1;
    const running = active && index > 0;
    const pending = !done && !active;
    const label = running ? "Running" : index === 0 ? "Purchased" : "Completed";
    return { pending, active, running, done, label };
  }

  return { containerRef, getStepState };
}
