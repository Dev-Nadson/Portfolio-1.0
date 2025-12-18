interface Iprops {
    name?: string
    src: string
}

function Tech(props: Iprops) {
    const { name, src } = props
    return (
        <span className=" border  md:w-55 md:h-23 border-purple-600 shadow-md shadow-purple-300 rounded-2xl p-4 flex items-center justify-center gap-4 hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
            <img className="ml-2 size-15" src={src}></img>
            <h3 className="text-lg font-mono text-center">{name}</h3>
        </span>
    )
}

function AboutMe() {
    return (
        <div id="sobremim" className=" h-full my-12 py-6 px-10 shadow-2xl shadow-purple-400 border border-purple-700 rounded-3xl flex flex-col justify-between">
            <div className="px-10 flex flex-col items-center">

                <h1 className="text-5xl lg:py-4 font-bold">Sobre <strong className="text-indigo-700">Mim</strong>:</h1>

                <p className="lg:px-8 text-wrap text-center text-3xl mt-5">
                    Sou desenvolvedor fullstack pernambucano, focado no desenvolvimento de aplicações escaláveis e com alta performance.
                    Curso Ciência da Computação na Unifavip Wyden com bolsa integral pelo Prouni e atualmente foco meus estudos no ecossistema Node.js,
                    que compõe a minha stack de desenvolvimento.
                </p>

                <h2 className="font-bold mt-12 text-[2.3rem]">
                    <strong className="text-indigo-700">Tech</strong> Stack:
                </h2>

            </div>

            <div className=" flex justify-center pb-20">
                <div className="grid grid-cols-3 grid-rows-5 lg:grid-cols-5 lg:grid-rows-3 gap-6 lg:gap-16">
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
    )
}

export { AboutMe }