import { Link,NavLink } from "react-router-dom";
import AboutLink from "./AboutLink";
import "./footer.css"
import LoginLink from "./LoginLink";
import Logo from "./logo";
import PolicyLink from "./policyLink";
import RegisterLink from "./RegisterLink";
import ShefLink from "./ShefLink";
import TermsLink from "./termsLink";

const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row justify-content-between pt-5 px-2" id="footer-1">
                <div className="col-md-3 text-center footer-div33">
                    <Logo width="90px" />
                    <h4 className="text-white mt-3">There is no taste like home</h4>
                </div>
                <div className="col-md-3 text-center footer-div33" id="footer-1-imp-links">
                    <h5 className="text-white">Important Links</h5>
                    <ul className="mt-3">
                        <li>
                            <AboutLink className="footer-link" />
                        </li>
                        <li>
                            <ShefLink className="footer-link" />
                        </li>
                        <li>
                            <RegisterLink className="footer-link" />
                        </li>
                        <li>
                            <LoginLink className="footer-link" />
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 text-center footer-div33" id="footer-1-follow">
                    <h5 className="text-white">Follow</h5>
                    <ul className="mt-3">
                        <li>
                            <NavLink to="#"><i className="bi bi-instagram text-white social-icon"></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="#"><i className="bi bi-facebook text-white social-icon"></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="#"><i className="bi bi-whatsapp text-white social-icon"></i></NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="footer-2" className="row justify-content-around align-items-center ">
                <div className="col-6 d-none d-lg-block">
                    <p> &copy; Online Tiffin Services, Inc. 2022. All Rights Reserved </p>
                </div>
                <div className="col-lg-2 col-6">
                    <PolicyLink className="footer-link" />
                </div>
                <div className="col-lg-2 col-6">
                    <TermsLink className="footer-link" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;