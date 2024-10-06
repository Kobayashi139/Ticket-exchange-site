'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import styles from './yutaka-id.module.css';
import Header from '../../../components/Header/Header';
import shopData from '../../../data/data';

interface page {
  id: string;
  area: string;
  imageSrc: string;
  title: string;
  service: string;
  address: string;
  tell: string;
  change: boolean;
}

export default function page() {
  const dataid = useParams(); //urlの動的ルーティングを読み取る
  const dataList = shopData; //data取得
  const id = dataid.id as string;
  const params = dataList.find((data) => data.id === id);
  if (!params) return <div>Loading...</div>;
  const { imageSrc, title, service, address, tell, change } = params;

  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.cardImg}>
          <img src={imageSrc} alt="shop-image" />
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.whiteBox}>
          <p className={styles.cardText}>{service}</p>
          <p className={styles.address}>{address}</p>
          <p className={styles.tell}>{tell}</p>
        </div>
      </div>
    </div>
  );
}
