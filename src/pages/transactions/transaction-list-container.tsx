import { useState } from 'react';
import TransactionList from './transaction-list';
import type { Transaction } from './transaction.types';

const transactions = [
    {id: 't_01', customer: 'Rose Roberts', amount: 84},
    {id: 't_02', customer: 'Chris Cook', amount: 30},
    {id: 't_03', customer: 'Mary Martin', amount: 42},
    {id: 't_04', customer: 'Susan Smith', amount: 26},
    {id: 't_05', customer: 'Rose Roberts', amount: -84},
    {id: 't_06', customer: 'Rose Roberts', amount: 48},
    {id: 't_07', customer: 'Susan Smith', amount: 104},
    {id: 't_08', customer: 'Larry Lewis', amount: 140},
    {id: 't_09', customer: 'Mary Martin', amount: 10},
    {id: 't_10', customer: 'Chris Cook', amount: 60},
    {id: 't_11', customer: 'Susan Smith', amount: -26},
    {id: 't_12', customer: 'Larry Lewis', amount: -140},
    {id: 't_13', customer: 'Rose Roberts', amount: 26},
    {id: 't_14', customer: 'Ryan Roberts', amount: 44},
];

// find which customer has total highest amount spent
// Refunds subtracted from customer's total
// highlight top customer's name in the list, yellow background on top customer's name, not whole row

type CustomerTransaction = {
    transactions: Array<Transaction>;
    totalAmountSpent: number;
}

const TransactionListContainer = () => {
    let highlightedUser = '';
    const customerMap = new Map<string, CustomerTransaction>()

    const highestTotal = 0;

    for (const transaction of transactions) {
        if (!customerMap.get(transaction.customer)) {
            customerMap.set(transaction.customer, {
                transactions: [{...transaction}],
                totalAmountSpent: transaction.amount
            });
        } else {
            
            const customerTransactions = customerMap.get(transaction.customer);
            customerMap.set(transaction.customer, {
                transactions: [...customerTransactions.transactions, {...transaction}],
                totalAmountSpent: customerTransactions.totalAmountSpent + transaction.amount
            });
        }
        if (customerMap.get(transaction.customer).totalAmountSpent > highestTotal) {
            highlightedUser = transaction.customer;
        }
    }
    console.log(customerMap);

    return (
        <TransactionList transactions={transactions} highlightedUser={highlightedUser} />
    )
};

export default TransactionListContainer;