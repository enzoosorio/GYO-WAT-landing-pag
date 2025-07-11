
import { Section } from './reusable/Section'
import { CardsPresentation } from './reusable/CardsPresentation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const Presentation = () => {

  const messages = [
    {
      content : 'GYO es una plataforma que asienta la comunidad de viajeros que deseen realizar algún programa de trabajos para jóvenes, como el Work and Travel, Internship, entre otros. Esta propuesta nace de la necesidad de los viajeros de contar con una plataforma que les permita encontrar información verificada y actualizada sobre los programas de trabajo, las agencias existentes, los salarios, las experiencias de otros viajeros, entre otras cosas.',
      isOdd: false,
      image : '/images/about-GYO-1.png'
    },
    {
      content : 'GYO es una plataforma que asienta la comunidad de viajeros que deseen realizar algún programa de trabajos para jóvenes, como el Work and Travel, Internship, entre otros. Esta propuesta nace de la necesidad de los viajeros de contar con una plataforma que les permita encontrar información verificada y actualizada sobre los programas de trabajo, las agencias existentes, los salarios, las experiencias de otros viajeros, entre otras cosas.',
      isOdd: true,
      image : '/images/about-GYO-3.png'
    },
    {
      content : 'GYO es una plataforma que asienta la comunidad de viajeros que deseen realizar algún programa de trabajos para jóvenes, como el Work and Travel, Internship, entre otros. Esta propuesta nace de la necesidad de los viajeros de contar con una plataforma que les permita encontrar información verificada y actualizada sobre los programas de trabajo, las agencias existentes, los salarios, las experiencias de otros viajeros, entre otras cosas.',
      isOdd: false,
      image : '/images/about-GYO-4.png'
    }
  ]

  useGSAP(() => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-presentation-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: '.presentation-section',
        markers: false,
      }
    })
    
    timeline.to('.container-presentation-cards', {
      y: -1650,
      ease: 'none',
      duration: 1,
    }, 0)

  }, [])

  return (
    <div className=' w-full h-[260vh] container-presentation-section overflow-hidden '>
      <Section className='presentation-section h-full items-center'>
        <div className='container-presentation-cards flex  text-center'>
          {messages.map((message, index) => (
            <CardsPresentation 
              key={index}
              image={message.image}
              isOdd={message.isOdd}
              index={index}
              className={index !== 0 ? 'absolute left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
            >
              <p className='text-left text-xl font-poppins w-[50ch] font-medium text-black'>{message.content}</p>
            </CardsPresentation>
          ))}
        </div>
      </Section>
    </div>
  )
}
