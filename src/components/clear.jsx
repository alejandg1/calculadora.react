import React from 'react';
import '../stylesheets/clear.css';

const Clear = (props) => (
    <div className='clear'     
        onClick={props.manejarClick}>
        {props.children}
    </div>
)

export default Clear;