import { Children, cloneElement, useEffect, useRef } from "react";

function ParallaxLayer({ children, speed = 0.05 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let frameId = null;

    const handleMove = (event) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const coordX = event.clientX - innerWidth / 2;
        const coordY = event.clientY - innerHeight / 2;
        const x = (coordX * speed).toFixed(1);
        const y = (coordY * speed).toFixed(1);

        if (ref.current) {
          ref.current.style.setProperty("--parallax-x", `${x}px`);
          ref.current.style.setProperty("--parallax-y", `${y}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [speed]);

  const child = Children.only(children);

  return cloneElement(child, {
    ref,
    className: [child.props.className, "paralax-layer"].filter(Boolean).join(" "),
  });
}

export default ParallaxLayer;
