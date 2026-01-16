import "../../css/ui/form-button.css"

export default function FormButton({ name = "Create Room", type = "submit" }) {
    return (
        <button className="form-button" type={type}>{name}</button>
    );
}