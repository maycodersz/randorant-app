import Quote from "../components/ui/quote";
import FormHeader from "../components/ui/form-header";
import FormButton from "../components/ui/form-button";
import FormInput from "../components/ui/form-input";
import FormSwitch from "../components/ui/form-switch";
import { Link } from "react-router-dom";
import "../css/sections/form.css"

export default function JoinRoom() {
    return (
        <section className="join-room">
            <form className="join-room-form">
                <FormHeader route={"join-room"} title="Join your friends" description="Enter the room code and your display name to join your friend's restaurant voting session." />
                <FormInput name="Room Code" placeholder="Enter 6-digit room code" />
                <FormInput name="Display Name" placeholder="Enter your display name" />
                <FormSwitch router="join-room" label="Join as “Hungry Voter” (Random Name)" />
                <FormButton name="Join Room" type="submit" />
                <Link to="/create-room" className="form-redirect">Don’t have a room code?</Link>
            </form>
            <Quote quote="Your friends are waiting. Your vote matters." />
        </section>
    );
}