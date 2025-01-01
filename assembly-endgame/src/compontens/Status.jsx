import {getFarewellText} from "../utilities/utils.js";
import {languages} from "../data/languages.js";

export default function Status(props) {
    if (!props.isGameOver && props.isLastGuessIncorrect) {
        return (
            <div
                className={`flex flex-col justify-center h-36 bg-[#7A5EA7] border-2 border-dashed border-[#323232] text-center rounded-lg shadow-md`}>
                <p className={"text-lg text-white"}>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
            </div>
        )
    } else if (!props.isGameOver) {
        return <div className={"h-36"}></div>
    } else {
        return (
            <div
                className={`flex flex-col p-6 ${props.isGameWon ? "bg-green-600" : "bg-red-600"} text-center rounded-lg shadow-md`}>
                <h1 className={"text-2xl font-medium text-white"}>{props.isGameWon ? "You Win!" : "Game Over!"}</h1>
                <p className={"text-lg text-white"}>{props.isGameWon ? "Well done! 🎉" : "You lose! Better start learning Assembly 😭"}</p>
            </div>
        )
    }
}