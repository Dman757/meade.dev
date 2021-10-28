import React, {
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
  // const indexStart = useRef(0);
  // const indexEnd = useRef(numberLoaded);

  const [arraySubsectionIndexes, setIndexes] = useState({ start: 0, end: 19 });

  // array.slice(indexStart.current, indexEnd.current)

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
      // Copied this entries.some thing off a google demo
      // https://googlechrome.github.io/samples/intersectionobserver/
      if (entries.some(entry => entry.intersectionRatio > 0)) {
        // get a copy of the current observed element and stop observing it.
        prevRef.current = observerRef.current;
        observer.unobserve(prevRef.current);
        // increment our number of elements to load in the render function
        setNumberLoaded(ack => ack + 10);
        // reobserve the new element
        observer.observe(observerRef.current);
      }
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

      <div className={styles.ProductWallLayout}>
        {displayBumps.map((videoBump, index) => {
          if (index < numberLoaded) {
            if (index === numberLoaded - 1) {
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
