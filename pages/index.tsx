import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next'
import Splash from '../components/Splash';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <>
      <Head>
        <title>Extension Wallet</title>
        <meta name="description" content="Extension Wallet for PrimeLab" />
        <link rel="icon" href="/images/logos/primelab_logo.ico" />
      </Head>
      <Navbar />
      <Feed />
    </>
  );
}

export default Home
