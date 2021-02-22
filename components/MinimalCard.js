import Card from 'components/MinimalCard.module.css';

export default function MinimalCard({children}) {

  return(
    <div className={Card.card}>
      {children}
    </div>
  );
}