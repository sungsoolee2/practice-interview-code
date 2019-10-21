function isPrime(integer) {
 // Check if the number is  equal to, or less than, 1. If so, return false because it isn't p;rime
    if (integer <= 1) {
        return false;
    } 
        for (var i = 2; i < integer; i++) {
// if the integer can be divisible  by [i], return false because  it isn't prime
            if (integer % i === 0) {
                return false;
            }
        }

    

    // Else, return true because the number IS prime
    return true;

    

}
console.log(isPrime(1))



// function isPrime(integer) { 

//     if (integer <= 1) {
//         return false;
//     } else {
//         for (var i = 2; i < integer; i++) {
//             if (integer % i === 0) {
//                 return false;
//             }

//         }
//     }
//     return true;
// }





















console.log(isPrime(14));