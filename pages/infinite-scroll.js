import { useEffect, useRef } from 'react';
// import Layout from 'components/layout';
import Layout from 'components/layout';
import styles from 'components/product-wall.module.css';

export default function nicehouse() {
  const observerRef = useRef();
  const placedOffScreen = useRef(false);

  useEffect(() => {
    function onScroll(event) {
      // console.log(event);
      // console.log('ScrollTop', document.documentElement.scrollTop); // Amount scrolled down
      // console.log('ClientHeight', document.documentElement.clientHeight); // Visible area
      // console.log('Total Height', document.documentElement.scrollHeight); // Total Height

      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 300) {
        console.log('hey');
        document.documentElement.style.setProperty(
          '--infinite-scroll-height',
          `${scrollHeight + 300}px`
        );
      }
    }
    // console.log('ack');
    window.addEventListener('scroll', onScroll, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    console.log('ack');

    const observer = new IntersectionObserver(entries => {
      // Copied this entries.some thing off a google demo
      // https://googlechrome.github.io/samples/intersectionobserver/

      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (entries.some(entry => entry.intersectionRatio <= 0)) {
        const elementOffset = parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--fuck-it'
          )
        );
        console.log(elementOffset, scrollTop);
        if (elementOffset <= scrollTop) {
          document.documentElement.style.setProperty(
            '--fuck-it',
            `${scrollTop + clientHeight}px`
          );
        } else {
          if (elementOffset > scrollTop && scrollTop - clientHeight >= 0) {
            document.documentElement.style.setProperty(
              '--fuck-it',
              `${scrollTop - clientHeight}px`
            );
          } else {
            document.documentElement.style.setProperty('--fuck-it', `${0}px`);
          }
        }
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
  }, []);

  return (
    <Layout>
      <div className={styles.InfiniteScroll}>
        <div ref={observerRef} className={styles.AnElement}>
          Heck
        </div>
      </div>
    </Layout>
  );
}
