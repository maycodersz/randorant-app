import { TbLocation } from "react-icons/tb";
import "../../css/ui/form-location.css"

export default function FormLocation() {
    return (
        <div className="form-location">
            <label className="form-label">Location</label>
            <div className="form-location-bottom">
                <input type="text" placeholder="Enter your location or address" />
                <button>
                    <TbLocation className="form-location-icon" />
                    Current Location
                </button>
            </div>
        </div>
    );
}