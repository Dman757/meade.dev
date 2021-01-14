import Head from 'next/head';
import Link from 'next/link';
import Item from 'components/ImageItem.js';
import Layout from 'components/layout.js';
import PageLayout from 'components/PageLayout.js';
import UseEventListener from 'components/utils/useEventListener.js';
import gridMenu from 'components/gridMenu.module.css';
import useHasMounted from 'components/utils/useHasMounted';
import { useCallback, useEffect, useRef } from 'react';

const items = {
  title: 'ack',
  image: 'asdfadsfdf',
  text: 'This is some text',
};

var offsetX = { value: 0 };
var offsetY = { value: 0 };

var menuItems = 3;

let menuPositionArr = Array(menuItems)
  .fill()
  .map((_, i) => `${offsetX.value * i}rem, ${offsetY.value * i}rem, 0`);

// // console.log(menuPositionArr2);

// var index0 = { value: '0,0,0' };
// var index1 = { value: `${offsetX.value}rem, ${offsetY.value}rem, 0` };
// var index2 = { value: `${offsetX.value * 2}rem, ${offsetY.value * 2}rem, 0` };
// var menuPositionArr = [index0, index1, index2];

// var menuPositionArr3 = [
//   `${offsetX.value * 0}rem, ${offsetY.value * 0}rem, 0`,
//   `${offsetX.value * 1}rem, ${offsetY.value * 1}rem, 0`,
//   `${offsetX.value * 2}rem, ${offsetY.value * 2}rem, 0`,
// ];

// var menuPositionArr3 = [offsetX.value, off];

var menuIndex = 0;

export default function FirstPost() {
  useEffect(() => {
    // var x = document.getElementById(gridMenu.Main).childElementCount;
    // console.log(x);
    offsetX.value = getComputedStyle(document.documentElement).getPropertyValue(
      '--offset-x2'
    );
    offsetY.value = getComputedStyle(document.documentElement).getPropertyValue(
      '--offset-y2'
    );

    menuPositionArr = Array(menuItems)
      .fill()
      .map((_, i) => `${offsetX.value * i}rem, ${offsetY.value * i}rem, 0`);
  }, []);
  console.log(menuPositionArr);

  const keyCheck = e => {
    // console.log('gridRef', gridRef);
    switch (e.code) {
      case 'ArrowUp':
        document.documentElement.style.setProperty('--delay', '0s');
        if (menuIndex === 0) {
          menuIndex = 2;
        } else {
          menuIndex--;
        }
        document.documentElement.style.setProperty(
          '--derp',
          menuPositionArr[menuIndex]
        );
        break;
      case 'ArrowDown':
        document.documentElement.style.setProperty('--delay', '0s');
        if (menuIndex === 2) {
          menuIndex = 0;
        } else {
          menuIndex++;
        }
        document.documentElement.style.setProperty(
          '--derp',
          menuPositionArr[menuIndex]
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyCheck);

    return () => {
      window.removeEventListener('keydown', keyCheck);
    };
  }, []);

  return (
    <PageLayout>
      <h3>Card Elements</h3>
      <div className={gridMenu.CircleBack}>
        <div className={gridMenu.Main}>
          <button>Blog</button>
          <button>About</button>
          <button>Resume</button>
          <div></div>
        </div>
      </div>
      {/* <div style={{ width: '2px', height: '1500px' }}></div> */}
    </PageLayout>
  );
}
