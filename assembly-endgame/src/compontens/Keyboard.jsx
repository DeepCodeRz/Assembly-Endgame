import { clsx } from "clsx"

export default function Keyboard(props) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keys = alphabet.split("").map(key => {
        const isGuessed = props.guessWord.includes(key)
        const isCorrect = isGuessed && props.currentWord.includes(key)
        const isWrong = isGuessed && !props.currentWord.includes(key)
        const className = clsx({
            "bg-green-500": isCorrect,
            "bg-red-500": isWrong,
            "bg-keyButton": !isGuessed
        })

        return (
            <button
                disabled={props.isGameOver}
                key={key}
                className={`${className} size-12 border border-border rounded-lg`}
                onClick={() => props.handleClick(key)}>{key}
            </button>
        )
    })

    return (
        <div className={"flex flex-wrap justify-center gap-2"}>
            {keys}
        </div>
    )
}