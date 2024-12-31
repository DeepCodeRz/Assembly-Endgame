import { languages } from "../data/languages.js";

export default function Languages() {
    function Language(props) {
        return (
            <div style={{
                width: "max-content",
                padding: "10px",
                background: props.backgroundColor,
                color: props.color,
                borderRadius: "6px",
            }}>{props.name}</div>
        )
    }

    const languageElements = languages.map(language =>
        <Language name={language.name} backgroundColor={language.backgroundColor} color={language.color} />
    )

    return (
        <div className="flex flex-wrap justify-center gap-1">
            {languageElements}
        </div>
    )
}