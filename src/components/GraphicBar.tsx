import { Section } from "./reusable/Section"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Footer } from "./Footer"

gsap.registerPlugin(ScrollTrigger, useGSAP)
export const GraphicBar = () => {

  useGSAP(() => {
    ScrollTrigger.create({
        trigger: ".container-graphic-bar",
        start: "top top",
        end: "bottom bottom",
        pin: ".section-graphic-bar",
        scrub: 1,
    });

    gsap.to(".footer-container", {
      bottom: 0,
      scrollTrigger: {
          trigger: ".container-graphic-bar",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,   
      },
      ease: "power2.out",
      duration: 4,
      delay: 3
    });


  }, [])

  return (
    //reinventar la aproximacion:
    //en vez de ingresar el graphicbar adentro de unordered text,
   // darle un componente propio y hacer que se scrolee y se quede pin
   // e incluir el footer aca, para que pueda lograr bien este efecto
      <div className="relative container-graphic-bar w-full h-[200vh]">
      <Section className="relative section-graphic-bar bg-[#f2ebeb] h-screen flex-col">
        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="font-poppins text-center text-lg sm:text-2xl lg:text-3xl w-[80%] ">Información pertinente para poder elegir las mejores opciones de acuerdo a tus  
            <span className="text-[#2ebb7e]"> metas.</span>
          </h3>
          <div className="h-[50%]  mx-auto relative"> 
            <img src="/images/grafico-landing-page.jpg" alt="Grafico informativo sobre trabajos solicitados en varios estados de Estados Unidos" 
          className="w-full h-full object-cover rounded-xl p-4 bg-white shadow-xl" />
          </div>
        </div>
        <Footer/>
      </Section>
      </div>
  )
}
