interface CardsPresentationProps {
    children: React.ReactNode;
    image : string;
    isOdd? : boolean;
}

export const CardsPresentation = ({ image, children, isOdd }: CardsPresentationProps) => {
  return (
    <div className={`"w-3/4 mx-auto h-full flex items-center justify-center gap-6 ${isOdd ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row "}`}>
        <div className="w-full  overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover scale-150" />
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-poppins font-medium text-black">{children}</p>
        </div>
    </div>
  )
}
