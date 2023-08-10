import React, { useState } from 'react';


const InputItem = (props) => {


    return (
        <div>
            <p>
                <label htmlFor={props.inputId}>{props.title}</label>
                <input type="number" id={props.inputId} value={props.valueEntered} onChange={props.onChangeInput}/>
            </p>
        </div>
    )
}
 
export default InputItem;