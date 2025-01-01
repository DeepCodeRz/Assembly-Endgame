import { useState } from 'react'
import Header from './Header'
import Status from './Status'
import Languages from './Languages'
import Keyboard from './Keyboard'
import { languages } from "../data/languages.js";
import { chooseRandomWord } from "../utilities/utils";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {
    const { width, height } = useWindowSize()

    // State values
    let [currentWord, setCurrentWord] = useState(() => chooseRandomWord());
    let [guessWord, setGuessWord] = useState([])

    // Derived values
    const wrongGuessCount = guessWord.map(letter => currentWord.includes(letter) ? 1 : 0).filter(num => num === 0).length
    const remainingGuessCount = (languages.length - wrongGuessCount - 1)

    const isGameWon = currentWord.split("").every(letter => guessWord.includes(letter))
    const isGameLost = remainingGuessCount === 0
    const isGameOver = isGameWon || isGameLost

    const lastGuessedLetter = guessWord[guessWord.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

    // Static values
    const currentLetters = currentWord.split("").map((letter, index) => {
        return (
            <span
                key={index}
                className={`size-12 flex justify-center items-center bg-wordBox border-b border-border ${isGameLost && !guessWord.includes(letter) ? "text-red-600" : "text-text"} font-bold`}>
                {guessWord.includes(letter) || isGameLost ? letter : ""}
            </span>
        )
    })

    function handleKeyPress(key) {
        const isDuplicate = guessWord.includes(key)
        setGuessWord((currentGuess) => isDuplicate ? currentGuess : [...currentGuess, key])

        return currentWord.includes(key);
    }

    function handleReset() {
        setCurrentWord(() => chooseRandomWord())
        setGuessWord([])
    }

    return (
        <main className={"w-[30rem] flex flex-col justify-center gap-12"}>
            <header><Header/></header>

            <div className={"flex flex-col justify-center gap-6"}>
                {!isGameOver && <p className={"text-center text-white font-semibold"}>You have {remainingGuessCount} guesses left.</p>}

                <Status isGameOver={isGameOver} isGameWon={isGameWon} isLastGuessIncorrect={isLastGuessIncorrect} wrongGuessCount={wrongGuessCount} />

                <Languages wrongGuess={wrongGuessCount}/>

                <div className={"flex justify-center gap-2"}>
                    {currentLetters}
                </div>

                <Keyboard isGameOver={isGameOver} wrongGuessCounter={wrongGuessCount} currentWord={currentWord} guessWord={guessWord} handleClick={handleKeyPress}/>

                <div className={"flex justify-center gap-2"}>
                    {isGameOver && <button onClick={() => handleReset()} className={"px-12 py-4 bg-blue-500 rounded-xl text-text font-semibold shadow-md"}>New
                        Game</button>}
                </div>

                {isGameWon && <Confetti width={width} height={height}/>}
            </div>
        </main>
    )
}

export default App