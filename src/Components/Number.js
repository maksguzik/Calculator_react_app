import React from 'react'

let Calcule_element =(props) =>{
    return (
        <button onClick={props.ClickHandler} className="Box"> 
            {props.value} 
        </button>
    )
}
export default Calcule_element;