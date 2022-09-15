import "./inputs.css";

const LastName = (props) => {
    return (
        <input type="text" name="last-name" id="last-name" className={props.className + " input-fields"} placeholder="Last Name" />
    );
};

export default LastName;