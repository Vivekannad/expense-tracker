import React, { useState } from 'react'
import Button from './Button'

const AddTransaction = ({setThings , setTransactionShow}) => {
    const [formData, setFormData] = useState({
        amount: '',
        item: '',
        type: ''
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (formData.amount && formData.item && formData.type) {
            setThings(prev => [...prev, formData]);
            setFormData({ amount: '', item: '', type: '' }); // Reset form
            setTransactionShow(prev => (!prev));
        }
    }
    function clickHandler () {}

    return (
        <form className='transaction' onSubmit={formSubmitHandler}>
            <input 
                type="number" 
                min={1} 
                step={1} 
                placeholder='amount'
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({...prev, amount: e.target.value}))}
            />
            <input 
                type="text" 
                placeholder='item'
                value={formData.item}
                onChange={(e) => setFormData(prev => ({...prev, item: e.target.value}))}
            />
            <div className="radio-boxes">
                <div className="radio">
                    <input 
                        type="radio" 
                        name='option' 
                        id="expense" 
                        value="expense"
                        checked={formData.type === 'expense'}
                        onChange={(e) => setFormData(prev => ({...prev, type: e.target.value}))}

                    />
                    <label htmlFor="expense">Expense</label>
                </div>
                <div className="radio">
                    <input 
                        type="radio" 
                        name='option' 
                        id="income" 
                        value="income"
                        checked={formData.type === 'income'}
                        onChange={(e) => setFormData(prev => ({...prev , type: e.target.value}))}
                    />
                    <label htmlFor="income">Income</label>
                </div>
            </div>
            <Button 
                text="Add Transaction" 
            />
        </form>
    )
}

export default AddTransaction