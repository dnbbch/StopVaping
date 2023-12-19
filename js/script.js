gsap.registerPlugin(ScrollSmoother, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.8,
  effects: true,
  ignoreMobileResize: true,
});

gsap.fromTo(
  ".intro-section_first",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".intro-section_first",
      start: "50px",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".intro-section_second",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".intro-section_second",
      start: "70px",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".intro-section_third",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".intro-section_third",
      start: "50px",
      scrub: true,
    },
  }
);

let itemsL = gsap.utils.toArray(".page-section");

itemsL.forEach((item) => {
  gsap.fromTo(
    item,
    { x: -200, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-950",
        end: "250",
        scrub: true,
      },
    }
  );
});
