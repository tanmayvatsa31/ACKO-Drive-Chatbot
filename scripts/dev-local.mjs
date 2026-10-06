#!/usr/bin/env node
/**
 * Starts splash (5173) and details (5174) dev servers on this machine.
 * Browsers only connect when this process is running — keep the terminal open.
 */
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const isWin = process.platform === "win32";
const npm = isWin ? "npm.cmd" : "npm";

const banner = `
ACKO Drive — local dev servers

  Splash preview:  http://127.0.0.1:5173/
  Car details:     http://127.0.0.1:5174/
  Car details (alt): http://127.0.0.1:5173/details.html

Leave this terminal open. Press Ctrl+C to stop.
`;

console.log(banner);

function runDev(scriptName) {
  return spawn(npm, ["run", scriptName], {
    cwd: root,
    stdio: "inherit",
    shell: isWin,
    env: { ...process.env, FORCE_COLOR: "1" },
  });
}

const splash = runDev("dev");
const details = runDev("dev:details");

function shutdown(code = 0) {
  splash.kill("SIGTERM");
  details.kill("SIGTERM");
  process.exit(code);
}

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

splash.on("exit", (code, signal) => {
  if (signal) return;
  if (code && code !== 0) shutdown(code);
});

details.on("exit", (code, signal) => {
  if (signal) return;
  if (code && code !== 0) shutdown(code);
});
