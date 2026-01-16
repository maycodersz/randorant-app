import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "../css/footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h4 className="footer-heading">About</h4>
                <p className="about-description">Randorant helps friends, families, and coworkers make dining decisions in minutes instead of hours. </p>
            </div>
            <div className="footer-content">
                <h4 className="footer-heading">Quick Links</h4>
                <div className="quick-links-container">
                    <HashLink smooth to="/#how-it-works" className="footer-links">How It Works</HashLink>
                    <Link to="/join-room" className="footer-links">Join Room</Link>
                    <Link to="/create-room" className="footer-links">Create Room</Link>
                </div>
            </div>
            <div className="footer-content">
                <h4 className="footer-heading">Legal</h4>
                <div className="legal-links-container">
                    <Link to="/terms-of-services" className="footer-links">Terms of Services</Link>
                    <Link to="/privacy-policy" className="footer-links">Privacy Policy</Link>
                    <Link to="/cookies" className="footer-links">Cookies</Link>
                </div>
            </div>
            <div className="footer-content">
                <h4 className="footer-heading">Connect</h4>
                <div className="social-links">
                    <FaFacebook className="social-icons" />
                    <FaInstagram className="social-icons" />
                    <FaGithub className="social-icons" />
                </div>
            </div>
        </footer>
    );
}