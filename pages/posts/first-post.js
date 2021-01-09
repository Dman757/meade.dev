import Head from 'next/head';
import Link from 'next/link';
import Item from 'components/ImageItem.js';
import Layout from 'components/layout.js';

import gridStyle from 'components/gridStyle.module.css';

const items = {
  title: 'ack',
  image: 'asdfadsfdf',
  text: 'This is some text',
};

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h3>Card Elements</h3>
      <div className={gridStyle.Main}>
        {/* items.map() */}
        {/* <Item {...items} />
        <Item {...ack} />
        <Item {...ack} />
        <Item {...ack} /> */}
      </div>
    </Layout>
  );
}
