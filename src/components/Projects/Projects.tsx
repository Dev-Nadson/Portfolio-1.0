interface Iproject {
    src: string
    className?: string
    text: string
    title?: string
}

function Project(props: Iproject) {
    const { src, className, text, title } = props
    return (
        <div className="flex flex-col justify-between gap-8">
            <div className="flex justify-center mt-20 text-3xl font-bold font-mono">
                <h1 >{title}</h1>
            </div>
            <img src={src} alt="" className={className} />
            <p className=" text-center mx-8 text-xl ">{text}</p>
        </div>
    )
}

function Projects() {
    return (
        <div className="h-[48vw] flex flex-col justify-between gap-7">
            <div className="text-center">
                <h1 className="text-[5rem] font-bold">Projetos<span className="text-purple-700">:</span></h1>
            </div>

            <div className="grid grid-cols-3" id="projetos">
                <div className=" h-[40vw] mb-12 ml-22 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Project title="Counter-Project" src="counter-pj.png" className="mx-10 mt-4 mb-8 rounded-2xl" text="É um contador simples em React com TypeScript e Tailwind CSS, utilizando componentes modulares e tema claro/escuro. Usando o hook `useState` para gerenciamento do contador." />
                </div>

                <div className=" h-[40vw] mb-12 mx-9 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Project src="send-message.svg" className="m-20" text="lorem" />
                </div>

                <div className=" h-[40vw] mb-12 mr-22 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Project src="send-message.svg" text="lorem" />
                </div>
            </div>
        </div >
    )
}

export { Projects }