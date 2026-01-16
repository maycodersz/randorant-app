import { BsIncognito } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";
import "../../css/ui/form-switch.css";

export default function FormSwitch({ router = "create-room", label }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.checked;
        setIsChecked(newValue);
    };

    return (
        <div className="form-switch-container">
            <label className="form-switch-label">{label}</label>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />
                <span className={`slider ${isChecked ? "checked" : ""}`}>
                    <div className={`slider-icon-container ${isChecked ? "checked" : ""}`}>
                        {router == "create-room" ? <FaRegClock className="slider-icon" /> : <BsIncognito className="slider-icon" />}
                    </div>
                </span>
            </label>
        </div>
    );
}