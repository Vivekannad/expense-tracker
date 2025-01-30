import { useEffect, useState } from "react"
import Balance from "./Components/Balance";
import "./app.css"
import AddTransaction from "./Components/AddTransaction";
import Section from "./Components/Section";
import History from "./Components/History";
import Search from "./Components/Search"


const App = () => {
    const [transactionShow, setTransactionShow] = useState(false);
    const [things, setThings] = useState([]);
    const [filteredThing , setFilteredThing] = useState([]);
    const [expense , setExpense] = useState(0);
    const [income , setIncome] = useState(0);

    /**
     * Calculate expense and income totals whenever the things array changes.
     * This is done using the useEffect hook.
     */
    useEffect(() => {
        const expense = things
            .filter(item => item.type === 'expense')
            .reduce((total, item) => total + Number(item.amount), 0);

        setExpense(expense);

        const income = things
            .filter(item => item.type === 'income')
            .reduce((total, item) => total + Number(item.amount), 0);

            setIncome(income);
            setFilteredThing(things);
        
    }, [things]);

    return (
        <div className="container">
            <div className="expense">
                <h1>Expense Tracker</h1>
                {/* Show the balance component and based on the transactionShow state, show the add transaction component or not. */}
                <Balance netBalance={income - expense} setTransactionShow={setTransactionShow} transactionShow={transactionShow} />
                {transactionShow ? <AddTransaction setThings={setThings} setTransactionShow={setTransactionShow} /> : ""}

                {/* Show two sections: one for expense and one for income. */}
                <div className="money-section">
                    <Section 
                        text="Expense" 
                        balance={expense} 
                        color = "red"
                    />
                    <Section 
                        text="Income" 
                        balance={income} 
                        color = "green"
                    />
                </div>

                {/* Show the history component. */}
                <section className="history">
                    <h3>Transaction</h3>
                    {/* Show a search bar. */}
                    <Search things = {things} setFilteredThing = {setFilteredThing}/>
                    {/* Show all the transaction items. */}
                    {filteredThing.map((value, index) => (
                        <History 
                            key={index}
                            text={value.item} 
                            money={value.amount}
                            type={value.type}
                        />
                    ))}
              </section>
            </div>
        </div>
    )
}



export default App