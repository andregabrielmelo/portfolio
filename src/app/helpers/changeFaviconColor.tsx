import Favicon from "../app/icon.svg";

function changeColors(incomingColor = "#000000") {
  // Remove # if present
  incomingColor = incomingColor.replace("#", "");

  // Extract R, G, B components from the incoming color
  const rBase = parseInt(incomingColor.substring(0, 2), 16) || 0;
  const gBase = parseInt(incomingColor.substring(2, 4), 16) || 0;
  const bBase = parseInt(incomingColor.substring(4, 6), 16) || 0;

  // Generate new colors based on incoming color with some randomness
  const R = Math.min(255, rBase + Math.round(Math.random() * 100))
    .toString(16)
    .padStart(2, "0");

  const G = Math.min(255, gBase + Math.round(Math.random() * 100))
    .toString(16)
    .padStart(2, "0");

  const B = Math.min(255, bBase + Math.round(Math.random() * 100))
    .toString(16)
    .padStart(2, "0");

  return `#${R}${G}${B}`;
}

function changeFaviconColor() {
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";

  let stop1, stop2, stop3;
  stop1 = changeColors(stop1 || "#4DA0F4");
  stop2 = changeColors(stop2 || "#2F97FF");
  stop3 = changeColors(stop3 || "#1E8EFF");

  const svgFavicon = `
  <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M68.4847 789L215.125 235.2H364.885L511.525 789H385.945L360.205 684.48H219.805L194.065 789H68.4847ZM290.005 393.54L245.545 576.84H334.465L290.005 393.54ZM699.98 707.88L646.16 479.34V789H533.06V235.2H665.66L734.3 496.5L802.94 235.2H935.54V789H822.44V479.34L768.62 707.88H699.98Z" fill="url(#paint0_linear_9_11)"/>
    <defs>
      <linearGradient id="paint0_linear_9_11" x1="512" y1="336" x2="512" y2="704" gradientUnits="userSpaceOnUse">
        <stop id="stop1" offset="0.2" stop-color="${stop1}" stop-opacity="0.4"/>
        <stop id="stop2" offset="0.6" stop-color="${stop2}" stop-opacity="0.7"/>
        <stop id="stop3" offset="1" stop-color="${stop3}"/>
      </linearGradient>
    </defs>
  </svg>`;

  const blob = new Blob([svgFavicon], { type: "image/svg+xml" });
  link.href = URL.createObjectURL(blob);

  document.head.appendChild(link);
}

export { changeFaviconColor };
