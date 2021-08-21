import React from "react";
import logo from "../wattpad.png";
// React Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <article className="container">
                <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
                </button>
                <section className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">services</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Experience</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#">contacts</a>
                    </li>
                </ul>
                </section>
            </article>

      </nav>
    )
}

export default Navbar;
