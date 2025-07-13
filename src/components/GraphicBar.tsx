import { Section } from "./reusable/Section"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)
export const GraphicBar = () => {

  return (
      <>
      <Section className="section-graphic-bar bg-[#F7F7F7] translate-y-full flex-col">
        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="font-poppins text-center text-3xl w-[80%] ">Información pertinente para poder elegir las mejores opciones de acuerdo a tus  
            <span className="text-[#2ebb7e]"> metas.</span>
          </h3>
          <div className="w-[800px]  mx-auto relative"> 
            <img src="/images/grafico-landing-page.jpg" alt="Grafico informativo sobre trabajos solicitados en varios estados de Estados Unidos" 
          className="w-full h-full object-cover rounded-xl p-4 bg-white shadow-xl" />
          </div>
        </div>
      </Section>
      </>
  )
}
