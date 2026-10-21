import { useEffect, useRef } from "react";

const TITLE_SELECTOR = "h1, h2, h3, h4, h5, h6, [class*='title']";
const ACTION_SELECTOR =
  "a, button, [role='button'], input[type='button'], input[type='submit'], input[type='reset']";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!cursor || !finePointer.matches) return undefined;

    let frameId = null;
    let pointerX = -40;
    let pointerY = -40;

    const renderPosition = () => {
      cursor.style.setProperty("--cursor-x", `${pointerX}px`);
      cursor.style.setProperty("--cursor-y", `${pointerY}px`);
      frameId = null;
    };

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add("is-visible");

      if (!frameId) frameId = requestAnimationFrame(renderPosition);
    };

    const handleOver = (event) => {
      const target = event.target;
      const isTitle = target instanceof Element && target.closest(TITLE_SELECTOR);
      const isAction = target instanceof Element && target.closest(ACTION_SELECTOR);
      cursor.classList.toggle("is-over-title", Boolean(isTitle));
      cursor.classList.toggle("is-over-action", Boolean(isAction));
    };

    const handleDown = () => cursor.classList.add("is-pressed");
    const handleUp = () => cursor.classList.remove("is-pressed");
    const handleLeave = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}

export default CustomCursor;
