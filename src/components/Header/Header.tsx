import { Section } from "./Section"
import { Terminal } from "lucide-react"


function Header() {
    return (
        <header className=" h-220 my-7 mx-9 border shadow-2xl shadow-purple-300 border-indigo-700 rounded-3xl">
            <div className="flex justify-between bg-indigo-200 h-22 rounded-t-3xl ">
                <div className="flex items-center mx-24 gap-5">
                    <Terminal className="w-10 h-10" />
                    <h1 className="text-5xl font-bold font-serif">Nadson Alex</h1>
                </div>
                <Section />
            </div>
        </header>
    )
}

export { Header }