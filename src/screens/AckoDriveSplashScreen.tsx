import type { CSSProperties, ReactNode } from "react";
import { Button } from "@acko/button";
import { Typography } from "@acko/typography";
import { SplashStatusBar } from "../components/SplashStatusBar";
import { ackoDriveSplashAssets as assets } from "../assets/ackoDriveSplashAssets";
import {
  SPLASH_USP_FADE_MS,
  splashCtaFadeInDelayMs,
  splashUspImageDelayMs,
  splashUspTextDelayMs,
} from "../constants/mainSplashUsps";
import { splashFrameClassName } from "../constants/splashFrame";

type AckoDriveSplashScreenProps = {
  onClose?: () => void;
  onFindNearbyCentre?: () => void;
};

type SplashUspSlide = {
  x: number;
  y: number;
};

function splashUspEnterStyle(
  fadeInDelayMs: number,
  slide: SplashUspSlide,
): CSSProperties {
  return {
    animationDelay: `${fadeInDelayMs}ms`,
    animationDuration: `${SPLASH_USP_FADE_MS}ms`,
    "--splash-usp-slide-x": `${slide.x}px`,
    "--splash-usp-slide-y": `${slide.y}px`,
  } as CSSProperties;
}

function FeatureLabel({
  children,
  className,
  fadeInDelayMs,
  slide,
}: {
  children: string;
  className: string;
  fadeInDelayMs: number;
  slide: SplashUspSlide;
}) {
  return (
    <div
      className={`splash-usp-fade-in absolute flex items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.07)] bg-[rgba(35,35,35,0.33)] p-[10px] backdrop-blur-[4px] ${className}`}
      style={splashUspEnterStyle(fadeInDelayMs, slide)}
    >
      <Typography
        variant="label-sm"
        weight="medium"
        color="invert"
        className="whitespace-nowrap"
      >
        {children}
      </Typography>
    </div>
  );
}

function UspArrowCallout({
  className,
  fadeInDelayMs,
  rotationClass,
  slide,
}: {
  className: string;
  fadeInDelayMs: number;
  rotationClass: string;
  slide: SplashUspSlide;
}) {
  return (
    <div
      aria-hidden
      className={`splash-usp-fade-in pointer-events-none absolute z-[1] size-[40px] ${rotationClass} ${className}`}
      style={splashUspEnterStyle(fadeInDelayMs, slide)}
    >
      <img
        alt=""
        className="block size-full max-w-none"
        draggable={false}
        height={40}
        src={assets.splashUspArrow}
        width={40}
      />
    </div>
  );
}

function SplashGlowEllipse({ className }: { className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className="absolute inset-[-22.07%]">
        <img
          alt=""
          className="block size-full max-w-none"
          draggable={false}
          src={assets.variant68GlowEllipse}
        />
      </div>
    </div>
  );
}

function SplashScreenTopBar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute left-1/2 top-[60px] flex h-[28px] w-[320px] -translate-x-1/2 items-center justify-between">
      <img
        alt="ACKO Drive Service Centres"
        className="block h-[28px] w-auto max-w-none shrink-0"
        decoding="sync"
        draggable={false}
        height={28}
        src={assets.variant68HeaderLogoLockup}
      />
      <button
        type="button"
        aria-label="Close"
        className="flex size-[24px] shrink-0 items-center justify-center overflow-clip"
        onClick={onClose}
      >
        <img
          alt=""
          className="block size-full max-w-none"
          draggable={false}
          height={24}
          src={assets.variant68Close}
          width={24}
        />
      </button>
    </div>
  );
}

function TiltedPhotoCard({
  alt,
  borderMode,
  children,
  className,
  fadeInDelayMs,
  rotationClass,
  slide,
}: {
  alt: string;
  borderMode: "gradient" | "white" | "none";
  children: ReactNode;
  className: string;
  fadeInDelayMs: number;
  rotationClass: string;
  slide: SplashUspSlide;
}) {
  const borderClassName =
    borderMode === "white"
      ? "border border-solid border-white"
      : borderMode === "gradient"
        ? "splash-usp-photo-card splash-usp-photo-card--highlight-bottom"
        : "border border-[rgba(255,255,255,0)]";

  return (
    <div
      className={`splash-usp-fade-in absolute ${className} flex h-[200px] w-[173px] items-center justify-center overflow-hidden`}
      style={splashUspEnterStyle(fadeInDelayMs, slide)}
    >
      <div className={`${borderClassName} ${rotationClass} h-[192px] w-[164px] origin-center rounded-[24px]`}>
        <div className={borderMode === "white" ? "relative size-full overflow-hidden rounded-[24px]" : "splash-usp-photo-card-inner"}>
          {children}
          <span className="sr-only">{alt}</span>
        </div>
      </div>
    </div>
  );
}

const SPLASH_USPS = [
  {
    photoSlide: { x: -64, y: 48 },
    labelSlide: { x: -48, y: 36 },
    photo: {
      alt: "ACKO representative handing car keys during pickup",
      className: "left-[41px] top-[144px]",
      rotationClass: "-rotate-[2.8deg]",
      borderMode: "none" as const,
    },
    label: {
      text: "Doorstep pickup & drop",
      className: "left-[126px] top-[159px]",
    },
    arrow: {
      className: "left-[214px] top-[199px]",
      rotationClass: "-scale-x-100 -scale-y-100",
      slide: { x: 24, y: -16 },
    },
  },
  {
    photoSlide: { x: 72, y: 52 },
    labelSlide: { x: -56, y: 44 },
    photo: {
      alt: "Mechanic displaying genuine automotive spare parts on a workbench",
      className: "left-[142px] top-[309px]",
      rotationClass: "rotate-[2.8deg]",
      borderMode: "white" as const,
    },
    label: {
      text: "Genuine spare parts",
      className: "left-[44px] top-[399px]",
    },
    arrow: {
      className: "left-[106px] top-[361px]",
      rotationClass: "-rotate-180 -scale-x-100 -scale-y-100",
      slide: { x: -20, y: 20 },
    },
  },
  {
    photoSlide: { x: 0, y: 88 },
    labelSlide: { x: 56, y: 64 },
    photo: {
      alt: "Stopwatch showing 24-hour service completion in front of a serviced car",
      className: "left-[60px] top-[476px]",
      rotationClass: "-rotate-[2.8deg]",
      borderMode: "none" as const,
    },
    label: {
      text: "Same-day delivery",
      className: "left-[157px] top-[603px]",
    },
    arrow: {
      className: "left-[232px] top-[560px]",
      rotationClass: "rotate-180 -scale-y-100",
      slide: { x: 20, y: 24 },
    },
  },
] as const;

export function AckoDriveSplashScreen({
  onClose,
  onFindNearbyCentre,
}: AckoDriveSplashScreenProps) {
  return (
    <div
      className={`relative isolate overflow-clip bg-[#121212] font-sans ${splashFrameClassName}`}
      data-name="Splash Screen Iteration 1 Variant 68"
      data-node-id="16768:20951"
      data-theme="dark"
    >
      <SplashGlowEllipse className="left-[105px] top-[-202px] size-[426px]" />
      <SplashGlowEllipse className="left-[-131px] top-[551px] size-[426px]" />

      <SplashStatusBar />
      <SplashScreenTopBar onClose={onClose} />

      <div
        className="splash-usp-fade-in absolute left-[20px] top-[728px] w-[320px]"
        style={splashUspEnterStyle(splashCtaFadeInDelayMs(SPLASH_USPS.length), {
          x: 0,
          y: 56,
        })}
      >
        <Button
          type="button"
          variant="secondary"
          size="lg"
          fullWidth
          className="rounded-[12px] p-[12px]"
          onClick={onFindNearbyCentre}
        >
          Find nearby centre
        </Button>
      </div>

      <TiltedPhotoCard
        alt={SPLASH_USPS[0].photo.alt}
        borderMode={SPLASH_USPS[0].photo.borderMode}
        className={SPLASH_USPS[0].photo.className}
        fadeInDelayMs={splashUspImageDelayMs(0)}
        rotationClass={SPLASH_USPS[0].photo.rotationClass}
        slide={SPLASH_USPS[0].photoSlide}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[24px]">
          <div className="absolute inset-0 rounded-[24px] bg-white" />
          <img
            alt=""
            className="absolute size-full max-w-none rounded-[24px] object-cover"
            draggable={false}
            src={assets.variant68PhotoPickupBase}
          />
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img
              alt=""
              className="absolute top-[-33.19%] left-[-16.3%] h-[149.2%] w-[134.08%] max-w-none"
              draggable={false}
              src={assets.variant68PhotoPickupOverlay}
            />
          </div>
        </div>
      </TiltedPhotoCard>

      <TiltedPhotoCard
        alt={SPLASH_USPS[1].photo.alt}
        borderMode={SPLASH_USPS[1].photo.borderMode}
        className={SPLASH_USPS[1].photo.className}
        fadeInDelayMs={splashUspImageDelayMs(1)}
        rotationClass={SPLASH_USPS[1].photo.rotationClass}
        slide={SPLASH_USPS[1].photoSlide}
      >
        <img
          alt=""
          className="block size-full max-w-none rounded-[24px] object-cover"
          draggable={false}
          src={assets.variant68PhotoSpareParts}
        />
      </TiltedPhotoCard>

      <TiltedPhotoCard
        alt={SPLASH_USPS[2].photo.alt}
        borderMode={SPLASH_USPS[2].photo.borderMode}
        className={SPLASH_USPS[2].photo.className}
        fadeInDelayMs={splashUspImageDelayMs(2)}
        rotationClass={SPLASH_USPS[2].photo.rotationClass}
        slide={SPLASH_USPS[2].photoSlide}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
          <div className="absolute inset-0 rounded-[24px] bg-white" />
          <img
            alt=""
            className="absolute top-[-20.18%] left-[-10.02%] h-[127.91%] w-[129.34%] max-w-none"
            draggable={false}
            src={assets.variant68PhotoSameDay}
          />
        </div>
      </TiltedPhotoCard>

      {SPLASH_USPS.map((usp, index) => (
        <div key={usp.label.text}>
          <FeatureLabel
            className={usp.label.className}
            fadeInDelayMs={splashUspTextDelayMs(index)}
            slide={usp.labelSlide}
          >
            {usp.label.text}
          </FeatureLabel>
          <UspArrowCallout
            className={usp.arrow.className}
            fadeInDelayMs={splashUspTextDelayMs(index)}
            rotationClass={usp.arrow.rotationClass}
            slide={usp.arrow.slide}
          />
        </div>
      ))}
    </div>
  );
}
