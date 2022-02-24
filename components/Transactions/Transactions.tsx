import React, { useState } from 'react';
import styles from '../../styles/Transactions.module.css';
import { Transaction } from '../../types';
import TransactionThumbnail from './TransactionThumbnail';

enum FilterBy {
  all = 'all',
  sent = 'sent',
  received = 'received',
}

export default function Transactions(): JSX.Element {
  const transactions: Transaction[] = [
    {
      amount: 0.456,
      referenceNo: 1234,
      sent: true,
      sentTo: 'devon.near',
      timestamp: '3 days ago',
    },
    {
      amount: 0.456,
      referenceNo: 13893,
      sent: false,
      sentTo: 'devon.near',
      timestamp: '3 days ago',
    }
  ];

  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.all);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactions);

  const filterTransactions = (which: FilterBy): void => {
    let _filteredTransactions: Transaction[] = [...filteredTransactions];

    switch (which) {
      case FilterBy.all:
        _filteredTransactions = transactions;
        break;
      case FilterBy.received:
        _filteredTransactions = transactions.filter((t: Transaction) => t.sent === false);
        break;
      case FilterBy.sent:
        _filteredTransactions = transactions.filter((t: Transaction) => t.sent === true);
        break;
      default:
        _filteredTransactions = transactions;
        break;
    }

    setFilteredTransactions(_filteredTransactions);
    setFilterBy(which);
  }

  const button = (text: string, which: FilterBy, active: boolean): JSX.Element => (
    <button
      style={active ? {
        background: '#FCFCFC',
        border: '1px solid #BEBEC2',
        borderRadius: 10,
        padding: 10,
      } : {
        background: 'transparent',
        border: 'none',
      }}
      onClick={(e) => {
        e.preventDefault();
        filterTransactions(which);
      }}
    >
      {text}
    </button>
  );

  return (
    <div className={styles.container}>
      <div className={styles.filterBySection}>
        {button('All', FilterBy.all, filterBy === FilterBy.all)}
        {button('Sent', FilterBy.sent, filterBy === FilterBy.sent)}
        {button('Received', FilterBy.received, filterBy === FilterBy.received)}
      </div>
      {filteredTransactions.map((transaction: Transaction, index: number) => (
        <TransactionThumbnail
          key={index}
          transaction={transaction}
        />
      ))}
    </div>
  )
}
