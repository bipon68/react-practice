import React from "react";
import PropTypes from "prop-types";

function Parent(props) {
    return (
        <div>
            <p>Work from {props.country}</p>
        </div>
    )
}

Parent.propTypes = {
    country: PropTypes.string.isRequired
}

export default Parent;
