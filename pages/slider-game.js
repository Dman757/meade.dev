import styles from 'components/sliderGame.module.css';
import { useEffect, useRef, useState } from 'react';

export default function SliderGame() {
  const [imagePieces, setImagePieces] = useState([]);
  const [xPieces, setxPieces] = useState(3);
  const [yPieces, setyPieces] = useState(3);
  const divArr = useRef([]);
  const canvasRef = useRef(null);
  const leftEdge = useRef([]);
  const rightEdge = useRef([]);

  const keyCheck = e => {
    const emptySlot = divArr.current.indexOf('s1');

    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        if (divArr.current[emptySlot - xPieces]) {
          moveElement(emptySlot, emptySlot - xPieces);
        }
        break;
      case 'KeyS':
      case 'ArrowDown':
        if (divArr.current[emptySlot + xPieces]) {
          moveElement(emptySlot, emptySlot + xPieces);
        }
        break;
      case 'KeyA':
      case 'ArrowLeft':
        if (
          divArr.current[emptySlot - 1] &&
          !leftEdge.current.includes(emptySlot)
        ) {
          moveElement(emptySlot, emptySlot - 1);
        }
        break;
      case 'KeyD':
      case 'ArrowRight':
        if (
          divArr.current[emptySlot + 1] &&
          !rightEdge.current.includes(emptySlot)
        ) {
          moveElement(emptySlot, emptySlot + 1);
        }
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

  useEffect(() => {
    rightEdge.current = [];
    leftEdge.current = [];
    for (var i = 0; i < yPieces; i++) {
      rightEdge.current.push(xPieces * (i + 1) - 1);
      leftEdge.current.push(xPieces * i);
    }
    document.documentElement.style.setProperty('--xPieces', xPieces);
    document.documentElement.style.setProperty('--yPieces', yPieces);
  }, [xPieces, yPieces]);

  function calculateTemplateAreas(xPieces, yPieces) {
    var newGridAreas = '';
    var count = 0;
    for (var y = 0; y < yPieces; y++) {
      newGridAreas += `"`;
      for (var x = 0; x < xPieces; x++) {
        x + 1 === xPieces
          ? (newGridAreas += `${divArr.current[count]}" `)
          : (newGridAreas += `${divArr.current[count]} `);
        count++;
      }
    }
    document.documentElement.style.setProperty('--puzzle-areas', newGridAreas);
  }

  function moveElement(emptySlot, newEmptySlot) {
    [divArr.current[emptySlot], divArr.current[newEmptySlot]] = [
      divArr.current[newEmptySlot],
      divArr.current[emptySlot],
    ];

    calculateTemplateAreas(xPieces, yPieces);
  }

  function clickCheck(pieceId) {
    const emptySlot = divArr.current.indexOf('s1');
    const newEmptySlot = divArr.current.indexOf(pieceId);

    if (newEmptySlot + xPieces === emptySlot) {
      moveElement(emptySlot, newEmptySlot);
    } else if (newEmptySlot - xPieces === emptySlot) {
      moveElement(emptySlot, newEmptySlot);
    } else if (
      newEmptySlot + 1 === emptySlot &&
      !leftEdge.current.includes(emptySlot)
    ) {
      moveElement(emptySlot, newEmptySlot);
    } else if (
      newEmptySlot - 1 === emptySlot &&
      !rightEdge.current.includes(emptySlot)
    ) {
      moveElement(emptySlot, newEmptySlot);
    }

    // this swaps two array elements using dark arcane es6 magic
    // also prettier somehow makes it less readable splitting lines
    // [divArr.current[emptySlot], divArr.current[newEmptySlot]] = [
    //   divArr.current[newEmptySlot],
    //   divArr.current[emptySlot],
    // ];

    return '';
  }

  // Setup canvas and slice images
  useEffect(() => {
    function loadImage() {
      // todo calculate widthOfOnePiece and heightOfOnePiece based on width/height and # pieces
      // use difficulty slider to determine number of pieces
      console.log(this.width);
      console.log(this.height);
      divArr.current = [];
      // const xPieces = 4;
      // const yPieces = 6;
      // setxxPieces(xPieces);
      // setyyPieces(yPieces);

      const widthOfOnePiece = this.width / xPieces;
      const heightOfOnePiece = this.height / yPieces;
      var images = [];
      for (var y = 0; y < yPieces; ++y) {
        for (var x = 0; x < xPieces; ++x) {
          // var canvas = document.createElement('canvas');
          const canvas = canvasRef.current;
          canvas.width = widthOfOnePiece;
          canvas.height = heightOfOnePiece;
          var context = canvas.getContext('2d');
          context.drawImage(
            image,
            x * widthOfOnePiece,
            y * heightOfOnePiece,
            widthOfOnePiece,
            heightOfOnePiece,
            0,
            0,
            canvas.width,
            canvas.height
          );
          images.push(canvas.toDataURL());
        }
      }

      for (var i = 0; i < images.length; i++) {
        divArr.current.push(`s${i + 1}`);
      }

      calculateTemplateAreas(xPieces, yPieces);

      // imagePieces now contains data urls of all the pieces of the image
      setImagePieces(images);
    }

    var image = new Image();
    image.onload = loadImage;
    image.src = '/trash.jpg';
  }, []);

  function shuffle() {
    for (var i = 0; i < 100 * xPieces * yPieces; i++) {
      const emptySlot = divArr.current.indexOf('s1');
      switch (Math.floor(Math.random() * Math.floor(4))) {
        case 0:
          if (divArr.current[emptySlot - xPieces]) {
            moveElement(emptySlot, emptySlot - xPieces);
          }
          break;
        case 1:
          if (divArr.current[emptySlot + xPieces]) {
            moveElement(emptySlot, emptySlot + xPieces);
          }
          break;
        case 2:
          if (
            divArr.current[emptySlot - 1] &&
            !leftEdge.current.includes(emptySlot)
          ) {
            moveElement(emptySlot, emptySlot - 1);
          }
          break;
        case 3:
          if (
            divArr.current[emptySlot + 1] &&
            !rightEdge.current.includes(emptySlot)
          ) {
            moveElement(emptySlot, emptySlot + 1);
          }
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
      <div className={styles.GameArea}>
        {imagePieces.map((_, i) => (
          <div
            onMouseDown={() => clickCheck(`s${i + 1}`)}
            key={`piece${i}`}
            style={{
              // backgroundColor: `#${Math.floor(
              //   Math.random() * 16777215
              // ).toString(16)}`,
              backgroundImage: `url(${imagePieces[i]})`,
              backgroundSize: 'contain',
              gridArea: `s${i + 1}`,
            }}
            className={styles.SliderPiece}
          />
        ))}
      </div>
      <buton onClick={() => shuffle()}>Shuffle</buton>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
}
