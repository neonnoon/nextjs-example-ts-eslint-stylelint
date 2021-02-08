import React from 'react';
import Head from 'next/head';
import styles from '../styles/index.module.css';

const Index = () : React.ReactElement => (
  <div className={styles.container}>

    <Head>
      <title>Welcome!</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <img src="/logo.png" alt="Logo" className={styles.logo} />
  </div>
);

export default Index;
