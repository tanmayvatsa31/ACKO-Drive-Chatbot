import { ackoDriveSplashAssets as assets } from "../assets/ackoDriveSplashAssets";

/** Full header lockup: mark + ACKO/DRIVE + rule + SERVICE CENTRES. */
export function AckoDriveHeaderLogo() {
  return (
    <img
      alt="ACKO Drive Service Centres"
      className="block h-[28px] w-auto max-w-none shrink-0"
      decoding="sync"
      draggable={false}
      height={28}
      src={assets.headerLogoLockup}
      width={136}
    />
  );
}
