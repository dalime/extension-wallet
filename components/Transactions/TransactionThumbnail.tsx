import React from 'react';
import Image from 'next/image';
import { Transaction } from '../../types';
import styles from '../../styles/Transactions.module.css';
import commonStyles from '../../styles/Common.module.css';

interface Props {
  transaction: Transaction
}

export default function TransactionThumbnail({ transaction }: Props): JSX.Element {
  const { amount, referenceNo, sent, sentTo, timestamp, } = transaction;

  return (
    <div className={styles.thumbnail}>
      <Image
        src={sent ? '/images/symbols/transaction_sent.svg' : '/images/symbols/transaction_received.svg'}
        alt={`Transaction ${referenceNo}`}
        width={40}
        height={40}
        className={commonStyles.thumbnailImage}
      />
      <p
        style={{
          marginLeft: 15,
        }}
      >
        {sent ? (
          <>
            <span style={{ color: '#885FFF', }}>
              {amount}{' '}
              NEAR
            </span>
            <br />
            Sent to{' '}
            <span style={{ color: '#885FFF' }}>{sentTo}</span>
          </>
        ) : (
          <>
            <span style={{ color: '#3BD0AC', }}>
              #{referenceNo}
            </span>
            <br />
            Received from
            <br />
            <span style={{ color: '#3BD0AC' }}>{sentTo}</span>
          </>
        )}
      </p>
      <p
        className={styles.timestamp}
      >
        {timestamp}
      </p>
    </div>
  )
}
