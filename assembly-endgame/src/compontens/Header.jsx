import {languages} from "../data/languages.js";

export default function Header() {
    return (
        <header className={"flex flex-col items-center justify-center gap-4 text-center"}>
            <h1 className={"text-3xl font-semibold text-text"}>Assembly: Endgame</h1>
            <p className={"text-lg text-gray-500"}>Guess the word in under {languages.length - 1} attempts to keep the programming world safe from Assembly!</p>
        </header>
    )
}