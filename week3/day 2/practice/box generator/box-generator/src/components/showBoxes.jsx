import React from 'react';

const ShowBoxes = (props) => {
    const { boxes } = props;
    return (
    <div>
        {
        boxes.map((color, index) => (
            <div className='MyBox' key={index} style={{backgroundColor: color}}></div>
        ))
        }
    </div>
    );
}

export default ShowBoxes;