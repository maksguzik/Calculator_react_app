import React from 'react'

let Operator = (props) => {
    return (
        <button onClick={props.ClickHandler} className="Box">
            {props.value}
        </button>
    )
}

export default Operator;