import { useEffect, useState, useCallback, RefObject } from 'react';

interface ScrollIndicatorState {
  visible: boolean;
  thumbHeight: number;
  thumbTop: number;
}

export function useIosScrollIndicator(scrollRef: RefObject<HTMLElement | null>) {
  const [state, setState] = useState<ScrollIndicatorState>({
    visible: false,
    thumbHeight: 0,
    thumbTop: 0,
  });

  const [fadeTimeout, setFadeTimeout] = useState<NodeJS.Timeout | null>(null);

  const updateIndicator = useCallback(() => {
    const element = scrollRef.current;
    if (!element) return;

    const { scrollHeight, clientHeight, scrollTop } = element;
    
    // Only show if content is scrollable
    if (scrollHeight <= clientHeight) {
      setState(prev => ({ ...prev, visible: false }));
      return;
    }

    // Calculate thumb size and position (iOS 4 style)
    const scrollRatio = clientHeight / scrollHeight;
    const thumbHeight = Math.max(clientHeight * scrollRatio, 30); // Min 30px
    const scrollableHeight = clientHeight - thumbHeight;
    const scrollProgress = scrollTop / (scrollHeight - clientHeight);
    const thumbTop = scrollProgress * scrollableHeight;

    setState({
      visible: true,
      thumbHeight,
      thumbTop,
    });

    // Clear existing timeout
    if (fadeTimeout) {
      clearTimeout(fadeTimeout);
    }

    // Set new fade-out timeout
    const timeout = setTimeout(() => {
      setState(prev => ({ ...prev, visible: false }));
    }, 1000);

    setFadeTimeout(timeout);
  }, [scrollRef, fadeTimeout]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Initial calculation
    updateIndicator();

    // Listen to scroll events
    element.addEventListener('scroll', updateIndicator);

    // Cleanup
    return () => {
      element.removeEventListener('scroll', updateIndicator);
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, [scrollRef, updateIndicator, fadeTimeout]);

  return state;
}
