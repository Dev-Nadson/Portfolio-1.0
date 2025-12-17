import { Section } from "./Section"
import { Code2 } from "lucide-react"

function Header() {
    return (
        <header className=" h-[95vh] border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl">

            <div className="flex justify-between bg-purple-200 py-5 px-5 md:px-28 rounded-t-3xl transition-all duration-500">
                <div className="flex items-center gap-5">
                    <Code2 className="size-10 md:size-14" />
                </div>
                <Section />
            </div>

            <div className="flex">

                <div className="px-3 md:px-20 flex flex-col justify-evenly">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-6xl text-center md:text-start">Olá, meu nome é <strong>Nadson Alex!</strong></h1>
                        <h3 className="text-3xl md:text-5xl text-center md:text-start">Desenvolvedor <strong className="text-indigo-700">Fullstack</strong></h3>
                        <p className="text-xl md:text-2xl text-center md:text-start">Transformando ideias em realidade de forma <strong>elegante e escalável</strong>! </p>
                    </div>

                    <div className="">
                        <a href="#projetos" className=" flex w-fit bg-purple-300  py-4 px-18 rounded-full hover:shadow-lg hover:shadow-purple-400 hover:ring hover:ring-purple-50 text-2xl mt-35 font-bold transition-all duration-300 ease-in-out transform hover:scale-110">Veja meus Projetos</a>
                    </div>
                </div>

                <img src="/send-message.svg" alt="" className="h-[38vw] hidden md:block my-6 " />
            </div>

        </header>
    )
}

export { Header }