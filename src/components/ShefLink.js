import { Link,NavLink } from "react-router-dom";

const ShefLink = (props) => {
    var classes = props.className;
    return (
        <NavLink className={classes} to="/chef">Become a chef</NavLink>
    );
};

export default ShefLink;