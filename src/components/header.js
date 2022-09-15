import { Link,NavLink } from "react-router-dom";
import AboutLink from "./AboutLink";
import LoginLink from "./LoginLink";
import Logo from "./logo";
import RegisterLink from "./RegisterLink";
import ShefLink from "./ShefLink";
import "./header.css";
import SearchForm from "./searchForm";

const Header = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg px-5">
            <div className="container-fluid">
                <Logo width="60px" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <AboutLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} />
                        </li>
                        <li className="nav-item mx-4">
                            <ShefLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} />
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <RegisterLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} />
                        </li>
                        <li className="nav-item mx-4">
                            <LoginLink className={({ isActive }) => (isActive ? "link-active" : "link") + " nav-link"} />
                        </li>
                    </ul>
                    <SearchForm />
                </div>
            </div>
        </nav> 
    );
}

export default Header;