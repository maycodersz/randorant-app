import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import "../../css/sections/hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-top">
                <div className="hero-title">Random Restaurant Picker</div>
                <div className="hero-text">
                    <h1 className="hero-hook">Can’t Decide Where to Eat?</h1>
                    <p className="hero-description">Create a voting room, invite friends, and discover nearby restaurants that match everyone's preferences through real-time voting.</p>
                </div>
                <div className="hero-actions">
                    <Link to="create-room" className="hero-button active">{"Create Room >"}</Link>
                    <HashLink smooth to="/#how-it-works" className="hero-button">See How It Works</HashLink>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="hero-status-container">
                    <div className="hero-status">
                        <h2>860+</h2>
                        <p>Room Created</p>
                    </div>
                    <div className="hero-status center">
                        <h2>96%</h2>
                        <p>Satisfaction Rate</p>
                    </div>
                    <div className="hero-status">
                        <h2>5 min</h2>
                        <p>Average Time</p>
                    </div>
                </div>
                <div className="dev-container">
                    <div className="dev-tools-container">
                        <FaHtml5 className="dev-tools" />
                        <FaCss3Alt className="dev-tools" />
                        <FaJsSquare className="dev-tools" />
                        <FaReact className="dev-tools" />
                    </div>
                    <div className="developer">Developed by <span>Maycoder</span></div>
                </div>
            </div>
        </section>
    );
}