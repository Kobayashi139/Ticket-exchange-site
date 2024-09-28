import styles from './page.module.css';
import Header from './components/Header/Header';
import type React from 'react';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className={styles.page}>
        <h1>hello</h1>
      </div>
    </div>
  );
}
