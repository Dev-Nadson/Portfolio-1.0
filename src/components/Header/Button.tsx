interface Ibutton {
    name: string
}

function Button(props: Ibutton) {
    const { name } = props

    return <button className="flex bg-purple-300 mx-2.5 py-2 px-6 rounded-xl hover:ring hover:ring-amber-50">{name}</button>
}

export { Button }