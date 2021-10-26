// import PageLayout from 'components/PageLayout.js';
// import CircleMenu from 'components/CircleMenu';
// import { useEffect, useState } from 'react';

// export default function MenuTest() {

// const inArray = [51, 81, 143, 174, 184, 193, 267, 279, 435, 452, 560, 568, 597, 642, 669, 702, 722, 768, 773, 806, 834, 868, 972, 1110, 1209, 1241, 1321, 1386, 1433, 1509, 1556, 1581, 1843, 1939, 2036, 2038, 2083, 2272, 2327, 2448, 2513, 2664, 2721, 2731, 2876, 3099, 3156, 3214, 3405, 3475, 3484, 3508, 3514, 3624, 3652, 3693, 3716, 3720, 3739, 3910, 3944, 3980, 4015, 4023, 4161, 4186, 4262, 4424, 4481, 4493, 4500, 4525, 4530, 4542, 4563, 4588, 4629, 4788, 4798, 4875, 4960, 4990, 4997, 5039, 5093, 5151, 5177, 5194, 5300, 5421, 5459, 5461, 5576, 5631, 5675, 5689, 5697, 5788, 5799, 5899];

// const sortedArray = inArray.sort((a,b) => a-b)

// function checkEvery(jumpValue, stopValue) {
//   const ack = sortedArray.every((value) => value % jumpValue) > 0
//   if(ack) {
//     return jumpValue
//   } else if (jumpValue < stopValue) {
//     return checkEvery(jumpValue + 1, stopValue)
//   } else { return stopValue + 1}
// }

// function avoidObstacles(inputArray) {
//   let jumpValue;
//   if(inputArray[0] - 1 > 0) {
//     jumpValue = inputArray[0] - 1
//   } else {
//     jumpValue = inputArray[0] + 1
//   }

//   const final = checkEvery(jumpValue, inputArray[inputArray.length - 1])
//   return final
// }

// useEffect(() => {
//   console.log(avoidObstacles(sortedArray))
// }, [])

//   return (
//     <PageLayout>
//       <h3>Card Elements</h3>
//     </PageLayout>
//   );
// }


// //     function addTwo(arr) {
// //       const newArray = [];
// //       arr.forEach((value,index,array) => {
// //         newArray.push(array[index] + 2)
// //       });
// //       return newArray
// //     };
// // console.log(addTwo([2,3,4]))

// // function convertHexadecimal (base16) {
// //   return parseInt(base16, 16);
// // }

// // const sum = (arr) => {
// //   arr.reduce((x, y) => x + y, 0)
// // }

// // const removeDuplicates = (arr) => [...new Set(arr)]
// // console.log(removeDuplicates([0, 0, 1, 2, 2]) )
// // console.log(removeDuplicates(['a','a', 'a']) )

// // function join(arr1,arr2) {
  
// //   const newArr = arr1.concat(arr2)
// //   return newArr
// // }

// // console.log(join([0, 1], [1, 2]))
// // console.log(join(['a', 'b'], ['c']))


// // function getLast(arr) { 
// //   // check if arry has values first
// //   return arr[arr.length-1]
// // }

// // console.log(getLast([1, 2, 3]) )
// // console.log(getLast([9, 7, 5]))


// // const reverse = (arr) => {
// //   const newArr  = arr.slice().reverse();
// //   return newArr
// // }

// // console.log(reverse([1, 2, 3]))
// // console.log(reverse([1, 0]))


// // function toArray(...args) {
// //   return args;
// // }

// // console.log(toArray('a'))
// // console.log(toArray(1, 2, 3))


// // function allGreaterThanThree(...values) {
// //   values.forEach((value) => {if(value >= 3){}else{return false}})
// // }


// // console.log()
// // console.log()

// // console.log()
// // console.log()



// // function onlyTruthy(arr) {
// //   return arr.filter(Boolean)
// // }

// // console.log(onlyTruthy([0, 1, '', 'a']))

// // console.log(convertHexadecimal('10'))
// // console.log(convertHexadecimal('af'))
