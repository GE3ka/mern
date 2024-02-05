import React, { useState } from 'react';

const Form = (props) => {
    const { boxes, setBoxes } = props;
    const [ color, setColor] = useState("");
    const submitColor = (e) => {

    e.preventDefault();

    setBoxes( [ ...boxes, color ] );
    }

    return (
    <div>
        <form onSubmit={submitColor}>
        <div>
            <label>Color: </label>
            <input name="color" onChange={ (e) => setColor(e.target.value) }/>
        </div>
        <button type="submit">Add a Box</button>
        </form>

    </div>
    )
}

export default Form;