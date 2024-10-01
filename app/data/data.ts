export type Work = {
  id: string;
  title: string;
  imageSrc: string;
  area: string;
};

const data: Work[] = [
  {
    id: '1',
    title: 'wakatyou',
    imageSrc: '/images/wakatyou.jpg',
    area: 'yutaka',
  },
  {
    id: '2',
    title: 'flower-cafe',
    imageSrc: '/images/flower.jpg',
    area: 'yutaka',
  },
  {
    id: '3',
    title: 'Sakura-sakura-sakura-sakura',
    imageSrc: '/images/sakura.jpg',
    area: 'yutaka',
  },
];

export default data;
