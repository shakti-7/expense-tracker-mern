import { useContext, useEffect } from 'react'
import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
    /*const context = usecontext(GlobalState)
    console.log(context)*/
    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h3>History</h3>
            <ul className = 'list'>
                {transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction} />))}
                {/*<li className = 'minus'>
                    Cash <span>-$400</span><button className = 'delete-btn'>x</button>
                </li>*/}
            </ul>
        </>
    )
}

export default TransactionList