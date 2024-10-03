export type Work = {
  id: string;
  area: string;
  imageSrc: string;
  title: string;
  service: string;
  address: string;
};

const data: Work[] = [
  {
    id: '1',
    area: 'yutaka',
    imageSrc: '/images/wakatyou.jpg',
    title: '船宿カフェ　若長',
    service: '軽食、コーヒー、スイーツ',
    address: '豊町御手洗325',
  },
  {
    id: '2',
    area: 'yutaka',
    imageSrc: '/images/flower.jpg',
    title: 'flower-cafe',
    service: '軽食、コーヒー、スイーツ',
    address: '豊町御手洗325',
  },
  {
    id: '3',
    imageSrc: '/images/sakura.jpg',
    area: 'yutaka',
    title: 'Sakura-sakura-sakura-sakura',
    service: '軽食、コーヒー、スイーツ',
    address: '豊町御手洗325',
  },
];

export default data;
