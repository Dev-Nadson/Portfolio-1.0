interface Iprops {
    name?: string
    src: string
}

function Tech(props: Iprops) {
    const { name, src } = props
    return (
        <span className="flex overflow-hidden flex-col lg:min-w-42 lg:flex-row items-center justify-center px-2 flex-1 py-2 md:py-4 gap-1 md:gap-4 bg-linear-65 from-purple-50 to-purple-100 border border-purple-600 shadow-md shadow-purple-300 rounded-2xl hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
            <img className="size-10 md:size-15" src={src}></img>
            <h3 className="text-[10px] md:text-lg font-mono text-center text-wrap">{name}</h3>
        </span>
    )
}

function AboutMe() {
    return (
        <div id="sobremim" className=" h-full mt-12 mb-8 py-10 px-4 lg:pb-20 lg:pt-15 md:px-10 bg-linear-65 from-purple-50 to-purple-100 shadow-2xl shadow-purple-400 border-t-8 border-purple-200 rounded-3xl flex flex-col justify-between">
            <div className=" flex flex-col items-center gap-2 md:gap-12">

                <h1 className="text-4xl md:text-6xl font-bold">Sobre <strong className="text-indigo-700"> Mim</strong>:</h1>

                <p className="lg:px-8 hidden lg:block text-wrap text-center text-xl md:text-3xl">
                    Sou desenvolvedor fullstack pernambucano, focado no desenvolvimento de aplicações escaláveis e com alta performance.
                    Curso Ciência da Computação na Unifavip Wyden com bolsa integral pelo PROUNI e atualmente foco meus estudos no ecossistema Node.js,
                    que compõe a minha stack de desenvolvimento.
                </p>

                <p className=" text-wrap text-center md:text-3xl lg:hidden">
                    Sou desenvolvedor fullstack pernambucano, estudante de Ciência da Computação na Unifavip Wyden com bolsa integral pelo PROUNI, com foco em aplicações escaláveis e no ecossistema Node.js.
                </p>

                <h2 className="font-bold text-4xl md:text-6xl">
                    <strong className="text-indigo-700">Tech</strong> Stack:
                </h2>

                <div className=" flex justify-center px-4">
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2 md:gap-12 w-full max-w-7xl">
                        <Tech name="Typescript" src="TypeScript.svg" />
                        <Tech name="Javascript" src="JavaScript.svg" />
                        <Tech name="Node.js" src="Node.js.svg" />
                        <Tech name="Fastify" src="Fastify.svg" />
                        <Tech name="Knex.js" src="Knex.js.svg" />
                        <Tech name="Python" src="Python.svg" />
                        <Tech name="FastApi" src="FastAPI.svg" />
                        <Tech name="React" src="React.svg" />
                        <Tech name="Tailwind CSS" src="Tailwind-CSS.svg" />
                        <Tech name="HTML 5" src="HTML5.svg" />
                        <Tech name="CSS 3" src="CSS3.svg" />
                        <Tech name="PostgreSQL" src="PostgresSQL.svg" />
                        <Tech name="SQLite" src="SQLite.svg" />
                        <Tech name="Docker" src="Docker.svg" />
                        <Tech name="Ubuntu" src="Ubuntu.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AboutMe }