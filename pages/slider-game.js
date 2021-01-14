import PageLayout from 'components/PageLayout';
import styles from 'components/sliderGame.module.css';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import { useEffect, useRef, useState } from 'react';

export default function SliderGame() {
  const [imagePieces, setImagePieces] = useState([]);
  // const emptySlot = useRef('s1');
  const divArr = [
    's1',
    's2',
    's3',
    's4',
    's5',
    's6',
    's7',
    's8',
    's9',
    's10',
    's11',
    's12',
    's13',
    's14',
    's15',
    's16',
  ];

  function newGrid(pieceId) {
    const emptySlot = divArr.indexOf('s1');
    const newEmptySlot = divArr.indexOf(pieceId);

    // this swaps two array elements using dark arcane es6 magic
    // also prettier somehow makes it less readable splitting lines
    [divArr[emptySlot], divArr[newEmptySlot]] = [
      divArr[newEmptySlot],
      divArr[emptySlot],
    ];
    const newGridAreas = `"${divArr[0]} ${divArr[1]} ${divArr[2]} ${divArr[3]}" "${divArr[4]} ${divArr[5]} ${divArr[6]} ${divArr[7]}" "${divArr[8]} ${divArr[9]} ${divArr[10]} ${divArr[11]}" "${divArr[12]} ${divArr[13]} ${divArr[14]} ${divArr[15]}"`;
    document.documentElement.style.setProperty('--puzzle-areas', newGridAreas);
    return '';
  }

  //asjdlkfaslkdfja
  const canvasRef = useRef(null);
  useEffect(() => {
    function loadImage() {
      const widthOfOnePiece = 200;
      const heightOfOnePiece = 200;
      var images = [];
      for (var x = 0; x < 4; ++x) {
        for (var y = 0; y < 4; ++y) {
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

      // imagePieces now contains data urls of all the pieces of the image
      setImagePieces(images);
    }

    var image = new Image();
    image.onload = loadImage;
    image.src = '/trash.jpg';
    // const widthOfOnePiece = 75;
    // const heightOfOnePiece = 75;
    // var images = [];
    // for (var x = 0; x < 4; ++x) {
    //   for (var y = 0; y < 4; ++y) {
    //     // var canvas = document.createElement('canvas');
    //     const canvas = canvasRef.current;
    //     canvas.width = widthOfOnePiece;
    //     canvas.height = heightOfOnePiece;
    //     var context = canvas.getContext('2d');
    //     context.drawImage(
    //       image,
    //       x * widthOfOnePiece,
    //       y * heightOfOnePiece,
    //       widthOfOnePiece,
    //       heightOfOnePiece,
    //       0,
    //       0,
    //       canvas.width,
    //       canvas.height
    //     );
    //     images.push(canvas.toDataURL());
    //   }
    // }

    // // imagePieces now contains data urls of all the pieces of the image
    // setImagePieces(images);
    // load one piece onto the page
    // console.log('wat', imagePieces);
    // var anImageElement = document.getElementById('myImageElementInTheDom');
    // anImageElement.src = imagePieces[0];
  }, []);

  // var image = new Image();
  // image.onload = cutImageUp;
  // image.src = 'myimage.png';

  // function cutImageUp() {
  //   var imagePieces = [];
  //   for (var x = 0; x < numColsToCut; ++x) {
  //     for (var y = 0; y < numRowsToCut; ++y) {
  //       var canvas = document.createElement('canvas');
  //       canvas.width = widthOfOnePiece;
  //       canvas.height = heightOfOnePiece;
  //       var context = canvas.getContext('2d');
  //       context.drawImage(
  //         image,
  //         x * widthOfOnePiece,
  //         y * heightOfOnePiece,
  //         widthOfOnePiece,
  //         heightOfOnePiece,
  //         0,
  //         0,
  //         canvas.width,
  //         canvas.height
  //       );
  //       imagePieces.push(canvas.toDataURL());
  //     }
  //   }

  //   // imagePieces now contains data urls of all the pieces of the image

  //   // load one piece onto the page
  //   var anImageElement = document.getElementById('myImageElementInTheDom');
  //   anImageElement.src = imagePieces[0];
  // }

  //aslkdjfalskjdfladskj
  return (
    <>
      <div className={styles.GameArea}>
        {console.log(imagePieces)}
        {divArr.map((_, i) => (
          <div
            onClick={() => newGrid(`s${i + 1}`)}
            key={`piece${i}`}
            style={{
              // backgroundColor: `#${Math.floor(
              //   Math.random() * 16777215
              // ).toString(16)}`,
              backgroundImage: `url(${imagePieces[i]})`,
              backgroundSize: 'contain',
            }}
            className={styles.SliderPiece}
          />
        ))}
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
}
