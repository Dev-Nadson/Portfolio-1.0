import { Button } from "./Button"

function Section() {
    return (
        <div className="flex items-center mx-13">
            <Button name="Início" />
            <Button name="Sobre mim" />
            <Button name="Projetos" />
            <Button name="Contato" />
        </div>
    )
}

export { Section }