import { useEffect, useState } from "react";

const FORMAT: Intl.DateTimeFormatOptions = {
  timeZone: "Asia/Ho_Chi_Minh",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

/** Ho Chi Minh City wall time. The one genuinely live reading on the page. */
export function LocalClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time
      dateTime={now.toISOString()}
      className="font-mono tabular-nums text-foreground/80"
    >
      {new Intl.DateTimeFormat("en-GB", FORMAT).format(now)}
    </time>
  );
}
