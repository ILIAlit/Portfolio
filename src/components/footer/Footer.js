import telegramIcon from "./../../IMG/icon-telegram.svg";
import behanceIcon from "./../../IMG/icon-behance.svg";
import imailIcon from "./../../IMG/icon-email.svg";

import { NavLink } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="icons">
                <div className="icon">
                    <a href="#"><img src={telegramIcon} alt="telegram"/></a>
                </div>
                <div className="icon">
                    <a href="#"><img src={behanceIcon} alt="behance"/></a>
                </div>
                <div className="icon">
                    <a href="#"><img src={imailIcon} alt="email"/></a>
                </div>
            </div>
            <div className="footer__title">
                <h5><NavLink to="/">Литвиненко Илья</NavLink></h5>
            </div>
        </footer>
    );
}

export default Footer;