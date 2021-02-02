import PageLayout from 'components/PageLayout.js';
import CircleMenu from 'components/CircleMenu';
import mountainParallax from 'components/mountain-parallax.module.css';
import { useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';

export default function MainPage() {

  const parallaxRef = useRef(null);

  // useEffect(() => {
  //   console.log('hello');
  //   for (var i = -10; i < 12; ++i) {
  //     var x = (6 - i) / 2;
  //     console.log(i, -100 * x, x + 1);
  //   }
  // }, []);

  const handleScroll = (e) => {
    console.log('scroll')
    console.log(parallaxRef.current.scrollTop)
    
    if(parallaxRef.current.scrollTop > 600) {
    // document.documentElement.style.setProperty('--circle-background-color', '#a3cef1'); // #283377
    document.documentElement.style.setProperty('--circle-background-color', '#283377'); // #283377
    // document.documentElement.style.setProperty('--circle-font-color', '#d952b1'); //EDA2F1
    document.documentElement.style.setProperty('--circle-font-color', '#EDA2F1'); //EDA2F1
    // document.documentElement.style.setProperty('--circle-bar-color', '#293241'); // 0c49af
    document.documentElement.style.setProperty('--circle-bar-color', '#0c49af'); // 0c49af
    } else {
      document.documentElement.style.setProperty('--circle-background-color', '#ff2591');
      document.documentElement.style.setProperty('--circle-font-color', '#ffec41');
      document.documentElement.style.setProperty('--circle-bar-color', '#1f1f1f');
    }
    
    
  } 
  // useLayoutEffect ???
  // https://kentcdodds.com/blog/useeffect-vs-uselayouteffect

  useEffect(() => {

    if(parallaxRef && parallaxRef.current) {
      parallaxRef.current.addEventListener('scroll', debounce(handleScroll, 10), false);
    }
    
    return () => parallaxRef.current.removeEventListener('scroll', handleScroll);
  });

  return (
<>
      <div className={mountainParallax.ParallaxContainer} ref={parallaxRef}>
        <div className={mountainParallax.layer}>
          <img id="layer5" src="/mountain_svgs/5.svg" alt="An Svg" />
        </div>
        <div className={mountainParallax.layer}>
          <img id="layer4" src="/mountain_svgs/4.svg" alt="An Svg" />
        </div>
        <div className={mountainParallax.layer}>
          <img id="layer3" src="/mountain_svgs/3.svg" alt="An Svg" />
        </div>
        <div className={mountainParallax.layer}>
          <img id="layer2" src="/mountain_svgs/2.svg" alt="An Svg" />
        </div>
        <div className={mountainParallax.layer}>
          <img id="layer1" src="/mountain_svgs/1.svg" alt="An Svg" />
        </div>
        <div className={mountainParallax.cover} >
        </div>

    </div>
    <PageLayout>
      <div style={{marginTop: "2rem"}}>
        <CircleMenu />
        <p>Welcome to my site, it's currently going construction.</p>
      </div>
    </PageLayout>
  </>  
  );
}
