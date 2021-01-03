import React from 'react';
import styles from './SlideCard.module.css';

export default function Card({ title, url, icon, body = 'Click Me' }) {
  return (
    <div className={styles.card} onClick={() => window.location.assign(url)}>
      <div className={styles.additional}>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className={styles.reveal}>
          <div className={styles.social_icon}>
            <img src={icon} alt={`${title} logo`} />
          </div>
          <div className={styles.join}>
            <h2>Join Now</h2>
          </div>
        </div>
      </div>
      <div className={styles.asdf}>
        <div className={styles.social_icon}>
          <img src={icon} alt={`${title} logo`} />
        </div>
      </div>
    </div>
  );
}
