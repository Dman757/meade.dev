import gridMenu from 'components/gridMenu.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
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

var menuIndex = 0;

export default function CircleMenu() {
  useEffect(() => {
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
    <div className={gridMenu.CircleBack}>
      <div className={gridMenu.Main}>
        <Link href="/posts/markdown-test" passHref>
          <button>Blog</button>
        </Link>
        <button
          onClick={() =>
            (document.location.href = 'https://www.behance.net/DavidMeade')
          }
        >
          Portfolio
        </button>
        <Link href="/Resume_David_Meade_12_07_2020.pdf" passHref>
          <button>Resume</button>
        </Link>
        <div></div>
      </div>
    </div>
  );
}
