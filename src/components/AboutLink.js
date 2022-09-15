import { Link,NavLink } from "react-router-dom";

const AboutLink = (props) => {
    var classes = props.className;
    return (
        <NavLink className={classes} to="/about">About Us</NavLink>
    );
};

export default AboutLink;