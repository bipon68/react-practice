import React from 'react'

 const PickLucky = (props) => {
     console.log('PickLucky props : ', props)
     const handlePickRandom = () => {
         props.pickLuckyNum()
     }
    return (
        <React.Fragment>
            <p>Pick lucky no {props.luckyNum}</p>
            <button onClick={handlePickRandom}>Pick</button>
        </React.Fragment>
    )
}

export default PickLucky;
