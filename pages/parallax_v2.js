import PageLayout from 'components/PageLayout.js';
import CircleMenu from 'components/CircleMenu';
import mountainParallax from 'components/mountain-parallax2.module.css';
import { useEffect } from 'react';

export default function MainPage() {
  useEffect(() => {
    console.log('hello');
    for (var i = -10; i < 12; ++i) {
      var x = (6 - i) / 2;
      console.log(i, -100 * x, x + 1);
    }
  }, []);

  const asdf = e => {
    console.log('fuck');
    console.log('sup', e)      
  }


  const handleScroll = () => {
    console.log('fuck')
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  });

  // useEffect(() => {
  //   console.log('wtf')
  //   // window.addEventListener('scroll', asdf)

  //   window.addEventListener("scroll", function () {
  //     console.log('aaaaaaaaa')
  //     // myFunc(); 
  // }, false);

  //   return () => {
    //     console.log('hello???')
  //     window.removeEventListener('scroll', asdf )} 
  // }, [])

  return (

      <div className={mountainParallax.ParallaxContainer}>
        {/* <div className={mountainParallax.layer}> */}
          <img id="layer5" src="/mountain_svgs/5.svg" alt="An Svg" />
        {/* </div> */}
        {/* <div className={mountainParallax.layer}> */}
          <img id="layer4" src="/mountain_svgs/4.svg" alt="An Svg" />
        {/* </div> */}
        {/* <div className={mountainParallax.layer}> */}
          <img id="layer3" src="/mountain_svgs/3.svg" alt="An Svg" />
        {/* </div> */}
        {/* <div className={mountainParallax.layer}> */}
          <img id="layer2" src="/mountain_svgs/2.svg" alt="An Svg" />
        {/* </div> */}
        {/* <div className={mountainParallax.layer}> */}
          <img id="layer1" src="/mountain_svgs/1.svg" alt="An Svg" />
        {/* </div> */}
        {/* <div className={mountainParallax.cover} /> */}
      </div>
    
  );
}


/*

function castParallax() {

	var opThresh = 350;
	var opFactor = 750;

window.addEventListener("scroll", function(event){

  var top = this.pageYOffset;

  var layers = document.getElementsByClassName("parallax");
  var layer, speed, yPos;
  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute('data-speed');
    var yPos = -(top * speed / 100);
    layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

  }
});
}

*/