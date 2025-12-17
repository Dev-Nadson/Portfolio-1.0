interface Ibutton {
    name: string
    link: string
}

function Button(props: Ibutton) {
    const { name, link } = props
    return <a href={link} className="bg-purple-300 text-sm md:text-lg py-2 px-4 rounded-xl hover:ring hover:ring-amber-50 hover:shadow-md hover:shadow-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105">{name}</a>
}

export { Button }