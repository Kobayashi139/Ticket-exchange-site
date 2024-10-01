import React from 'react';
import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

export default function Card({
  id,
  title,
  imageSrc,
  area,
}: {
  id: string;
  title: string;
  imageSrc: string;
  area: string;
}) {
  return (
    <div>
      <Link href={`/${id}`}></Link>
      <div>
        <Image alt="" src={imageSrc} />
      </div>
    </div>
  );
}
