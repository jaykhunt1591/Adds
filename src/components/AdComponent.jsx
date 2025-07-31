// src/components/AdComponent.jsx
import React, { useEffect, useRef } from "react";

const AdComponent = ({ adSlot = "6300978111", style = {} }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!window.adsbygoogle || !adRef.current) return;

    const timeout = setTimeout(() => {
      try {
        // Only push if not already filled
        if (adRef.current.innerHTML.trim().length === 0) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }, 300); // Delay to avoid race condition

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{ margin: "20px 0", display: "flex", justifyContent: "center" }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          maxWidth: 728,
          height: 90,
          textAlign: "center",
          ...style,
        }}
        data-ad-client="ca-pub-3940256099942544" // Test client
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
};

export default AdComponent;
