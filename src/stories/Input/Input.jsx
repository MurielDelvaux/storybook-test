import React from "react";
import './input.css';
import PropTypes from 'prop-types';

export const Input =({label, size,...props})=>{
    return(
        <div className="input">
            <label>{label}</label>
            <input
                className={[`storybook-input--${size}`].join(' ')}
            >
            </input>
        </div>
    )

};

Input.propTypes={
    size: PropTypes.oneOf(['normal','small','large']),
    label: PropTypes.string.isRequired,
}

Input.defaultProps={
    size:'normal'
}