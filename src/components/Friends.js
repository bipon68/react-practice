import React from 'react';
import PropTypes from "prop-types";

const Friends = (props) => {

    return (
        <div>
            <h3>Friends</h3>
            <ul>
            {
                props.friends.map((friend, index) => {
                    return <li key={index}>{friend}</li>
                })
            }
        </ul>
        </div>
    )
};

Friends.protoTypes = {
    friends: PropTypes.array.isRequired 
}

export default Friends;
