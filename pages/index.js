import PageLayout from 'components/PageLayout.js';
import CircleMenu from 'components/CircleMenu';
import mountainParallax from 'components/mountain-parallax.module.css';
import { useEffect } from 'react';

export default function MainPage() {
  useEffect(() => {
    console.log('hello');
    for (var i = -10; i < 12; ++i) {
      var x = (6 - i) / 2;
      console.log(i, -100 * x, x + 1);
    }
  }, []);

  return (
    <>
      <div className={mountainParallax.ParallaxContainer}>
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
        <div className={mountainParallax.cover} />
      </div>
      <PageLayout>
        <h3>Card Elements</h3>
        <CircleMenu />
      </PageLayout>
    </>
  );
}
