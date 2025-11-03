import { Section } from "./Section"
import { Terminal } from "lucide-react"


function Header() {
    return (
        <header className=" h-220 my-7 mx-9 border shadow-2xl shadow-purple-300 border-indigo-700 rounded-3xl">
            <div className="flex justify-between bg-indigo-200 h-22 rounded-t-3xl ">
                <div className="flex items-center mx-24 gap-5">
                    <Terminal className="w-10 h-10" />
                    <h3 className="text-3xl font-bold font-serif">Nadson Alex</h3>
                </div>
                <Section />
            </div>
            <div className="flex justify-between">
                <div>
                    <h1>Olá, meu nome é Nadson Alex!</h1>
                    <p className="h-160 w-140 my-15 ml-65 text-center">
                    </p>
                </div>
                <img src="../../../public/send-message.svg" alt="" className="h-150 my-15 mr-62" />
            </div>
        </header>
    )
}

export { Header }