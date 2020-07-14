import React from 'react';

const Count = (props) => {
    return (
        <div>
            <p style = {{
                backgroundColor: 'tomato',
                borderRadius: '50%',
                color: 'white',
                display: 'inline-block',
                width: '3em',
                height: '2.25em',
                paddingTop: '0.75em',
                textAlign: 'center',
                marginRight: '0.5em',
                fontWeight: 'bold',
                fontSize: '1.5em',
                float: 'left'
            }}>{props.count}</p>
        </div>
    )
}

export default Count;
