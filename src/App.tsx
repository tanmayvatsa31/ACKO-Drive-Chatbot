import { AckoDriveCarDetailsScreen } from "./screens/AckoDriveCarDetailsScreen";
import { ScreenPreview } from "./screens/ScreenPreview";

function normalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

function DetailsPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#0a0a0a] px-16 py-24">
      <AckoDriveCarDetailsScreen />
    </div>
  );
}

function App() {
  if (normalizedPath() === "/details") {
    return <DetailsPage />;
  }

  return <ScreenPreview />;
}

export default App;
