import type { CSSProperties } from "react";
import { ackoDriveSplashAssets as assets } from "../assets/ackoDriveSplashAssets";

/** Figma 16419:16749 — centered logo lockup (mark, SERVICE CENTRES, cities). */
export function IntroSplashBrandHeader({
  style,
}: {
  style?: CSSProperties;
}) {
  return (
    <img
      alt="ACKO Drive Service Centres — Bangalore, Hyderabad, Delhi, Ahmedabad"
      className="intro-logo-fade-in pointer-events-none absolute left-1/2 top-[80px] z-[1] block h-auto w-[294px] max-w-[calc(100%-48px)] -translate-x-1/2"
      decoding="sync"
      draggable={false}
      height={72}
      src={assets.introVariant61LogoLockup}
      style={style}
      width={294}
    />
  );
}
