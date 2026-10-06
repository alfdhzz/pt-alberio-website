import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.observed)').forEach((el) => {
        observer.observe(el);
        el.classList.add('observed');
      });
    };

    // Initial check
    observeElements();

    // Watch for DOM changes (like when the loading screen disappears)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
