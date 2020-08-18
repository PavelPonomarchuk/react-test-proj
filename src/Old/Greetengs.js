import React from "react";

const Greetings = (props) => (
    <div>
        Привет, {props.firstName} {props.lastName}!
    </div>
);

export default Greetings;