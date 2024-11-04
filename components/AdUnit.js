'use client';

import { useEffect, useRef } from 'react';

const AdUnit = () => {
  const adLoaded = useRef(false);

  useEffect(() => {
    if (!adLoaded.current) {
      // Load the Google AdSense script dynamically if not already loaded
      if (!window.adsbygoogle || window.adsbygoogle.length === 0) {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9670252621494000";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        // Initialize ad when the script loads
        script.onload = () => {
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
            adLoaded.current = true; // Mark the ad as loaded
          }
        };

        // Cleanup script when component unmounts
        return () => {
          document.body.removeChild(script);
        };
      } else {
        // Initialize ad if script is already loaded
        window.adsbygoogle.push({});
        adLoaded.current = true;
      }
    }
  }, []);

  return (
    <div className="ads-container my-8" style={{ width: '100%', minHeight: '100px', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9670252621494000"
        data-ad-slot="6903153724"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdUnit;
