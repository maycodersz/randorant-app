import { BsHouseAddFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import "../../css/sections/how-it-works.css"

export default function HowItWorks() {
    return (
        <section id="how-it-works">
            <h1 className="section-title">How It Works</h1>
            <div className="how-it-works-card-container">
                <div className="how-it-works-card">
                    <BsHouseAddFill className="how-it-works-card-icon" />
                    <h1>Create</h1>
                    <p>Set your location and budget. We’ll find matching restaurants.</p>
                </div>
                <div className="how-it-works-card">
                    <FaUserFriends className="how-it-works-card-icon" />
                    <h1>Join</h1>
                    <p>Share the unique room code with friends via any messaging app. No accounts needed.</p>
                </div>
                <div className="how-it-works-card">
                    <GiChampions className="how-it-works-card-icon" />
                    <h1>Decide</h1>
                    <p>Vote on restaurant cards. Watch votes tally up and celebrate the winner.</p>
                </div>
            </div>
        </section>
    );
}