import { useState } from 'react'
import Header from './Header'
import Status from './Status'
import Languages from './Languages'
import Keyboard from './Keyboard'

function App() {
    let [currentWord, setcurrentWord] = useState("react")

    const currentLetters = currentWord.toUpperCase().split("").map((letter, index) => {
        return <span key={index} className={"p-4 bg-wordBox border-b border-border text-title font-bold"}>{letter}</span>
    })

    return (
        <div className={"w-[30rem] flex flex-col justify-center gap-24"}>
            <header>
                <Header/>
            </header>

            <main className={"w-full flex flex-col justify-center gap-6"}>
                <Status/>
                <Languages />
                <div className={"flex justify-center gap-2"}>
                    {currentLetters}
                </div>
                <Keyboard />
            </main>
        </div>
    )
}

export default App
