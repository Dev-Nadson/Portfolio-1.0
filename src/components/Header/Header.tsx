import { Section } from "./Section"
import { Code2 } from "lucide-react"

function Header() {
    return (
        <header className="h-150 md:h-[95vh] shadow-2xl shadow-purple-300 border border-purple-700 rounded-3xl flex flex-col">

            <div className="bg-purple-200 py-5 px-5 md:px-28 rounded-t-3xl transition-all duration-500">
                <div className="mx-auto flex justify-between max-w-400">

                    <div className="flex items-center gap-5">
                        <Code2 className="size-10 md:size-14" />
                    </div>
                    <Section />
                </div>
            </div>

            <section className="px-4 md:px-15 flex flex-1 items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-12">
                    <div className="flex flex-col justify-between items-center lg:items-start h-full min-h-90">

                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl md:text-6xl text-center lg:text-start text-wrap">Olá, meu nome é <strong>Nadson Alex!</strong></h1>
                            <h3 className="text-3xl md:text-5xl text-center lg:text-start">Desenvolvedor <strong className="text-indigo-700">Fullstack</strong></h3>
                            <p className="text-xl md:text-2xl text-center lg:text-start">Transformando ideias em realidade de forma <strong>elegante e escalável</strong>! </p>
                        </div>

                        <div className="">
                            <a href="#projetos" className=" flex w-fit bg-purple-300 py-4 px-10 md:px-18 rounded-full hover:shadow-lg hover:shadow-purple-400 hover:ring hover:ring-purple-50 text-xl md:text-2xl font-bold transition-all duration-300 ease-in-out transform hover:scale-110">Veja meus Projetos</a>
                        </div>
                    </div>

                    <img src="/send-message.svg" alt="" className="h-[38vw] hidden lg:block my-6" />
                </div>
            </section>

        </header>
    )
}

export { Header }