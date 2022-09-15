import { Link,NavLink } from "react-router-dom";

const RegisterLink = (props) => {
    var classes = props.className;
    return (
        <NavLink className={classes} to="/register">Register</NavLink>
    );
};

export default RegisterLink;