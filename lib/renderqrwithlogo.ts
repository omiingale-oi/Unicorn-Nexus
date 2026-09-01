import QRCode from "qrcode";

export async function renderQrWithLogo(
  canvas: HTMLCanvasElement,
  url: string,
  logoSrc: string = "/logo-black.png"
): Promise<void> {
  await QRCode.toCanvas(canvas, url, {
    width: 512,
    margin: 2,
    errorCorrectionLevel: "H",
    color: {
      dark: "#050505",
      light: "#ffffff",
    },
  });

  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const logo = new Image();

  logo.crossOrigin = "anonymous";

  await new Promise<void>((resolve) => {
    logo.onload = () => resolve();
    logo.onerror = () => resolve();

    // Prevent browser from using an old cached logo
    logo.src = `${logoSrc}?v=${Date.now()}`;
  });

  if (!logo.complete || logo.naturalWidth === 0) {
    return;
  }

  const logoSize = canvas.width * 0.2;

  const x = (canvas.width - logoSize) / 2;
  const y = (canvas.height - logoSize) / 2;

  const padding = 10;

  ctx.fillStyle = "#ffffff";

  ctx.fillRect(
    x - padding,
    y - padding,
    logoSize + padding * 2,
    logoSize + padding * 2
  );

  ctx.drawImage(
    logo,
    x,
    y,
    logoSize,
    logoSize
  );
}