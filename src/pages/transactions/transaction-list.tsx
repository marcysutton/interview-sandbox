import type { Transaction } from './transaction.types';

type TransactionListProps = {
    transactions: Array<Transaction>;
    highlightedUser: string;
}

const TransactionList = ({transactions, highlightedUser}:TransactionListProps) => {
    return (
        <ul>
            {transactions.map((transactions) => {
                return <li key={transactions.id}>
                    <span style={highlightedUser === transactions.customer ? {backgroundColor : 'yellow'} : null}>{transactions.customer}</span>: {transactions.amount}</li>
            })}
        </ul>
    )
};

export default TransactionList;