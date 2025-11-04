interface Iprops {
    name?: string
    src: string
}

function Tech(props: Iprops) {
    const { name, src } = props
    return (
        <span className=" border w-55 h-23 border-purple-600 shadow-md shadow-purple-300 rounded-2xl p-4 flex items-center justify-center gap-4 hover:bg-purple-200 hover:ring-2 hover:ring-amber-50 transition-all duration-300 ease-in-out transform hover:scale-105">
            <img className="size-15" src={src}></img>
            <h3 className="text-lg">{name}</h3>
        </span>
    )
}

function AboutMe() {
    return (
        <div id="sobremim" className=" h-[48vw] mt-12 mb-6 mx-9 border shadow-2xl shadow-purple-300 border-purple-700 rounded-3xl flex flex-col justify-between p-6">
            <div>
                <h1>Sobre Mim</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quia ex aliquam omnis accusamus impedit eum numquam nulla quo corrupti, itaque autem tempora dolorem architecto debitis nam velit a laudantium!</p>
                <h2>Tech stack:</h2>
            </div>

            <div className=" flex justify-center mb-30">
                <div className="grid grid-cols-5 grid-rows-3 gap-15 ">
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