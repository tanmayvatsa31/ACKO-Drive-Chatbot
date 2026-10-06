import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AckoDriveCarDetailsScreen } from "./screens/AckoDriveCarDetailsScreen";

function DetailsApp() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#0a0a0a] px-16 py-24">
      <AckoDriveCarDetailsScreen />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DetailsApp />
  </StrictMode>,
);
