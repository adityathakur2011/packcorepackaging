"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const started = Date.now();
    let hideTimer = 0;
    const hide = () => {
      const wait = Math.max(0, 1800 - (Date.now() - started));
      hideTimer = window.setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    const fallback = window.setTimeout(() => setVisible(false), 3600);
    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(fallback);
      window.removeEventListener("load", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading Packcore Packaging">
      <div className="box-scene" aria-hidden>
        <div className="carton">
          <div className="carton-face carton-front" />
          <div className="carton-face carton-back" />
          <div className="carton-face carton-left" />
          <div className="carton-face carton-right" />
          <div className="carton-face carton-bottom" />
          <div className="carton-inside" />
          <div className="hinge hinge-back">
            <div className="carton-flap flap-back" />
          </div>
          <div className="hinge hinge-left">
            <div className="carton-flap flap-side" />
          </div>
          <div className="hinge hinge-right">
            <div className="carton-flap flap-side" />
          </div>
          <div className="hinge hinge-front">
            <div className="carton-flap flap-front" />
          </div>
        </div>
      </div>
    </div>
  );
}
