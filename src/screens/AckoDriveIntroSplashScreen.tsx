import type { CSSProperties } from "react";
import { IntroSplashBrandHeader } from "../components/IntroSplashBrandHeader";
import { SplashStatusBar } from "../components/SplashStatusBar";
import { ackoDriveSplashAssets as assets } from "../assets/ackoDriveSplashAssets";
import { INTRO_BACKGROUND_PAN_DURATION_MS, INTRO_LOGO_FADE_DURATION_MS } from "../constants/introSplash";
import { splashFrameClassName } from "../constants/splashFrame";

const INTRO_BACKGROUND_GRADIENT =
  "linear-gradient(180deg, rgb(0, 0, 0) 3.5%, rgba(0, 0, 0, 0) 34.563%), linear-gradient(0deg, rgb(0, 0, 0) 7.3125%, rgba(0, 0, 0, 0.62) 18.762%, rgba(0, 0, 0, 0) 29.187%)";

/** Figma node 16411:16634 — intro splash before main onboarding screen. */
export function AckoDriveIntroSplashScreen() {
  return (
    <div
      className={`relative isolate overflow-clip bg-black font-sans ${splashFrameClassName}`}
      data-name="Splash Screen Iteration 1 Variant 61"
      data-node-id="16411:16634"
      data-theme="dark"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
        data-name="image 2284"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="intro-splash-bg-pan absolute top-[0.04%] left-[-24.02%] block h-[125.5%] w-[147.91%] max-w-none object-cover"
            decoding="sync"
            draggable={false}
            src={assets.introVariant61Background}
            style={
              {
                "--intro-splash-bg-pan-duration": `${INTRO_BACKGROUND_PAN_DURATION_MS}ms`,
              } as CSSProperties
            }
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: INTRO_BACKGROUND_GRADIENT }}
        />
      </div>

      <SplashStatusBar />

      <IntroSplashBrandHeader
        style={{ animationDuration: `${INTRO_LOGO_FADE_DURATION_MS}ms` }}
      />
    </div>
  );
}
