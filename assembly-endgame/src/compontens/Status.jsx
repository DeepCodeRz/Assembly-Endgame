export default function Status(props) {
    return (
        <div className={`flex flex-col p-6 ${props.isGameWon ? "bg-green-600" : "bg-red-600"} text-center rounded-lg shadow-md`}>
            <h1 className={"text-2xl font-medium text-white"}>{props.isGameWon ? "You Win!" : "Game Over!"}</h1>
            <p className={"text-lg text-white"}>{props.isGameWon ? "Well done! 🎉" : "You lose! Better start learning Assembly 😭"}</p>
        </div>
    )
}