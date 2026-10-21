import { useLayoutEffect, useRef } from "react";

const SYMBOLS = "0101<>/{ }[]".replaceAll(" ", "");
const COLORS = [
  [77, 182, 233],
  [126, 87, 194],
  [233, 77, 230],
];

function BinaryRain() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let streams = [];
    let animationFrame;
    let previousTime = performance.now();
    let width = 0;
    let height = 0;

    const createStreams = () => {
      const spacing = width < 600 ? 28 : 34;
      const streamCount = Math.ceil(width / spacing);

      streams = Array.from({ length: streamCount }, (_, index) => ({
        x: index * spacing + Math.random() * 8,
        y: Math.random() * height,
        speed: 22 + Math.random() * 34,
        length: 3 + Math.floor(Math.random() * 6),
        color: COLORS[index % COLORS.length],
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createStreams();
    };

    const draw = (time) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      ctx.clearRect(0, 0, width, height);
      ctx.font = "600 13px 'PT Mono', monospace";
      ctx.textAlign = "center";

      streams.forEach((stream, streamIndex) => {
        if (!reduceMotion) {
          stream.y += stream.speed * delta;
        }

        if (stream.y - stream.length * 20 > height) {
          stream.y = -Math.random() * height * 0.35;
          stream.speed = 22 + Math.random() * 34;
        }

        for (let trailIndex = 0; trailIndex < stream.length; trailIndex += 1) {
          const trailProgress = 1 - trailIndex / stream.length;
          const alpha = 0.08 + trailProgress * 0.32;
          const [red, green, blue] = stream.color;
          const x = stream.x + Math.sin(time / 1100 + stream.phase) * 2;
          const y = stream.y - trailIndex * 20;
          const symbolIndex = (streamIndex + trailIndex + Math.floor(time / 700)) % SYMBOLS.length;

          ctx.shadowColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          ctx.shadowBlur = trailIndex === 0 ? 10 : 3;
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          ctx.fillText(SYMBOLS[symbolIndex], x, y);
        }
      });

      ctx.shadowBlur = 0;

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resizeCanvas();
    draw(previousTime);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        zIndex: 1,
        width: "100vw",
        height: "100vh",
        opacity: 0.85,
        pointerEvents: "none",
        transform: "translateX(-50%)",
        maskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
      }}
    />
  );
}

export default BinaryRain;
