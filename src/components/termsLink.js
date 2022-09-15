import { Link,NavLink } from "react-router-dom";

const TermsLink = (props) => {
    var classes = props.className;
    return (
        <NavLink className={classes} to="/terms-of-services">Terms of Services</NavLink>
    );
};

export default TermsLink;