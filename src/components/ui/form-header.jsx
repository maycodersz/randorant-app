import { IoRestaurant } from "react-icons/io5";
import { BsFillHouseFill } from "react-icons/bs";
import "../../css/ui/form-header.css"

export default function FormHeader({ route, title, description }) {
    return (
        <div className="form-header">
            {route == "create-room" ? (<IoRestaurant className="form-icon" />) : (<BsFillHouseFill className="form-icon" />)}
            <h1 className="form-title">{title}</h1>
            <p className="form-description">{description}</p>
        </div>
    );
}