
// function isPrime(num) {
//   let flag = true;
//   let isPrime = true;
//   if (num === 0 || num === 1) return false;
//   if (num === 2) return true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (flag) {
//       if(num % i === 0) {
//         isPrime = false;
//         flag = false;
//       }
//     }
//   }
//   return isPrime;
// }





// function isPrime(integer) {
//   let flag = true;
//   let isPrime = true;

//   if (integer === 0 || integer ===1) return false;

//   if (integer === 2) return true;

//   for (let i = 2; i <= Math.sqrt(integer); i++) {
//     if (flag) {
//       if (integer % i === 0) {
//         flag = false;
//         isPrime = false;

//       }
//     }
//     return isPrime;
//   }


// }


function isPrime(num) {

  let flag = true;
  let isPrime = true;

  if (num === 0 || num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {

    if (flag) {

      if (num % i === 0) {
        isPrime = false;
        flag = false;

      }
    }

  }

  return isPrime;

}

console.log(isPrime(2));