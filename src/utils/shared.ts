import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    smoothWheel: !prefersReducedMotion,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    });
  });

  return lenis;
}

export function initNavHideShow(lenis: Lenis) {
  const nav = document.getElementById('main-nav');
  let lastNavScroll = 0;
  let navHidden = false;

  if (nav) {
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      if (scroll > 50) nav.classList.add('nav-scrolled');
      else nav.classList.remove('nav-scrolled');

      if (scroll > lastNavScroll && scroll > 200 && !navHidden) {
        gsap.to(nav, { y: -80, duration: 0.4, ease: 'power3.in' });
        navHidden = true;
      } else if (scroll < lastNavScroll && navHidden) {
        gsap.to(nav, { y: 0, duration: 0.35, ease: 'power2.out' });
        navHidden = false;
      }
      lastNavScroll = scroll;
    });
  }
}

export function initMagneticButtons() {
  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  });
}

export function initProjectCtaArrows() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('.project-cta').forEach((cta) => {
    const arrow = cta.querySelector('.cta-arrow');
    if (!arrow) return;

    cta.addEventListener('mouseenter', () => {
      gsap.to(arrow, {
        x: 4,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    cta.addEventListener('mouseleave', () => {
      gsap.to(arrow, {
        x: 0,
        opacity: 0.7,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
}

export { gsap, ScrollTrigger };
