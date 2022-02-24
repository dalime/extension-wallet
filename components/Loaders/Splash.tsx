import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css';

export default function Splash(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Extension Wallet</title>
        <meta name="description" content="Extension Wallet for PrimeLab" />
        <link rel="icon" href="/images/logos/primelab_logo.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <Image
            src="/images/symbols/home_symbol.svg"
            alt="Home symbol"
            width={27.42}
            height={30}
          />
          <h1>HomePage</h1>
        </div>
        <p>a web3 gateway to hidden experiences</p>
      </main>

      <footer className={styles.footer}>
        powered by{' '}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/logos/near_logo.svg" alt="Near Logo" width={114} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}
