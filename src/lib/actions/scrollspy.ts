// IntersectionObserver-based scroll-spy that updates a writable target
// whenever a tracked section comes into view.

export type SpyTarget = { id: string };

export function scrollspy(
  node: HTMLElement,
  options: { ids: string[]; onActive: (id: string) => void },
) {
  let { ids, onActive } = options;

  let visible = new Map<string, number>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting) {
          visible.set(id, entry.intersectionRatio);
        } else {
          visible.delete(id);
        }
      }
      if (visible.size > 0) {
        const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
        onActive(top);
      }
    },
    { threshold: [0.25, 0.5, 0.75] },
  );

  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  }

  return {
    update(newOptions: { ids: string[]; onActive: (id: string) => void }) {
      onActive = newOptions.onActive;
    },
    destroy() {
      observer.disconnect();
    },
  };
}
