import { languages } from "../data/languages.js";

export default function Languages(props) {
    function Language(props) {
        return (
            <div style={{
                opacity: props.isLanguageLost ? "30%" : "100%",
                width: "max-content",
                padding: "10px",
                background: props.backgroundColor,
                color: props.color,
                borderRadius: "6px",
            }}>{props.name}</div>
        )
    }

    const languageElements = languages.map((language, index) =>{
        const isLanguageLost = index < props.wrongGuess

        return (
        <Language key={language.name} isLanguageLost={isLanguageLost} name={language.name} backgroundColor={language.backgroundColor} color={language.color} />
        )
    }
    )


    return (
        <div className="flex flex-wrap justify-center gap-1">
            {languageElements}
        </div>
    )
}