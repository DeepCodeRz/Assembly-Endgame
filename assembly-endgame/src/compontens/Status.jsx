export default function Status({ status }) {
    return (
        <div className="flex flex-col p-6 bg-green-600 text-center rounded-lg shadow-sm">
            <h1 className={"text-2xl font-medium text-white"}>You Win!</h1>
            <p className={"text-lg text-white"}>Well, done! 🎉</p>
        </div>
    )
}