"use client";

import { useRef, useState, type RefObject } from "react";

export function useFlipOnHover(videoRef: RefObject<HTMLVideoElement | null>) {
  const [flipped, setFlipped] = useState(false);
  const playTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function onMouseEnter() {
    setFlipped(true);
    clearTimeout(playTimerRef.current);
    playTimerRef.current = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.play().catch(() => {});
    }, 540);
  }

  function onMouseLeave() {
    setFlipped(false);
    clearTimeout(playTimerRef.current);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }

  return { flipped, onMouseEnter, onMouseLeave };
}
