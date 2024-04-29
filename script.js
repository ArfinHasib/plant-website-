gsap.set('.header', {
   y: -100,
});

gsap.to('.header', {
   y: 0,
   ease: 'power2.out',
   duration: 1,
});

gsap.set(['.hero_txt, .hero_icon'], {
   x: -1000,
});

gsap.to(['.hero_txt, .hero_icon'], {
   x: 0,
   stagger: 0.08,
   ease: 'power4.out',
   duration: 2,
});

gsap.set('.content_middle', {
   y: 1000,
});

gsap.to('.content_middle', {
   y: 0,
   duration: 2,
   ease: 'power4.out',
});

gsap.set('.content_right', {
   x: 1000,
});

gsap.to('.content_right', {
   x: 0,
   duration: 2,
   ease: 'power4.out',
});
