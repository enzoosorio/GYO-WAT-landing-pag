
import { Section } from './reusable/Section'
import { CardsPresentation } from './reusable/CardsPresentation'

export const Presentation = () => {
  return (
    <div className='w-full bg-amber-200 h-[300vh] container-presentation-section'>
      <Section className='presentation-section'>
        <div className='flex flex-col items-center justify-center h-full gap-6 text-center'>
            <CardsPresentation
            image='/images/about-GYO-1.png'
            >
                <p>
                    GYO es una plataforma que asienta la comunidad de viajeros que deseen realizar
                    algún programa de trabajos para jóvenes, como el Work and Travel, Internship, entre otros.
                    Esta propuesta nace de la necesidad de los viajeros de contar con una plataforma
                    que les permita encontrar información verificada y actualizada sobre los programas de trabajo,
                    las agencias existentes, los salarios, las experiencias de otros viajeros, entre otras cosas.
                </p>
            </CardsPresentation>
            <CardsPresentation
            isOdd
            image='/images/about-GYO-1.png'
            >
                <p>
                    GYO es una plataforma que asienta la comunidad de viajeros que deseen realizar
                    algún programa de trabajos para jóvenes, como el Work and Travel, Internship, entre otros.
                    Esta propuesta nace de la necesidad de los viajeros de contar con una plataforma
                    que les permita encontrar información verificada y actualizada sobre los programas de trabajo,
                    las agencias existentes, los salarios, las experiencias de otros viajeros, entre otras cosas.
                </p>
            </CardsPresentation>
            <CardsPresentation
            image='/images/about-GYO-1.png'
            >
                <p>
                    GYO es una plataforma que asienta la comunidad de viajeros que deseen realizar
                    algún programa de trabajos para jóvenes, como el Work and Travel, Internship, entre otros.
                    Esta propuesta nace de la necesidad de los viajeros de contar con una plataforma
                    que les permita encontrar información verificada y actualizada sobre los programas de trabajo,
                    las agencias existentes, los salarios, las experiencias de otros viajeros, entre otras cosas.
                </p>
            </CardsPresentation>
        </div>
      </Section>
    </div>
  )
}
