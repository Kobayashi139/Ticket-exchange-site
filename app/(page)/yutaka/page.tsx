import React from 'react';
import styles from './yutaka.module.css';
import Header from '../../components/Header/Header';

export default function yutaka() {
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src="/images/wakatyou.jpg" alt="" />
          </div>
          <div>
            <h1 className={styles.cardTitle}>タイトル</h1>
            <p className={styles.cardText}>
              船宿カフェ若長は、広島県呉市豊町（大崎下島）御手洗にある古民家カフェです。江戸時代、大洲藩・宇和島藩指定の「船宿」だった建造物を改装し、2010年4月オープンしました。
            </p>
            <p className={styles.address}>豊町御手洗325</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src="/images/flower.jpg" alt="" />
          </div>
          <div className={styles.cardTitle}></div>hello
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src="/images/sakura.jpg" alt="" />
          </div>
          <div className={styles.cardTitle}></div>hello
        </div>
      </div>
    </div>
  );
}
