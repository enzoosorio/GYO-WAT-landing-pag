import { Button } from "./reusable/Button"

export const Footer = () => {

  return (
    <div className="footer-container fixed -bottom-full left-0 right-0 w-full h-[290px] bg-gray-600/45 backdrop-blur-3xl flex flex-row items-center justify-between px-24 py-8 ">
        <ol className="flex flex-col  items-center justify-center gap-4 text-white font-poppins">
            <li className="text-2xl">Comunidades</li>
            <li className="text-lg">Chats privados</li>
            <li className="text-lg">Gráficas e información</li>
            <li className="text-lg">Sección blog</li>
            <li className="text-lg">Estados, productos y más</li>
        </ol>
        <Button className="bg-white text-black">
            Unirse a la cola de espera
        </Button>
    </div>
  )
}
