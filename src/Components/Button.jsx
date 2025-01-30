import React from 'react';
// import PropTypes from 'prop-types';

const Button = ({text, clickHandler = () => {}}) => {
    return (
        <button className="button" onClick={clickHandler}>
            {text}
        </button>
    );
};

// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     clickHandler: PropTypes.func
// };

export default Button;