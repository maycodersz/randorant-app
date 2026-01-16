import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import "../../css/ui/quote.css"

export default function Quote({ quote = "Have a nice meal." }) {
    return (
        <div className="quote-container">
            <MdOutlineSentimentVerySatisfied className="quote-icon" />
            <h1>"{quote}"</h1>
            <p>- Maycoder</p>
        </div>
    );
}