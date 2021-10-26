import Image from 'next/image';
import styles from 'components/product-card.module.css';

const buttons = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
  { color: 'green' },
];

export default function BumpCard(bump) {
  console.log(bump);
  return (
    <div className={styles.ProductCard}>
      <img
        className={styles.ProductImage}
        src={
          bump?.image
            ? `https://${bump.name}.shithouse.tv/${bump?.image}`
            : '/cat.jpg'
        }
      />
      <div className={styles.ContentArea}>
        {/* <div className={styles.Swatches}>
          {buttons.map(button => (
            <button
              key={button.color}
              onClick={() => console.log(button.color)}
            >
              {button.color}
            </button>
          ))}
        </div> */}
        <div className={styles.Price}>{bump.text}</div>
        <div className={styles.Description}>{bump.name}</div>
      </div>
    </div>
  );
}
