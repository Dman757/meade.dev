import { useEffect, useState } from 'react';
import BumpCard from 'components/shithouse/BumpCard';
import styles from 'components/product-wall.module.css';
import Image from 'next/image';

const { default: Layout } = require('components/layout');

import { useVirtual } from 'react-virtual';

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
        {/* {bumps.map((bump, index) => {
          if (index < 10) {
            return <BumpCard key={index} {...bump} />;
          }
        })} */}
        {bumps
          .filter(bump => bump?.video)
          .map((videoBump, index) => {
            if (index < 10) {
              return <BumpCard key={index} {...videoBump} />;
            }
          })}
        {/* <>
          // <BumpCard {...bumps[1]} />
          // <BumpCard {...bumps[2]} />
          // <BumpCard {...bumps[3]} />
          // <BumpCard {...bumps[4]} />
          // <BumpCard {...bumps[5]} />
          // <BumpCard {...bumps[6]} />
          // <BumpCard {...bumps[7]} />
          // <BumpCard {...bumps[8]} />
          // <BumpCard {...bumps[9]} />
          // <BumpCard {...bumps[10]} />
          // <BumpCard {...bumps[11]} />
          // <BumpCard {...bumps[12]} />
          // <BumpCard {...bumps[13]} />
          // <BumpCard {...bumps[14]} />
          //{' '}
        </> */}
      </div>

      {/* <ul>
        {bumps.map(bump => {
          return <li key={bump.name}>{bump.name}</li>;
        })}
      </ul> */}
    </Layout>
  );
}
