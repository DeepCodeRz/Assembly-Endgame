export default function Header() {
    return (
        <header className={"flex flex-col items-center justify-center gap-4 text-center"}>
            <h1 className={"text-3xl font-semibold text-title"}>Assembly: Endgame</h1>
            <p className={"text-lg text-gray-500"}>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        </header>
    )
}