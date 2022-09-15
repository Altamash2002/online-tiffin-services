import Email from "../components/emailInput";
import FirstName from "../components/firstNameInput";
import LastName from "../components/lastNameInput";
import LoginLink from "../components/LoginLink";
import Password from "../components/passwordInput";
import "./chef.css";
import "./register.css";
import "../components/inputs.css";
import Submit from "../components/submitBtn";
import TermsLink from "../components/termsLink";
import PolicyLink from "../components/policyLink";
import "../components/footer.css";

const Chef = () => {
    return(
        <div id="chef-container" className="container-fluid">
            <div id="chef-poster" className="row justify-content-between" >
                <div id="chef-poster-text" className="col-xxl-4 col-lg-6 mt-5">
                    <h1>MAKE TIFFIN EARN MONEY</h1>
                    <h3>Make Food Earn Money And Be Your Own Boss</h3>
                    <p className="login-dont">Already have account? <LoginLink className="text-light" /> </p>
                </div>
                <div className="col-xxl-8 col-lg-6 text-center my-5">
                    <form>
                        <FirstName className="my-2 mx-lg-2" />
                        <LastName className="my-2 mx-lg-2" />
                        <Email className="my-2 mx-lg-2" />
                        <Password className="my-2 mx-lg-2" />
                        <input id="contact" className=" my-2 mx-lg-2 input-fields" name="contact" placeholder="Contact No"   />
                        <input id="pin-code" className=" my-2 mx-lg-2 input-fields" name="pin-code" placeholder="Pin Code"   />
                        <textarea id="address" className="my-2 input-fields" placeholder="Address" ></textarea> <br /> 
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> &nbsp;
                        <label class="form-check-label" for="flexCheckDefault">
                            <p id="shef-accept">I Accept All <TermsLink className="footer-link" /> and <PolicyLink className="footer-link" /> . </p>
                        </label>
                        <br />
                        <Submit value="Register for Chef" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chef;