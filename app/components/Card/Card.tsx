import React from 'react';
import Link from 'next/link';
import styles from './card.module.css';

export default function Card({
  id,
  area,
  imageSrc,
  title,
  service,
  address,
}: {
  id: string;
  area: string;
  imageSrc: string;
  title: string;
  service: string;
  address: string;
}) {
  return (
    <div>
      <Link href={`/yutaka/${id}`} style={{ textDecoration: 'none' }}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={imageSrc} alt="shop-image" />
          </div>
          <div>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardText}>{service}</p>
            <p className={styles.address}>{address}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
