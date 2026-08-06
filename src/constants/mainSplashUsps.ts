/** Main splash USP reveal: image then label, one card at a time. */
export const SPLASH_USP_FADE_MS = 780;
export const SPLASH_USP_IMAGE_TO_TEXT_MS = 280;
export const SPLASH_USP_BETWEEN_MS = 360;

const USP_CYCLE_MS =
  SPLASH_USP_FADE_MS + SPLASH_USP_IMAGE_TO_TEXT_MS + SPLASH_USP_BETWEEN_MS;

export function splashUspImageDelayMs(uspIndex: number): number {
  return uspIndex * USP_CYCLE_MS;
}

export function splashUspTextDelayMs(uspIndex: number): number {
  return splashUspImageDelayMs(uspIndex) + SPLASH_USP_IMAGE_TO_TEXT_MS;
}

/** CTA appears after the last USP label finishes fading in. */
export function splashCtaFadeInDelayMs(uspCount: number): number {
  const lastIndex = Math.max(0, uspCount - 1);
  return splashUspTextDelayMs(lastIndex) + SPLASH_USP_FADE_MS;
}
