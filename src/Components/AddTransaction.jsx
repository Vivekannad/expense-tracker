import React, { useState } from 'react'
import Button from './Button'

const AddTransaction = ({ setThings, setTransactionShow }) => {
    // State to manage form data
    const [formData, setFormData] = useState({
        amount: '',
        item: '',
        type: ''
    });

    /**
     * Handle form submission.
     * Prevents the default form submission behavior.
     * Checks if all form fields are filled, adds transaction data to the state,
     * resets the form, and toggles the transaction show state.
     */
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (formData.amount && formData.item && formData.type) {
            setThings(prev => [...prev, formData]);
            setFormData({ amount: '', item: '', type: '' }); // Reset form
            setTransactionShow(prev => !prev);
        }
    }

    return (
        <form className='transaction' onSubmit={formSubmitHandler}>
            {/* Input field for amount */}
            <input
                type="number"
                min={1}
                step={1}
                placeholder='amount'
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
            />
            {/* Input field for item description */}
            <input
                type="text"
                placeholder='item'
                value={formData.item}
                onChange={(e) => setFormData(prev => ({ ...prev, item: e.target.value }))}
            />
            <div className="radio-boxes">
                {/* Radio button for expense type */}
                <div className="radio">
                    <input
                        type="radio"
                        name='option'
                        id="expense"
                        value="expense"
                        checked={formData.type === 'expense'}
                        onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    />
                    <label htmlFor="expense">Expense</label>
                </div>
                {/* Radio button for income type */}
                <div className="radio">
                    <input
                        type="radio"
                        name='option'
                        id="income"
                        value="income"
                        checked={formData.type === 'income'}
                        onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    />
                    <label htmlFor="income">Income</label>
                </div>
            </div>
            {/* Button to submit the form */}
            <Button
                text="Add Transaction"
            />
        </form>
    )
}

export default AddTransaction