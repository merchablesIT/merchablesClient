export const IO = (
  item: Element,
  options?: IntersectionObserverInit
): Promise<void> => {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve();
          observer.unobserve(item);
        }
      });
    }, options);

    observer.observe(item);
  });
};
