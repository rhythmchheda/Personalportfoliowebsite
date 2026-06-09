import { useEffect } from 'react';

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-8B66GYQ4H5';

// Declare gtag function type
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    // Check if already loaded
    if (window.gtag) {
      console.log('Google Analytics already loaded');
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    script.onload = () => {
      console.log('Google Analytics script loaded successfully');
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);
      console.log(`Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}`);
    };

    script.onerror = () => {
      console.error('Failed to load Google Analytics script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}

// Helper function to track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};