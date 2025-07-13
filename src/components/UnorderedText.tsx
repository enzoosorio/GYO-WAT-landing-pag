import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react"
import { GraphicBar } from "./GraphicBar";
import { Footer } from "./Footer";

gsap.registerPlugin( ScrollTrigger, useGSAP)

interface Record {
    card: number;
    text: string;
    code: string;
}

interface OrderedWords {
    States: Record[];
    Positions: Record[];
    Prices: Record[];
    Locations: Record[];
}

export const UnorderedText = () => {

    const conainerRef = useRef<HTMLDivElement>(null)
    const [domReady, setDomReady] = useState(false);
    const [isScrollCompleted, setIsScrollCompleted] = useState(false);

    const orderedWords : OrderedWords = {
        States : [
            {
                card: 1,
                text: "Arizona",
                code: "Arizona"
            },
            {
                card: 2,
                text: "California",
                code: "California"
            },
            {
                card: 3,
                text: "Florida",
                code: "Florida"
            },
            {
                card: 4,
                text: "New York",
                code: "New_York"
            },
            {
                card: 5,
                text: "Texas",
                code: "Texas"
            }
        ],
        Positions: [
            {
                card: 1,
                text: "Busser",
                code: "Busser"
            },
            {
                card: 2,
                text: "Cashier",
                code: "Cashier"
            },
            {
                card: 3,
                text: "Lifeguard",
                code: "Lifeguard"
            },
            {
                card: 4,
                text: "Hostess",
                code: "Hostess"
            },
            {
                card: 5,
                text: "Photographer",
                code: "Photographer"
            }
        ],
        Prices: [
            {
                card: 1,
                text: "$16.5 per hour",
                code: "16_5_per_hour"
            },
            {
                card: 2,
                text: "$18 per hour",
                code: "18_per_hour"
            },
            {
                card: 3,
                text: "$20 per hour",
                code: "20_per_hour"
            },
            {
                card: 4,
                text: "$17 per hour",
                code: "17_per_hour"
            },
            {
                card: 5,
                text: "$11 per hour + tips",
                code: "11_per_hour"
            },
        ],
        Locations: [
            {
                card: 1,
                text: "GreenVille Marriot",
                code: "GreenVille_Marriot"
            },
            {
                card: 2,
                text: "Double Tree by Hilton",
                code: "Double_Tree_by_Hilton"
            },
            {
                card: 3,
                text: "Evergreen Studios",
                code: "Evergreen_Studios"
            },
            {
                card: 4,
                text: "Hilton Garden Inn",
                code: "Hilton_Garden_Inn"
            },
            {
                card: 5,
                text: "Hyatt Place",
                code: "Hyatt_Place"
            }
        ]
    }

    const checkpointPositions = [
    { left: "20%", top: "20%" },
    { left: "80%", top: "20%" },
    { left: "50%", top: "50%" },
    { left: "20%", top: "70%" },
    { left: "80%", top: "70%" },
    ];

    useEffect(() => {
        const initWordsPosition = () => {
            const wordsKeys = Object.keys(orderedWords) as (keyof OrderedWords)[];
            const container = conainerRef.current
            if(container){
            container.innerHTML = "";  
            checkpointPositions.forEach((pos, idx) => {
                const checkpointBox = document.createElement("div");
                checkpointBox.className = `checkpoint-box-${idx + 1} absolute -z-10  pointer-events-none`;
                checkpointBox.style.left = pos.left;
                checkpointBox.style.top = pos.top;
                checkpointBox.style.width = `8px`;
                checkpointBox.style.height = `8px`;
                
                // Crear el div auxiliar para el fondo
                const auxBgBox = document.createElement("div");
                auxBgBox.className = `bg-sky-300/50 absolute shadow-xl opacity-0 -z-10 rounded-xl pointer-events-none aux-bg-box-${idx + 1} card-${idx + 1}`;
                auxBgBox.style.left = pos.left;
                auxBgBox.style.top = pos.top;
                auxBgBox.style.width = `260px`;
                auxBgBox.style.height = `140px`;
                auxBgBox.style.transform = `translate(-37%, -40%)`;
                container.appendChild(auxBgBox);
                container.appendChild(checkpointBox);
            });
            
            wordsKeys.forEach((key) => {
                const words = orderedWords[key];

                words.forEach((word, index) => {
                const wordElement = document.createElement("div");
                wordElement.textContent = word.text;
                const className = `card-${word.card}-${word.code} card-${index + 1}`;
                wordElement.className =
                    `font-poppins ${className} absolute pointer-events-none select-none whitespace-nowrap ` +
                    (key === "States"
                         ? `uppercase text-3xl ${word.text === "California" ? "w-[4ch]" : word.text === "New York" ? "w-[5ch]" : word.text === "Texas" ? "w-[3ch]" : "w-[3ch]"} word-state h-[20px]  break-all`
                        : key === "Positions"
                        ? "text-lg"
                        : key === "Prices"
                        ? "font-bold text-base"
                        : "text-xs");

                // Medir tamaño antes de posicionar
                wordElement.style.visibility = "hidden";
                container.appendChild(wordElement);
                const { width, height } = wordElement.getBoundingClientRect();

                // Calcular posición random dentro del contenedor
                const maxX = container.offsetWidth - width;
                const maxY = container.offsetHeight - height;
                const x = Math.random() * (maxX > 0 ? maxX : 0);
                const y = Math.random() * (maxY > 0 ? maxY : 0);

                wordElement.style.left = `${x}px`;
                wordElement.style.top = `${y}px`;
                wordElement.style.visibility = "visible";
            });
                setDomReady(true);
            });
        }
        }
        initWordsPosition()

    }, [])

   useGSAP(() => {
    if (!domReady) return;

    const container = conainerRef.current;
    if (!container) return;

    ScrollTrigger.create({
            trigger: ".container-unordered-text",
            start: "top top",
            end: "bottom bottom",
            pin: ".unordered-text",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                if(progress === 1){
                    setIsScrollCompleted(true);
                    console.log("fin");
                    gsap.to(".footer-container", {
                        y: 1000, 
                        ease: "power1.out",
                        duration: 1,
                    });
                }
                else{
                    setIsScrollCompleted(false);
                    console.log("no fin");
                    gsap.to(".footer-container", {
                        y: 0, 
                        ease: "power1.out",
                        duration: 1,
                    });
                }
            },
            markers: true,
    });
    let tlForWords = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-unordered-text",
            start: "top top",
            end: "80% bottom",
            scrub: 1,
        }
    });

    //conseguir las posiciones de los checkpoints boxes respecto al contenedor
    //para poder animar las palabras a esas posiciones
   const checkPointPositionsLocal: { left: number; top: number }[] = [];
    checkpointPositions.forEach((_, idx) => {
        const checkPointBox = container.querySelector(`.checkpoint-box-${idx + 1}`) as HTMLElement;
        if (checkPointBox) {
            const boxRect = checkPointBox.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            checkPointPositionsLocal.push({
                left: boxRect.left - containerRect.left,
                top: boxRect.top - containerRect.top,
            });
        }
    });

    //iterar por cada palabra y animarla a su posicion
    const wordsKeys = Object.keys(orderedWords) as (keyof OrderedWords)[];
    wordsKeys.forEach((key) => {
        const words = orderedWords[key];
        words.forEach((word) => {
            const className = `.card-${word.card}-${word.code}`;
            const el = container.querySelector(className) as HTMLElement;
            if (!el) return;

            // Posición inicial de la palabra respecto al contenedor
            const wordRect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const initialX = wordRect.left - containerRect.left;
            const initialY = wordRect.top - containerRect.top;

            // Posición objetivo (checkpoint) para esta card
            const checkpoint = checkPointPositionsLocal[word.card - 1];
            if (!checkpoint) return;
           
            let offsetX = 0;
            let offsetY = 0;
            if (key === "States") {
                offsetX = word.text === "California" ? -75: word.text === "New York" ? -92 : word.text === "Texas" ? -65 : word.text === "Florida" ? -65 : -60;
                offsetY = word.text === "California" ? -45 : word.text === "New York" ? -28 : word.text === "Texas" ? -23 : word.text === "Arizona" ? -43 : -40;
            }
            if (key === "Positions"){
                offsetY = -32;

            };
            if (key === "Prices") offsetY = 24;

            let cardX = word.card === 1 ? 10 : word.card === 2 ? 15 : word.card === 3 ? 15 : word.card === 4 ? 30 : 0;
            let cardY = word.card === 1 ? 0 : word.card === 2 ? 5 : word.card === 3 ? 0 : word.card === 4 ? 0 : 0;

            tlForWords.to(el, {
                x: checkpoint.left - initialX + offsetX + cardX,
                y: checkpoint.top - initialY + offsetY + cardY,
                ease: "none",
                duration: 10,
            }, 0);
        });
    });

    // cambiar el color del background de los checkpoints auxiliares.
    checkPointPositionsLocal.forEach((_, idx) => {
        const auxBgBox = container.querySelector(`.aux-bg-box-${idx + 1}`) as HTMLElement;
        if (auxBgBox) {
            tlForWords.to(auxBgBox, {
                opacity: 1,
                ease: "power4.in",
                duration:4,
            },8);
            tlForWords.to(`.card-${idx + 1}`, {
                y: () => Math.random() * 280 + 400,
                ease: "back.in",
                duration:8,
            },"+=3  ")
        }
    })

   tlForWords.to(".section-graphic-bar", {
    y: "-75%",
    ease: "power2.out",
    duration: 20,
    delay: 4,
}, "-=7.5");

}, [domReady]);

  return (
   <>
    <div className="container-unordered-text w-full h-[700vh] relative overflow-hidden ">
        <div
        ref={conainerRef}
        className="unordered-text w-full mt-20 md:mt-40 h-[400px]  relative">
        </div>
        <GraphicBar/>
        <Footer/>
    </div>
   </>
  )
}
