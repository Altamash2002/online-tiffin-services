import "./inputs.css";

const FirstName = (props) => {
    return (
        <input type="text" name="first-name" id="first-name" className={props.className + " input-fields"} placeholder="First Name" />
    );
};

export default FirstName;