import Email from "../components/emailInput";
import FirstName from "../components/firstNameInput";
import LastName from "../components/lastNameInput";
import Password from "../components/passwordInput";
import Submit from "../components/submitBtn";
import registerImg from "../images/login-register-images/register-image.jpg";
import LoginLink from "../components/LoginLink";
import "./register.css";


import "./register.css";

const Register = () => {
    return (
        <div id="register-container" className="container-fluid">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-lg-5">
                    <img src={registerImg} alt="register" id="register-img" className="img-fluid" />
                </div>
                <div className="col-lg-5 mb-5">
                    <h1 id="register-heading" className="my-5">Sign Up</h1>
                    <form>
                        <FirstName /> <br /> <br />
                        <LastName /> <br /> <br />
                        <Email /> <br /> <br />
                        <Password /> <br /> <br />
                        <Submit value="Register" /> <br /> <br />
                    </form>
                    <p className="login-dont">Already have account? <LoginLink className="text-secondary" /> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;