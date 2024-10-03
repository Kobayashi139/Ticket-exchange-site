import React from 'react';
import styles from './yutaka.module.css';
import Header from '../../components/Header/Header';
import shopData from '../../data/data';
import Card from '../../components/Card/Card';

export default function yutaka() {
  const data = shopData;
  return (
    <div>
      <Header></Header>
      <div className={styles.container}>
        {data.map(({ id, area, imageSrc, title, service, address }) => (
          <Card
            key={id}
            id={id}
            area={area}
            imageSrc={imageSrc}
            title={title}
            service={service}
            address={address}
          ></Card>
        ))}
      </div>
    </div>
  );
}
