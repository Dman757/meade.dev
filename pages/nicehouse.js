import {
  useEffect,
  useState,
  useRef,
  useCallback,
  forwardRef,
  useLayoutEffect,
} from 'react';
import BumpCard from 'components/shithouse/BumpCard';
import styles from 'components/product-wall.module.css';

const { default: Layout } = require('components/layout');

export default function nicehouse() {
  const [bumps, setBumps] = useState([]);
  const [isVideo, setIsVideo] = useState(false);
  const [numberLoaded, setNumberLoaded] = useState(20);
  const [displayBumps, setDisplayBumps] = useState([]);

  const observerRef = useRef(null);
  const prevRef = useRef(null);
  const counter = useRef(50);
  useEffect(async () => {
    async function getShithouse() {
      fetch('https://api.shithouse.tv')
        .then(response => response.json())
        .then(data => {
          setBumps(data);
          setDisplayBumps(
            data.filter(bump => (isVideo ? bump?.video : bump?.image))
          );
        });
    }
    await getShithouse();
  }, []);

  useEffect(() => {
    setDisplayBumps(
      bumps.filter(bump => (isVideo ? bump?.video : bump?.image))
    );
  }, [isVideo]);

  useEffect(() => {
    console.log('ack');

    const observer = new IntersectionObserver(entries => {
      // console.log(entry);

      if (entries.some(entry => entry.intersectionRatio > 0)) {
        console.log('aslkdjfa');
        prevRef.current = observerRef.current;
        counter.current += 10;
        observer.unobserve(prevRef.current);
        setNumberLoaded(counter.current);
        observer.observe(observerRef.current);
      }
      // console.log('observed');
      // prevRef.current = observerRef.current;
      // // observer.unobserve(prevRef.current);
      // observer.disconnect();
      // console.log(observerRef);
      // console.log(prevRef);
      // observer.observe(observerRef.current);
    });

    if (observerRef.current) {
      console.log('doing');
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        console.log('undoing');
        observer.unobserve(observerRef.current);
      }
    };
  }, [displayBumps]);

  // const isOnScreen = useOnScreen(observerRef);
  // const onScreen = useOnScreen(ref, '-300px');
  // console.log('wat', observerRef, isOnScreen);

  // useEffect(() => {
  //   console.log('wat', observerRef, isOnScreen);
  // });

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
      <label htmlFor="image">
        <input
          type="radio"
          name="bumpType"
          id="image"
          value={true}
          checked={isVideo === false}
          onChange={() => setIsVideo(false)}
        />
        IMAGES
      </label>
      <label htmlFor="video">
        <input
          type="radio"
          name="bumpType"
          id="video"
          value={false}
          checked={isVideo === true}
          onChange={() => setIsVideo(true)}
        />
        VIDEOS
      </label>
      {/* // <input
      //   name="isVideo"
      //   value={isVideo}
      //   type="checkbox"
      //   onChange={() => setIsVideo(isVideo => !isVideo)}
      // /> */}
      <div className={styles.ProductWallLayout}>
        {/* {bumps.map((bump, index) => {
          if (index < 10) {
            return <BumpCard key={index} {...bump} />;
          }
        })} */}
        {/* <BumpCard {...bumps[1]} />
        <BumpCard {...bumps[2]} />
        <BumpCard {...bumps[3]} />
        <BumpCard {...bumps[4]} />
        <BumpCard {...bumps[5]} />
        <BumpCard {...bumps[6]} />
        <BumpCard {...bumps[7]} />
        <BumpCard {...bumps[8]} />
        <BumpCard {...bumps[9]} />
        <BumpCard {...bumps[10]} />
        <BumpCard {...bumps[11]} />
        <BumpCard ref={observerRef} {...bumps[12]} />
        <BumpCard {...bumps[13]} />
        <BumpCard {...bumps[14]} /> */}
        {displayBumps.map((videoBump, index) => {
          if (index < counter.current) {
            if (index === counter.current - 1) {
              return (
                <BumpCard
                  id={`${index}-${videoBump.name}`}
                  ref={observerRef}
                  key={`${index}-${videoBump.name}`}
                  {...videoBump}
                />
              );
            } else {
              return (
                <BumpCard key={`${index}-${videoBump.name}`} {...videoBump} />
              );
            }
          }
        })}
        {/* <div ref={observerRef} /> */}
      </div>
    </Layout>
  );
}

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
