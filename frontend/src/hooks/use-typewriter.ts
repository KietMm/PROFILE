import { useEffect, useState } from "react";

/**
 * Reveals text one character at a time. Returns the full string immediately
 * when the reader prefers reduced motion, or when `enabled` is false.
 */
export function useTypewriter(text: string, { enabled = true, speed = 22 } = {}) {
  const [shown, setShown] = useState(enabled ? "" : text);
  const [done, setDone] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setShown(text);
      setDone(true);
      return;
    }

    setShown("");
    setDone(false);

    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => window.clearInterval(id);
  }, [text, enabled, speed]);

  return { shown, done };
}
