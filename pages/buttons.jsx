import { Button } from "@/components/ui/Button"


function ButtonsPage() {
    return(
        <div className = "p-4 space y-4 flex flex-col max-w-[200px]">
            <Button>Primary</Button>
            <Button>Primary Outline</Button>
            <Button variant = "secondary">fundillo</Button>
        </div>
    )
}
export default ButtonsPage