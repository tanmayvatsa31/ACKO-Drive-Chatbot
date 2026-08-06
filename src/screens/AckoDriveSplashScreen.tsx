import type { CSSProperties } from "react";
import { AckoDriveHeaderLogo } from "../components/AckoDriveHeaderLogo";
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
      className={`splash-usp-fade-in absolute flex items-center justify-center rounded-[8px] bg-[color-mix(in_srgb,rgb(35_35_35)_33%,transparent)] p-[10px] backdrop-blur-[8px] ${className}`}
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

function TiltedPhoto({
  alt,
  borderHighlight,
  className,
  fadeInDelayMs,
  rotationClass,
  slide,
  src,
}: {
  alt: string;
  borderHighlight: "default" | "bottom";
  className: string;
  fadeInDelayMs: number;
  rotationClass: string;
  slide: SplashUspSlide;
  src: string;
}) {
  const borderClassName =
    borderHighlight === "bottom"
      ? "splash-usp-photo-card splash-usp-photo-card--highlight-bottom"
      : "splash-usp-photo-card";

  return (
    <div
      className={`splash-usp-fade-in absolute ${className} flex h-[200px] w-[173px] items-center justify-center overflow-hidden`}
      style={splashUspEnterStyle(fadeInDelayMs, slide)}
    >
      <div className={`${borderClassName} ${rotationClass} origin-center`}>
        <div className="splash-usp-photo-card-inner">
          <img
            alt={alt}
            className="block h-[192px] w-[164px] scale-[1.06] border-0 object-cover"
            src={src}
          />
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
      src: assets.photoPickup,
      borderHighlight: "bottom" as const,
    },
    label: {
      text: "Doorstep pickup & drop",
      className: "left-[152px] top-[159px]",
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
      src: assets.photoGenuineSpareParts,
      borderHighlight: "bottom" as const,
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
      src: assets.photoSameDayDelivery,
      borderHighlight: "default" as const,
    },
    label: {
      text: "Same-day delivery",
      className: "left-[156px] top-[600px]",
    },
    arrow: {
      className: "left-[232px] top-[560px]",
      rotationClass: "rotate-180 -scale-y-100",
      slide: { x: 20, y: 24 },
    },
  },
] as const;

export function AckoDriveSplashScreen({
  onFindNearbyCentre,
}: AckoDriveSplashScreenProps) {
  return (
    <div
      className={`splash-main-screen relative isolate bg-black font-sans ${splashFrameClassName}`}
      data-name="Splash Screen Iteration 1 Variant 58"
      data-theme="dark"
    >
      <img
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 block size-full object-cover"
        decoding="sync"
        draggable={false}
        height={800}
        src={assets.mainSplashBackground}
        width={360}
      />
      <div aria-hidden className="splash-main-screen-glow-soften" />

      <SplashStatusBar />

      <div className="absolute left-[20px] top-[60px] w-[320px]">
        <AckoDriveHeaderLogo />
      </div>

      <div
        className="splash-usp-fade-in splash-cta-shell absolute left-[20px] top-[728px] w-[320px]"
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
          className="splash-cta-button p-[12px]"
          onClick={onFindNearbyCentre}
        >
          Find nearby centre
        </Button>
      </div>

      {SPLASH_USPS.map((usp, index) => (
        <div key={usp.label.text}>
          <TiltedPhoto
            alt={usp.photo.alt}
            borderHighlight={usp.photo.borderHighlight}
            className={usp.photo.className}
            fadeInDelayMs={splashUspImageDelayMs(index)}
            rotationClass={usp.photo.rotationClass}
            slide={usp.photoSlide}
            src={usp.photo.src}
          />
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
