import React, { useState, useEffect } from 'react';
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
      <Navbar />
      <Feed />
    </>
  );
}

export default Home
