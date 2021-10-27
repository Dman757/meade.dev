import Image from 'next/image';
import styles from 'components/product-card.module.css';
import { useEffect, useState, useRef, forwardRef } from 'react';

const buttons = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
  { color: 'green' },
];

const BumpCard = forwardRef((bump, ref) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideo, setIsVideo] = useState(false);
  const [videoThumb, setVideoThumb] = useState(null);
  useEffect(() => {
    if (bump.video) {
      setIsVideo(true);
    }
  }, []);

  useEffect(() => {
    function createThumbnail() {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      // console.log(video.videoWidth);
      let context = canvas.getContext('2d');

      // aspect ratio calc doesn't full width
      // var hRatio = canvas.width / video.videoWidth;
      // var vRatio = canvas.height / video.videoHeight;
      // var ratio = Math.min(hRatio, vRatio);

      // context.drawImage(
      //   video,
      //   0,
      //   0,
      //   video.videoWidth,
      //   video.videoHeight,
      //   0,
      //   0,
      //   video.videoWidth * ratio,
      //   video.videoHeight * ratio
      // );

      //
      context.drawImage(
        video,
        0,
        0,
        video.videoWidth,
        video.videoHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );
      // setVideoThumb(true);
      console.log('ack');
    }
    var video = videoRef.current;
    video.addEventListener('loadeddata', createThumbnail);
    video.src = `https://${bump.name}.shithouse.tv/${bump.video}`;
    // video.load();
    return () => video.removeEventListener('loadeddata', createThumbnail);
    // createThumbnail();
  }, []);

  return (
    <div ref={ref} className={styles.ProductCard}>
      {!isVideo ? (
        <img
          className={styles.ProductImage}
          src={
            bump?.image
              ? `https://${bump.name}.shithouse.tv/${bump?.image}`
              : videoThumb
              ? videoThumb
              : '/cat.jpg'
          }
          // crossOrigin="anonymous"
        />
      ) : (
        <canvas className={styles.ProductImage} ref={canvasRef} />
      )}

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
        {/* <button
          onClick={() => {
            canvasRef.current
              .getContext('2d')
              .drawImage(
                videoRef.current,
                0,
                0,
                videoRef.current.videoWidth,
                videoRef.current.videoHeight
              );
            // canvasRef.current.toDataURL();
          }}
        /> */}
        <div className={styles.Price}>{bump.text}</div>
        <div className={styles.Description}>{bump.name}</div>
      </div>
      {/* <canvas ref={canvasRef} /> */}
      <video
        ref={videoRef}
        // src={`https://${bump.name}.shithouse.tv/${bump.video}`}
        id={`${bump.name}-videoRef`}
        style={{ display: 'none' }}
      />
    </div>
  );
});

// export default forwardRef((props, ref) => BumpCard(props, ref));
export default BumpCard;
