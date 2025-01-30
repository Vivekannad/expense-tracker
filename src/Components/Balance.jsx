import React from 'react'
import Button from './Button'


const Balance = ({netBalance, setTransactionShow, transactionShow}) => {
    /**
     * Function to handle the button click.
     * Toggles the transactionShow state.
     */
    function clickHandler() {
        setTransactionShow((prev) => !prev);
    }

    return (
        <div className="balance">
            <h2>Balance ${netBalance}</h2>
            <Button
                text={!transactionShow ? "Add" : "Cancel"}
                clickHandler={clickHandler}
            />
        </div>
    );
};

export default Balance