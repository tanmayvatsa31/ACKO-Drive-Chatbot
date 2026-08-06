import { ackoDriveSplashAssets as assets } from "../assets/ackoDriveSplashAssets";

/** iOS-style status bar (time + icons) with no background fill — sits on splash art. */
export function SplashStatusBar() {
  return (
    <img
      alt=""
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] block h-[40px] w-full max-w-none select-none"
      decoding="sync"
      draggable={false}
      height={40}
      src={assets.statusBar}
      width={360}
    />
  );
}
