"use client";

import { useEffect, useState } from 'react';

export function useScript(src: string, enabled: boolean = true) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  useEffect(() => {
    if (!enabled) {
      setStatus('idle');
      return;
    }

    // Prevent script loading during SSR
    if (typeof window === 'undefined') return;

    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      setStatus('ready');
      return;
    }

    setStatus('loading');

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.type = "text/javascript";

    script.onload = () => setStatus('ready');
    script.onerror = () => setStatus('error');

    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(`script[src="${src}"]`);
      if (scriptToRemove?.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, [src, enabled]);

  return status;
}