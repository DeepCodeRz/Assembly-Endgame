import { useState } from 'react'
import Header from './Header'
import Frawell from "./Frawell";
import Status from './Status'
import Languages from './Languages'
import Keyboard from './Keyboard'
import { languages } from "../data/languages.js";
import { chooseRandomWord } from "../utilities/utils";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {
    const { width, height } = useWindowSize()

    let [currentWord, setCurrentWord] = useState(() => chooseRandomWord());
    let [guessWord, setGuessWord] = useState([])

    const wrongGuessCount = guessWord.map(letter => currentWord.includes(letter) ? 1 : 0).filter(num => num === 0).length
    const remainingGuessCount = (languages.length - wrongGuessCount - 1)
    const isGameWon = guessWord.join("") === currentWord
    const isGameLost = remainingGuessCount === 0
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessWord.join("")[guessWord.join("").length - 1]
    const isLastGuessIncorrect = guessWord.join("") && !currentWord.includes(lastGuessedLetter)

    const currentLetters = currentWord.split("").map((letter, index) => {
        return <span key={index} className={"size-12 flex justify-center items-center bg-wordBox border-b border-border text-title font-bold"}>{guessWord.includes(letter) || isGameLost ? letter : ""}</span>
    })

    function keyPressed(key) {
        setGuessWord((currentGuess) => currentGuess.includes(key) ? currentGuess : [...currentGuess, key])

        return currentWord.includes(key);
    }

    function resetGame() {
        setCurrentWord(() => chooseRandomWord())
        setGuessWord([])
    }

    return (
        <div className={"w-[30rem] flex flex-col justify-center gap-12"}>
            <header>
                <Header/>
            </header>

            <main className={"flex flex-col justify-center gap-6"}>
                <p className={"text-center text-white font-semibold"}>You have {remainingGuessCount} guesses left.</p>
                {(!isGameOver && isLastGuessIncorrect) ? <Frawell isGameOver={isGameOver} wrongGuessCount={wrongGuessCount}/> : null}
                {isGameOver ? <Status isGameOver={isGameOver} isGameWon={isGameWon}/> : <div className={"h-36"}></div>}
                <Languages wrongGuess={wrongGuessCount}/>
                <div className={"flex justify-center gap-2"}>
                    {currentLetters}
                </div>
                <Keyboard isGameOver={isGameOver} wrongGuessCounter={wrongGuessCount} currentWord={currentWord} guessWord={guessWord} handleClick={keyPressed}/>
                <div className={"flex justify-center gap-2"}>
                    {isGameOver && <button onClick={resetGame} className={"px-12 py-4 bg-blue-500 rounded-xl text-title font-semibold shadow-md"}>New
                        Game</button>}
                </div>
                {isGameWon &&
                    <Confetti
                        width={width}
                        height={height}
                    />
                }
            </main>
        </div>
    )
}

export default App
