import { NavLink } from "react-router-dom";
import Email from "../components/emailInput";
import Password from "../components/passwordInput";
import RegisterLink from "../components/RegisterLink";
import Submit from "../components/submitBtn";
import loginImg from "../images/login-register-images/login-image.jpg";
import "./login.css";


const Login = () => {
    return (
        <div id="login-container" className="container-fluid">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-lg-5">
                    <img src={loginImg} alt="login" className="img-fluid" id="login-img" />
                </div>
                <div className="col-lg-5 mb-5">
                    <h1 id="login-heading" className="my-5">You're Welcome</h1>
                    <form action="/inside-login" id="login-form" method="">
                        <Email /> <br /> <br />
                        <Password /> <br /> <br />
                        <Submit value="Login" /> <br /> <br />
                    </form>
                    <p className="login-dont">Dont have account? <RegisterLink className="text-secondary" /> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;