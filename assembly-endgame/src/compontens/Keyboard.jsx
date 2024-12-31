export default function Keyboard() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const keys = alphabet.map(key => <button key={key} className={"size-12 bg-key border border-border rounded-lg"}>{key}</button>)

    return (
        <div className={"flex flex-wrap justify-center gap-2"}>
            {keys}
        </div>
    )
}