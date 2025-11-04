import { Section } from "./Section"
import { Code2 } from "lucide-react"

function Header() {
    return (
        <header className=" h-[48vw] my-7 mx-9 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl">

            <div className="flex justify-between bg-purple-200 h-22 rounded-t-3xl ">
                <div className="flex items-center mx-24 gap-5">
                    <Code2 className="size-13" />
                </div>
                <Section />
            </div>

            <div className="flex justify-between">
                <div className="ml-20 flex flex-col justify-between">
                    <div>
                        <h1 className="mt-50 text-[4rem] text-center">Olá, meu nome é <strong>Nadson Alex!</strong></h1>
                        <h3 className="text-5xl ">Desenvolvedor <strong className="text-indigo-700">Fullstack</strong></h3>
                        <p className="mt-5 text-2xl">
                            Transformando ideias em realidade de forma <strong>elegante e escalável</strong>!
                        </p>
                    </div>

                    <div className="mb-20">
                        <a href="#projetos" className="inline-block bg-purple-300 mx-2.5 py-4 px-18 rounded-full hover:shadow-lg hover:shadow-purple-400 hover:ring hover:ring-purple-50 text-2xl mt-35 font-bold transition-all duration-300 ease-in-out transform hover:scale-110">Veja meus Projetos</a>
                    </div>
                </div>
                <img src="/send-message.svg" alt="" className="h-[38vw] my-6 mr-30" />
            </div>

        </header>
    )
}

export { Header }