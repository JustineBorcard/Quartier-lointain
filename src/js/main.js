import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  // tout le code JavaScript ici
});

gsap.to(".parallax-element", {
  scrollTrigger: {
    trigger: ".parallax-container",
    pin: true,
    scrub: 1,
  },
  y: -200,
});

gsap.to(".objet-container", {
  scrollTrigger: {
    trigger: ".paysage-container",
    pin: true,
    end: "+=50%",
    scrub: true,
  },
  left: "0",
});

gsap.to(".cimetiere-perso", {
  scrollTrigger: {
    trigger: ".cimetiere-container",
    pin: true,
    scrub: true,
  },
  transform: "scale(0.5)",
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fenetre", {
  scrollTrigger: {
    trigger: ".fenetre",
    start: "center bottom",
    end: "+=50%",
    scrub: 1,
  },
  left: "10%",
});

gsap.to(".moto", {
  scrollTrigger: {
    trigger: ".moto",
    start: "center bottom",
    end: "+=50%",
    scrub: 1,
  },
  right: "10%",
});

gsap.to(".nuage", {
  scrollTrigger: {
    trigger: ".nuage",
    start: "center bottom",
    end: "+=50%",
    scrub: 1,
  },
  left: "10%",
});

gsap.to(".gifle", {
  scrollTrigger: {
    trigger: ".gifle",
    start: "center bottom",
    scrub: 1,
  },
  right: "10%",
});

gsap.to(".under", {
  scrollTrigger: {
    trigger: ".container-img-colone",
    start: "center bottom",
    scrub: 1,
  },
  top: "10%",
});
// AK
gsap.to(".get-out", {
  scrollTrigger: {
    trigger: ".container-img-colone",
    start: "center bottom",
    scrub: 1,
  },
  top: "10%",
});
// AK
gsap.to(".in", {
  scrollTrigger: {
    trigger: ".container-img-colone",
    start: "center bottom",
    scrub: 1,
  },
  top: "10%",
});
// AK
gsap.to(".garcon-fille", {
  scrollTrigger: {
    trigger: ".garcon-fille",
    start: "center bottom",
    end: "+=50%",
    scrub: 1,
  },
  left: "10%",
});

// AK
gsap.to(".hiroshi-dos", {
  scrollTrigger: {
    trigger: ".hiroshi-dos",
    start: "center bottom",
    end: "+=50%",
    scrub: 1,
  },
  right: "10%",
});
