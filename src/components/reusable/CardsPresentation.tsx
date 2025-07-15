import { twMerge } from "tailwind-merge";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)


interface CardsPresentationProps {
    children: React.ReactNode;
    image : string;
    isOdd? : boolean;
    className?: string;
    index : string | number;
}

export const CardsPresentation = ({ image, children, isOdd, className, index }: CardsPresentationProps) => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: `.card-presentation-${index}`,
            start: 'top 70%',
            end: '70% 95%',
            scrub: 1,
            }
        })

        tl.to(`.card-presentation-${index} img`, {
          scale: 1,
          ease: 'none',
          duration: 1,
        })

    }, [])

    return (
    <div 
    style={{
        top: index !== 0 ? `calc(750px * ${index})` : '',
    }}
    className={twMerge(
        `
        ${`card-presentation-${index}`}
        w-11/12 lg:w-3/4 tracking-tight mx-auto h-auto flex items-center justify-center 
        gap-6 md:gap-12`,
        isOdd === true ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row',
        className)}>
        <div className="w-full h-full overflow-hidden">
            <img src={image} alt="" className="w-full object-contain scale-120" />
        </div>
       {children}
    </div>
  )
}
