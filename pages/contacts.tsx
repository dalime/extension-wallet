import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Nav/Navbar';
import SearchInput from '../components/Contacts/SearchInput';
import ContactsList from '../components/Contacts/ContactsList'

export default function contacts(): JSX.Element {
  return (
    <>
      <Head>
        <title>Extension Wallet</title>
        <meta name="description" content="Extension Wallet for PrimeLab" />
        <link rel="icon" href="/images/logos/primelab_logo.ico" />
      </Head>
      <Navbar />
      <SearchInput />
      <ContactsList />
    </>
  )
}
