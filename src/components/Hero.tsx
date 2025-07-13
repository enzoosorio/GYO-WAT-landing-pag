import { Button } from "./reusable/Button";
import { DarkLayer } from "./reusable/DarkLayer";
import { Section } from "./reusable/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Hero = () => {

  useGSAP(() => { 

    ScrollTrigger.create({
        trigger: ".container-hero-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: '.hero-section',
    })

    let tl = gsap.timeline({
      scrollTrigger : {
        trigger: ".container-hero-section",
        start: "top top",
        end: "90% bottom",
        scrub: 1,
      }
    })

    let tl2 = gsap.timeline({
      scrollTrigger : {
        trigger: ".container-hero-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    })

    tl.to(".hero-section img", {
      scale: 1,
      ease: "none",
      duration: 1,

    }, 0);

    tl2.to(".title-hero-container", {
      opacity: 0,
      ease: "power1.in",
      duration: 1,
    }, 1)

    tl2.to(".hero-button-bounce", {
      opacity: 0,
      ease: "power1.in",
      duration: 1,
    }, "+=0.1")

    tl2.to(".title-hero-container", {
      x: -2000,
      ease: "power4.in",
      duration: 1,
    }, "+=0.1")

    tl2.to(".hero-button-bounce", {
      left: -100,
      ease: "power4.in",
      duration: 1,
    }, "+=0.1")

  }, [])

  return (
   <div className="w-full h-[300vh] container-hero-section relative">
     <Section className="hero-section overflow-hidden">
      <img
        src="/images/image-hero-main-2.jpg"
        alt=""
        aria-label="hero"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 object-cover w-full h-full scale-150"
      />
      <DarkLayer />
      <div className="title-hero-container flex flex-col z-10 items-center justify-center gap-6 text-white text-center">
        <h1 className="text-5xl font-poppins w-[20ch] ">
          ¿Quieres tener un viaje sin preocupaciones?
        </h1>
        <Button>
          <p>Únete a la lista de espera</p>
        </Button>
      </div>
      <Button className="hero-button-bounce absolute bottom-12 left-1/2 -translate-x-1/2 py-4 cursor-default hover:bg-primary-blue animate-bounce">
        <svg
          width="24"
          height="16"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 298.04"
          className=" fill-white z-10"
        >
          <path
            fillRule="nonzero"
            d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"
          />
        </svg>
      </Button>
    </Section>
   </div>
  );
};
