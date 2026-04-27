type RevealOptions = { delay?: number; duration?: number; once?: boolean };

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { delay = 0, duration = 400, once = true } = options;
  node.style.transitionDelay = `${delay}ms`;
  node.style.transitionDuration = `${duration}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-revealed");
        if (once) observer.unobserve(node);
      } else if (!once) {
        node.classList.remove("is-revealed");
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
