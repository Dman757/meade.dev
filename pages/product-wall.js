import Layout from 'components/layout.js';
import ProductCard from 'components/ProductCard.js';
import styles from 'components/product-wall.module.css';
import { createContext, useState } from 'react';

export const ProductsContext = createContext({});

const mockSwatches = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
  { color: 'green' },
];

const mockProducts = [
  {
    swatches: [...mockSwatches],
    price: '123.45',
    description: 'Hey, you should buy this thing',
    image: '/cat.jpg',
  },
  {
    swatches: [...mockSwatches],
    price: '123.45',
    description: 'Hey, you should buy this thing',
    image: '/cat.jpg',
  },
  {
    swatches: [...mockSwatches],
    price: '123.45',
    description: 'Hey, you should buy this thing',
    image: '/cat.jpg',
  },
];

export default function ProductWall() {
  const [products, setProducts] = useState(mockProducts);
  const [productIds, setProductIds] = useState([]); // array index of products

  return (
    <ProductsContext.Provider
      value={{ products: products, productIds: productIds }}
    >
      <Layout>
        <div className={styles.ProductWallLayout}>
          {products.map((product, index) => {
            return <ProductCard key={index} />;
          })}
        </div>
      </Layout>
    </ProductsContext.Provider>
  );
}
