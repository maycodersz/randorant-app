import "../../css/ui/form-input.css"

export default function FormInput({ name = "Title", placeholder = "Placeholder" }) {
    return (
        <div className="form-input">
            <label className="form-label">{name}</label>
            <input type="text" placeholder={placeholder} />
        </div>
    );
}