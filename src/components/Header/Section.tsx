import { Button } from "./Button"

function Section() {
    return (
        <div className="flex items-center gap-3 md:gap-6">
            <Button link="#sobremim" name="Sobre mim" />
            <Button link="#" name="Contato" />
        </div>
    )
}

export { Section }