import { Link,NavLink } from "react-router-dom";

const LoginLink = (props) => {
    var classes = props.className;
    return (
        <NavLink className={classes} to="/login">Login</NavLink>
    );
};

export default LoginLink;