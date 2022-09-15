import { Link,NavLink } from "react-router-dom";
import logo from "../images/home-images/logo-image.png";

const Logo = (props) => {
    return (
        <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" width={props.width} />
        </NavLink>
    );
};

export default Logo;