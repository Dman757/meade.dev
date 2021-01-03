import Image from 'next/image';

export default function Item(props) {
  return (
    <div>
      <h4>{props.asdf}</h4>
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        <Image
          src="/cat.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
