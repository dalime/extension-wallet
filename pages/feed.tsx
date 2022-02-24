import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Feed.module.css'

export default function Feed(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <div>feed</div>
    </div>
  )
}
