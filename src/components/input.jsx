import React from 'react';

const Input = (props) => {
    return (  
  <div className="input">
    <label className="inputLabel ">{props.title}</label>
    <input
      className="inputForm list-group-item"
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder} 
    />
  </div>
)
}
export default Input;
