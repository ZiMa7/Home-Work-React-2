import React from 'react';

const Button = (props) => {
    return(
        <button 
        className='btn btn-info btnForm' 
            onClick= {props.onClick}>    
            {props.title} 
        </button>)
}
 
export default Button;
