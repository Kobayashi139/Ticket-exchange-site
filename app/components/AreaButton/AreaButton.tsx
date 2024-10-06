import React from 'react';
import Link from 'next/link';
import styles from './AreaButton.module.css';

let area: string;

export default function AreaButton({ value }: { value: string }) {
  if (value === 'yutaka') {
    area = '豊';
  } else if (value === 'ya') {
    area = 'やあ';
  } else if (value === 'yu') {
    area = '下蒲刈';
  } else {
    area = 'yutaka';
  }
  return (
    <div>
      <Link href={`/${value}`}>
        <div className={styles.container}> {area}</div>
      </Link>
    </div>
  );
}
