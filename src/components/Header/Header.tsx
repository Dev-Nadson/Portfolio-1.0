import { Section } from "./Section"
import { Terminal } from "lucide-react"


function Header() {
    return (
        <header className=" h-175 my-7 mx-9 border shadow-xl shadow-purple-300 border-purple-700 rounded-3xl">
            <div className="flex justify-between bg-purple-200 h-22 rounded-t-3xl ">
                <div className="flex items-center mx-24 gap-5">
                    <Terminal className="w-10 h-10" />
                    <h3 className="text-3xl font-bold font-serif">Nadson Alex</h3>
                </div>
                <Section />
            </div>
            <div className="flex justify-between">
                <div className="ml-35">
                    <h1 className=" border-b-red-600 mt-15 text-4xl text-center">Olá, meu nome é Nadson Alex!</h1>
                    <p className="h-100 w-140 mt-5 text-center border-red-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, earum qui. Eveniet velit magnam est ut, ab necessitatibus dolor aliquid dolorum saepe eos, corrupti atque ratione quod sapiente autem illum.
                    </p>
                </div>
                <img src="../../../public/send-message.svg" alt="" className="h-135 my-6 mr-30" />
            </div>
        </header>
    )
}

export { Header }