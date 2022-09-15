import { Link,NavLink } from "react-router-dom";

const PolicyLink = (props) => {
    var classes = props.className;
    return (
        <NavLink className={classes} to="/privacy-policy">Privacy Policy</NavLink>
    );
};

export default PolicyLink;