// Performance monitoring utility
// Add this to your page to measure Core Web Vitals

export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

// Measure page load time
export function measurePageLoad() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;

    console.log('⚡ Performance Metrics:');
    console.log(`  Page Load Time: ${pageLoadTime}ms`);
    console.log(`  Connection Time: ${connectTime}ms`);
    console.log(`  Render Time: ${renderTime}ms`);
  });
}

// Performance observer for lazy-loaded resources
export function observeResourceTiming() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          // Log slow resources (>1 second)
          if (resource.duration > 1000) {
            console.warn(`⚠️ Slow resource: ${resource.name} (${Math.round(resource.duration)}ms)`);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });
  } catch (e) {
    console.warn('Performance Observer not supported');
  }
}
