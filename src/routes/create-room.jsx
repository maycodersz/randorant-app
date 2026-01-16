import Quote from "../components/ui/quote";
import FormHeader from "../components/ui/form-header";
import FormButton from "../components/ui/form-button";
import FormLocation from "../components/ui/form-location";
import FormSwitch from "../components/ui/form-switch";
import "../css/sections/form.css"

export default function CreateRoom() {
    return (
        <section className="create-room">
            <form className="create-room-form">
                <FormHeader route={"create-room"} title="Find Restaurants" description="Set your location and budget. We’ll find matching restaurants." />
                <FormLocation />
                <FormSwitch router="create-room" label="Only show open restaurants now" />
                <FormButton name="Create Room" type="submit" />
            </form>
            <Quote quote="Great meals start with great decisions." />
        </section>
    );
}