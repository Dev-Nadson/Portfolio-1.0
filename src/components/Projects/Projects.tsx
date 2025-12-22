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
        <div className="flex flex-col w-full h-full lg:max-h-200 pb-10 pt-15 px-4 shadow-xl bg-linear-65 from-purple-50 to-purple-100 shadow-purple-300 border-t-6 border-purple-200 rounded-3xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="flex flex-col flex-1 justify-between gap-8">
                <div className="flex justify-center text-3xl font-bold font-mono text-center">
                    <h1 >{title}</h1>
                </div>

                <div className="flex flex-col gap-3">
                    <img src={src} alt="" className={className} />
                    <p className="text-center text-xl text-wrap px-2 md:px-5">{text}</p>
                </div>

                <div className="flex justify-center items-baseline">
                    <ButtonRepo name="Código Fonte" link={link_repo} />
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="h-[48vw] lg:px-10 pt-4 mb-2 flex flex-col justify-between gap-8 md:gap-10">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold">Projetos<span className="text-purple-700">:</span></h1>
            </div>

            <div className="flex flex-1 flex-col pb-10 lg:flex-row justify-around gap-9 md:gap-12" id="projetos">
                <Project title="Counter-Project" src="counter-pj.png" link_repo="#projetos" className="mx-5 rounded-2xl mb-2" text="É um contador simples em React com TypeScript e Tailwind CSS, utilizando componentes modulares e tema claro/escuro. Usando o hook `useState` para gerenciamento do contador." />
                <Project title="PsyApp - API" src="office2.svg" link_repo="#projetos" className="px-5" text="API para sistema de anamnese com autenticação JWT, rotas protegidas e validação via Zod. Possui cadastro de pacientes, profissionais e anamneses, além de soft delete para dados sensíveis. Desenvolvida com Knex, PostgreSQL e Docker." />
                <Project title="Digital Wallet - API" src="business.svg" link_repo="#projetos" className="px-15" text="API para transações digitais com foco em segurança e integridade, usando SQLite, Knex e Zod. Implementa validações de saldo, impedindo transferências para o próprio usuário e valores acima do disponível." />
            </div>
        </div >
    )
}

export { Projects }