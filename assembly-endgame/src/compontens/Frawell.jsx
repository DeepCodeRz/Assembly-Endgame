import { getFarewellText } from "../utilities/utils";
import { languages } from "../data/languages.js";

export default function Frawell(props) {
    return (
        <div className={`flex flex-col p-6 bg-[#7A5EA7] border-2 border-dashed border-[#323232] text-center rounded-lg shadow-md`}>
            <p className={"text-lg text-white"}>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</p>
        </div>
    )
}