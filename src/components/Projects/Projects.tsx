interface Ibutton {
    name: string
    link: string
}
interface Iproject {
    src: string
    className?: string
    text: string
    title: string
    link_repo: string
}

function ButtonRepo(props: Ibutton) {
    const { name, link } = props
    return <a href={link} className="bg-purple-300 mx-2.5 py-3 px-7 rounded-xl hover:ring hover:ring-amber-50 hover:shadow-md hover:shadow-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105">{name}</a>
}

function Project(props: Iproject) {
    const { src, className, text, title, link_repo } = props
    return (
        <div className="flex flex-col justify-between gap-6">
            <div className="flex justify-center mt-12 text-3xl font-bold font-mono">
                <h1 >{title}</h1>
            </div>

            <img src={src} alt="" className={className} />
            <p className=" text-center mx-8 text-xl ">{text}</p>

            <div className="flex justify-center">
                <ButtonRepo name="Código Fonte" link={link_repo} />
            </div>
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
                    <Project title="Counter-Project" src="counter-pj.png" link_repo="#projetos" className="mx-10 mt-6 mb-8 rounded-2xl" text="É um contador simples em React com TypeScript e Tailwind CSS, utilizando componentes modulares e tema claro/escuro. Usando o hook `useState` para gerenciamento do contador." />
                </div>

                <div className=" h-[40vw] mb-12 mx-9 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Project title="PsyApp - API" src="office2.svg" link_repo="#projetos" className="mx-7" text="API para sistema de anamnese com autenticação JWT, rotas protegidas e validação via Zod. Possui cadastro de pacientes, profissionais e anamneses, além de soft delete para dados sensíveis. Desenvolvida com Knex, PostgreSQL e Docker." />
                </div>

                <div className=" h-[40vw] mb-12 mr-22 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Project title="Digital Wallet - API" src="business.svg" link_repo="#projetos" className="mx-auto size-95" text="API para transações digitais com foco em segurança e integridade, usando SQLite, Knex e Zod. Implementa validações de saldo, impedindo transferências para o próprio usuário e valores acima do disponível." />
                </div>
            </div>
        </div >
    )
}

export { Projects }