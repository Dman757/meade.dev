import Image from 'next/image';
import styles from './product-card.module.css';

const buttons = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
  { color: 'green' },
];

export default function ProductCard() {
  return (
    <div className={styles.ProductCard}>
      <img className={styles.ProductImage} src={'/cat.jpg'} />
      <div className={styles.ContentArea}>
        <div className={styles.Swatches}>
          {buttons.map(button => (
            <button
              key={button.color}
              onClick={() => console.log(button.color)}
            >
              {button.color}
            </button>
          ))}
        </div>
        <div className={styles.Price}>$123.45</div>
        <div className={styles.Description}>
          Look at his fancy as fuck shit bro, you should buy it.
        </div>
      </div>
    </div>
  );
}
