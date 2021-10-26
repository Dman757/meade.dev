import { useEffect, useState } from 'react';
import BumpCard from 'components/shithouse/BumpCard';
import styles from 'components/product-wall.module.css';
import Image from 'next/image';

const { default: Layout } = require('components/layout');

export default function nicehouse() {
  const [bumps, setBumps] = useState([]);

  useEffect(async () => {
    async function getShithouse() {
      fetch('https://api.shithouse.tv')
        .then(response => response.json())
        .then(data => setBumps(data));
    }
    await getShithouse();
  }, []);

  // useEffect(() => {
  //   function getImage() {
  //     fetch('https://gainfulemployment.shithouse.tv/')
  //       .then(res => res.text())
  //       .then(data => {
  //         const parsed = new DOMParser();
  //         const parsedDom = parsed.parseFromString(data, 'text/html');
  //         console.log(parsedDom);
  //       });
  //   }
  //   getImage();
  // }, []);

  const mock = {
    nsfw: false,
    name: 'haveyoueverclickedrighthere',
    text: '',
    video: '',
    image: 'ApwfnDVCEAAo-zQ.gif',
  };

  return (
    <Layout>
      <div className={styles.ProductWallLayout}>
        {bumps.map((bump, index) => {
          // console.log(bump);
          return <BumpCard key={index} {...bump} />;
        })}
      </div>

      {/* <ul>
        {bumps.map(bump => {
          return <li key={bump.name}>{bump.name}</li>;
        })}
      </ul> */}
    </Layout>
  );
}
